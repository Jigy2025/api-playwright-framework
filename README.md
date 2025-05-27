# API Playwright Automation Framework

## ✅ Features
- Playwright with TypeScript
- API automation using Axios
- CRUD operations + chaining
- Env config via `.env`
- HTML reports
- CI with GitHub Actions

## 🔧 Setup
```bash
git clone <repo-url>
cd api-playwright-framework
npm install
```

## 🚀 Run Tests
```bash
npx playwright test
```

## 📊 View Report
```bash
npx playwright show-report
```

## 🧪 Strategy
- Each CRUD API is tested separately.
- Chaining uses created IDs for dependent calls.
- Tests include negative and edge cases.
