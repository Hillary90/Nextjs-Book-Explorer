const BASE_URL = 'https://gutendex.com/books'

export async function fetchBooks({ search = '', page = 1 } = {}) {
  try {
    const params = new URLSearchParams({ page: page.toString() })
    if (search) params.append('search', search)
    
    const response = await fetch(`${BASE_URL}?${params}`)
    if (!response.ok) throw new Error('Failed to fetch books')
    
    const data = await response.json()
    return {
      books: data.results || [],
      count: data.count || 0,
      next: data.next,
      previous: data.previous,
    }
  } catch (error) {
    console.error('Error fetching books:', error)
    return { books: [], count: 0, next: null, previous: null }
  }
}

export async function fetchBookById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`)
    if (!response.ok) throw new Error('Failed to fetch book')
    return await response.json()
  } catch (error) {
    console.error('Error fetching book:', error)
    return null
  }
}
