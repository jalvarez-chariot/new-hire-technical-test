Comprehensive Project Blueprint: Full Stack Developer Technical ChallengeObjective: To generate a complete, self-contained monorepo for a technical interview challenge. The repository will include a .NET Azure Function API and a Next.js frontend application. The setup should be fully functional out-of-the-box for a candidate to clone and run locally.Part 1: Root Directory and Monorepo StructureCreate a root directory named chariot-tech-challenge. Inside this directory, create the following folder and file structure./chariot-tech-challenge
|-- /api
|   |-- /Data
|   |   |-- customer-data.json
|   |-- GetCustomerData.cs
|   |-- Customer.cs
|   |-- host.json
|   |-- local.settings.json
|   |-- api.csproj
|-- /webapp
|   |-- /app
|   |   |-- /components
|   |   |   |-- CustomerDisplay.js
|   |   |-- /context
|   |   |   |-- CustomerContext.js
|   |   |-- layout.js
|   |   |-- page.js
|   |   |-- globals.css
|   |-- package.json
|   |-- tailwind.config.js
|   |-- postcss.config.js
|   |-- .gitignore
|-- README.md
Part 2: Backend API Specifications (/api directory)This directory contains a .NET 8 Azure Function App using the Isolated Worker Model.File: /api/api.csprojPurpose: Defines the C# project and its dependencies.<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <AzureFunctionsVersion>v4</AzureFunctionsVersion>
    <OutputType>Exe</OutputType>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Microsoft.Azure.Functions.Worker" Version="1.20.1" />
    <PackageReference Include="Microsoft.Azure.Functions.Worker.Extensions.Http" Version="3.1.0" />
    <PackageReference Include="Microsoft.Azure.Functions.Worker.Sdk" Version="1.16.4" />
    <PackageReference Include="Newtonsoft.Json" Version="13.0.3" />
  </ItemGroup>
  <ItemGroup>
    <None Update="host.json">
      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
    </None>
    <None Update="local.settings.json">
      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
      <CopyToPublishDirectory>Never</CopyToPublishDirectory>
    </None>
  </ItemGroup>
  <ItemGroup>
    <Using Include="System.Threading.ExecutionContext" Alias="ExecutionContext" />
  </ItemGroup>
</Project>
File: /api/host.jsonPurpose: Global configuration options for the function app.{
  "version": "2.0",
  "logging": {
    "applicationInsights": {
      "samplingSettings": {
        "isEnabled": true,
        "excludedTypes": "Request"
      }
    }
  },
  "extensionBundle": {
    "id": "Microsoft.Azure.Functions.ExtensionBundle",
    "version": "[4.*, 5.0.0)"
  }
}
File: /api/local.settings.jsonPurpose: Local development settings, including CORS configuration to allow requests from the Next.js frontend.{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated"
  },
  "Host": {
    "CORS": "http://localhost:3000",
    "CORSCredentials": true
  }
}
File: /api/Data/customer-data.jsonPurpose: A static JSON file that will act as a mock database for the API.[
  {
    "id": "CUST-001",
    "name": "Solaris Innovations",
    "status": "Active",
    "memberSince": "2022-08-15"
  },
  {
    "id": "CUST-002",
    "name": "Gridwise Solutions",
    "status": "Active",
    "memberSince": "2021-11-20"
  },
  {
    "id": "CUST-003",
    "name": "Kinetic Power Co.",
    "status": "Inactive",
    "memberSince": "2023-01-10"
  }
]
File: /api/Customer.csPurpose: The C# Plain Old CLR Object (POCO) that defines the data model for a customer.namespace Chariot.Api
{
    /// <summary>
    /// Represents a single customer record.
    /// </summary>
    public class Customer
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public string MemberSince { get; set; }
    }
}
File: /api/GetCustomerData.csPurpose: The initial state of the Azure Function endpoint. This is the file the candidate will modify. It should be functional but return a simple hardcoded string to prove the API is running.using System.Net;
using System.Threading.Tasks;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;

