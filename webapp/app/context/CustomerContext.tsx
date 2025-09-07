'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Customer } from '../types/customer';

// 1. Define the context type
interface CustomerContextType {
  customers: Customer[];
  isLoading: boolean;
}

// 2. Create the context with a default value
const CustomerContext = createContext<CustomerContextType | null>(null);

// 3. Create a custom hook for easy consumption of the context
export function useCustomerContext(): CustomerContextType {
  const context = useContext(CustomerContext);
  if (context === null) {
    throw new Error('useCustomerContext must be used within a CustomerProvider');
  }
  return context;
}

// 4. Create the Provider component - This is where the candidate will work
interface CustomerProviderProps {
  children: ReactNode;
}

export function CustomerProvider({ children }: CustomerProviderProps) {
  // Candidate will add state and data fetching logic here

  // The value that will be passed down to consuming components
  const value: CustomerContextType = {
    customers: [],
    isLoading: true,
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
}