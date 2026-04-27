// // import SportsTabs from '@/layouts/SportsTabs'
// // import CricketTabs from '../components/CricketTabs'
// // import SectionHeader from '@/shared/components/SectionHeader'
// // import BlogsSection from '@/shared/components/BlogsSection'
// // import SeoManager from '@/core/seo/SeoManager'
// // import { currentSeries, recentSeries } from '@/shared/constants/cricket.data'

// // const SeriesRow = ({ series }) => (
// //   <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 flex items-center justify-between hover:shadow-md transition-shadow">
// //     <div>
// //       <p className="text-sm font-semibold text-gray-900 dark:text-white">{series.name}</p>
// //       <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{series.dates}</p>
// //     </div>
// //     <div className="flex items-center gap-4">
// //       {series.links.map((link) => (
// //         <button key={link} className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#00698c] dark:hover:text-[#3387a3] font-medium transition-colors">
// //           {link}
// //         </button>
// //       ))}
// //       <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //         <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
// //       </svg>
// //     </div>
// //   </div>
// // )

// // const CricketSeriesPage = () => (
// //   <>
// //     <SeoManager title="Cricket Series | SportyRadar" />
// //     <SportsTabs />
// //     <CricketTabs />
// //     <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
// //       <SectionHeader title="Cricket Series" />

// //       <h3 className="text-base font-bold text-gray-900  dark:text-white mb-3">Current Series</h3>
// //       <div className="space-y-2 mb-6">
// //         {currentSeries.map((s) => <SeriesRow key={s.id} series={s} />)}
// //       </div>

// //       <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">Recent Series</h3>
// //       <div className="space-y-2 mb-8">
// //         {recentSeries.map((s) => <SeriesRow key={s.id} series={s} />)}
// //       </div>

// //       <BlogsSection />
// //     </div>
// //   </>
// // )

// // export default CricketSeriesPage

// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import SportsTabs from '@/layouts/SportsTabs'
// import CricketTabs from '../components/CricketTabs'
// import SectionHeader from '@/shared/components/SectionHeader'
// import BlogsSection from '@/shared/components/BlogsSection'
// import SeoManager from '@/core/seo/SeoManager'
// import { getSeries } from '../../../service/ipl.api'

// // ── Helpers ───────────────────────────────────────────────────────────────────
// const formatDateRange = (startMs, endMs) => {
//   const fmt = (ms) =>
//     new Date(Number(ms)).toLocaleDateString('en-IN', {
//       day: 'numeric', month: 'short', year: 'numeric',
//     })
//   if (startMs && endMs) return `${fmt(startMs)} – ${fmt(endMs)}`
//   if (startMs) return fmt(startMs)
//   return ''
// }

// // ── SeriesRow ─────────────────────────────────────────────────────────────────
// const SeriesRow = ({ series, onClick }) => (
//   <div
//     onClick={onClick}
//     className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 flex items-center justify-between hover:shadow-md hover:border-[#00698c]/40 transition-all cursor-pointer group"
//   >
//     <div className="min-w-0 flex-1 pr-4">
//       <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-[#00698c] transition-colors line-clamp-1">
//         {series.name}
//       </p>
//       <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
//         {formatDateRange(series.startDt, series.endDt)}
//       </p>
//     </div>
//     <svg className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:text-[#00698c] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
//     </svg>
//   </div>
// )

// // ── Skeleton ──────────────────────────────────────────────────────────────────
// const SkeletonRow = () => (
//   <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 flex items-center justify-between animate-pulse">
//     <div className="space-y-2 flex-1 pr-8">
//       <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
//       <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
//     </div>
//     <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
//   </div>
// )

// // ── MonthGroup ────────────────────────────────────────────────────────────────
// const MonthGroup = ({ date, series, onSeriesClick }) => (
//   <div className="mb-6">
//     <h4 className="text-xs font-black text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-2 px-1">
//       {date}
//     </h4>
//     <div className="space-y-2">
//       {series.map((s) => (
//         <SeriesRow
//           key={s.id}
//           series={s}
//           onClick={() => onSeriesClick(s)}
//         />
//       ))}
//     </div>
//   </div>
// )

