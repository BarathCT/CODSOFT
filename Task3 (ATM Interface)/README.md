# 🏧 ATM Machine Simulator

A full-stack ATM simulation with **React (Vite) + Tailwind CSS** frontend and **Spring Boot** backend, featuring secure transactions and realistic UI.

---

## 🚀 Features
- 💳 **Card Insertion Animation** with interactive UI  
- 🔐 **PIN Authentication** (4-digit validation)  
- 💸 **Transaction Processing**:  
  - ➖ Cash withdrawals with balance checks  
  - ➕ Deposits with instant updates  
  - 📊 Real-time balance inquiries  
- 🧾 **Digital Receipts** for all transactions  
- ♿ **Keyboard Accessible** navigation  
- 📱 **Mobile-First Design** (fully responsive)   

---

## 🧰 Technologies Used

### Frontend  
| Technology | Purpose |  
|------------|---------|  
| ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) | Blazing fast builds |  
| ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) | Interactive UI components |  
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white) | Utility-first styling |  
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white) | HTTP requests |  

### Backend  
| Technology | Purpose |  
|------------|---------|  
| ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?logo=spring-boot&logoColor=white) | REST API service |  

---

## 🛠️ Installation

### 🔧 Prerequisites
- Node.js (v16+ recommended)
- Java JDK (17+ recommended)
- Maven

---

## 📁 Project Structure

```bash
Task1 (Number Guess)/
├── backend/                                        # Spring Boot backend
│ ├── src/
│ │ ├── main/
│ │ │ ├── java/com/task3/atmInterface/
│ │ │ │ ├── controller/                             # REST controllers
│ │ │ │ ├── model/                                  # Data models
│ │ │ │ ├── service/                                # Business logic
│ │ │ │ └── NumberGuessApplication.java
│ │ │ └── resources/                                # Configuration files
│ │ └── test/                                       # Unit tests
│ └── pom.xml                                       # Maven configuration
│
├── frontend/                                       # React frontend
│ ├── src/
│ │ ├── components/                                 # React components
│ │ ├── services/                                   # API service layer
│ │ ├── App.jsx                                     # Main application component
│ │ └── main.jsx                                    # Application entry point
│ ├── public/                                       # Static assets
│ └── vite.config.js                                # Vite configuration
│
└── README.md                                       # Project documentation
```

## ⚛️ Frontend Setup

```bash
# Navigate to the frontend directory
cd frontend

# Install all dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:5173`


## ⚙️ Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Build the project
mvn clean install

# Run the Spring Boot application
mvn spring-boot:run
```

The backend will be available at `http://localhost:8080`

---

## 📡 API Endpoints

| Method | Endpoint           | Description           |
|--------|--------------------|-----------------------|
| POST   | /api/atm/withdraw  | Process withdrawal     |
| POST   | /api/atm/deposit   | Process deposit        |
| GET    | /api/atm/balance   | Check account balance  |

---

## How to Use

1. Open the frontend URL in your browser.
2. Insert the ATM card by clicking on the card UI.
3. Enter your account number and 4-digit PIN (default demo PIN: `1234`).
4. Select the desired transaction: Withdraw, Deposit, or Check Balance.
5. Follow prompts to complete your transaction.
6. Use the **Exit** button to end the session.

---

## 📸 Project Screenshots

### Auth Page (Login Screen)
![Auth Page (Login Screen)](screenshot/atm1.png "Auth Page (Login Screen)")

---

### Card Swipe Screen
![Card Swipe Screen](screenshot/atm2.png "Card Swipe Screen")

---

### Auth Page After Card Swipe
![Auth Page After Card Swipe](screenshot/atm3.png "Auth Page After Card Swipe")

---

### Main Menu Screen
![Main Menu Screen](screenshot/atm4.png "Main Menu Screen")

---

### Balance Inquiry Screen
![Balance Inquiry Screene](screenshot/atm5.png "Balance Inquiry Screen")

---

### Deposit Transaction Screen
![Deposit Transaction Screen](screenshot/atm6.png "Deposit Transaction Screen")
![Deposit Transaction Screen](screenshot/atm7.png "Deposit Transaction Screen")

---

### Withdrawal Transaction Screen
![Withdrawal Transaction Screen](screenshot/atm8.png "Withdrawal Transaction Screen")
![Withdrawal Transaction Screen](screenshot/atm9.png "Withdrawal Transaction Screen")

---
