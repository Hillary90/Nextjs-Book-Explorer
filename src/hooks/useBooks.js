'use client'
import { useState, useEffect } from 'react'
import { fetchBooks } from '@/lib/api'

export function useBooks({ search = '', page = 1 } = {}) {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function loadBooks() {
      setLoading(true)
      const data = await fetchBooks({ search, page })
      setBooks(data.books)
      setCount(data.count)
      setLoading(false)
    }
    loadBooks()
  }, [search, page])

  return { books, loading, count }
}