namespace Chariot.Api
{
    public class GetCustomerData
    {
        private readonly ILogger _logger;

        public GetCustomerData(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger<GetCustomerData>();
        }

        [Function("GetCustomerData")]
        public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get")] HttpRequestData req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            var response = req.CreateResponse(HttpStatusCode.OK);
            response.Headers.Add("Content-Type", "text/plain; charset=utf-8");
            await response.WriteStringAsync("API is working!");

            return response;
        }
    }
}
Part 3: Frontend Web App Specifications (/webapp directory)This is a Next.js 14+ application using the App Router. It should be created using the command npx create-next-app@latest webapp --tailwind --eslint. Use JavaScript.File: /webapp/app/context/CustomerContext.jsPurpose: A placeholder React Context provider. The candidate will implement the data fetching and state management logic here.'use client';
import { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the context with a default value.
const CustomerContext = createContext(null);

// 2. Create a custom hook for easy consumption of the context.
export function useCustomerContext() {
  const context = useContext(CustomerContext);
  if (context === null) {
    throw new Error('useCustomerContext must be used within a CustomerProvider');
  }
  return context;
}

// 3. Create the Provider component. This is where the candidate will work.
export function CustomerProvider({ children }) {
  // Candidate will add state and data fetching logic here.

  // The value that will be passed down to consuming components.
  const value = {
    customers: [],
    isLoading: true,
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
}
File: /webapp/app/components/CustomerDisplay.jsPurpose: A client component designed to consume the CustomerContext and display the customer data. The candidate will wire this up to the context.'use client';
import { useCustomerContext } from '../context/CustomerContext';

export default function CustomerDisplay() {
  // Placeholder logic. The candidate will replace this line.
  const { customers, isLoading } = { customers: [], isLoading: true }; 

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
File: /webapp/app/layout.jsPurpose: The root layout for the Next.js application. It wraps all pages with the CustomerProvider to make the context available globally.import { Inter } from 'next/font/google';
import './globals.css';
import { CustomerProvider } from './context/CustomerContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chariot Energy Dashboard',
  description: 'Technical Challenge',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomerProvider>{children}</CustomerProvider>
      </body>
    </html>
  );
}
File: /webapp/app/page.jsPurpose: The main entry page for the web application, which renders the CustomerDisplay component.import CustomerDisplay from './components/CustomerDisplay';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Chariot Energy</h1>
        <p className="text-xl text-gray-300 mt-2">Developer Technical Challenge</p>
      </div>
      <CustomerDisplay />
    </main>
  );
}
File: /webapp/app/globals.cssPurpose: Basic global styles using Tailwind CSS directives.@tailwind base;
@tailwind components;
@tailwind utilities;
Part 4: Root README.mdFile: /README.mdPurpose: A clear, top-level README file with setup and execution instructions for the candidate.# Chariot Energy - Full Stack Developer Technical Challenge

Welcome to the Chariot Energy technical challenge! This repository contains a lightweight monorepo with a .NET Azure Function API and a Next.js web application.

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
The API will be available at http://localhost:7071/api/GetCustomerData.2.



Prerequisites
.NET 8 SDK

Azure Functions Core Tools

Node.js (v18 or newer)

An IDE of your choice (VS Code, Visual Studio, etc.)

Running the Applications Locally
You will need two separate terminal windows to run both the API and the web app simultaneously.

1. Run the Backend API
# Navigate to the API directory
cd api

# Restore dependencies (only needed once)
dotnet restore

# Start the local functions host
func start

The API will be available at http://localhost:7071/api/GetCustomerData. You should see the message "API is working!" in your browser when you visit this URL.

2. Run the Frontend Web App
# Navigate to the webapp directory
cd webapp

# Install dependencies (only needed once)
npm install

# Start the development server
npm run dev

The web application will be available at http://localhost:3000. You should see the application UI with a "Loading customer data..." message.