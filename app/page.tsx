"use client";
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';

import { 
  AiOutlineArrowDown, 
  AiOutlineArrowUp, 
  AiOutlineCreditCard, 
  AiOutlineWallet, 
  AiOutlineSend, 
  AiOutlineDownload,
  AiOutlineTrophy,
  AiOutlineMoneyCollect,
  AiOutlineDesktop,
  AiOutlineVideoCamera
  

 } from 'react-icons/ai'; 
import { CartesianGrid, Line, LineChart, XAxis, Tooltip, ResponsiveContainer } from 'recharts'; // Recharts for charting
import { useState } from 'react';


type ChartData = {
  day?: string;
  month?: string;
  year?: string;
  income: number;
  spending: number;
};
// Sample data for different views
const weeklyData: ChartData[] = [
  { day: "Mon", income: 24000, spending: 18000 },
  { day: "Tue", income: 30000, spending: 20000 },
  { day: "Wed", income: 25000, spending: 15000 },
  { day: "Thu", income: 40000, spending: 30000 },
  { day: "Fri", income: 35000, spending: 55000 },
  { day: "Sat", income: 45000, spending: 35000 },
  { day: "Sun", income: 50000, spending: 40000 },
];

const monthlyData: ChartData[] = [
  { month: "Jan", income: 240000, spending: 180000 },
  { month: "Feb", income: 300000, spending: 200000 },
  { month: "Mar", income: 250000, spending: 150000 },
  { month: "Apr", income: 400000, spending: 300000 },
  { month: "May", income: 350000, spending: 250000 },
  { month: "Jun", income: 450000, spending: 650000 },
  { month: "Jul", income: 240000, spending: 180000 },
  { month: "Aug", income: 300000, spending: 200000 },
  { month: "Sep", income: 250000, spending: 150000 },
  { month: "Oct", income: 400000, spending: 300000 },
  { month: "Nov", income: 350000, spending: 250000 },
  { month: "Dec", income: 450000, spending: 350000 },
];

const yearlyData: ChartData[] = [
  { year: "2015", income: 2400000, spending: 1800000 },
  { year: "2016", income: 3000000, spending: 2000000 },
  { year: "2017", income: 500000, spending: 1000000 },
  { year: "2018", income: 2400000, spending: 1800000 },
  { year: "2019", income: 3000000, spending: 3500000 },
  { year: "2020", income: 2500000, spending: 1500000 },
  { year: "2021", income: 2400000, spending: 2800000 },
  { year: "2022", income: 3000000, spending: 2000000 },
  { year: "2023", income: 2500000, spending: 3500000 }
];
  
const transactions = [
  {
    id: 1,
    name: 'Bank of America',
    date: '2024-10-10',
    time: '10:30 AM',
    transactionCode: 'ABC123',
    category: 'Subscription',
    amount: '₦15,000',
    logoUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1728658691/boa_leppwa.png', // Add the actual logo URL
  },
  {
    id: 2,
    name: 'PayPal',
    date: '2024-10-09',
    time: '11:45 AM',
    transactionCode: 'XYZ789',
    category: 'Transfer',
    amount: '₦50,000',
    logoUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1728658926/paypal_cksz1w.png', // Add the actual logo URL
  },
  {
    id: 3,
         name: 'Stripe',
    date: '2024-10-08',
    time: '02:15 PM',
    transactionCode: 'LMN456',
    category: 'Transfer',
    amount: '₦30,000',
    logoUrl: 'https://res.cloudinary.com/dqbbm0guw/image/upload/v1728658691/stripe_ee2by3.webp', // Add the actual logo URL
  },
];




