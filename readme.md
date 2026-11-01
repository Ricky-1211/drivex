# DriveX

DriveX is a full-stack cloud storage and file management application inspired by Google Drive. It combines a React frontend with an Express API and a PostgreSQL-powered storage layer, allowing users to register, sign in, upload files, organize them into folders, share access links, and restore deleted items from trash.

## Overview

The project is structured as a monorepo with two main apps:

- `client/` — React + Vite frontend for the user interface
- `server/` — Express backend for authentication, file logic, folder management, and storage operations

DriveX is designed for personal file management with secure access, quota tracking, and a simple dashboard experience.

## Key Features

- User registration and login
- JWT-based protected routes
- File upload with size and storage quota validation
- Folder creation and nested folder navigation
- File rename, move, preview, and delete operations
- Trash recovery and permanent deletion
- Shareable file links with token-based access
- Storage usage tracking per user
- Responsive dashboard UI for browsing files and folders

## Tech Stack

### Frontend
- React 19
- Vite
- React Router
- Tailwind CSS
- Axios
- Lucide icons

### Backend
- Node.js
- Express 5
- PostgreSQL via Neon
- JWT authentication
- Supabase Storage for file persistence
- Multer for multipart uploads
- CORS and cookie-based session handling

## Project Structure

```text
drivex/
├── client/                 # Frontend app
│   ├── src/                # React source files
│   ├── public/             # Static assets
│   ├── package.json
│   └── vite.config.js
├── server/                 # Backend app
│   ├── config/             # Database and app config
│   ├── controllers/        # API handlers
│   ├── middleware/         # Auth, uploads, protection
│   ├── routes/             # API route definitions
│   ├── services/           # Storage and business logic
│   ├── utils/              # Storage helper utilities
│   ├── server.js           # Express entry point
│   ├── package.json
│   └── .env                # Environment variables (keep private)
├── readme.md               # Project overview
└── .gitignore
```

## Environment Setup

### 1. Install dependencies

For the frontend:

```bash
cd client
npm install
```

For the backend:

```bash
cd server
npm install
```

### 2. Configure environment variables

Create or update the backend `.env` file with values for:

- `DATABASE_URL` — PostgreSQL connection string
- `JWT_SECRET` — secret used for signing JWT tokens
- `ORIGINS` — allowed frontend origins such as `http://localhost:5173`
- `SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` — Supabase publishable key
- `SUPABASE_STORAGE_BUCKET` — bucket name used for file storage

### 3. Run the app

Start the backend:

```bash
cd server
npm run dev
```

Start the frontend:

```bash
cd client
npm run dev
```

The frontend typically runs on `http://localhost:5173` and the API runs on `http://localhost:3000` or the configured PORT.

## Core Requirements Covered

This project implements a lightweight document-drive workflow:

- sign up / sign in
- upload and access files
- browse folders and files in a dashboard
- move files and folders across locations
- restore deleted files from trash
- create share links for selected files
- keep per-user storage counts within a limit

## Notes

- The backend initializes database tables automatically on startup.
- Static file storage is handled through Supabase Storage with signed URLs for previews/downloads.
- The client is intentionally organized around a dashboard-style drive experience for browsing and managing user content.

## Future Enhancements

Possible improvements for the project include:

- folder-level sharing permissions
- real-time collaboration or notifications
- drag-and-drop upload UX
- advanced search and file filters
- multi-user team workspaces and role-based access
- file version history and restore points

## License

This project currently does not declare a production license in the repository metadata. Update the package or LICENSE file if you plan to distribute it publicly.
