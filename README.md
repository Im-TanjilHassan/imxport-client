# 🌍 IMXport — Export & Import Management Web Application

IMXport is a full-stack **MERN (MongoDB, Express, React, Node)** project designed to manage import/export products efficiently with modern UI and robust backend functionality.  
The app includes **Firebase Authentication**, product management (CRUD), importing/exporting workflows, and a responsive interface with light/dark themes.

---

## 🚀 Live Demo

---

## 🧩 Features

### 🌐 Frontend
- ⚡ **Modern UI** built with **React, TailwindCSS, and DaisyUI**
- 🧠 **Light / Dark mode toggle** using DaisyUI themes (no `tailwind.config.js`)
- 🔍 **Search system** for products by name
- 🧾 **Dynamic routing** with **React Router**
- 🧊 **Glass-style fixed navbar** with scroll effect and responsive design
- 🎨 **Beautiful hero section**, product grid, and footer with newsletter
- ✅ **SweetAlert2** for user-friendly success/error popups
- 🛒 **Import products** via modal input form (quantity-based)
- 🗑️ **Delete functionality** removes product both from **database** and **UI**
- 🧱 **Dynamic title** for each page (SEO-friendly)
- 📱 **Fully responsive design** for all devices

---

### 🛠️ Backend (Node + Express + MongoDB)
- 🧩 RESTful API structure
- 🧾 CRUD operations for product management:
  - Add new products  
  - Get all products  
  - Update product details  
  - Delete products (from all product and import collections)
- ⚙️ **Import/Export data management**
- 🔒 **Secure Firebase authentication integration**
- 🌍 **CORS enabled** for frontend-backend connection
- 🕒 **CreatedAt timestamps** for products

---

### 🔐 Authentication (Firebase)
- ✨ Email/password signup and login
- 🧠 Auth context with React Context API
- 🔁 User state persists across reloads
- 🚪 Protected (Private) routes for product import and details pages

---

## 🧰 Tech Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | React.js, React Router, TailwindCSS, DaisyUI, SweetAlert2 |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Auth | Firebase Authentication |
| Styling | TailwindCSS + DaisyUI Custom Themes |
| Version Control | Git & GitHub |

---
