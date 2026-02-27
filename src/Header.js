import React, { useState } from "react";
import "./Header.css";
import {
  checkConnection,
  retrievePublicKey,
  getBalance,
  userSignTransaction,
} from "./Freighter";
import * as StellarSdk from "@stellar/stellar-sdk";

const server = new StellarSdk.Horizon.Server(
  "https://horizon-testnet.stellar.org"
);

const Header = () => {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState("");
  const [balance, setBalance] = useState("0");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const connectWallet = async () => {
    try {
      const allowed = await checkConnection();
      if (!allowed) {
        alert("Please allow Freighter access");
        return;
      }

      const key = await retrievePublicKey();
      const bal = await getBalance();

      setPublicKey(key);
      setBalance(Number(bal).toFixed(2));
      setConnected(true);
    } catch (error) {
      console.error(error);
      alert("Wallet connection failed");
    }
  };

  const sendPayment = async () => {
    try {
      if (!recipient || !amount) {
        alert("Enter recipient and amount");
        return;
      }

      const account = await server.loadAccount(publicKey);
      const fee = await server.fetchBaseFee();

      const transaction = new StellarSdk.TransactionBuilder(account, {
        fee,
        networkPassphrase: StellarSdk.Networks.TESTNET,
      })
        .addOperation(
          StellarSdk.Operation.payment({
            destination: recipient,
            asset: StellarSdk.Asset.native(),
            amount: amount,
          })
        )
        .setTimeout(30)
        .build();

      const signedXDR = await userSignTransaction(
        transaction.toXDR(),
        StellarSdk.Networks.TESTNET,
        publicKey
      );

      const signedTx = StellarSdk.TransactionBuilder.fromXDR(
        signedXDR,
        StellarSdk.Networks.TESTNET
      );

      await server.submitTransaction(signedTx);

      alert("Payment Successful 🚀");

      const bal = await getBalance();
      setBalance(Number(bal).toFixed(2));
      setRecipient("");
      setAmount("");
    } catch (error) {
      console.error(error);
      alert("Transaction Failed ❌");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="title">Stellar Payment DApp</div>

        {publicKey && (
          <div className="wallet-info">
            <p>
              <strong>Wallet:</strong> {publicKey.slice(0, 4)}...
              {publicKey.slice(-4)}
            </p>
            <p>
              <strong>Balance:</strong> {balance} XLM
            </p>
          </div>
        )}

        {connected && (
          <>
            <input
              type="text"
              placeholder="Recipient Public Key"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            />

            <input
              type="number"
              placeholder="Amount (XLM)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button className="send-btn" onClick={sendPayment}>
              Send XLM
            </button>
          </>
        )}

        <button
          onClick={connectWallet}
          disabled={connected}
          className={`connect-btn ${connected ? "disabled" : ""}`}
        >
          {connected ? "Connected" : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
};

export default Header;