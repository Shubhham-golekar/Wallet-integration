# 🌟 Stellar Level 1 – White Belt dApp

A beginner-friendly **Stellar Testnet dApp** built with React that demonstrates the core fundamentals of Stellar blockchain development.

This project connects a Freighter wallet, displays the wallet balance, and allows sending XLM transactions on the Stellar Testnet.

---

## 🚀 Features

- 🔗 Connect Stellar wallet (Freighter)
- 💰 Display XLM balance
- 📤 Send XLM transaction on Testnet
- 🌐 Uses Stellar Horizon Testnet
- ⚛️ Built with React

---

## 🛠️ Tech Stack

- React (Create React App)
- @stellar/stellar-sdk
- @stellar/freighter-api
- Stellar Testnet
- Horizon API

---

## 📦 Installation

Clone the repository:

git clone https://github.com/your-username/stellar-dapp.git

Navigate to project folder:

cd stellar-dapp

Install dependencies:

npm install

Start development server:

npm start

The app will run on:

http://localhost:3000

## 🔐 Wallet Setup (Testnet)

Install Freighter Wallet browser extension.

Create a new wallet.

Switch network to Testnet.

Fund your wallet using Stellar Friendbot:

https://friendbot.stellar.org?addr=YOUR_PUBLIC_KEY

## 🧪 How It Works
1️⃣ Connect Wallet

Uses @stellar/freighter-api to request wallet access.

2️⃣ Fetch Balance

Uses Stellar Horizon Testnet server:

https://horizon-testnet.stellar.org
3️⃣ Send XLM

## Builds and signs a transaction using:

TransactionBuilder

Operation.payment

Freighter signTransaction

## 📁 Project Structure
```
stellar-dapp/
│
├── src/
│   ├── App.js
│   ├── index.js
│
├── package.json
└── README.md
```
## ⚠️ Common Issues
❌ react-scripts not recognized

Run:

npm install
❌ Freighter not detected

Make sure extension is installed

Ensure Testnet is selected

Refresh browser

Do not use Incognito mode

## 🎯 Learning Objectives

This project demonstrates:

Stellar wallet integration

Fetching account balances

Creating and signing transactions

Interacting with Horizon API

Blockchain fundamentals on Testnet
