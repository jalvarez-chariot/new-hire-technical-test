# Next.js App Directory - TypeScript Components

This directory follows the **Next.js 14 App Router** structure with TypeScript. All files use `.tsx` extensions for React components with TypeScript.

## 📁 Directory Structure

```
app/
├── components/          # Reusable UI components
│   └── CustomerDisplay.tsx  # Main display component ⭐
├── context/            # React Context providers
│   └── CustomerContext.tsx  # Customer state management ⭐
├── types/             # TypeScript type definitions
│   └── customer.ts    # Customer interface ✅
├── globals.css        # Global Tailwind styles
├── layout.tsx         # Root layout with providers
├── page.tsx           # Home page component
└── CLAUDE.md          # This guide
```

## 🎯 Key Files for the Challenge

### ⭐ `components/CustomerDisplay.tsx`
**Your Task**: Connect this component to the context.

**Current Issue**: Uses placeholder logic instead of `useCustomerContext()`

**Fix**: Replace line 7 with the proper hook call

### ⭐ `context/CustomerContext.tsx`  
**Your Task**: Implement data fetching and state management.

**Current Issue**: Returns hardcoded empty array and loading state

**Fix**: Add `useState`, `useEffect`, and API integration

### ✅ `types/customer.ts`
**Ready to use**: TypeScript interface matching API response

**Import**: `import { Customer } from '../types/customer';`

## 🔧 Next.js App Router Patterns

### File-based Routing
- `page.tsx` = Route component (becomes `/`)
- `layout.tsx` = Shared layout wrapper
- Nested folders create nested routes

### Client vs Server Components
- **`'use client'`** directive = Client component (interactive)
- **No directive** = Server component (rendered on server)
- **Context providers** must be client components

### TypeScript Integration
- All `.tsx` files support TypeScript
- Strict type checking enabled
- IntelliSense and error detection

## 🎨 Styling Approach

### Tailwind CSS Classes Already Applied
```typescript
// Loading state
"text-gray-400 animate-pulse"

// Error state  
"text-red-500"

// Container
"w-full max-w-2xl rounded-lg bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm"

// Customer cards
"bg-gray-700/50 p-4 rounded-md shadow-md transition-transform hover:scale-105"

// Status colors (dynamic)
customer.status === 'Active' ? 'text-green-400' : 'text-yellow-400'
```

### Design System
- **Dark theme**: Gray backgrounds with transparency
- **Typography**: White/gray text hierarchy
- **Interactive**: Hover effects and animations
- **Responsive**: Works on mobile and desktop

## 🔗 Component Relationships

```
layout.tsx
├── CustomerProvider (wraps entire app)
└── page.tsx
    └── CustomerDisplay.tsx
        └── useCustomerContext() (gets data)
```

### Data Flow
1. **CustomerProvider** fetches data from API
2. **Context** stores customers array and loading state
3. **CustomerDisplay** consumes context via hook
4. **UI** renders based on context state

## 📊 State Management Pattern

### Context Structure
```typescript
interface CustomerContextType {
  customers: Customer[];  // Array of customer data
  isLoading: boolean;     // Loading state flag
}
```

### Hook Usage
```typescript
// In any component inside CustomerProvider
const { customers, isLoading } = useCustomerContext();
```

### Error Handling Pattern
```typescript
// Consider these scenarios:
- API not available (fetch fails)
- Invalid JSON response  
- Empty response array
- Network timeout
```

## 🚀 Development Tips

### Type Safety
- Always use proper TypeScript types
- Import `Customer` interface from `types/customer.ts`
- Use `CustomerContextType` for context typing

### React Hooks Best Practices  
- `useState` for component state
- `useEffect` for side effects (API calls)
- `useContext` for accessing shared state

### Debugging Tools
- **React DevTools**: Inspect component state
- **Network Panel**: Monitor API calls
- **Console**: Add logging for development

Remember: The styling and structure are already complete. Focus on connecting the data flow between context and components!