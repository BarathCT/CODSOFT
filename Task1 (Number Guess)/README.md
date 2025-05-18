# 🎯 Number Guessing Game

A full-stack number guessing game where players try to guess a randomly generated number between 1 and 100. Built with **React (Vite)** + **Tailwind CSS** frontend and **Java Spring Boot** backend.

---

## 🚀 Features

- 🎯 Random number generation between 1-100  
- 📊 Limited attempts (10 by default)  
- 🔄 Multiple rounds with "Play Again" option  
- 🏆 Scoring system based on remaining attempts  
- 📱 Responsive design that works on all devices  
- ⚡ Fast performance with Vite  
- 🎨 Modern UI with Tailwind CSS  
- 🔒 Robust backend with Spring Boot  
- 📡 REST API communication  

---

## 🧰 Technologies Used

### 🖥️ Frontend  
| Technology | Purpose |  
|------------|---------|  
| ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) | Blazing fast builds |  
| ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) | Interactive UI components |  
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white) | Utility-first styling |  
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white) | HTTP requests |  

### 🖧 Backend  
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
│ │ │ ├── java/com/task1/numberGuess/
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

| Method | Endpoint                         | Description             |
|--------|----------------------------------|-------------------------|
| GET    | `/api/game/start`                | Starts a new game       |
| POST   | `/api/game/guess?guess={number}` | Submit a guess          |
| GET    | `/api/game/status`               | Get current game status |

---

## 🎮 How to Play

1. The system generates a random number between **1 and 100**.
2. Enter your guess in the input field.
3. The system will provide feedback:
   - 🔺 **Too high**
   - 🔻 **Too low**
   - 🎉 **Correct!**
4. You have **10 attempts** to guess the number.
5. Your **score increases** based on remaining attempts.
6. After winning or exhausting all attempts, click **"Play Again"** to restart the game.

---

## 📸 Project Screenshots

### Game Play Screen
![Number Guessing Game Screenshot](screenshot/numguess1.png "Game Play Screenshot")

### Score Board
![Score Board Screenshot](screenshot/numguess2.png "Score Board Screenshot")

### Game Over
![Game Over Screenshot](screenshot/numguess3.png "Game Over Screenshot")
