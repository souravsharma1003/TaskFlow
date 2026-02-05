# 🚀 TaskFlow — Full-Stack Project Management Platform

TaskFlow is a scalable **MERN stack project management platform** designed to help teams organize projects, manage tasks, and track progress efficiently. It features secure authentication, modular backend architecture, and a responsive frontend dashboard.

🔗 **Frontend Repo:** [https://github.com/souravsharma1003/TaskFlow-Frontend](https://github.com/souravsharma1003/TaskFlow-Frontend)
🔗 **Backend Repo:** [https://github.com/souravsharma1003/TaskFlow-Backend](https://github.com/souravsharma1003/TaskFlow-Backend)

---

## ✨ Features

* 🔐 Secure JWT authentication with cookie-based sessions
* 📁 Project creation and management
* ✅ Task tracking with status updates
* 🧩 Modular backend architecture
* 🛡 Middleware validation and error handling
* 🌐 RESTful API design
* 📱 Responsive React UI
* ☁️ Cloud deployment ready (Vercel + Render)

---

## 🏗 Architecture Overview

TaskFlow follows a clean separation of concerns:

Frontend (React) → REST API (Express/Node) → MongoDB Database

### Frontend

* React.js with modern hooks
* Axios for API communication
* Responsive UI components
* Protected routes and session handling

### Backend

* Node.js + Express REST APIs
* JWT authentication middleware
* Modular service-controller architecture
* MongoDB with Mongoose
* Centralized error handling

---

## 🛠 Tech Stack

### Frontend

* React.js
* HTML5 / CSS3
* Tailwind / Bootstrap
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas

---

## ⚙️ Installation & Setup

### 1. Clone repositories

```bash
git clone https://github.com/souravsharma1003/TaskFlow-Frontend
git clone https://github.com/souravsharma1003/TaskFlow-Backend
```

---

### 2. Backend setup

```bash
cd TaskFlow-Backend
npm install
```

Create a `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

Run backend:

```bash
npm start
```

---

### 3. Frontend setup

```bash
cd TaskFlow-Frontend
npm install
npm run dev
```

---

## 🚀 Deployment

* Frontend deployed on **Vercel**
* Backend deployed on **Render**
* Database hosted on **MongoDB Atlas**

To deploy:

1. Push code to GitHub
2. Connect repo to Vercel/Render
3. Configure environment variables
4. Deploy

---

## 🔒 Security Features

* HTTP-only cookies for authentication
* JWT token validation middleware
* Protected routes
* Input validation
* Secure CORS configuration

---

## 📸 Screenshots

*(Add screenshots of dashboard, login, and task management UI here)*

---

## 🧠 Key Learnings

* Designing scalable REST APIs
* Implementing secure authentication flows
* Managing frontend/backend integration
* Deploying full-stack applications
* Structuring modular backend architecture

---

## 📬 Contact

**Sourav Sharma**
📧 [souravsharma1003@gmail.com](mailto:souravsharma1003@gmail.com)
🔗 [https://linkedin.com/in/sourav-sharma-a80928370](https://linkedin.com/in/sourav-sharma-a80928370)

---

⭐ If you like this project, feel free to star the repository!
