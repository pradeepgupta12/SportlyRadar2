// // pages/IPLHomePage.jsx
// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import SportsTabs from '@/layouts/SportsTabs'
// import CricketTabs from '../components/CricketTabs'
// import BlogsSection from '@/shared/components/BlogsSection'
// import SeoManager from '@/core/seo/SeoManager'
// import {
//   IPLBanner, IPLSubTabs, SkeletonList, EmptyState, ErrorState, MatchCard,
// } from '../components/iplshared'
// import { getAllMatchFeeds } from '../../../service/ipl.api'
// import { getIPLNews } from '../../../service/sports.service.js'

// // ─── News card ────────────────────────────────────────────────────────────────
// const NewsCard = ({ article }) => (
//   <a
//     href={article.url || '#'}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex gap-3 p-3 sm:p-4 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg hover:border-[#00698c] transition-colors group"
//   >
//     {article.imageUrl && (
//       <img
//         src={article.imageUrl}
//         alt={article.title}
//         className="w-20 h-16 sm:w-24 sm:h-20 object-cover rounded flex-shrink-0"
//         onError={(e) => { e.currentTarget.style.display = 'none' }}
//       />
//     )}
//     <div className="flex-1 min-w-0">
//       <p className="text-xs text-[#00698c] font-semibold mb-1">
//         {article.category || 'IPL 2025'}
//       </p>
//       <h3 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-[#00698c] transition-colors">
//         {article.title}
//       </h3>
//       {article.summary && (
//         <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{article.summary}</p>
//       )}
//       <p className="text-xs text-gray-400 mt-1">{article.publishedAt || ''}</p>
//     </div>
//   </a>
// )

// // ─── Main ─────────────────────────────────────────────────────────────────────
// const IPLHomePage = () => {
//   const navigate = useNavigate()
//   const [liveMatches,   setLiveMatches]   = useState([])
//   const [recentMatches, setRecentMatches] = useState([])
//   const [loading, setLoading]             = useState(true)
//   const [error,   setError]               = useState(null)
//   const [news]                            = useState([]) // connect your own news API here

//   useEffect(() => {
//     let cancelled = false
//     const load = async () => {
//       try {
//         // ONE API call — backend se live + recent + upcoming teeno aate hain
//         const feeds = await getAllMatchFeeds()
//         if (cancelled) return
//         setLiveMatches(feeds.live     || [])
//         setRecentMatches(feeds.recent || [])
//       } catch (e) {
//         if (!cancelled) setError(e.message)
//       } finally {
//         if (!cancelled) setLoading(false)
//       }
//     }
//     load()
//     return () => { cancelled = true }
//   }, [])

//   return (
//     <>
//       <SeoManager title="IPL 2026 | Cricket Home | SportyRadar" />
//       <SportsTabs />
//       <CricketTabs  />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
//         <div className="flex gap-6">
//           <div className="w-full lg:w-[80%] min-w-0">

//             <IPLBanner />
//             <IPLSubTabs active="Home" />

//             <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 border-t-0 rounded-b-lg p-4 space-y-6">

//               {/* ── Live matches ──────────────────────────────────── */}
//               {!loading && liveMatches.length > 0 && (
//                 <section>
//                   <h3 className="text-sm font-black text-red-500 mb-3 flex items-center gap-2">
//                     <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
//                     LIVE NOW
//                   </h3>
//                   <div className="grid sm:grid-cols-2 gap-3">
//                     {liveMatches.map((m) => (
//                       <MatchCard
//                         key={m.matchId}
//                         match={m}
//                         onClick={() => navigate(`/cricket/ipl/scorecard/${m.matchId}`)}
//                       />
//                     ))}
//                   </div>
//                 </section>
//               )}

//               {/* ── Recent results ─────────────────────────────────
//               <section>
//                 <h3 className="text-sm font-black text-gray-700 dark:text-gray-300 mb-3">RECENT RESULTS</h3>
//                 {loading
//                   ? <SkeletonList count={3} />
//                   : error
//                     ? <ErrorState />
//                     : recentMatches.length === 0
//                       ? <EmptyState message="No recent matches" />
//                       : (
//                         <div className="grid sm:grid-cols-2 gap-3">
//                           {recentMatches.slice(0, 4).map((m) => (
//                             <MatchCard
//                               key={m.matchId}
//                               match={m}
//                               onClick={() => navigate(`/cricket/ipl/scorecard/${m.matchId}`)}
//                             />
//                           ))}
//                         </div>
//                       )
//                 }
//               </section> */}

//               {/* ── News ─────────────────────────────────────────── */}
//               <section>
//                 <h3 className="text-sm font-black text-gray-700 dark:text-gray-300 mb-3">LATEST NEWS</h3>
//                 {news.length === 0
//                   ? (
//                     <div className="py-8 text-center bg-gray-50 dark:bg-gray-800/30 rounded-lg">
//                       <p className="text-gray-400 text-sm">News coming soon</p>
//                       <p className="text-gray-400 text-xs mt-1">Connect your news API in IPLHomePage</p>
//                     </div>
//                   )
//                   : news.map((a, i) => <NewsCard key={i} article={a} />)
//                 }
//               </section>

//             </div>
//           </div>
//           <div className="hidden lg:block lg:w-[20%]">{/* sidebar */}</div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <BlogsSection />
//       </div>
//     </>
//   )
// }

// export default IPLHomePage

