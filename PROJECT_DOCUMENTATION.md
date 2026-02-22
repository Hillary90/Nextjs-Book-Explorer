# Book Explorer: Complete Project Documentation

## SECTION 1: Title & Objective

### Title
**Book Explorer: A Next.js Beginner's Toolkit**

### Technology Choice
**Next.js** - A React framework for building modern web applications

### Justification
I chose Next.js for the following reasons:

1. **API Integration Made Easy**: Next.js has built-in support for fetching data from external APIs like Gutendex, making it perfect for a book exploration app that needs to retrieve book information.

2. **File-Based Routing**: Creating multiple pages (homepage, book details, search results) is straightforward - just create files and folders. No complex routing configuration needed.

3. **Performance Benefits**: Next.js automatically optimizes images (book covers from Gutendex) and enables faster page loads through server-side rendering, improving user experience.

4. **Industry Relevance**: Companies like Netflix, Hulu, and TikTok use Next.js in production. Learning it adds valuable skills for modern web development careers.

5. **React Foundation**: Built on React, so all React concepts apply while gaining additional full-stack capabilities.

### End Goal
Build a book exploration web application that allows users to:
- Browse books from the Gutendex API (Project Gutenberg collection)
- Search for books by title or author
- View detailed information about individual books
- Navigate between different pages smoothly
- Save favorite books locally
- See book covers and metadata in an attractive interface

---

## SECTION 2: Quick Summary of the Technology

### What is Next.js?
Next.js is a React-based framework created by Vercel that provides additional features and optimizations for building production-ready web applications. While React handles the UI components, Next.js adds routing, data fetching, performance optimizations, and deployment capabilities.

### Where is Next.js Used?
Next.js is commonly used for:

1. **E-commerce Platforms**: Online stores that need fast page loads and SEO optimization for product listings
2. **Content-Heavy Websites**: Blogs, news sites, and documentation sites that need to display lots of text and images efficiently
3. **Marketing & Landing Pages**: Company websites that need to rank well in search engines and load quickly
4. **Web Dashboards**: Admin panels and data visualization tools that require dynamic, interactive interfaces
5. **Social Media Platforms**: Applications with user-generated content that need fast navigation between pages

### Real-World Examples
Major companies using Next.js in production:
- **Netflix Jobs Portal** (jobs.netflix.com): Their career site uses Next.js for fast page loads and smooth navigation
- **TikTok**: Their web version uses Next.js to handle millions of users efficiently
- **Twitch**: The streaming platform uses Next.js for their marketing and content pages
- **Nike**: Their e-commerce platform leverages Next.js for product pages
- **Hulu**: Their web application is built with Next.js for streaming content delivery

These companies chose Next.js because it handles high traffic, provides excellent performance, and scales well as applications grow.

---

## SECTION 3: System Requirements

### Prerequisites for Running Next.js Book Explorer

#### Operating System
- **Windows**: Windows 10 or higher (64-bit)
- **macOS**: macOS 10.13 (High Sierra) or higher
- **Linux**: Any modern distribution (Ubuntu 18.04+, Fedora, etc.)

#### Required Software

**1. Node.js**
- Version: 18.17.0 or higher required
- Recommended: Latest LTS (Long Term Support) version
- Includes npm (Node Package Manager) automatically
- Download from: https://nodejs.org

**2. Code Editor**
- Recommended: Visual Studio Code (VS Code)
- Alternatives: WebStorm, Sublime Text, or any text editor
- VS Code download: https://code.visualstudio.com

#### Hardware Requirements
- **RAM**: Minimum 4GB (8GB recommended for smooth development)
- **Disk Space**: At least 500MB free space for Node.js and project files
- **Processor**: Any modern processor (Intel i3/AMD equivalent or better)

#### Internet Connection
Required for:
- Installing Next.js and dependencies
- Fetching book data from Gutendex API
- Downloading book cover images
- Minimum speed: Stable broadband connection recommended

#### Web Browser
- Chrome (recommended for development tools)
- Firefox, Safari, or Edge (latest versions)
- Used for testing and viewing your application

#### Optional but Recommended

**VS Code Extensions:**
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint

**Git (for version control):**
- Download from: https://git-scm.com
- Helpful for saving your work and uploading to GitHub