// // ── Main Page ─────────────────────────────────────────────────────────────────
// const CricketSeriesPage = () => {
//   const navigate = useNavigate()
//   const [groups, setGroups]   = useState([])   // [{ date, series[] }]
//   const [loading, setLoading] = useState(true)
//   const [error, setError]     = useState(null)

//   useEffect(() => {
//     let cancelled = false
//     const load = async () => {
//       try {
//         const result = await getSeries()
//         if (cancelled) return

//         // Handle response shape: { data: { seriesMapProto: [...] } } or direct array
//         const raw =
//           result?.data?.seriesMapProto ||
//           result?.seriesMapProto        ||
//           (Array.isArray(result) ? result : [])

//         setGroups(raw)
//       } catch (e) {
//         if (!cancelled) setError(e.message || 'Failed to load series')
//       } finally {
//         if (!cancelled) setLoading(false)
//       }
//     }
//     load()
//     return () => { cancelled = true }
//   }, [])

//   const handleSeriesClick = (series) => {
//     // Series detail page pe navigate karo — route apne hisaab se adjust karo
//     navigate(`/cricket/series/${series.id}`)
//   }

//   return (
//     <>
//       <SeoManager title="Cricket Series | SportyRadar" />
//       <SportsTabs />
//       <CricketTabs />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
//         <div className="flex gap-6">

//           {/* Left: Series content */}
//           <div className="w-full lg:w-[80%] min-w-0">
//             <SectionHeader title="Cricket Series" />

//             {/* Loading */}
//             {loading && (
//               <div className="space-y-2 mt-4">
//                 {[...Array(8)].map((_, i) => <SkeletonRow key={i} />)}
//               </div>
//             )}

//             {/* Error */}
//             {!loading && error && (
//               <div className="py-10 text-center bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg mt-4">
//                 <p className="text-gray-400 text-sm">Could not load series</p>
//                 <p className="text-gray-300 text-xs mt-1">{error}</p>
//               </div>
//             )}

//             {/* Empty */}
//             {!loading && !error && groups.length === 0 && (
//               <div className="py-10 text-center bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg mt-4">
//                 <p className="text-gray-400 text-sm">No series found</p>
//               </div>
//             )}

//             {/* Series grouped by month */}
//             {!loading && !error && groups.length > 0 && (
//               <div className="mt-4">
//                 {groups.map((group) => (
//                   <MonthGroup
//                     key={group.date}
//                     date={group.date}
//                     series={group.series}
//                     onSeriesClick={handleSeriesClick}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Right: Sidebar */}
//           <div className="hidden lg:block lg:w-[20%]">
//             {/* Sidebar yahan add karo */}
//           </div>

//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <BlogsSection />
//       </div>
//     </>
//   )
// }

// export default CricketSeriesPage

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SportsTabs from '@/layouts/SportsTabs'
import CricketTabs from '../components/CricketTabs'
import SectionHeader from '@/shared/components/SectionHeader'
import BlogsSection from '@/shared/components/BlogsSection'
import SeoManager from '@/core/seo/SeoManager'
import { getSeries } from '../../../service/ipl.api'

// ── Helpers ───────────────────────────────────────────────────────────────────
const formatDateRange = (startMs, endMs) => {
  const fmt = (ms) =>
    new Date(Number(ms)).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
    })
  if (startMs && endMs) return `${fmt(startMs)} – ${fmt(endMs)}`
  if (startMs) return fmt(startMs)
  return ''
}

