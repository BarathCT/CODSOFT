# 📚 Full Stack Project Collection

A collection of 5 full-stack applications built using **React (Vite)**, **Tailwind CSS**, **Axios**, and **Spring Boot** (Java) for the backend. The **Student Management System** also includes a **MySQL** database for persistent storage.

---

## 🚀 Projects Overview

### 1. 🎯 Number Guessing Game

* A simple game where users guess a random number.
* React handles the UI and form input.
* Backend in Spring Boot generates and validates the random number.


![Number Guessing Game Screenshot](screenshot/numguess1.png "Game Play Screenshot")

---


### 2. 📊 Student Grade Calculator

* Users input marks for various subjects.
* Calculates average, percentage, and grade.
* Backend logic handles grade assignment and evaluation.


![Student Grade Calculator](screenshot/calc1.png "Student Grade Calculator")

---


### 3. 🏧 ATM Interface

* Simulates an ATM system.
* Features include: balance check, withdrawal, deposit.
* Backend maintains virtual account state.

![Card Page](screenshot/atm2.png "Card Page")
![Transaction Page](screenshot/atm4.png "Transaction Page")

---


### 4. 💱 Currency Converter

* Convert currency in real-time.
* Fetches live exchange rates via backend API.
* Clean, responsive UI with conversion history.


![Currency Converter](screenshot/converter1.png "Currency Converter")

---


### 5. 🧑‍🎓 Student Management System

* Complete CRUD operations (Create, Read, Update, Delete).
* Fully integrated with a **MySQL** database.
* Features include search, sorting, and real-time updates.


![Student Management System Home](screenshot/student1.png "Student Management System Home")
![With Student Details](screenshot/student4.png "With Student Details")


---

## 🧰 Tech Stack

### 🖥️ Frontend (All Projects)

* ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite\&logoColor=white)
* ![React](https://img.shields.io/badge/React-61DAFB?logo=react\&logoColor=black)
* ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwind-css\&logoColor=white)
* ![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios\&logoColor=white)

### ⚙️ Backend (All Projects)

* ![Java](https://img.shields.io/badge/Java-ED8B00?logo=openjdk\&logoColor=white)
* ![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?logo=spring-boot\&logoColor=white)
* ![Maven](https://img.shields.io/badge/Maven-C71A36?logo=apache-maven\&logoColor=white)

### 🛢️ Database (Only for Student Management System)

* ![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql\&logoColor=white)

---

## 📁 Folder Structure

```
CODSOFT/
├── Task1 (Number Guess)/
│   ├── frontend/     # React + Vite + Tailwind CSS
│   └── backend/      # Spring Boot
│
├── Task2 (Student Grade Calculator)/
│   ├── frontend/
│   └── backend/
│
├── Task3 (ATM Interface)/
│   ├── frontend/
│   └── backend/
│
├── Task4 (Currency Converter)/
│   ├── frontend/
│   └── backend/
│
├── Task5 (Student Management System)/
│   ├── frontend/
│   └── backend/      # Spring Boot + MySQL
│
└── README.md
```

---

## 🛠️ Installation Guide

### 📦 Prerequisites

* Node.js (v16+)
* Java JDK (17+)
* Maven
* MySQL (only for student-management)

### 🔧 Setup Instructions (for each project)

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

#### Backend

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

> 💡 For **Student Management System**, make sure MySQL is running and credentials are set in `application.properties`.

---

## 👨‍💻 Author

**Barath CT**
📧 [barathctb@gmail.com](mailto:barathctb@gmail.com)

---

## ⭐ Support

If you find these projects useful, give the repo a ⭐ on GitHub to show your support!

---