#### API Access
- **Gutendex API**: No API key required! It's free and open
- **API Documentation**: https://gutendex.com
- Used to fetch book data from Project Gutenberg

---

## SECTION 4: Installation & Setup Instructions

### Step 1: Verify Node.js Installation

1. Open terminal/command prompt
2. Run the following command:
   ```bash
   node --version
   ```
3. Verify Node.js is installed. Expected output: v18.17.0 or higher
4. Check npm version:
   ```bash
   npm --version
   ```

**My Result:**
- Node.js version: v24.x.x ✓
- npm version: 10.x.x ✓

### Step 2: Navigate to Project Location

1. In terminal, navigate to your desired folder:
   ```bash
   cd ~/Desktop/Gen_AI/Gen_AI_Capstone_Project
   ```
2. Verify location using:
   ```bash
   pwd
   ```
   (Windows users: use `cd` without arguments)

**My Result:** Successfully navigated to project directory

### Step 3: Create Next.js Project

1. Run the create-next-app command:
   ```bash
   npx create-next-app@latest book-explorer
   ```

2. Answer the setup questions as follows:
   - Would you like to use TypeScript? → **No**
   - Would you like to use ESLint? → **Yes**
   - Would you like to use Tailwind CSS? → **Yes**
   - Would you like to use `src/` directory? → **Yes**
   - Would you like to use App Router? → **Yes**
   - Would you like to customize the default import alias? → **No**

3. Wait for dependencies to install (approximately 2-3 minutes)

**My Result:** Dependencies installed successfully

### Step 4: Start the Development Server

1. Navigate into the project folder:
   ```bash
   cd book-explorer
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Wait for the server to start. Expected output:
   ```
   ✓ Ready in 2.5s
   ○ Local: http://localhost:3000
   ```

**My Result:** Development server started successfully

4. Open web browser and navigate to:
   ```
   http://localhost:3000
   ```

**My Result:** Next.js welcome page loaded successfully

### Step 5: Open Project in Code Editor

1. Open Visual Studio Code
2. Navigate to: **File → Open Folder**
3. Select the `book-explorer` folder
4. Click "Select Folder" or "Open"

**My Result:** Project opened successfully in VS Code

### Step 6: Understanding the Project Structure

Your Next.js project has the following structure:

```
book-explorer/
├── src/
│   ├── app/
│   │   ├── books/
│   │   │   ├── [id]/
│   │   │   │   └── page.js
│   │   │   └── page.js
│   │   ├── favorites/
│   │   │   └── page.js
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── books/
│   │   │   ├── BookCard.js
│   │   │   ├── BookDetails.js
│   │   │   └── BookGrid.js
│   │   ├── layout/
│   │   │   ├── Footer.js
│   │   │   └── Header.js
│   │   ├── search/
│   │   │   ├── FilterPanel.js
│   │   │   └── SearchBar.js
│   │   └── ui/
│   │       ├── LoadingSpinner.js
│   │       └── Pagination.js
│   ├── hooks/
│   │   ├── useBooks.js
│   │   └── useLocalStorage.js
│   └── lib/
│       ├── api.js
│       ├── constants.js
│       └── utils.js
├── public/
├── node_modules/
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
└── README.md
```

#### Key Files and Folders Explained:

**src/app/**
- `page.js` - Homepage with search and featured books
- `layout.js` - Root layout with header/footer
- `globals.css` - Global styles and Tailwind imports
- `books/page.js` - Book listing with filters and pagination
- `books/[id]/page.js` - Individual book details page (dynamic route)
- `favorites/page.js` - User's saved books

**src/components/**
- `books/` - Book display components (BookCard, BookGrid, BookDetails)
- `search/` - Search and filtering UI (SearchBar, FilterPanel)
- `ui/` - Reusable UI utilities (Pagination, LoadingSpinner)
- `layout/` - Layout wrappers (Header, Footer)

**src/lib/**
- `api.js` - Gutendex API integration functions
- `utils.js` - Helper functions (truncate text, format data, etc.)
- `constants.js` - App constants (languages, subjects, pagination)

**src/hooks/**
- `useBooks.js` - Fetch and manage book data with pagination
- `useLocalStorage.js` - localStorage management for favorites

**Configuration Files:**
- `next.config.mjs` - Next.js configuration (image domains, etc.)
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.mjs` - PostCSS plugins configuration
- `jsconfig.json` - Path aliases configuration
- `package.json` - Dependencies and scripts

