import React from 'react';
import { AiOutlineMore } from 'react-icons/ai';
import Image from 'next/image'; // Importing Next.js Image component

interface Transaction {
  id: number;
  name: string;
  date: string;
  time: string;
  transactionCode: string;
  category: string;
  amount: string;
  logoUrl: string; // Added logoUrl field
}

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  // Conditional styles for Category and Amount
  const categoryStyles = () => {
    switch (transaction.category) {
      case 'Subscription':
        return 'bg-blue-100 text-blue-500';
      case 'Transfer':
        return 'bg-orange-100 text-orange-500';
      default:
        return 'bg-gray-200 text-gray-600';
    }
  };

  const amountColor = () => {
    if (transaction.category === 'Subscription') {
      return 'text-red-500'; // Money leaving (red)
    }
    if (transaction.category === 'Transfer') {
      return 'text-green-500'; // Money received (green)
    }
    return 'text-black'; // Default color
  };

  const renderBulletPoint = () => {
    if (transaction.category === 'Subscription') {
      return <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>;
    }
    if (transaction.category === 'Transfer') {
      return <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>;
    }
    return null;
  };

  return (
    <tr className="bg-white hover:bg-gray-50 transition duration-200 flex justify-between items-center md:table-row">
      {/* Name and Logo - Always visible */}
      <td className="flex items-center p-2 pr-4">
        <Image
          src={transaction.logoUrl} // Dynamic image from transaction data
          alt={transaction.name}
          width={32} // Specify width
          height={32} // Specify height
          className="mr-2 rounded-md"
        />
        <span>{transaction.name}</span>
      </td>
      
      {/* Date - Hidden on Mobile */}
      <td className="hidden md:table-cell p-2 pr-4">{transaction.date}</td>
      
      {/* Time - Hidden on Mobile */}
      <td className="hidden md:table-cell p-2 pr-4">{transaction.time}</td>
      
      {/* Transaction Code - Hidden on Mobile */}
      <td className="hidden md:table-cell p-2 pr-4">{transaction.transactionCode}</td>
      
      {/* Category - Hidden on Mobile */}
      <td className="hidden md:table-cell p-2 pr-4">
        <button className={`px-2 py-1 rounded-full flex items-center ${categoryStyles()}`}>
          {renderBulletPoint()}
          {transaction.category}
        </button>
      </td>
      
      {/* Amount - Always visible */}
      <td className={`p-0 pr-4 ${amountColor()}`}>
        {transaction.category === 'Subscription' ? `- ${transaction.amount}` : `+ ${transaction.amount}`}
      </td>
      
      {/* Action - Unhidden on mobile */}
      <td className="p-2 pr-4 text-center">
        <AiOutlineMore className="cursor-pointer text-xl" />
      </td>
    </tr>
  );
};

export default TransactionItem;
