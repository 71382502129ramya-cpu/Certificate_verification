# Digital Certificate Verification System

A web-based Digital Certificate Verification System that simplifies certificate issuance, management, and authentication using unique Certificate IDs, QR codes, and SHA-256 hashing.

## 🚀 Project Overview

The Digital Certificate Verification System helps educational institutions issue digital certificates and allows anyone to verify their authenticity online. It aims to reduce certificate forgery, simplify verification, and maintain organized certificate records.

## ✨ Features

- **Institution Management** – Register and manage educational institutions.
- **Institution Name Autocomplete** – Suggest existing institutions while entering an institution name.
- **Certificate Issuance** – Generate digital certificates for students and participants.
- **QR Code Authentication** – Verify certificates by scanning their QR codes.
- **SHA-256 Hashing** – Generate a hash to support certificate integrity verification.
- **Certificate Status** – Support certificate validity checks, including invalid or revoked statuses.
- **Event and Participant Management** – Organize events, courses, and participant details.
- **Persistent Data Storage** – Store application data in a PostgreSQL database when configured.
- **Responsive Interface** – Access the application through a web browser.

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL / Supabase
- **Security:** SHA-256 hashing and QR-code-based verification
- **Deployment:** Render

## 🔄 How It Works

1. An institution registers with the system.
2. The institution and issuer manage student and event details.
3. Certificates are generated with a unique Certificate ID and QR code.
4. Certificate information is stored in the application database.
5. A verifier scans the QR code or checks the Certificate ID.
6. The system retrieves the certificate record and displays its verification status.

## 🌐 Live Demo

- **Frontend:** https://digital-certificate-system-1pyu.onrender.com/
- **Backend:** https://digital-certificate-jw1h.onrender.com/

## ⚙️ Installation and Setup

### Prerequisites

- Node.js and npm
- A PostgreSQL database (optional for local testing; required for shared database persistence)

### 1. Clone the repository

```bash
git clone https://github.com/71382502129ramya-cpu/Digital_Certificate_System.git
cd Digital_Certificate_System
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and configure the required database and API settings.

```env
DATABASE_URL=your_postgresql_connection_string
VITE_API_BASE_URL=http://localhost:3000
```

For a deployed frontend, set `VITE_API_BASE_URL` to the deployed backend URL.

### 4. Run the application

```bash
npm run dev
```

Use the development URL shown in the terminal to open the application.

### 5. Build for production

```bash
npm run build
npm start
```

## 💾 Data Persistence

The application supports PostgreSQL-based shared storage through Supabase. Configure the database connection on the backend and redeploy the application to enable data persistence across browsers and devices.

Without a configured shared database, local browser storage may be used as a fallback and will not synchronize data across different devices.

## 🔐 Security Note

This project is an academic prototype. Before using it with real student information, implement proper authentication, role-based access control, server-side validation, and protected database operations. Do not expose database credentials or sensitive information in public repositories.

## 🎯 Project Objective

To provide a simple, reliable, and accessible digital platform for issuing and verifying certificates while helping institutions and verifiers reduce the risk of fraudulent certificates.

## 👩‍💻 Developed For

Academic project — Digital Certificate Verification System with Automated Certificate Issuance and QR-Based Authentication.