---

## SECTION 5: Repository Structure & Code Overview

### src/app/ - Next.js App Router Pages

| File | Purpose |
|------|---------|
| `page.js` | Homepage with search and featured books |
| `books/page.js` | Book listing with filters and pagination |
| `books/[id]/page.js` | Individual book details page |
| `favorites/page.js` | User's saved books |
| `layout.js` | Root layout with header/footer |
| `globals.css` | Global styles and Tailwind imports |

### src/components/ - Reusable Components

| Folder | Components | Purpose |
|--------|-----------|---------|
| `books/` | BookCard.js, BookGrid.js, BookDetails.js | Book display components |
| `search/` | SearchBar.js, FilterPanel.js | Search and filtering UI |
| `ui/` | Pagination.js, LoadingSpinner.js | UI utilities |
| `layout/` | Header.js, Footer.js | Layout wrappers |

### src/lib/ - Utilities & Configuration

| File | Purpose |
|------|---------|
| `api.js` | Gutendex API integration functions |
| `utils.js` | Helper functions (truncate text, format numbers, etc.) |
| `constants.js` | App constants (languages, formats, subjects) |

### src/hooks/ - Custom React Hooks

| File | Purpose |
|------|---------|
| `useBooks.js` | Fetch and manage book data with pagination |
| `useLocalStorage.js` | localStorage management for favorites |

### Configuration Files (Root Directory)