// ── Classifier ────────────────────────────────────────────────────────────────
const DOMESTIC_KEYWORDS = [
   'ranji', 'vijay hazare', 'syed mushtaq', 'duleep', 'deodhar',
  'bbl', 'cpl', 'psl', 'sa20', 'lpl', 'ilt20', 'the hundred',
  'super smash', 'big bash', 'sheffield shield', 'plunket shield',
  'county', 'ncl', 'bcl', 't20 blast', 'one-day cup', 'vitality',
  'royal london', 'bob willis', 'npl', 'lanka premier',
]
const T20_KEYWORDS = [
  't20 world cup', "icc men's t20", "icc women's t20", 'wt20' ,'indian premier league', 'ipl', 'big bash', 'bbl', 'caribbean premier league', 'cpl', 'pakistan super league', 'psl', 'sa20', 'lpl', 'ilt20', 'the hundred',
  'world twenty20', 'twenty20 world', 'asia cup t20',
  't20i tri', 't20 qualifier', 't20 cup', 'east asia pacific',
]

const classifySeries = (name = '') => {
  const lower = name.toLowerCase()
  if (T20_KEYWORDS.some((k) => lower.includes(k))) return 't20'
  if (DOMESTIC_KEYWORDS.some((k) => lower.includes(k))) return 'domestic'
  return 'international'
}

// IPL series ko /cricket/ipl pe redirect karo
const IPL_KEYWORDS = ['indian premier league', 'ipl']
const isIPLSeries = (name = '') => {
  const lower = name.toLowerCase()
  return IPL_KEYWORDS.some((k) => lower.includes(k))
}

const TABS = [
  { key: 'all',           label: 'All'           },
  { key: 'international', label: 'International' },
  { key: 'domestic',      label: 'Domestic'      },
  { key: 't20',           label: 'T20'           },
]

