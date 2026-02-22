'use client'
import {} from 'react'
import { useRouter } from 'next/navigation'
import SearchBar from '@/components/search/SearchBar'
import BookGrid from '@/components/books/BookGrid'
import { useBooks } from '@/hooks/useBooks'

export default function Home() {
  const router = useRouter()
  const { books, loading } = useBooks({ page: 1 })

  const handleSearch = (query) => {
    if (query.trim()) {
      router.push(`/books?search=${encodeURIComponent(query)}`)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Book Explorer</h1>
        <p className="text-gray-600 mb-8">Discover books from Project Gutenberg</p>
        <SearchBar onSearch={handleSearch} />
      </div>
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Books</h2>
        <BookGrid books={books} loading={loading} />
      </section>
    </div>
  )
}
