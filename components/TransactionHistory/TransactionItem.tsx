import React from 'react';
import { AiOutlineMore } from 'react-icons/ai';

interface Transaction {
  id: number;
  name: string;
  date: string;
  time: string;
  transactionCode: string;
  category: string;
  amount: string;
}

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  return (
    <tr className="bg-white hover:bg-gray-50 transition duration-200">
      {/* Name and Logo */}
      <td className="flex items-center p-2 pr-4">
        <img
          src="/path-to-logo.png" // Replace with dynamic image
          alt={transaction.name}
          className="w-8 h-8 mr-2 rounded-md"
        />
        <span>{transaction.name}</span>
      </td>
      {/* Date */}
      <td className="p-2 pr-4">{transaction.date}</td>
      {/* Time */}
      <td className="p-2 pr-4">{transaction.time}</td>
      {/* Transaction Code */}
      <td className="p-2 pr-4">{transaction.transactionCode}</td>
      {/* Category */}
      <td className="p-2 pr-4">
        <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
          {transaction.category}
        </button>
      </td>
      {/* Amount */}
      <td className="p-2 pr-4">{transaction.amount}</td>
      {/* Action */}
      <td className="p-2 pr-4 text-center">
        <AiOutlineMore className="cursor-pointer text-xl" />
      </td>
    </tr>
  );
};

export default TransactionItem;
