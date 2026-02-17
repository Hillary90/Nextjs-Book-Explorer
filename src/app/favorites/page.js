'use client'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import BookGrid from '@/components/books/BookGrid'

export default function FavoritesPage() {
  const [favorites] = useLocalStorage('favorites', [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">No favorites yet. Start adding books!</p>
      ) : (
        <BookGrid books={favorites} loading={false} />
      )}
    </div>
  )
}
