import React from "react";

const TransactionHistory = ({ publicKey }) => {
    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold">Transaction History</h3>
            <p className="text-sm text-gray-400">
                Transaction history will be shown here for {publicKey.slice(0,4)}...
            </p>
        </div>
    );
};

export default TransactionHistory;
