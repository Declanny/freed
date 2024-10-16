import React from 'react';
import TransactionItem from './TransactionItem';

interface Transaction {
  id: number;
  name: string;
  date: string;
  time: string;
  transactionCode: string;
  category: string;
  amount: string;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  return (
    <div className="transaction-history-container w-full p-4 shadow-lg bg-white rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-semibold">Transaction History</h5>
        <span className="text-blue-600 cursor-pointer">See All</span>
      </div>
      {/* Transaction Table */}
      <table className="min-w-full">
        <thead className="hidden md:table-header-group">
          {/* Header is hidden on mobile */}
          <tr className="text-gray-500 text-sm bg-gray-100">
            <th className="py-2 pr-4 text-left">Name</th>
            <th className="py-2 pr-4 text-left">Date</th>
            <th className="py-2 pr-4 text-left">Time</th>
            <th className="py-2 pr-4 text-left">Transaction Code</th>
            <th className="py-2 pr-4 text-left">Category</th>
            <th className="py-2 pr-4 text-left">Amount</th>
            <th className="py-2 pr-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
