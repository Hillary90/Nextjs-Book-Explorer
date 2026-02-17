import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Book Explorer</Link>
          <div className="space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/books" className="hover:underline">Books</Link>
            <Link href="/favorites" className="hover:underline">Favorites</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