// ── SeriesRow ─────────────────────────────────────────────────────────────────
const SeriesRow = ({ series, isOngoing, onClick }) => (
  <div
    onClick={onClick}
    className={`
      bg-white dark:bg-[#1c2128] rounded-lg px-4 py-3
      flex items-center justify-between
      hover:shadow-md transition-all cursor-pointer group
      border ${isOngoing
        ? 'border-[#00698c]/50 dark:border-[#00698c]/40'
        : 'border-gray-200 dark:border-gray-700 hover:border-[#00698c]/30'}
    `}
  >
    <div className="min-w-0 flex-1 pr-4">
      <div className="flex items-center gap-2 flex-wrap">
        <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-[#00698c] transition-colors line-clamp-1">
          {series.name}
        </p>
        {isOngoing && (
          <span className="flex-shrink-0 flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Live
          </span>
        )}
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
        {formatDateRange(series.startDt, series.endDt)}
      </p>
    </div>
    <svg className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:text-[#00698c] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
    </svg>
  </div>
)

// ── Skeleton ──────────────────────────────────────────────────────────────────
const SkeletonRow = () => (
  <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 flex items-center justify-between animate-pulse">
    <div className="space-y-2 flex-1 pr-8">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
    </div>
    <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
  </div>
)

// ── MonthGroup ────────────────────────────────────────────────────────────────
const MonthGroup = ({ date, series, onSeriesClick }) => {
  const now = Date.now()
  const hasOngoing = series.some(
    (s) => Number(s.startDt) <= now && Number(s.endDt) >= now
  )
  return (
    <div className="mb-6">
      <h4 className="text-xs font-black tracking-widest uppercase mb-2 px-1 flex items-center gap-2">
        <span className={hasOngoing ? 'text-[#00698c]' : 'text-gray-400 dark:text-gray-500'}>
          {date}
        </span>
        {hasOngoing && (
          <span className="text-[10px] font-bold text-emerald-500">● NOW</span>
        )}
      </h4>
      <div className="space-y-2">
        {series.map((s) => {
          const isOngoing = Number(s.startDt) <= now && Number(s.endDt) >= now
          return (
            <SeriesRow
              key={s.id}
              series={s}
              isOngoing={isOngoing}
              onClick={() => onSeriesClick(s)}
            />
          )
        })}
      </div>
    </div>
  )
}

// ── Tab Bar ───────────────────────────────────────────────────────────────────
const TabBar = ({ active, onChange }) => (
  <div className="flex gap-1 bg-gray-100 dark:bg-gray-800/50 rounded-lg p-1 mb-5">
    {TABS.map((tab) => (
      <button
        key={tab.key}
        onClick={() => onChange(tab.key)}
        className={`
          flex-1 py-1.5 text-xs font-bold rounded-md transition-all
          ${active === tab.key
            ? 'bg-white dark:bg-[#1c2128] text-[#00698c] shadow-sm'
            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}
        `}
      >
        {tab.label}
      </button>
    ))}
  </div>
)

// ── Main Page ─────────────────────────────────────────────────────────────────
const CricketSeriesPage = () => {
  const navigate              = useNavigate()
  const [allGroups, setAllGroups] = useState([])
  const [activeTab, setActiveTab] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const result = await getSeries()
        if (cancelled) return

        const raw =
          result?.data?.seriesMapProto ||
          result?.seriesMapProto        ||
          (Array.isArray(result) ? result : [])

        const now = Date.now()

        // 1. Filter past series out, keep ongoing + future
        const filtered = raw
          .map((group) => ({
            ...group,
            series: group.series
              .filter((s) => Number(s.endDt) >= now)
              .map((s) => ({ ...s, _type: classifySeries(s.name) })),
          }))
          .filter((group) => group.series.length > 0)

        // 2. Sort: ongoing month first, then future asc
        const sorted = filtered.sort((a, b) => {
          const aOngoing = a.series.some(
            (s) => Number(s.startDt) <= now && Number(s.endDt) >= now
          )
          const bOngoing = b.series.some(
            (s) => Number(s.startDt) <= now && Number(s.endDt) >= now
          )
          if (aOngoing && !bOngoing) return -1
          if (!aOngoing && bOngoing) return 1
          const aMin = Math.min(...a.series.map((s) => Number(s.startDt)))
          const bMin = Math.min(...b.series.map((s) => Number(s.startDt)))
          return aMin - bMin
        })

        setAllGroups(sorted)
      } catch (e) {
        if (!cancelled) setError(e.message || 'Failed to load series')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  // Filter groups by active tab
  const visibleGroups = activeTab === 'all'
    ? allGroups
    : allGroups
        .map((group) => ({
          ...group,
          series: group.series.filter((s) => s._type === activeTab),
        }))
        .filter((group) => group.series.length > 0)

  const handleSeriesClick = (series) => {
    // IPL → dedicated IPL page
    if (isIPLSeries(series.name)) {
      navigate('/cricket/ipl')
      return
    }
    navigate(`/cricket/series/${series.id}`)
  }

  return (
    <>
      <SeoManager title="Cricket Series | SportyRadar" />
      <SportsTabs />
      <CricketTabs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex gap-6">
          <div className="w-full lg:w-[80%] min-w-0">
            <SectionHeader title="Cricket Series" />

            <div className="mt-4">
              <TabBar active={activeTab} onChange={setActiveTab} />

              {loading && (
                <div className="space-y-2">
                  {[...Array(8)].map((_, i) => <SkeletonRow key={i} />)}
                </div>
              )}

              {!loading && error && (
                <div className="py-10 text-center bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg">
                  <p className="text-gray-400 text-sm">Could not load series</p>
                  <p className="text-gray-300 text-xs mt-1">{error}</p>
                </div>
              )}

              {!loading && !error && visibleGroups.length === 0 && (
                <div className="py-10 text-center bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg">
                  <p className="text-gray-400 text-sm">No series found</p>
                </div>
              )}

              {!loading && !error && visibleGroups.length > 0 &&
                visibleGroups.map((group) => (
                  <MonthGroup
                    key={group.date}
                    date={group.date}
                    series={group.series}
                    onSeriesClick={handleSeriesClick}
                  />
                ))
              }
            </div>
          </div>

          <div className="hidden lg:block lg:w-[20%]">
            {/* Sidebar */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <BlogsSection />
      </div>
    </>
  )
}

export default CricketSeriesPage