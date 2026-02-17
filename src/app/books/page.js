'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import SearchBar from '@/components/search/SearchBar'
import FilterPanel from '@/components/search/FilterPanel'
import BookGrid from '@/components/books/BookGrid'
import Pagination from '@/components/ui/Pagination'
import { useBooks } from '@/hooks/useBooks'
import { ITEMS_PER_PAGE } from '@/lib/constants'

export default function BooksPage() {
  const searchParams = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')
  
  const { books, loading, count } = useBooks({ search: searchQuery, page: currentPage })
  const totalPages = Math.ceil(count / ITEMS_PER_PAGE)

  const handleSearch = (query) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Browse Books</h1>
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        <aside>
          <FilterPanel onFilterChange={() => {}} />
        </aside>
        <div className="md:col-span-3">
          <BookGrid books={books} loading={loading} />
          {!loading && books.length > 0 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          )}
        </div>
      </div>
    </div>
  )
}
