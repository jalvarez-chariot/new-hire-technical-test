'use client';
import { useCustomerContext } from '../context/CustomerContext';
import { Customer } from '../types/customer';

export default function CustomerDisplay() {
  // Placeholder logic. The candidate will replace this line.
  const { customers, isLoading }: { customers: Customer[], isLoading: boolean } = { customers: [], isLoading: true }; 

  if (isLoading) {
    return <p className="text-gray-400 animate-pulse">Loading customer data...</p>;
  }

  if (!customers || customers.length === 0) {
    return <p className="text-red-500">Could not retrieve customer data.</p>;
  }

  return (
    <div className="w-full max-w-2xl rounded-lg bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm">
      <h2 className="text-2xl font-semibold mb-4 text-white">Customer Directory</h2>
      <ul className="space-y-4">
        {customers.map((customer) => (
          <li key={customer.id} className="bg-gray-700/50 p-4 rounded-md shadow-md transition-transform hover:scale-105">
            <p className="font-bold text-lg text-white">{customer.name}</p>
            <p className={`text-sm ${customer.status === 'Active' ? 'text-green-400' : 'text-yellow-400'}`}>Status: {customer.status}</p>
            <p className="text-sm text-gray-300">Member Since: {customer.memberSince}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}