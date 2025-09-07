# Chariot Energy - Full Stack Developer Technical Challenge

Welcome to the Chariot Energy technical challenge! This repository contains a lightweight monorepo with a .NET Azure Function API and a Next.js web application built with TypeScript.

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [Azure Functions Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local)
- [Node.js](https://nodejs.org/) (v18 or newer)
- An IDE of your choice (VS Code, Visual Studio, etc.)

## Running the Applications Locally

You will need two separate terminal windows to run both the API and the web app simultaneously.

### 1. Run the Backend API

```bash
# Navigate to the API directory
cd api

# Restore dependencies (only needed once)
dotnet restore

# Start the local functions host
func start
```

The API will be available at http://localhost:7071/api/GetCustomerData. You should see the message "API is working!" in your browser when you visit this URL.

### 2. Run the Frontend Web App

```bash
# Navigate to the webapp directory
cd webapp

# Install dependencies (only needed once)
npm install

# Start the development server
npm run dev
```

The web application will be available at http://localhost:3000. You should see the application UI with a "Loading customer data..." message.

## Project Structure

```
chariot-tech-challenge/
├── api/                    # .NET Azure Function API
│   ├── Data/
│   │   └── customer-data.json
│   ├── Customer.cs
│   ├── GetCustomerData.cs
│   ├── Program.cs
│   ├── api.csproj
│   ├── host.json
│   └── local.settings.json
├── webapp/                 # Next.js TypeScript Application
│   ├── app/
│   │   ├── components/
│   │   │   └── CustomerDisplay.tsx
│   │   ├── context/
│   │   │   └── CustomerContext.tsx
│   │   ├── types/
│   │   │   └── customer.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
```

## Technology Stack

- **Backend**: .NET 8 Azure Functions with Isolated Worker Model
- **Frontend**: Next.js 14+ with App Router and TypeScript
- **Styling**: Tailwind CSS
- **Data**: Local JSON file (mock database)

## Expected Behavior

### API Endpoint
When you visit `http://localhost:7071/api/GetCustomerData`, you should see:
```
API is working!
```

### Web Application
When you visit `http://localhost:3000`, you should see:
- Chariot Energy branding
- "Loading customer data..." message (since the integration isn't complete yet)

## Troubleshooting

### API Issues
- **Build fails**: Ensure .NET 8 SDK is installed correctly
- **Function doesn't start**: Verify Azure Functions Core Tools are installed (`func --version`)
- **Port conflict**: Check that port 7071 is available, or use `func start --port 7072`

### Web App Issues
- **Dependencies fail**: Ensure Node.js v18+ is installed (`node --version`)
- **Build errors**: Try deleting `node_modules` and `package-lock.json`, then run `npm install`
- **Port conflict**: Check that port 3000 is available, or Next.js will auto-suggest 3001

### Common Issues
- **CORS errors**: Ensure both applications are running on the specified ports
- **Path issues**: Make sure you're in the correct directory when running commands

## Next Steps

Once both applications are running successfully, you're ready for the technical challenge session!

## Additional Resources

- [Azure Functions Documentation](https://docs.microsoft.com/en-us/azure/azure-functions/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)