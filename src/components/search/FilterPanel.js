'use client'
import { LANGUAGES, SUBJECTS } from '@/lib/constants'

export default function FilterPanel({ onFilterChange }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3 className="font-bold mb-4">Filters</h3>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Language</label>
        <select onChange={(e) => onFilterChange({ language: e.target.value })} className="w-full px-3 py-2 border rounded">
          <option value="">All Languages</option>
          {LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-semibold mb-2">Subject</label>
        <select onChange={(e) => onFilterChange({ subject: e.target.value })} className="w-full px-3 py-2 border rounded">
          <option value="">All Subjects</option>
          {SUBJECTS.map((subject) => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