export default function Home() {
  const [view, setView] = useState<"weekly" | "monthly" | "yearly">("weekly"); // State to manage the selected view
  const [chartData, setChartData] = useState<ChartData[]>(weeklyData); // Default data for weekly view

  const handleViewChange = (selectedView: "weekly" | "monthly" | "yearly") => {
    setView(selectedView);
    if (selectedView === "weekly") {
      setChartData(weeklyData);
    } else if (selectedView === "monthly") {
      setChartData(monthlyData);
    } else {
      setChartData(yearlyData);
    }
  };

  return (

    <div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-3 w-full -mt-6">
  {/* Existing Containers */}
  <div className="bg-white shadow-lg rounded-lg p-4 col-span-1">
    {/* Income Card */}
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold">Income</h3>
      <AiOutlineArrowDown className="text-green-500 text-xl" />
    </div>
    <p className="mt-2 text-2xl font-bold text-green-600">₦500,000</p>
    <div className="flex justify-between items-center mt-4">
      <span className="text-gray-500">+12.5% Increase</span>
      <div className="bg-green-100 p-2 rounded-full">
        <AiOutlineArrowDown className="text-green-500" />
      </div>
    </div>
  </div>

  <div className="bg-white shadow-lg rounded-lg p-4 col-span-1">
    {/* Spending Card */}
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold">Spending</h3>
      <AiOutlineArrowUp className="text-red-500 text-xl" />
    </div>
    <p className="mt-2 text-2xl font-bold text-red-600">₦200,000</p>
    <div className="flex justify-between items-center mt-4">
      <span className="text-gray-500">-8.3% Decrease</span>
      <div className="bg-red-100 p-2 rounded-full">
        <AiOutlineArrowUp className="text-red-500" />
      </div>
    </div>
  </div>



  <div className="bg-white h-[310px] sm:h-[400px] col-span-2 shadow-lg rounded-lg p-4">

        {/* Dashboard with Statistics */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Statistics</h2>
          <div className="flex">

<div className="flex justify-center">
  <div className="bg-gray-200 rounded-3xl flex overflow-hidden shadow-lg">
    {/* Weekly Button */}
    <button
      className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg transition-colors duration-300 ${
        view === 'weekly' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
      } rounded-l-3xl`}
      onClick={() => handleViewChange('weekly')}
    >
      Weekly
    </button>
    
    {/* Monthly Button */}
    <button
      className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg transition-colors duration-300 ${
        view === 'monthly' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
      }`}
      onClick={() => handleViewChange('monthly')}
    >
      Monthly
    </button>
    
    {/* Yearly Button */}
    <button
      className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg transition-colors duration-300 ${
        view === 'yearly' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
      } rounded-r-3xl`}
      onClick={() => handleViewChange('yearly')}
    >
      Yearly
    </button>
  </div>
</div>


</div>

        </div>
        <p className="text-sm text-gray-500 mt-2">Average Expenses: ₦24,000</p>
        <div className="flex mt-4">
          <span className="flex items-center text-green-600">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-1"></span>
            Income
          </span>
          <span className="flex items-center text-red-600 ml-4">
            <span className="w-2 h-2 bg-red-600 rounded-full mr-1"></span>
            Spending
          </span>
        </div>

        {/* Line Chart */}
<div className="w-full h-72 md:h-80 lg:h-96">  {/* Full width with responsive height */}
  <ResponsiveContainer width="100%" height="70%">
    <LineChart data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={view === 'weekly' ? 'day' : view === 'monthly' ? 'month' : 'year'} />
      <Tooltip />
      <Line 
        type="monotone" 
        dataKey="income" 
        stroke="#82ca9d" 
        strokeWidth={4} // Increased for thicker line
        dot={{ fill: '#82ca9d' }} 
      />
      <Line 
        type="monotone" 
        dataKey="spending" 
        stroke="#ff6347" 
        strokeWidth={4} // Increased for thicker line
        dot={{ fill: '#ff6347' }} 
      />
    </LineChart>
  </ResponsiveContainer>
</div>

  
      </div>

  <div className="bg-green-600 h-[559px] col-span-1 -mt-40 p-4 hidden md:block">
  {/* Card Balance Section */}
  <div className="bg-lime-50 shadow-lg rounded-lg p-4 mb-4">

    <div className="flex justify-between items-center">
      <h4 className="text-lg font-semibold">Balance</h4>
      <span className="text-sm text-gray-500 cursor-pointer">See Detail</span>
    </div>
    <p className="text-3xl font-bold text-center my-1 ">₦150,000</p>
    <p className="text-sm text-gray-500 text-center ">From Three Cards</p>
    {/* Divider */}
    <hr className="border-gray-300 my-4" />
    {/* Add Card Section */}
    <div className="flex justify-between items-center">
      <h4 className="text-lg font-semibold">My Cards</h4>
      <div className="flex items-center gap-1 text-blue-500 cursor-pointer">
      <span className="text-2xl  relative" style={{ top: '-2px' }}>+</span> {/* Moved up slightly */}
      <span className="text-sm">Add New Card</span>
      </div>
    </div>
  </div>
{/* Debit Cards Section */}
<div className="overflow-hidden">
  <div className="flex space-x-4 w-full overflow-x-auto snap-x snap-mandatory">
    {/* Card 1 */}
    <div className="relative w-[80%] h-[166px] snap-center flex-shrink-0 rounded-lg overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dqbbm0guw/image/upload/v1728472277/Card_1_Mask_hqea4t.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7, // Adjust opacity to show the shadow effect
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-600"
        style={{ opacity: 0.5 }} // Adjust the gradient opacity
      />
      <div className="relative z-10 p-4 text-white">
        <h4 className="text-lg font-semibold mb-2">Visa</h4>
        <p className="mt-2">**** **** **** 1234</p>
        <p className="text-sm mt-2">Exp: 12/25</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative w-[80%] h-[166px] snap-center flex-shrink-0 rounded-lg overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dqbbm0guw/image/upload/v1728472277/Card_1_Mask_hqea4t.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7, // Adjust opacity to show the shadow effect
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600"
        style={{ opacity: 0.5 }} // Adjust the gradient opacity
      />
      <div className="relative z-10 p-4 text-white">
        <h4 className="text-lg font-semibold mb-2">MasterCard</h4>
        <p className="mt-2">**** **** **** 5678</p>
        <p className="text-sm mt-2">Exp: 01/26</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="relative w-[80%] h-[166px] snap-center flex-shrink-0 rounded-lg overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dqbbm0guw/image/upload/v1728472277/Card_1_Mask_hqea4t.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7, // Adjust opacity to show the shadow effect
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600"
        style={{ opacity: 0.5 }} // Adjust the gradient opacity
      />
      <div className="relative z-10 p-4 text-white">
        <h4 className="text-lg font-semibold mb-2">Discover</h4>
        <p className="mt-2">**** **** **** 9012</p>
        <p className="text-sm mt-2">Exp: 03/24</p>
      </div>
    </div>
  </div>
</div>




{/* Payment Options Section */}
<div className="grid grid-cols-4 gap-4 mt-4">
  <div className="flex flex-col items-center">
    <div className="bg-green-800 shadow-md shadow-green-900 p-2 rounded-lg">
      <AiOutlineCreditCard className="text-xl text-white" />
    </div>
    <p className="text-xs mt-1 text-slate-950">Pay</p>
  </div>
  
  <div className="flex flex-col items-center">
    <div className="bg-blue-600 shadow-md shadow-blue-800 p-2 rounded-lg">
      <AiOutlineDownload className="text-xl text-white" />
    </div>
    <p className="text-xs mt-1 text-slate-950">Request</p>
  </div>
  
  <div className="flex flex-col items-center">
    <div className="bg-yellow-500 shadow-md shadow-yellow-700 p-2 rounded-lg">
      <AiOutlineSend className="text-xl text-white" />
    </div>
    <p className="text-xs mt-1 text-slate-950">Send</p>
  </div>
  
  <div className="flex flex-col items-center">
    <div className="bg-purple-600 shadow-md shadow-purple-800 p-2 rounded-lg">
      <AiOutlineWallet className="text-xl text-white" />
    </div>
    <p className="text-xs mt-1 text-slate-950">Saving</p>
  </div>

  {/* New Betting Options Section */}
  <div className="flex flex-col items-center">
    <div className="bg-red-600 shadow-md shadow-red-800 p-2 rounded-lg">
      <AiOutlineTrophy className="text-xl text-white" />
    </div>
    <p className="text-xs mt-1 text-slate-950">Betting</p>
  </div>
  
  <div className="flex flex-col items-center">
    <div className="bg-orange-500 shadow-md shadow-orange-700 p-2 rounded-lg">
      <AiOutlineMoneyCollect className="text-xl text-white" />
    </div>
    <p className="text-xs mt-1 text-slate-950">Pay Bills</p>
  </div>
  
  <div className="flex flex-col items-center">
    <div className="bg-teal-600 shadow-md shadow-teal-800 p-2 rounded-lg">
      <AiOutlineDesktop className="text-xl text-white" />
    </div>
    <p className="text-xs mt-1 text-slate-950">Internet</p>
  </div>
  
  <div className="flex flex-col items-center">
    <div className="bg-gray-800 shadow-md shadow-gray-900 p-2 rounded-lg">
      <AiOutlineVideoCamera className="text-xl text-white" />
    </div>
    <p className="text-xs mt-1 text-slate-950">TV</p>
  </div>
</div>
 
</div>





    </div>
    <div className="container mx-auto p-4 w-full">
  <TransactionHistory transactions={transactions} />
</div>

    </div>
  );
}
