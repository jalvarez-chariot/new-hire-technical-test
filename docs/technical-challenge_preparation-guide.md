# Full Stack Developer Technical Challenge - Preparation Guide
Hi!

Thank you for moving forward in the interview process with Chariot Energy! The next step is a one-hour collaborative coding session. The goal is not to quiz you, but to simulate a real-world development task and see how we can solve problems together.

To ensure we can make the most of our time, please complete the following setup steps before our scheduled interview.

## Your Goal Before the Interview
Your objective is to clone the provided repository and ensure you can run both the back-end API and the front-end web application locally. This will allow us to dive straight into the coding tasks during our session.

## The Repository

You can find the starter project here:
**https://github.com/jalvarez-chariot/new-hire-technical-test**

## Pre-Interview Setup Steps

### 1. Clone the Repository
Clone the project to your local machine:
```bash
git clone https://github.com/jalvarez-chariot/new-hire-technical-test.git
cd new-hire-technical-test
```

### 2. Review the Structure
Familiarize yourself with the monorepo structure. You'll find:
- **`/api`** - .NET Azure Function project
- **`/webapp`** - Next.js TypeScript project

### 3. Follow the README.md
The root `README.md` file contains all the necessary commands to install dependencies and run both applications. Please follow these instructions carefully.

### 4. Verify Local Setup

**Backend API:**
- Navigate to the `/api` directory
- Run `dotnet restore` and `func start`
- Confirm you can access http://localhost:7071/api/GetCustomerData
- You should see the message **"API is working!"**

**Frontend Web App:**
- Navigate to the `/webapp` directory  
- Run `npm install` and `npm run dev`
- Confirm you can access http://localhost:3000
- You should see the basic dashboard UI with a **"Loading customer data..."** message

## Your Development Environment

Please feel free to use the tools you are most comfortable and productive with. This includes:
- **IDE**: VS Code, Visual Studio, or your preferred editor
- **Terminal**: Command prompt, PowerShell, or bash
- **Browser**: Chrome, Firefox, Edge with developer tools
- **Markdown Reader**: We recommend using VS Code or another markdown-capable editor to easily navigate the comprehensive documentation and CLAUDE.md guidance files throughout the repository

### AI Coding Assistants Welcome
We view modern tools, including AI coding assistants (like GitHub Copilot, Claude, etc.), as a standard part of a developer's toolkit. You are welcome and encouraged to use them during the session just as you would in your day-to-day work.

## What to Expect

The specific tasks and objectives for the session will be provided to you at the beginning of our interview. The challenge is designed to be collaborative and educational - we want to see how you approach problems and work through solutions.

We're looking forward to coding with you!

Best,
The Chariot Energy Team