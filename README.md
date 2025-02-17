# 📝 AI-Powered Resume Builder

![Project Preview](https://snipboard.io/9goc0j.jpg)

## 🚀 Features

- **Next.js 15** – Modern React framework with app router
- **Stripe Checkout** – Subscription tiers & customer portal
- **AI Auto-Fill** – ChatGPT API for intelligent content generation
- **Multi-Step Forms** – Built with React Hook Form
- **Dynamic Forms** – Powered by `useFieldArray`
- **Drag & Drop Reordering** – Implemented with `dnd-kit`
- **Autosave** – Changes saved automatically after debounce
- **Resume Design Customizations** – User-controlled styling
- **Image Upload** – Powered by Vercel Blob
- **Postgres DB + Prisma ORM** – Scalable & type-safe database
- **Authentication with Clerk v6** – Secure user management
- **Server Actions & API Route Handlers** – Optimized backend logic
- **Validation with Zod** – Type-safe input validation (frontend & backend)
- **Tailwind CSS + Shadcn UI** – Modern & responsive UI components
- **Mobile Responsive** – Seamless experience across devices
- **Dark Mode Support** – Light, dark, and system themes
- **Print or Save as PDF** – Export resumes with `react-to-print`
- **URL State Management** – Persistent state via search params
- **Global Dialog with Zustand** – Centralized modal system
- **Caching & Context Providers** – Optimized data flow
- **Vercel Deployment** – Seamless cloud hosting
- **VS Code Setup** – Prettier, extensions, and best practices

## 📜 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/vinayaka-iyer/ai-resume-builder.git
cd ai-resume-builder
```

### 2️⃣ Install Dependencies

```sh
yarn install  # or npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env.local` file and configure the following:

```env
DATABASE_URL=your_postgres_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
```

### 4️⃣ Run the Development Server

```sh
npm run dev
```

### 5️⃣ Live Deployment on Vercel

```sh
https://ai-resume-builder-roan-tau.vercel.app/
```

## 📚 Tech Stack

- **Frontend:** Next.js 15, Tailwind CSS, Shadcn UI, Zustand, React Hook Form
- **Backend:** Next.js API Routes, Server Actions, Prisma ORM
- **Database:** PostgreSQL (Vercel Postgres)
- **Authentication:** Clerk v6
- **Payments:** Stripe Checkout & Subscriptions
- **AI Integration:** ChatGPT API
- **Storage:** Vercel Blob (for image uploads)
- **Deployment:** Vercel
