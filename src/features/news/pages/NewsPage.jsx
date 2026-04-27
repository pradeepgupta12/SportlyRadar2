// src/features/news/pages/NewsPage.jsx

import { memo, useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCricketNews, getIPLNews } from '../../../service/sports.service.js'

// ── Tab config ─────────────────────────────────────────────────────────────────
const TABS = [
  { id: 'all',     label: 'All',     emoji: '🏆' },
  { id: 'cricket', label: 'Cricket', emoji: '🏏' },
  { id: 'ipl',     label: 'IPL',     emoji: '🔥' },
]

// ── News Card ──────────────────────────────────────────────────────────────────
const NewsCard = memo(({ item }) => (
  <Link
   to={`/cricket/news/${item.slug}`}
    state={{ article: item }}
    className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group block"
  >
    <div className="relative h-44 overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
      <span className="absolute top-2 left-2 bg-[#00698c] text-white text-[10px] font-bold px-2 py-0.5 rounded">
        {item.subCategory || item.category}
      </span>
    </div>
    <div className="p-3">
      <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover:text-[#00698c] transition-colors mb-2">
        {item.title}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-3">
        {item.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="text-[10px] font-semibold text-[#00698c] truncate">{item.source}</span>
          {item.author && (
            <>
              <span className="text-gray-300 dark:text-gray-600 flex-shrink-0">·</span>
              <span className="text-[10px] text-gray-400 dark:text-gray-500 truncate">{item.author}</span>
            </>
          )}
        </div>
        <span className="text-[10px] text-gray-400 dark:text-gray-500 flex-shrink-0 ml-2">{item.time}</span>
      </div>
    </div>
  </Link>
))



// ── Tab Bar ────────────────────────────────────────────────────────────────────
const TabBar = memo(({ active, onChange }) => (
  <div className="flex items-center gap-2 mb-6">
    {TABS.map((tab) => (
      <button
        key={tab.id}
        onClick={() => onChange(tab.id)}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
          active === tab.id
            ? 'bg-[#00698c] border-[#00698c] text-white shadow-sm'
            : 'bg-white dark:bg-[#1c2128] border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-[#00698c] hover:text-[#00698c]'
        }`}
      >
        <span className="text-base leading-none">{tab.emoji}</span>
        {tab.label}
      </button>
    ))}
  </div>
))

// ── Main Page ──────────────────────────────────────────────────────────────────
const NewsPage = () => {
  const [activeTab, setActiveTab] = useState('all')
  const [cricketNews, setCricketNews] = useState([])
  const [iplNews, setIPLNews]         = useState([])
  const [loading, setLoading]         = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const [cricketRes, iplRes] = await Promise.all([getCricketNews(), getIPLNews()])

        if (cricketRes.success) {
          setCricketNews(
            cricketRes.data.map((item, i) => ({
              id:          `${i}-cricket`,
              title:       item.title,
              description: item.description,
              image:       item.image,
              source:      item.source,
              time:        new Date(item.publishedAt).toLocaleDateString(),
              slug:        `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${i}`,
              category:    'Cricket',
            }))
          )
        }

        if (iplRes.success) {
          setIPLNews(
            iplRes.data.map((item, i) => ({
              id:          `${i}-ipl`,
              title:       item.title,
              description: item.description,
              image:       item.image,
              source:      item.source,
              time:        new Date(item.publishedAt).toLocaleDateString(),
              slug:        `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${i}`,
              category:    'IPL',
            }))
          )
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  // Tab filtered items
  const items = useMemo(() => {
    if (activeTab === 'cricket') return cricketNews
    if (activeTab === 'ipl')     return iplNews
    return [...cricketNews, ...iplNews]
  }, [activeTab, cricketNews, iplNews])

  // Sidebar: latest 10 from all news combined
  const latest10 = useMemo(
    () => [...cricketNews, ...iplNews].slice(0, 10),
    [cricketNews, iplNews]
  )

  if (loading) {
    return <div className="text-center py-20 text-gray-400">Loading latest news...</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Page title */}
      <div className="flex items-center gap-2 mb-5">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">News</h1>
        <span className="text-sm text-gray-400 dark:text-gray-500 ml-auto">
          {items.length} articles
        </span>
      </div>

      <TabBar active={activeTab} onChange={setActiveTab} />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* ── Left: News Cards Grid ── */}
        <div className="flex-1 min-w-0">
          {items.length === 0 ? (
            <p className="text-gray-400 dark:text-gray-500 text-sm py-12 text-center">
              No articles found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {items.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

     
      </div>
    </div>
  )
}

export default NewsPage