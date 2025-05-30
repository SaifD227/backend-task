
# Backend Task

This is a **Node.js** backend project structured with **Express**, **Prisma ORM**, **PostgreSQL**, and **TypeScript**.

## 📂 Project Structure

- `src/controllers/` — Business logic handlers  
- `src/middleware/` — Custom Express middlewares  
- `src/models/` — Prisma models for database interaction  
- `src/routes/` — API route definitions  
- `src/types/` — TypeScript custom types  
- `src/index.ts` — Main server entry point

## 🚀 Tech Stack

- **Node.js** + **Express**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **ESLint** for linting
- **Vercel** ready for deployment

## 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/SaifD227/backend-task.git
cd backend-task
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your database connection URL:

```env
DATABASE_URL="your_postgresql_connection_string"
```

Push the Prisma schema to your database:

```bash
npx prisma db push
```

Start the development server:

```bash
npm run dev
```

## 📋 Available Scripts

| Command | Description |
|:---|:---|
| `npm run dev` | Run server in development mode |
| `npm run build` | Build project |
| `npm run start` | Run server in production |
| `npx prisma db push` | Sync Prisma schema to database |
| `npx prisma studio` | Visual database editor |

## 🔥 Features

- Clean project structure
- Type-safe codebase with TypeScript
- Database ORM using Prisma
- Environment variables configuration
- Easy deployment to **Vercel** or any cloud platform

## 📄 Configuration

- `tsconfig.json` — TypeScript configuration
- `prisma/schema.prisma` — Prisma ORM schema
- `.env` — Environment variables setup
- `.eslintrc.mjs` — ESLint rules for code quality
- `vercel.json` — Vercel deployment configuration

## 🤝 Contributing

Contributions are welcome! Feel free to fork and open a pull request.

## 📃 License

This project is open source and available under the [MIT License](LICENSE).
