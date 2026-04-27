

import { useEffect, useState } from 'react'
import SportsTabs from '@/layouts/SportsTabs'
import CricketTabs from '../components/CricketTabs'
import SectionHeader from '@/shared/components/SectionHeader'
import MatchCard from '../components/MatchCard'
import BlogsSection from '@/shared/components/BlogsSection'
import SeoManager from '@/core/seo/SeoManager'
import { getFixtures } from '../../../service/ipl.api'

const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" strokeWidth="2"/>
    <path strokeWidth="2" strokeLinecap="round" d="M21 21l-4.35-4.35"/>
  </svg>
)

const CricketFixturesPage = () => {
  const [fixtures, setFixtures] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
  let cancelled = false

  const load = async () => {
    try {
      const data = await getFixtures()
      if (cancelled) return

      setFixtures(data || [])
    } catch (err) {
      if (!cancelled) setError(err.message)
    } finally {
      if (!cancelled) setLoading(false)
    }
  }

  load()
  return () => { cancelled = true }
}, [])


const groupFixturesByDate = (matches) => {
  const groups = {}

  matches.forEach((match) => {
    const date = new Date(match.date || match.startTime)
    const label = date.toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    })

    if (!groups[label]) groups[label] = []
    groups[label].push(match)
  })

  return Object.entries(groups).map(([label, matches]) => ({
    label,
    matches,
  }))
}

const groupedFixtures = groupFixturesByDate(fixtures)


{loading && (
  <div className="text-center py-10 text-gray-400">
    Loading fixtures...
  </div>
)}

{!loading && error && (
  <div className="text-center py-10 text-red-400">
    Failed to load fixtures
  </div>
)}

{!loading && !error && groupedFixtures.map((group) => (
  <div key={group.label} className="mb-6">
    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">
      {group.label}
    </h3>

    <div className="space-y-3">
      {group.matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  </div>
))}

  return (
    <>
      <SeoManager title="Cricket Fixtures | SportyRadar" />
      <SportsTabs />
      <CricketTabs />

      {/* Main layout: fixtures content + right sidebar space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex gap-6">

          {/* Left: Fixtures content — narrowed to make room for right sidebar */}
          <div className="w-full lg:w-[80%] min-w-0">
            <SectionHeader title="Cricket Schedule" />

            {/* Filters */}
            <div className="flex items-center gap-3 mb-6">
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-[#00698c] transition-colors bg-white dark:bg-[#1c2128] whitespace-nowrap">
                Select Series
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="flex-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Search Team, Series, Ground"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm bg-white dark:bg-[#1c2128] text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#00698c] transition-colors"
                />
              </div>
            </div>

            {groupedFixtures.map((group) => (
              <div key={group.label} className="mb-6">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">{group.label}</h3>
                <div className="space-y-3">
                  {group.matches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Empty space reserved for future sidebar — adjust w-[20%] to control width */}
          <div className="hidden lg:block lg:w-[20%]">
            {/* Sidebar content add karo yahan */}
          </div>

        </div>
      </div>

      {/* BlogsSection: separate full-width container — unaffected by above layout changes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <BlogsSection />
      </div>
    </>
  )
}

export default CricketFixturesPage