// pages/IPLHomePage.jsx
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SportsTabs from '@/layouts/SportsTabs'
import CricketTabs from '../components/CricketTabs'
import BlogsSection from '@/shared/components/BlogsSection'
import SeoManager from '@/core/seo/SeoManager'
import {
  IPLBanner, IPLSubTabs, SkeletonList, EmptyState, ErrorState, MatchCard,
} from '../components/iplshared'
import { getAllMatchFeeds } from '../../../service/ipl.api'
import { getIPLNews } from '../../../service/sports.service.js'

// ─── Helpers ──────────────────────────────────────────────────────────────────
const formatNewsDate = (iso) => {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    })
  } catch { return '' }
}

const createSlug = (title, index) =>
  `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}`

// ─── NewsCard ─────────────────────────────────────────────────────────────────
const NewsCard = ({ article, index }) => {
  const slug = createSlug(article.title, index)

  return (
    <Link
      to={`/cricket/news/${slug}`}
      state={{ article }}
      className="flex gap-3 p-3 sm:p-4 bg-white dark:bg-[#1c2128] border rounded-lg"
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-20 h-16 object-cover rounded"
        />
      )}

      <div className="flex-1 min-w-0">
        {/* ✅ FIXED */}
        {article.source && (
          <p className="text-xs text-[#00698c] font-semibold">
            {typeof article.source === "string"
              ? article.source
              : article.source?.name}
          </p>
        )}

        <h3 className="text-sm font-bold">
          {article.title}
        </h3>

        {/* ✅ Optional author */}
        {article.author && (
          <p className="text-xs text-gray-400">
            {typeof article.author === "string"
              ? article.author
              : article.author?.name}
          </p>
        )}
      </div>
    </Link>
  )
}
  


// ─── NewsSection ──────────────────────────────────────────────────────────────
const NewsSection = ({ news, loading, error }) => {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? news : news.slice(0, 6)

  return (
    <section>
      <h3 className="text-sm font-black text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
        LATEST NEWS
        {news.length > 0 && (
          <span className="text-xs font-normal text-gray-400">({news.length})</span>
        )}
      </h3>

      {loading && (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-800/40 animate-pulse">
              <div className="w-20 h-16 rounded bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="py-6 text-center bg-gray-50 dark:bg-gray-800/30 rounded-lg">
          <p className="text-gray-400 text-sm">Could not load news</p>
        </div>
      )}

      {!loading && !error && news.length === 0 && (
        <div className="py-8 text-center bg-gray-50 dark:bg-gray-800/30 rounded-lg">
          <p className="text-gray-400 text-sm">No news available</p>
        </div>
      )}

      {!loading && !error && news.length > 0 && (
        <>
          <div className="space-y-3">
            {visible.map((article, i) => (
              <NewsCard key={article.url || i} article={article} />
            ))}
          </div>

          {news.length > 6 && (
            <button
              onClick={() => setShowAll((p) => !p)}
              className="mt-3 w-full py-2 text-xs font-bold text-[#00698c] border border-[#00698c]/30 rounded-lg hover:bg-[#00698c]/5 transition-colors"
            >
              {showAll ? 'Show Less ↑' : `Show ${news.length - 6} More ↓`}
            </button>
          )}
        </>
      )}
    </section>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────
const IPLHomePage = () => {
  const navigate = useNavigate()

  const [liveMatches,   setLiveMatches]   = useState([])
  const [recentMatches, setRecentMatches] = useState([])
  const [matchLoading,  setMatchLoading]  = useState(true)
  const [matchError,    setMatchError]    = useState(null)

  const [news,        setNews]        = useState([])
  const [newsLoading, setNewsLoading] = useState(true)
  const [newsError,   setNewsError]   = useState(null)

  // ── Matches ────────────────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const feeds = await getAllMatchFeeds()
        if (cancelled) return
        setLiveMatches(feeds.live     || [])
        setRecentMatches(feeds.recent || [])
      } catch (e) {
        if (!cancelled) setMatchError(e.message)
      } finally {
        if (!cancelled) setMatchLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  // ── News ───────────────────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const result = await getIPLNews()
        if (cancelled) return
        // Handle both { data: [...] } and direct array response
        const articles = Array.isArray(result)
          ? result
          : Array.isArray(result?.data)
            ? result.data
            : []
        setNews(articles)
      } catch (e) {
        if (!cancelled) setNewsError(e.message)
      } finally {
        if (!cancelled) setNewsLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  return (
    <>
      <SeoManager title="IPL 2026 | Cricket Home | SportyRadar" />
      <SportsTabs />
      <CricketTabs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex gap-6">
          <div className="w-full lg:w-[80%] min-w-0">

            <IPLBanner />
            <IPLSubTabs active="Home" />

            <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 border-t-0 rounded-b-lg p-4 space-y-6">

              {/* ── Live matches ──────────────────────────────────── */}
              {!matchLoading && liveMatches.length > 0 && (
                <section>
                  <h3 className="text-sm font-black text-red-500 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    LIVE NOW
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {liveMatches.map((m) => (
                      <MatchCard
                        key={m.matchId}
                        match={m}
                        onClick={() => navigate(`/cricket/ipl/scorecard/${m.matchId}`)}
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* ── News ──────────────────────────────────────────── */}
              <NewsSection
                news={news}
                loading={newsLoading}
                error={newsError}
              />

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

export default IPLHomePage