import Link from 'next/link'
import { getBookCover, getAuthors, truncateText } from '@/lib/utils'

export default function BookCard({ book }) {
  return (
    <Link href={`/books/${book.id}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer h-full">
        <img src={getBookCover(book)} alt={book.title} className="w-full h-48 object-cover mb-4 rounded" />
        <h3 className="font-bold text-lg mb-2">{truncateText(book.title, 50)}</h3>
        <p className="text-gray-600 text-sm">{getAuthors(book)}</p>
        <p className="text-gray-500 text-xs mt-2">Downloads: {book.download_count}</p>
      </div>
    </Link>
  )
}
