

import { useState, useEffect, useMemo } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { getLatestNews } from '../../../service/sports.service.js'
import { footballNewsData } from '@/shared/constants/footballNews.data'
import { otherSportsNewsData } from '@/shared/constants/otherSportsNews.data'

const resolveSource = (pathname) => {
  if (pathname.includes('/football/news/'))
    return { listPath: '/football/news', label: 'Football News', basePath: '/football/news' }
  if (pathname.includes('/sports/news/'))
    return { listPath: '/sports/news', label: 'Sports News', basePath: '/sports/news' }
  if (pathname.includes('/ipl/news/'))
    return { listPath: '/ipl/news', label: 'IPL News', basePath: '/ipl/news' }
  if (pathname.includes('/cricket/news/'))
    return { listPath: '/news', label: 'Cricket News', basePath: '/cricket/news' }
  return { listPath: '/news', label: 'News', basePath: '/cricket/news' }
}

const ChevronIcon = () => (
  <svg
    className="w-3.5 h-3.5 text-gray-400"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
  </svg>
)

const NewsDetailPage = () => {
  const { slug } = useParams()
  const location = useLocation()
  const { pathname } = location
  const articleFromState = location.state?.article ?? null

  const [allNews, setAllNews] = useState([])
  const [loading, setLoading] = useState(true)

  const source = useMemo(() => resolveSource(pathname), [pathname])

  // useEffect mein sirf API data lo, football/otherSports mat mix karo
useEffect(() => {
  const fetchAll = async () => {
    try {
      const res = await getLatestNews()

      const apiNews = res.success
        ? res.data.map((item) => ({
            ...item,
            time: new Date(item.publishedAt).toLocaleDateString(),
            category: 'Cricket',
            basePath: '/cricket/news',
            tags: Array.isArray(item.tags) ? item.tags : [],
            final_content: item.final_content ?? '',
          }))
        : []

      // ✅ Sirf API news — football/otherSports sidebar mein nahi
      setAllNews(apiNews)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  fetchAll()
}, [])

  const article = useMemo(() => {
    if (articleFromState) return articleFromState
    if (!allNews.length) return null
    return allNews.find((a) => a.slug === slug) ?? null
  }, [articleFromState, allNews, slug])

  const latest10 = useMemo(
    () => allNews.filter((a) => a.slug !== slug).slice(0, 10),
    [allNews, slug]
  )

  const contentParagraphs = useMemo(() => {
    if (!article?.final_content) return []
    return article.final_content
      .split(/\n+/)
      .map((p) => p.trim())
      .filter(Boolean)
  }, [article])

  if (loading && !articleFromState) {
    return (
      <div className="text-center py-20 text-gray-400">
        Loading article...
      </div>
    )
  }

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
          Article not found
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          The article you're looking for doesn't exist or may have been removed.
        </p>
        <Link
          to="/news"
          className="inline-block bg-[#00698c] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#005a78] transition-colors"
        >
          Back to News
        </Link>
      </div>
    )
  }

  const { listPath, label: sourceLabel, basePath } = source

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

      <nav className="flex items-center gap-1.5 text-sm mb-6 flex-wrap">
        <Link to="/" className="text-gray-400 hover:text-[#00698c] transition-colors">
          Home
        </Link>
        <ChevronIcon />
        <Link to={listPath} className="text-gray-400 hover:text-[#00698c] transition-colors">
          {sourceLabel}
        </Link>
        <ChevronIcon />
        <span className="text-gray-700 dark:text-gray-300 line-clamp-1 max-w-xs">
          {article.title}
        </span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">

        <article className="flex-1 min-w-0">

          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="bg-[#00698c] text-white text-xs font-bold px-2.5 py-0.5 rounded">
              {article.subCategory || article.category}
            </span>
            <span className="ml-auto text-xs text-gray-400 dark:text-gray-500">
              {article.time}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 mb-5 pb-5 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded-full bg-[#00698c]/20 flex items-center justify-center text-[#00698c] text-xs font-bold">
                {(article.source || 'S').charAt(0)}
              </div>
              <div>
                {article.author && (
                  <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 leading-none">
                    {article.author}
                  </p>
                )}
                <p className="text-[10px] text-gray-400 dark:text-gray-500 leading-none mt-0.5">
                  {article.source}
                </p>
              </div>
            </div>
          </div>

          {article.image && (
            <div className="relative rounded-xl overflow-hidden mb-6 h-64 sm:h-80 md:h-96">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          )}

          <div className="prose prose-sm dark:prose-invert max-w-none space-y-4">
            <p className="text-base font-medium text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-[#00698c] pl-4 italic">
              {article.description}
            </p>
            {contentParagraphs.length > 0 ? (
              contentParagraphs.map((para, idx) => (
                <p key={idx} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {para}
                </p>
              ))
            ) : (
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Stay tuned for further updates, post-match analysis, and exclusive interviews
                as we continue to bring you comprehensive sports coverage from around the world.
              </p>
            )}
          </div>

          {Array.isArray(article.tags) && article.tags.length > 0 && (
  <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-gray-200 dark:border-gray-700">
    {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-[11px] font-medium px-2 py-0.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {article.url && (
            <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00698c] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#005a78] transition-colors"
              >
                Read full article on {article.source}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}

        </article>

        <aside className="lg:w-72 flex-shrink-0">
          <div className="sticky top-20">
            <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              Latest News
            </h2>

            {latest10.length === 0 && (
              <p className="text-xs text-gray-400">Loading latest articles...</p>
            )}

            {latest10.length > 0 && (
              <div className="space-y-4">
                {latest10.map((item) => (
                  <Link
                    key={item.id}
                    to={`${item.basePath ?? basePath}/${item.slug}`}
                    state={{ article: item }}
                    className="flex gap-3 items-start group"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-14 object-cover rounded flex-shrink-0 group-hover:opacity-80 transition-opacity"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#00698c] transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="text-[10px] font-medium text-[#00698c]">
                          {item.source}
                        </span>
                        <span className="text-gray-300 dark:text-gray-600">·</span>
                        <span className="text-[10px] text-gray-400">{item.time}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <Link
              to={listPath}
              className="mt-6 flex items-center gap-2 text-sm text-[#00698c] font-medium hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" d="M15 18l-6-6 6-6" />
              </svg>
              View all {sourceLabel}
            </Link>
          </div>
        </aside>

      </div>
    </div>
  )
}

export default NewsDetailPage