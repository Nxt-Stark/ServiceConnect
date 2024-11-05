import React from 'react';
import Pagination from './Pagination';
import IconButton from './IconButton';
import { FaChartLine } from 'react-icons/fa';

const PaymentHistory = ({ totalData, dataPerPage }) => {
  const payments = [
    { id: '#123456789', date: '2 March 2021', time: '13:45 PM', desc: 'Description', amount: '$50,036', status: 'Complete' },
    { id: '#123456789', date: '2 March 2021', time: '13:45 PM', desc: 'Description', amount: '$50,036', status: 'Pending' },
    { id: '#123456789', date: '2 March 2021', time: '13:45 PM', desc: 'Description', amount: '$50,036', status: 'Canceled' },
    { id: '#123456789', date: '2 March 2021', time: '13:45 PM', desc: 'Description', amount: '$50,036', status: 'Complete' },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl">
      <h3 className="text-lg font-semibold mb-6">Payment History</h3>
      {payments.map((payment, index) => (
        <div
          key={index}
          className={`flex flex-col w-full sm:flex-row justify-between items-start sm:items-center pb-3 mb-3 ${
            payment.status === 'Complete' ? 'text-green-500' :
            payment.status === 'Pending' ? 'text-yellow-500' :
            'text-red-500'
          }`}
        >
          <div className="flex flex-col w-100% sm:flex-row sm:items-center sm:w-auto mb-6 sm:mb-0 justify-between">
          <div className='flex items-center mr-2 mb-6 sm:mb-0'>
            <IconButton icon={<FaChartLine/>} backgroundColor='red' iconColor="white" />
            <p className="text-sm text-indigo-900 font-semibold ml-2">{payment.id}</p>
            </div>
            <p className="text-sm text-gray-500 sm:mr-4">{payment.date}, {payment.time}</p>
            <p className="text-sm text-gray-500 sm:mr-4">{payment.desc}</p>

            <p className="text-sm font-medium sm:mr-4">{payment.amount}</p>
            <p className="text-sm font-semibold">{payment.status}</p>
          </div>
        </div>
      ))}
      <div className='mb-4'>
      <Pagination totalData={totalData} dataPerPage={dataPerPage} /></div>
    </div>
  );
};

export default PaymentHistory;


