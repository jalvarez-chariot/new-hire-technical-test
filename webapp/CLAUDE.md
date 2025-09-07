# Chariot Energy WebApp - Next.js 14 + TypeScript

This directory contains the **frontend application** built with Next.js 14 using the App Router and TypeScript.

## 🎯 Your Mission (Objectives 2 & 3)

**Current State**: Shows "Loading customer data..." forever because context and components aren't connected.

**Your Tasks**: 
1. **Objective 2**: Implement data fetching in `CustomerContext.tsx`
2. **Objective 3**: Connect `CustomerDisplay.tsx` to use the context

## 📁 Key Files & Structure

### `app/context/CustomerContext.tsx` ⭐ **Objective 2**
- **Current**: Returns hardcoded empty array and `isLoading: true`
- **Your job**: Add `useState`, `useEffect`, and API fetching
- **Pattern**: React Context with TypeScript

### `app/components/CustomerDisplay.tsx` ⭐ **Objective 3**  
- **Current**: Uses placeholder logic instead of context
- **Your job**: Replace line 7 with actual `useCustomerContext()` call
- **Result**: Should display the fetched data

### `app/types/customer.ts` ✅ **Ready to use**
- **Purpose**: TypeScript interface for Customer data
- **Already defined**: Matches the API response structure
- **Import**: `import { Customer } from '../types/customer';`

## 🛠️ Implementation Guide

### Objective 2: Context Implementation

In `app/context/CustomerContext.tsx`, you need to:

```typescript
export function CustomerProvider({ children }: CustomerProviderProps) {
  // 1. Add state for customers and loading
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // 2. Add useEffect to fetch data on mount
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:7071/api/GetCustomerData');
        const data = await response.json();
        setCustomers(data);
        setIsLoading(false);
      } catch (error) {
        // Handle error appropriately
        setIsLoading(false);
      }
    };
    
    fetchCustomers();
  }, []);

  // 3. Pass real data to context value
  const value: CustomerContextType = {
    customers,
    isLoading,
  };

  // Provider stays the same...
}
```

### Objective 3: Component Connection

In `app/components/CustomerDisplay.tsx`, replace this line:
```typescript
// FROM:
const { customers, isLoading }: { customers: Customer[], isLoading: boolean } = { customers: [], isLoading: true }; 

// TO:
const { customers, isLoading } = useCustomerContext();
```

## ✅ Success Criteria

### Initial State (before API loads)
- Shows "Loading customer data..." message
- Gray, pulsing text with Tailwind animation

### After API Success
- Shows "Customer Directory" heading
- Displays 3 customer cards with:
  - Customer name (white, bold)
  - Status (green for Active, yellow for Inactive) 
  - Member since date (gray)
  - Hover effects (scale transform)

### Error State (bonus)
- Shows "Could not retrieve customer data." message
- Red text color

## 🎨 UI Components Already Styled

The design is complete with Tailwind CSS:
- **Dark theme**: Gray-900 background
- **Cards**: Semi-transparent with backdrop blur
- **Typography**: Inter font with proper hierarchy
- **Status colors**: Dynamic based on customer status
- **Animations**: Pulse loading, hover scale effects

## 🔧 TypeScript Configuration

### Already Configured ✅
- **tsconfig.json**: Strict mode enabled
- **Types**: Customer interface defined
- **Context types**: `CustomerContextType` interface ready
- **Import paths**: Path mapping set up

### Type Safety Tips
```typescript
// Good - properly typed
const [customers, setCustomers] = useState<Customer[]>([]);

// Good - context hook with proper typing
export function useCustomerContext(): CustomerContextType

// Good - async/await with proper error handling
try {
  const response = await fetch(API_URL);
  const data: Customer[] = await response.json();
} catch (error) {
  console.error('Failed to fetch customers:', error);
}
```

## 🚀 Development Workflow

### Testing Your Changes
1. **Start dev server**: `npm run dev` from `/webapp` directory
2. **Open browser**: `http://localhost:3000`
3. **Check sequence**: Should see loading → customer list
4. **Verify data**: Should match the 3 customers from API

### Debugging Tips
- **Browser DevTools**: Check Network tab for API calls
- **React DevTools**: Inspect context state changes
- **Console**: Add `console.log` to track data flow

## 🌐 API Integration

### Endpoint Details
- **URL**: `http://localhost:7071/api/GetCustomerData`
- **Method**: GET
- **Response**: JSON array of Customer objects
- **CORS**: Already configured by backend

### Error Scenarios to Consider
- **API not running**: Connection refused
- **Wrong port**: Check if API is on 7071  
- **Invalid JSON**: Malformed response
- **Network timeout**: Slow connection

## 🎓 Learning Points

- **React Context**: Global state management pattern
- **TypeScript**: Interface definitions and type safety
- **Next.js App Router**: Modern React framework patterns
- **API Integration**: Fetch API with async/await
- **Error Handling**: Graceful failure states
- **CSS**: Tailwind utility classes for responsive design

## 📱 Expected Final Result

When everything works correctly:
1. Page loads with Chariot Energy branding
2. Shows "Loading..." briefly (< 1 second)
3. Displays 3 customer cards with proper styling
4. Cards have hover effects and status-based colors
5. Data matches exactly what the API returns

Remember: Focus on getting the basic data flow working first, then consider error handling and edge cases!