| File | Purpose |
|------|---------|
| `next.config.mjs` | Next.js configuration (image domains, etc.) |
| `tailwind.config.js` | Tailwind CSS customization |
| `postcss.config.mjs` | PostCSS plugins configuration |
| `jsconfig.json` | Path aliases (@/* imports) |
| `package.json` | Dependencies and scripts |

---

## SECTION 6: Learning Phases & Prompts

This project was built following a structured 6-phase learning approach. Each phase focuses on specific Next.js concepts and builds upon the previous phase. Detailed prompts and instructions for each phase are available in the `/prompts` directory.

### Phase 1: Orientation & Bridging from React
**File:** `prompts/phase1.txt`

**Goal:** Understand the mental shift from React SPA to Next.js and set up the development environment

**Key Prompts:**
1. "I'm a React developer and want to learn Next.js. Create a structured learning plan that focuses on the new mental models I need, not just re-learning React."
2. "Act as a senior dev. Explain the core philosophical shift from a React SPA (using create-react-app) to a Next.js application. Use an analogy."
3. "Next.js is a React framework that enables server-side rendering and static site generation. That's just the textbook definition. I need a practical, concrete difference."
4. "Tooling & Setup: I'm used to npm start and configuring my own bundler. Guide me through setting up a new Next.js 14 project with Tailwind CSS."

**Learning Objectives:**
- Understand the philosophical shift from SPA to server-first architecture
- Set up Next.js development environment
- Map React concepts to Next.js equivalents
- Understand when to use server vs client components

---

### Phase 2: Core Concepts Deep Dive
**File:** `prompts/phase2.txt`

**Goal:** Master Server-Side Rendering, Static Site Generation, and rendering strategies

**Key Prompts:**
1. "Explain Server-Side Rendering (SSR) in Next.js like I'm a React dev who only knows Client-Side Rendering (CSR)."
2. "Give me a small, practical coding exercise. I need to build a BlogPost component that fetches post data on the server."
3. "I'm confused between 'Static Site Generation' (SSG), 'Server-Side Rendering' (SSR), and 'Incremental Static Regeneration' (ISR) in Next.js."
4. "As a React dev, I'm used to debugging in the browser with useState and useEffect logs. How does debugging change when most of my component logic runs on the server?"

**Learning Objectives:**
- Understand SSR vs CSR differences
- Learn SSG, SSR, and ISR trade-offs
- Practice building server components
- Adapt debugging strategies for server-side code

---

### Phase 3: Advanced Patterns & Integration
**File:** `prompts/phase3.txt`

**Goal:** Implement advanced routing patterns and state management strategies

**Key Prompts:**
1. "In React, I used React Router. In Next.js App Router, how do I implement: a) Nested layouts? b) Dynamic routes like /blog/[slug]? c) Protected (authenticated) routes?"
2. "Show me the simplest possible pattern for protecting a route without any external auth library—just a mock check in a Server Component that redirects."
3. "In my React apps, I used Zustand/Redux for global state. With Next.js server components and server-side data fetching, what parts of my state should move to the server?"

**Learning Objectives:**
- Implement nested layouts and dynamic routes
- Understand route protection patterns
- Rethink state management for server/client architecture
- Learn when to use server vs client state

---

### Phase 4: API Integration & Data Fetching
**File:** `prompts/phase4.txt`

**Goal:** Build API routes and integrate external APIs with proper error handling

**Key Prompts:**
1. "Generate a code snippet for a Next.js 14 Route Handler (app/api/posts/route.js) that simulates creating a new blog post."
2. "What are the top 5 performance optimizations that are unique or especially important in Next.js compared to a standard React app?"

**Learning Objectives:**
- Create Next.js API routes
- Handle POST/GET requests
- Implement performance optimizations
- Use Next.js Image and Link components

---

### Phase 5: Project-Based Learning
**File:** `prompts/phase5.txt`

**Goal:** Apply all concepts by building a complete project with debugging skills

**Key Prompts:**
1. "Mini-Project Scope: I want to build a simple 'Product Showcase' site to practice. Define the scope for me."
2. "Don't give me the full solution. Instead, ask me diagnostic questions to help me find the bug myself."

**Learning Objectives:**
- Build a complete Next.js application
- Practice debugging techniques
- Integrate multiple concepts (routing, data fetching, client/server components)
- Develop problem-solving skills

---

### Phase 6: Deployment & Troubleshooting
**File:** `prompts/phase6.txt`

**Goal:** Deploy to production and handle real-world integration challenges

**Key Prompts:**
1. "I'm ready to deploy my Next.js app to Vercel. Walk me through the necessary steps, including any environment variable configuration."
2. "How do I connect my Next.js frontend to a separate backend API (like a Node.js/Express or Django server) while avoiding CORS issues?"
3. "My React testing strategy used Jest and React Testing Library. How does testing a Next.js App Router application differ?"

**Learning Objectives:**
- Deploy to Vercel
- Configure environment variables
- Handle CORS and API proxying
- Understand testing strategies for Next.js

---

### Complete Prompt Files

For detailed prompts and responses for each phase, refer to:

- `prompts/phase1.txt` - Orientation & Bridging from React
- `prompts/phase2.txt` - Core Concepts Deep Dive
- `prompts/phase3.txt` - Advanced Patterns & Integration
- `prompts/phase4.txt` - API Integration & Data Fetching
- `prompts/phase5.txt` - Project-Based Learning
- `prompts/phase6.txt` - Deployment & Troubleshooting
- `prompts/ai-prompts.txt` - Complete AI prompts journal
- `prompts/README.md` - Prompts documentation guide

---

## SECTION 6.1: Additional AI Prompt Journal

These are supplementary prompts used for general Next.js learning and troubleshooting throughout the project development.

### Phase 1: Orientation & Bridging from React

**Prompt 1:**
> I'm a React developer and want to learn Next.js. Create a structured learning plan that focuses on the new mental models I need, not just re-learning React.

**Response:**
- Week 0: App Router fundamentals (layouts, pages, routing)
- Week 1: Data fetching (Server Components, caching)
- Week 2: Rendering strategies (SSR, SSG, ISR)
- Week 3: Full project integrating all concepts. Focus on unlearning SPA habits

**Prompt 2:**
Act as a senior dev. Explain the core philosophical shift from a React SPA (using create-react-app) to a Next.js application. Use an analogy.

**Response:**
> React SPA is like building a ship in a bottle entirely inside the bottle (client). Next.js is building most of the ship in a dry dock (server), then placing the finished hull in the bottle, only adding the moving parts (interactivity) inside.

**Prompt 3:**
> Next.js is a React framework that enables server-side rendering and static site generation. That's just the textbook definition. I need a practical, concrete difference. For a simple 'About page', show me the exact code difference for fetching and displaying data in a React component vs. a Next.js App Router component.

**Response:**
- **React (SPA)**: You'd fetch in useEffect, manage loading state
- **Next.js (App Router)**: Your component can be async. You await fetch() directly, render the data. No useEffect, useState for fetch needed

**Prompt 4:**
> Tooling & Setup: I'm used to npm start and configuring my own bundler. Guide me through setting up a new Next.js 14 project with Tailwind CSS. Then, map the new Next.js scripts and project structure (app/, public/, etc.) to their equivalents in my old React setup.

### Phase 2: Core Concepts Deep Dive

**Prompt 5:**
> Explain Server-Side Rendering (SSR) in Next.js like I'm a React dev who only knows Client-Side Rendering (CSR). What happens in the browser, the network tab, and the initial HTML for each?

**Response:**
- **CSR**: Browser gets empty HTML `<div id="root">`, downloads JS, builds UI
- **SSR**: Browser gets full HTML from server, then downloads JS for interactivity (hydration). Check "View Page Source" to see the difference

**Prompt 6:**
> Give me a small, practical coding exercise. I need to build a BlogPost component that: 1. Fetches post data from a mock API on the server. 2. Renders the content statically at build time. 3. Has an interactive 'Like' button that uses client-side state. Provide the code structure, and I'll ask questions as I write.

**Response:**
> Create `app/blog/[slug]/page.js`. Use params to get the slug. Fetch post. Use generateStaticParams for SSG. Create a separate 'use client' component for the Like button with useState.

**Prompt 7:**
> I'm confused between 'Static Site Generation' (SSG), 'Server-Side Rendering' (SSR), and 'Incremental Static Regeneration' (ISR) in Next.js. For each one, create a real-world use case example and explain the trade-offs.

**Response:**
- **SSG** (blog post): Built once at deploy, super fast
- **SSR** (dashboard): Built fresh on each request, dynamic
- **ISR** (product page): SSG but periodically re-builds in background (best of both)

**Prompt 8:**
> As a React dev, I'm used to debugging in the browser with useState and useEffect logs. How does debugging change when most of my component logic runs on the server? What tools and strategies should I use now?

**Response:**
Your console.log in a Server Component prints to your terminal (Node.js), not the browser console. Use browser DevTools for Network, Elements. Use VSCode debugger for server code. Embrace terminal logs.

### Phase 3: Advanced Patterns & Integration

**Prompt 9:**
> In React, I used React Router. In Next.js App Router, how do I implement: a) Nested layouts? b) Dynamic routes like /blog/[slug]? c) Protected (authenticated) routes? Show me the file structure and the basic code for each.

**Response:**
- a) Nested layouts: `app/(auth)/layout.js` for login pages, `app/(dashboard)/layout.js`
- b) Dynamic: `app/blog/[slug]/page.js`
- c) Protected: In layout.js, check auth in Server Component, redirect via redirect() or useRouter in client

**Prompt 10:**
> That's too much for my current level. First, show me the simplest possible pattern for protecting a route without any external auth library—just a mock check in a Server Component that redirects. We can add complexity later.

**Response:**
Fair. In `app/dashboard/layout.js`:
```javascript
import { redirect } from 'next/navigation';
if (!isAuth) { redirect('/login'); }
```
That's it for a basic check.

**Prompt 11:**
> In my React apps, I used Zustand/Redux for global state. With Next.js server components and server-side data fetching, what parts of my state should move to the server, and what should remain on the client? Give me a new mental model.

**Response:**
- **Server State** (DB data, user sessions) → Server Components via fetch
- **UI State** (form inputs, modals) → Client Components / Zustand
- Move more to server than you think. Use Client Components only for interactivity

**Prompt 12:**
> Generate a code snippet for a Next.js 14 Route Handler (app/api/posts/route.js) that simulates creating a new blog post. Then, show me how to call it from a Client Component using the fetch API, including handling loading and error states.

**Response:**
```javascript
// app/api/posts/route.js
export async function POST(request) {
  const body = await request.json();
  // Save to DB
  return Response.json({ success: true });
}

// Client Component
await fetch('/api/posts', {
  method: 'POST',
  body: JSON.stringify(data)
});
```

**Prompt 13:**
> What are the top 5 performance optimizations that are unique or especially important in Next.js compared to a standard React app?

**Response:**
1. `<Image />` component for automatic optimization
2. `<Link>` for client-side navigation
3. Font optimization with next/font
4. Automatic code splitting
5. Streaming with Suspense

### Phase 4: Project-Based Learning & Troubleshooting

**Prompt 14:**
> Mini-Project Scope: I want to build a simple 'Product Showcase' site to practice. Define the scope for me: It should use 1) Dynamic routes for products, 2) A layout, 3) Server-side data fetching, and 4) One interactive client component. What are the specific files I will need to create?

**Response:**
- `app/page.js` (home)
- `app/products/[id]/page.js` (dynamic)
- `app/layout.js` (root)
- `app/components/AddToCart.js` ('use client')
- `app/data/products.js` (mock data)

**Prompt 15:**
> Don't give me the full solution. Instead, ask me diagnostic questions to help me find the bug myself. My error is: Error: A component is trying to use a client hook inside a server component. What should I check first?

**Response:**
Check the file's first line. Is there `'use client';`? If not, add it. If yes, check imports. Are you importing a component that might be using hooks (like useState) but is missing its own 'use client'; directive?

**Prompt 16:**
> I'm ready to deploy my Next.js app to Vercel. Walk me through the necessary steps, including any environment variable configuration and how to understand the build logs. What are common gotchas for a first-time deploy?

**Response:**
Push to GitHub. Import project in Vercel dashboard. It auto-detects Next.js. Add env vars in Vercel UI. Build logs will show SSG/SSR pages. Gotcha: Ensure next.config.js is correct if using custom settings.

**Prompt 17:**
> How do I connect my Next.js frontend to a separate backend API (like a Node.js/Express or Django server) while avoiding CORS issues? Should I use Next.js API Routes as a proxy?

**Response:**
Use Next.js API Routes as a proxy. Your client fetches to /api/proxy (same origin). Your Route Handler fetches to the external backend and returns the response. No CORS needed.

**Prompt 18:**
> My React testing strategy used Jest and React Testing Library. How does testing a Next.js App Router application differ? How do I test Server Components, Client Components, and data fetching?

**Response:**
Testing Server Components is tricky—they're async. You might mock fetch. Consider testing the output via integration/E2E tests (Playwright, Cypress). Client Components test the same as before.

---

## SECTION 7: Common Issues and Fixes

### 1. Params Promise Error (Next.js 16+)

**Issue:**
```bash
Error: Route "/books/[id]" used `params.id`. `params` is a Promise and must be unwrapped with `await`
```

**Prompt Used:**
> My dynamic route is throwing an error about params being a Promise. How do I fix this in Next.js 16?

**Solution:**
```javascript
// Before
export default async function BookPage({ params }) {
  const book = await fetchBookById(params.id)
}

// After
export default async function BookPage({ params }) {
  const { id } = await params
  const book = await fetchBookById(id)
}
```

### 2. Hydration Mismatch Warning

**Issue:**
```bash
A tree hydrated but some attributes of the server rendered HTML didn't match the client properties.
```

**Prompt Used:**
> I'm getting hydration warnings in my Next.js app. Browser extensions are adding attributes to the body tag. How do I suppress this?

**Solution:**
Add `suppressHydrationWarning` to the body tag:
```javascript
<body suppressHydrationWarning>
```

### 3. Module Path Alias Not Working

**Issue:**
```bash
Module not found: Can't resolve '@/components/search/SearchBar'
```

**Prompt Used:**
> The @ import alias isn't working in my Next.js project. How do I configure path aliases?

**Solution:**
Create/update `jsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", ".next"]
}
```

### 4. Image Domain Configuration

**Issue:**
```bash
Invalid src prop on next/image, hostname "www.gutenberg.org" is not configured
```

**Prompt Used:**
> I'm getting errors loading images from external domains. How do I configure Next.js to allow images from Gutenberg?

**Solution:**
Update `next.config.mjs`:
```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gutenberg.org',
      },
    ],
  },
};
```

### 5. API Fetch Errors

**Issue:**
```bash
TypeError: Cannot read properties of undefined (reading 'results')
The book grid is empty even though API seems to work in browser.
```

**Prompt Used:**
> My book data isn't loading - the fetchBooks function returns undefined. How should I properly handle API errors and loading states in React?

**Solution:**
Add proper error handling:
```javascript
export async function fetchBooks({ search = '', page = 1 } = {}) {
  try {
    const response = await fetch(`${BASE_URL}?${params}`)
    if (!response.ok) throw new Error('Failed to fetch books')
    
    const data = await response.json()
    return {
      books: data.results || [],
      count: data.count || 0,
    }
  } catch (error) {
    console.error('Error fetching books:', error)
    return { books: [], count: 0 }
  }
}
```

### 6. TypeScript Definition Errors in jsconfig.json

**Issue:**
```bash
File '/home/user/.cache/typescript/5.9/node_modules/@types/page/index.d.ts' not found.
```

**Prompt Used:**
> I'm getting TypeScript definition errors in my jsconfig.json even though I'm using JavaScript. How do I fix this?

**Solution:**
Update jsconfig.json to explicitly include only src directory:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", ".next"]
}
```

---

## SECTION 8: References

### Learning Resources

#### Official Documentation
1. **Next.js Official Docs**: https://nextjs.org/docs
   - Comprehensive guide to all Next.js features
   - Start with "Getting Started" section

2. **Gutendex API Documentation**: https://gutendex.com
   - API endpoints and response format
   - Example queries and filtering options

3. **React Documentation**: https://react.dev
   - Essential for understanding Next.js components
   - Focus on components, props, and hooks

#### Video Tutorials
1. **Next.js in 100 Seconds**: https://www.youtube.com/watch?v=Sklc_fQBmcs
   - Quick overview by Fireship

2. **Next.js 14 Full Course**: https://www.youtube.com/results?search_query=nextjs+14+tutorial
   - Search for latest beginner tutorials

#### Written Guides
1. **Next.js Learn Course**: https://nextjs.org/learn
   - Official interactive tutorial from Next.js team

2. **MDN Web Docs - Fetch API**: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
   - Essential for understanding API calls

#### Community Resources
1. **Next.js GitHub Discussions**: https://github.com/vercel/next.js/discussions
   - Ask questions and see solutions to common problems

2. **Stack Overflow**: https://stackoverflow.com/questions/tagged/next.js
   - Search for specific error messages

#### Tools & Libraries
1. **Tailwind CSS Docs**: https://tailwindcss.com/docs
   - For styling your book explorer app

2. **Vercel Deployment**: https://vercel.com/docs
   - Free hosting for Next.js applications

---

## SECTION 9: Git Workflow & Deployment

### Commit Strategy

Follow the structured commit order in `commit_order.sh`:

1. **Layout Components** (Phase 2)
2. **Pages** (Phase 2)
3. **API & Hooks** (Phase 3-4)
4. **Search Components** (Phase 3)
5. **Book Components** (Phase 3)
6. **UI Components** (Phase 3)
7. **Configuration Updates**
8. **Documentation**

### Deployment to Vercel

1. Push your code to GitHub:
   ```bash
   git push origin main
   ```

2. Visit [vercel.com](https://vercel.com) and sign in with GitHub

3. Click "New Project" and import your repository

4. Vercel auto-detects Next.js configuration

5. Click "Deploy"

6. Your app will be live at: `https://your-project.vercel.app`

### Environment Variables (if needed)

In Vercel dashboard:
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add any API keys or secrets
4. Redeploy for changes to take effect

---

## SECTION 10: Features & Functionality

### Implemented Features

**Homepage**
- Search bar for books
- Featured books grid
- Responsive design

**Book Listing Page**
- Paginated book results
- Search functionality
- Filter panel (languages, subjects)
- Book cards with covers

**Book Details Page**
- Full book information
- Cover image
- Author details
- Download count
- Subject tags
- Add/Remove from favorites

**Favorites Page**
- Locally stored favorites
- Persistent across sessions
- Same grid layout as main page

**Navigation**
- Header with links
- Footer with attribution
- Smooth client-side routing

### Technical Features

**Server-Side Rendering**
- Fast initial page loads
- SEO-friendly

**Client-Side Interactivity**
- Search without page reload
- Favorites management
- Pagination

**Custom Hooks**
- `useBooks` for data fetching
- `useLocalStorage` for persistence

**Responsive Design**
- Mobile-first approach
- Tailwind CSS utilities
- Grid layouts

---

## Conclusion

This Book Explorer project demonstrates modern Next.js development practices, including:
- File-based routing
- Server and Client Components
- API integration
- State management
- Responsive design
- Git workflow

The application is production-ready and can be deployed to Vercel with zero configuration.

**Repository**: https://github.com/Hillary90/Nextjs-Book-Explorer
**Live Demo**: https://bookexplorer-ebon.vercel.app

---

*Built as part of Gen AI Capstone Project*
*Powered by Gutendex API (Project Gutenberg)*
