import { fetchBookById } from '@/lib/api'
import BookDetails from '@/components/books/BookDetails'

export default async function BookPage({ params }) {
  const { id } = await params
  const book = await fetchBookById(id)

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-red-500">Book not found</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BookDetails book={book} />
    </div>
  )
}
