# Chariot Energy API - .NET Azure Functions

This directory contains the **backend API** built with .NET 8 Azure Functions using the **Isolated Worker Model**.

## 🎯 Your Mission (Objective 1)

**Current State**: The API returns a simple "API is working!" string.

**Your Task**: Modify `GetCustomerData.cs` to serve actual JSON customer data.

## 📋 What You Need to Do

1. **Read the mock data** from `Data/customer-data.json`
2. **Deserialize** JSON into `List<Customer>` objects  
3. **Return JSON response** with HTTP 200 OK

## 📁 Key Files

### `GetCustomerData.cs`
- **Current**: Returns plain text "API is working!"
- **Your job**: Modify this to return JSON customer data
- **Endpoint**: `GET http://localhost:7071/api/GetCustomerData`

### `Customer.cs`
- **Purpose**: C# POCO model for customer data
- **Already defined**: `Id`, `Name`, `Status`, `MemberSince`
- **Ready to use**: Just deserialize JSON into `List<Customer>`

### `Data/customer-data.json`
- **Content**: Array of 3 customer objects
- **Format**: Already matches the `Customer.cs` properties
- **Path**: You'll need to read this file at runtime

## 🛠️ Implementation Hints

### Reading JSON Files in Azure Functions
```csharp
// You'll need to add these using statements
using System.IO;
using Newtonsoft.Json;

// Example pattern for reading files
var jsonPath = Path.Combine(Environment.CurrentDirectory, "Data", "customer-data.json");
var jsonContent = await File.ReadAllTextAsync(jsonPath);
var customers = JsonConvert.DeserializeObject<List<Customer>>(jsonContent);
```

### Returning JSON Response
```csharp
// Change Content-Type from text/plain to application/json
response.Headers.Add("Content-Type", "application/json");

// Serialize and write JSON instead of plain text
var jsonResponse = JsonConvert.SerializeObject(customers);
await response.WriteStringAsync(jsonResponse);
```

## ✅ Success Criteria

When you visit `http://localhost:7071/api/GetCustomerData` in your browser or Postman, you should see:

```json
[
  {
    "id": "CUST-001",
    "name": "Solaris Innovations",
    "status": "Active",
    "memberSince": "2022-08-15"
  },
  // ... more customers
]
```

## 🔧 Project Configuration

### `Program.cs`
- **Purpose**: Entry point for isolated worker
- **Already configured**: Basic host setup
- **No changes needed**: Focus on the function itself

### `api.csproj`
- **Dependencies**: Already includes Newtonsoft.Json
- **Azure Functions**: Configured for v4 runtime
- **.NET 8**: Using latest LTS version

### `local.settings.json`
- **CORS**: Already configured for `http://localhost:3000`
- **Runtime**: Set to `dotnet-isolated`
- **Storage**: Uses development storage

## 🚀 Testing Your Changes

1. **Start the function**: `func start` from `/api` directory
2. **Check endpoint**: Visit `http://localhost:7071/api/GetCustomerData`
3. **Verify JSON**: Should return proper JSON array (not plain text)
4. **Check logs**: Function logs will show in the terminal

## 🐛 Common Issues

- **File not found**: Ensure the path to `customer-data.json` is correct
- **Serialization errors**: Make sure property names match between JSON and C# model
- **CORS issues**: Already configured, but ensure frontend is on port 3000

## 🎓 Learning Points

- **Azure Functions**: HTTP trigger with isolated worker model
- **File I/O**: Reading static files at runtime
- **JSON handling**: Serialization/deserialization with Newtonsoft.Json
- **HTTP responses**: Setting content types and status codes

Remember: Keep it simple! Just focus on reading the JSON file, deserializing it, and returning it as an HTTP response.