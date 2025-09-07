# Chariot Energy Technical Challenge - Root Directory

Welcome! This file is designed to help you understand the project structure and get oriented quickly. If you're using Claude Code or other AI assistants, this information will help them provide better assistance.

## 🏗️ Project Overview

This is a **monorepo** containing two applications that work together:

- **Backend**: .NET 8 Azure Functions API (in `/api`)
- **Frontend**: Next.js 14 with TypeScript (in `/webapp`)

## 📁 Repository Structure

```
chariot-tech-challenge/
├── api/                    # .NET Azure Function API
│   ├── Data/              # Mock data files
│   ├── *.cs              # C# source files
│   ├── CLAUDE.md         # API-specific guidance
│   └── ...
├── webapp/                # Next.js TypeScript Application  
│   ├── app/              # Next.js App Router structure
│   ├── CLAUDE.md         # Frontend-specific guidance
│   └── ...
├── docs/                 # Documentation (private to interviewer)
├── README.md             # Setup instructions
├── .gitignore           # Git ignore rules
└── CLAUDE.md            # This file
```

## 🎯 Challenge Objectives Summary

The technical challenge involves three main objectives:

1. **Backend**: Modify the API to serve JSON customer data (instead of "API is working!")
2. **Frontend Context**: Implement data fetching in React Context with TypeScript
3. **UI Integration**: Connect the component to display the fetched data

## 🔧 Key Technologies

- **Backend**: .NET 8, Azure Functions, C#
- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Data**: Static JSON file (mock database)

## 🚀 Quick Start Commands

```bash
# Terminal 1 - Backend API
cd api
dotnet restore
func start

# Terminal 2 - Frontend  
cd webapp
npm install
npm run dev
```

## 💡 Tips for Success

1. **Read the README.md first** - Contains complete setup instructions
2. **Check individual CLAUDE.md files** - Each directory has specific guidance
3. **Use TypeScript properly** - Types are already defined in `/webapp/app/types/`
4. **Think about error handling** - What if the API call fails?
5. **Start simple** - Get the basic flow working first, then enhance

## 🔍 What to Explore First

1. Look at the mock data in `/api/Data/customer-data.json`
2. Examine the Customer type in `/webapp/app/types/customer.ts`
3. Check the current API implementation in `/api/GetCustomerData.cs`
4. Review the context structure in `/webapp/app/context/CustomerContext.tsx`

## 🎓 Learning Objectives

This challenge tests your ability to:
- Work with Azure Functions and C#
- Implement React Context with TypeScript
- Handle API integration and state management
- Debug and problem-solve in a full-stack environment

## 📝 Documentation Quality

This repository follows documentation best practices:
- Each directory has context-specific guidance
- Clear separation of concerns
- TypeScript types for better development experience
- Comprehensive setup instructions

Good luck! Remember to think out loud and explain your approach as you work through the challenges.