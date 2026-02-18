'use client'
import Image from 'next/image'
import { getBookCover, getAuthors } from '@/lib/utils'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export default function BookDetails({ book }) {
  const [favorites, setFavorites] = useLocalStorage('favorites', [])
  const isFavorite = favorites.some(fav => fav.id === book.id)
  
  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.id !== book.id))
    } else {
      setFavorites([...favorites, book])
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <Image src={getBookCover(book)} alt={book.title} width={400} height={600} className="w-full rounded-lg shadow-lg" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl text-gray-700 mb-4">{getAuthors(book)}</p>
          <p className="text-gray-600 mb-2">Downloads: {book.download_count}</p>
          <p className="text-gray-600 mb-4">Languages: {book.languages?.join(', ')}</p>
          <button onClick={toggleFavorite} className={`px-6 py-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-blue-500'} text-white hover:opacity-80`}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
          {book.subjects && book.subjects.length > 0 && (
            <div className="mt-6">
              <h3 className="font-bold mb-2">Subjects:</h3>
              <div className="flex flex-wrap gap-2">
                {book.subjects.slice(0, 5).map((subject, idx) => (
                  <span key={idx} className="bg-gray-200 px-3 py-1 rounded text-sm">{subject}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
