# Book Explorer

A modern web application for searching, exploring, and managing your favorite books using the Google Books API. Built with Next.js 15, React, and Tailwind CSS.

## Features

- **Book Search** - Search millions of books by title, author, or keywords
- **Book Details** - View comprehensive information about each book
- **Favorites Management** - Save and manage your favorite books locally
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Fast Performance** - Server-side rendering and optimized loading
- **Accessible** - WCAG compliant with keyboard navigation support

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **API:** Google Books API
- **Storage:** Browser Local Storage

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone git@github.com:Hillary90/Nextjs-Book-Explorer.git
cd Nextjs-Book-Explorer/
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
book_explorer/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── books/[id]/        # Dynamic book detail pages
│   │   ├── favorites/         # Favorites page
│   │   ├── layout.js          # Root layout
│   │   └── page.js            # Homepage
│   ├── components/
│   │   ├── books/             # Book-related components
│   │   ├── layout/            # Layout components
│   │   ├── search/            # Search components
│   │   └── ui/                # Reusable UI components
│   ├── hooks/                 # Custom React hooks
│   │   ├── useBooks.js        # Book fetching logic
│   │   └── useLocalStorage.js # Local storage management
│   └── lib/                   # Utility functions
│       ├── api.js             # API integration
│       ├── constants.js       # App constants
│       └── utils.js           # Helper functions
├── prompts/                   # Learning documentation
└── public/                    # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Usage

### Search for Books
1. Enter a book title, author, or keyword in the search bar
2. Press Enter or click the search button
3. Browse through the search results

### View Book Details
- Click on any book card to view detailed information
- See cover image, description, authors, publisher, and more

### Manage Favorites
- Click the heart icon on any book to add/remove from favorites
- Visit the Favorites page to see all saved books
- Favorites persist across browser sessions

## API Integration

This project uses the [Google Books API](https://developers.google.com/books) to fetch book data. No API key is required for basic usage.

**Endpoints used:**
- Search: `GET https://www.googleapis.com/books/v1/volumes?q={query}`
- Details: `GET https://www.googleapis.com/books/v1/volumes/{id}`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

The app is live at: **https://bookexplorer-ebon.vercel.app**

## Documentation

For complete project documentation, see [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)

## Learning Resources

This project includes structured learning prompts in the `/prompts` directory:

- **Phase 1:** Orientation & Bridging from React
- **Phase 2:** Core Concepts Deep Dive
- **Phase 3:** Advanced Patterns & Integration
- **Phase 4:** API Integration & Data Fetching
- **Phase 5:** Project-Based Learning
- **Phase 6:** Deployment & Troubleshooting

See [prompts/README.md](./prompts/README.md) for detailed learning guide.

## Future Enhancements

- User authentication
- Reading lists
- Book reviews and ratings
- Book recommendations
- Social sharing
- Dark mode
- Advanced search filters
- Reading progress tracker
- PWA features

## Contributing

This is a learning project for a Gen AI class. Feedback and suggestions are welcome!

## License

MIT

## Acknowledgments

- Built as part of Gen AI Capstone Project
- Powered by [Google Books API](https://developers.google.com/books)
- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
