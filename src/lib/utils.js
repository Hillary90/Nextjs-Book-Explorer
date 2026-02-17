export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export function getBookCover(book) {
  return book?.formats?.['image/jpeg'] || '/placeholder-book.png'
}

export function getAuthors(book) {
  if (!book?.authors || book.authors.length === 0) return 'Unknown Author'
  return book.authors.map(author => author.name).join(', ')
}
