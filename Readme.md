# 💬 Chat App

A full-stack real-time chat application built with React and Node.js, featuring instant messaging powered by Socket.IO, JWT authentication, image uploads via Cloudinary, and a sleek UI with Tailwind CSS + DaisyUI.

---

## 📁 Project Structure

```
Chat-App/
├── backend/            # Node.js + Express REST API & Socket.IO server
│   └── src/
│       └── index.js    # Server entry point
├── frontend/           # React + Vite client
├── package.json        # Root package with build & start scripts
└── .gitignore
```

---

## ✨ Features

- 🔐 User authentication with JWT & bcrypt password hashing
- 💬 Real-time messaging with Socket.IO
- 🖼️ Image uploads via Cloudinary
- 🍪 Cookie-based session handling
- 🌐 CORS-enabled API
- ⚡ Fast frontend build with Vite
- 🎨 Styled with Tailwind CSS v4 & DaisyUI
- 🗃️ Global state management with Zustand
- 🔔 Toast notifications with React Hot Toast
- 🧭 Client-side routing with React Router DOM

---

## 🛠️ Tech Stack

### Backend

| Package        | Purpose                           |
| -------------- | --------------------------------- |
| Express v5     | Web framework & REST API          |
| Socket.IO v4   | Real-time WebSocket communication |
| Mongoose       | MongoDB ODM                       |
| JSON Web Token | Authentication                    |
| bcryptjs       | Password hashing                  |
| Cloudinary     | Image storage & delivery          |
| cookie-parser  | Cookie parsing middleware         |
| cors           | Cross-Origin Resource Sharing     |
| dotenv         | Environment variable management   |
| nodemon        | Dev auto-reload                   |

### Frontend

| Package             | Purpose                      |
| ------------------- | ---------------------------- |
| React v19           | UI library                   |
| Vite v7             | Build tool & dev server      |
| Socket.IO Client v4 | Real-time communication      |
| Zustand             | Lightweight state management |
| React Router DOM v7 | Client-side routing          |
| Axios               | HTTP client                  |
| Tailwind CSS v4     | Utility-first CSS framework  |
| DaisyUI v5          | Tailwind component library   |
| React Hot Toast     | Toast notifications          |
| Lucide React        | Icon library                 |

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm
- A [MongoDB](https://www.mongodb.com/) instance (local or Atlas)
- A [Cloudinary](https://cloudinary.com/) account

### 1. Clone the Repository

```bash
git clone https://github.com/Rishabh-arc/Chat-App.git
cd Chat-App
```

### 2. Configure Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

### 3. Build the App

Install all dependencies and build the frontend in one command:

```bash
npm run build
```

### 4. Start the App

```bash
npm start
```

The backend server will start and serve the built frontend.

---

## 🧑‍💻 Development Mode

Run the frontend and backend simultaneously in development mode:

**Backend** (with hot reload via nodemon):

```bash
cd backend
npm run dev
```

**Frontend** (Vite dev server):

```bash
cd frontend
npm run dev
```

---

## 📜 Scripts

### Root

| Script          | Description                             |
| --------------- | --------------------------------------- |
| `npm run build` | Installs all deps & builds the frontend |
| `npm start`     | Starts the backend server               |

### Backend (`/backend`)

| Script        | Description                     |
| ------------- | ------------------------------- |
| `npm run dev` | Start with nodemon (hot reload) |
| `npm start`   | Start with Node.js              |

### Frontend (`/frontend`)

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start Vite dev server    |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

---

## 🐛 Issues

Found a bug or have a feature request? [Open an issue](https://github.com/Rishabh-arc/Chat-App/issues).

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

## 👤 Author

**Rishabh** — [@Rishabh-arc](https://github.com/Rishabh-arc)
