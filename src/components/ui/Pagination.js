'use client'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
      >
        Previous
      </button>
      <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
      >
        Next
      </button>
    </div>
  )
}
