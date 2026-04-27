// pages/IPLMatchesPage.jsx
import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import SportsTabs from '@/layouts/SportsTabs'
import CricketTabs from '../components/CricketTabs'
import BlogsSection from '@/shared/components/BlogsSection'
import SeoManager from '@/core/seo/SeoManager'
import { IPLBanner, IPLSubTabs } from '../components/iplshared'
import { getAllMatchFeeds, getTeamFlag } from '../../../service/ipl.api'

const TABS = ['Home', 'All', 'Live', 'Upcoming', 'Recent']

// ── Match card (same as IPLPage legacy style) ─────────────────────────────────
const IPLMatchCard = ({ match }) => {
  const navigate = useNavigate()

  const isClickable = match.type !== 'Upcoming'
  const dateStr = match.startDate
    ? new Date(match.startDate).toLocaleString('en-IN', {
        day: 'numeric', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit',
      })
    : ''

  return (
    <div
      className={`bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 mb-3 sm:mb-4 ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={() => isClickable && navigate(`/cricket/ipl/scorecard/${match.matchId}`)}
    >
      {/* Status bar */}
      <div className={`text-white px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between flex-wrap gap-2 ${
        match.type === 'Live'   ? 'bg-gradient-to-r from-red-700 to-red-600'
        : match.type === 'Recent' ? 'bg-gradient-to-r from-[#00698c] to-[#0088b0]'
        : 'bg-gradient-to-r from-gray-600 to-gray-500'
      }`}>
        <span className="text-xs sm:text-sm font-semibold flex items-center gap-1.5">
          {match.type === 'Live' && <span className="w-2 h-2 bg-white rounded-full animate-pulse" />}
          {match.type === 'Live' ? 'LIVE' : match.type === 'Recent' ? 'Result' : 'Upcoming'}
        </span>
        <span className="text-xs font-medium opacity-80">{match.matchDesc || ''}</span>
      </div>

      <div className="p-3 sm:p-4 md:p-5">
        {/* Teams */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src={match.team1?.logo || getTeamFlag(match.team1?.name)}
                alt={match.team1?.name}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <div>
                <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base block">
                  {match.team1?.name || 'TBA'}
                </span>
                {match.team1?.score && (
                  <span className="text-xs font-bold text-[#00698c]">{match.team1.score}</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <span className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 px-2">VS</span>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src={match.team2?.logo || getTeamFlag(match.team2?.name)}
                alt={match.team2?.name}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <div>
                <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base block">
                  {match.team2?.name || 'TBA'}
                </span>
                {match.team2?.score && (
                  <span className="text-xs font-bold text-[#00698c]">{match.team2.score}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 pt-2 sm:pt-3 border-t border-gray-100 dark:border-gray-700">
          {match.venue && (
            <div className="flex items-start gap-1.5">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span className="break-words">{match.venue}{match.city ? `, ${match.city}` : ''}</span>
            </div>
          )}
          {dateStr && (
            <div className="flex items-start gap-1.5">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{dateStr}</span>
            </div>
          )}
        </div>

        {/* Result / CTA */}
        {(match.result || isClickable) && (
          <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-700">
            {match.result ? (
              <p className="text-xs font-semibold text-[#00698c]">{match.result}</p>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-[#00698c] font-medium">
                View Scorecard
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
                </svg>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
const IPLMatchesPage = () => {
  const navigate                              = useNavigate()
  const [activeTab,   setActiveTab]           = useState('Home')
  const [data,        setData]                = useState({ live: [], upcoming: [], recent: [] })
  const [loading,     setLoading]             = useState(true)
  const [lastFetched, setLastFetched]         = useState(null)

  const load = useCallback(async () => {
    try {
      const result = await getAllMatchFeeds()
      setData(result)
      setLastFetched(new Date())
    } catch { /* silent */ } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
    const t = setInterval(load, 2 * 60 * 1000)
    return () => clearInterval(t)
  }, [load])

  // Build combined + deduped list with type label


const now = new Date()

const allMatches = [
  // Live — jo abhi chal rahe hain
  ...data.live.map(m => ({ ...m, type: 'Live' })),

  // Recent — jinki startDate past mein hai (completed matches)
  ...data.recent
    .filter(m => m.startDate && new Date(m.startDate) < now)
    .map(m => ({ ...m, type: 'Recent' })),

  // Upcoming — jinki startDate future mein hai
  ...data.upcoming
    .filter(m => m.startDate && new Date(m.startDate) > now)
    .map(m => ({ ...m, type: 'Upcoming' })),

  // Safety net: agar recent array mein future matches aa rahe hain
  ...data.recent
    .filter(m => m.startDate && new Date(m.startDate) > now)
    .map(m => ({ ...m, type: 'Upcoming' })),

  // Safety net: agar upcoming array mein past matches aa rahe hain  
  ...data.upcoming
    .filter(m => m.startDate && new Date(m.startDate) < now)
    .map(m => ({ ...m, type: 'Recent' })),
]
  const seen = new Set()
  const deduped = allMatches.filter(m => {
    if (seen.has(m.matchId)) return false
    seen.add(m.matchId)
    return true
  })

  const filtered =
    activeTab === 'Home'     ? deduped.slice(0, 3) :
    activeTab === 'All'      ? deduped :
    activeTab === 'Live'     ? deduped.filter(m => m.type === 'Live') :
    activeTab === 'Upcoming' ? deduped.filter(m => m.type === 'Upcoming') :
    activeTab === 'Recent'   ? deduped.filter(m => m.type === 'Recent') :
    deduped

  const totalCount = data.live.length + data.upcoming.length + data.recent.length

  return (
    <>
      <SeoManager title="IPL 2025 Matches | SportyRadar" />
      <SportsTabs />
      <CricketTabs extraTab={{ label: 'IPL 2025', path: '/cricket/ipl' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex gap-6">
          <div className="w-full lg:w-[80%] min-w-0">

            <IPLBanner
              subtitle={
                lastFetched
                  ? `Updated ${lastFetched.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`
                  : ''
              }
            />
            <IPLSubTabs active="Matches" />

            <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 border-t-0 rounded-b-lg p-3 sm:p-4">

              {/* Filter tabs */}
              <div className="flex gap-1 mb-4 border-b border-gray-100 dark:border-gray-700 pb-3 overflow-x-auto scrollbar-hide">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 ${
                      activeTab === tab
                        ? 'bg-[#00698c] text-white'
                        : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {tab === 'Live' && data.live.length > 0 && (
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                    )}
                    {tab}
                  </button>
                ))}
              </div>

              {/* Header row */}
              <div className="flex items-center justify-between mb-3 sm:mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-5 sm:h-6 bg-[#00698c] rounded-full" />
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                    {activeTab === 'Home' ? 'IPL Matches' : `${activeTab} Matches`}
                  </h3>
                </div>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {filtered.length} Match{filtered.length !== 1 ? 'es' : ''}
                </span>
              </div>

              {/* Content */}
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-36 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
                  ))}
                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <p className="text-3xl mb-3">🏏</p>
                  <p className="text-sm">No matches available</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 sm:space-y-4">
                    {filtered.map((match) => (
                      <IPLMatchCard key={match.matchId} match={match} />
                    ))}
                  </div>

                  {/* View All — only on Home tab */}
                  {activeTab === 'Home' && totalCount > 3 && (
                    <div className="text-center mt-4 sm:mt-6">
                      <button
                        onClick={() => setActiveTab('All')}
                        className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-[#00698c] hover:text-[#00698c] transition-all"
                      >
                        View All Matches
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  )}
                </>
              )}

            </div>
          </div>
          <div className="hidden lg:block lg:w-[20%]">{/* sidebar */}</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogsSection />
      </div>
    </>
  )
}

export default IPLMatchesPage