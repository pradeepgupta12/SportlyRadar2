



// import { memo, useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import SeoManager from '@/core/seo/SeoManager'
// import { seoConfig } from '@/config/seo.config'
// import BlogCard from '@/shared/components/BlogCard'
// import { blogPosts } from '@/shared/constants/blogs.data'
// import { photos, videos } from '@/shared/constants/Vedio.data'
// import Category from '../../layouts/Category.jsx'
// import Headline from '../../layouts/Headline.jsx'
// import { cricketNewsData } from '@/shared/constants/cricketNews.data'
// import { footballNewsData } from '@/shared/constants/footballNews.data'
// import { otherSportsNewsData } from '@/shared/constants/otherSportsNews.data'
// import NewsGrid from '../../features/home/sections/NewsGrid'
// import HeroSection from '../../features/home/sections/HeroSection.jsx'



// // HomePage.jsx mein — TopHeadlines import hata do, ye add karo:

// import { getCricketNews, getIPLNews } from '../../service/sports.service.js' // path adjust karo
// import BlogsRow from '../../shared/components/Blogsrow.jsx'

// const LatestNewsSection = memo(() => {
//   const [news, setNews] = useState([])

//   useEffect(() => {
//     const fetchLatest = async () => {
//       try {
//         const [c, i] = await Promise.all([getCricketNews(), getIPLNews()])
//         const cricket = c.success
//           ? c.data.map((item, idx) => ({
//               id: `${idx}-c`,
//               title: item.title,
//               source: item.source,
//               time: new Date(item.publishedAt).toLocaleDateString(),
//               slug: `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`,
//               image: item.image,
//               description: item.description,
//               category: 'Cricket',
//             }))
//           : []
//         const ipl = i.success
//           ? i.data.map((item, idx) => ({
//               id: `${idx}-i`,
//               title: item.title,
//               source: item.source,
//               time: new Date(item.publishedAt).toLocaleDateString(),
//               slug: `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`,
//               image: item.image,
//               description: item.description,
//               category: 'IPL',
//             }))
//           : []
//         setNews([...cricket, ...ipl].slice(0, 9))
//       } catch (e) {
//         console.error(e)
//       }
//     }
//     fetchLatest()
//   }, [])

//   if (!news.length) return null

//   return (
//     <div className="mb-8">
//       <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">Latest News</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {news.map((item) => (
//           <Link
//             key={item.id}
//             to={`/cricket/news/${item.slug}`}
//             state={{ article: item }}
//             className="flex items-start gap-2.5 cursor-pointer group"
//           >
//             <div className="w-2 h-2 rounded-full bg-[#00698c] mt-1.5 flex-shrink-0" />
//             <div>
//               <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-[#00698c] transition-colors leading-snug line-clamp-2">
//                 {item.title}
//               </p>
//               <span className="text-xs font-medium text-gray-400 dark:text-gray-500">{item.time}</span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// })

// const toSlug = (title) =>
//   title
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9\s-]/g, '')
//     .replace(/\s+/g, '-')
//     .replace(/-+/g, '-')

// const FeaturedMatch = memo(() => {
//   const navigate = useNavigate()

//   const handleClick = () => {
//     navigate('/cricket/ipl')
//   }

//   return (
//     <div
//       className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm mb-6 cursor-pointer hover:shadow-md transition-shadow"
//       onClick={handleClick}
//     >
//       <div className="relative h-48 md:h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80"
//           alt="Cricket match"
//           className="w-full h-full object-cover opacity-60"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 flex flex-col justify-end p-4">
//           <div className="flex items-center gap-2 mb-2">
//             <span className="flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
//               <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
//               Live
//             </span>
//             <span className="text-white/80 text-xs">Cricket</span>
//           </div>
//           <h3 className="text-white font-bold text-lg leading-tight">India Women Tour of Australia</h3>
//           <div className="flex items-center gap-3 mt-2 text-white text-sm">
//             <span>🇮🇳 India Women</span>
//             <span className="font-bold">184/8 • 97 overs</span>
//           </div>
//           <div className="flex items-center gap-3 mt-1 text-white text-sm">
//             <span>🇦🇺 Australian Women</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// })

// const QuickLinks = memo(() => {
//   const links = [
//     { label: 'ICC World League', href: '#' },
//     { label: 'Recent League', href: '#' },
//     { label: 'English Premier League', href: '#' },
//     { label: 'La Liga', href: '#' },
//     { label: 'Champions League', href: '#' },
//     { label: 'Serie A', href: '#' },
//     { label: 'Bundesliga', href: '#' },
//     { label: 'Ligue 1', href: '#' },
//     { label: 'More T20 leagues', href: '#' },
//   ]
//   return (
//     <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm mb-6">
//       <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 px-1">Quick Links</h3>
//       <ul>
//         {links.map((link) => (
//           <li key={link.label}>
            
//               <a href={link.href}
//               className="flex items-center justify-between px-1 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#00698c] dark:hover:text-[#3387a3] border-b border-gray-100 dark:border-gray-700 last:border-0 transition-colors"
//             >
//               {link.label}
//               <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
//               </svg>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// })

// // ─── Photos Section ───────────────────────────────────────────────────────────
// const PhotosSection = memo(() => {
//   // CHANGED: 4 → 3
//   const latest = photos.slice(0, 3)

//   return (
//     <div className="mb-12 mt-4">
//       <div className="flex items-center justify-between mb-4">
//         {/* CHANGED: text-lg font-bold → text-2xl font-extrabold */}
//         <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Photos</h2>
//         <Link to="/photogallary" className="text-sm text-[#00698c] hover:underline font-medium">
//           View all
//         </Link>
//       </div>
//       {/* CHANGED: md:grid-cols-4 → md:grid-cols-3 */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         {latest.map((item, idx) => (
//           <Link to={`/photogallary/${toSlug(item.cardTitle)}`} key={idx} className="group block">
//             <div className="relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow" style={{ aspectRatio: '4/3' }}>
//               <img
//                 src={item.images[0].url}
//                 alt={item.cardTitle}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-3">
//                 {/* CHANGED: text-xs → text-sm font-bold */}
//                 <p className="text-white text-sm font-bold leading-snug line-clamp-2">
//                   {item.cardTitle}
//                 </p>
//                 {/* CHANGED: text-xs → text-xs font-medium */}
//                 <p className="text-gray-300 text-xs font-medium mt-1">{item.date}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// })

// // ─── Videos Section ───────────────────────────────────────────────────────────
// const VideosSection = memo(() => {
//   // CHANGED: 4 → 3
//   const latest = videos.slice(0, 3)

//   return (
//     <div className="mb-12 mt-4">
//       <div className="flex items-center justify-between mb-4">
//         {/* CHANGED: text-lg font-bold → text-2xl font-extrabold */}
//         <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Videos</h2>
//         <Link to="/vediogallary" className="text-sm text-[#00698c] hover:underline font-medium">
//           View all
//         </Link>
//       </div>
//       {/* CHANGED: md:grid-cols-4 → md:grid-cols-3 */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         {latest.map((item, idx) => (
//           <Link to={`/vediogallary/${toSlug(item.title)}`} key={idx} className="group block">
//             <div className="relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow" style={{ aspectRatio: '16/9' }}>
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-11 h-11 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-all duration-200 group-hover:scale-110">
//                   <svg width="15" height="15" viewBox="0 0 24 24" fill="#111" className="ml-0.5">
//                     <polygon points="5,3 19,12 5,21" />
//                   </svg>
//                 </div>
//               </div>
//               {item.duration && (
//                 <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-0.5 rounded">
//                   {item.duration}
//                 </div>
//               )}
//             </div>
//             <div className="mt-2 px-0.5">
//               {/* CHANGED: text-xs font-semibold → text-sm font-bold */}
//               <p className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug line-clamp-2 group-hover:text-[#00698c] transition-colors">
//                 {item.title}
//               </p>
//               {/* CHANGED: text-xs → text-xs font-medium */}
//               <p className="text-xs font-medium text-gray-400 mt-1">{item.date}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// })


// const HomePage = () => {
//   const navigate = useNavigate()
//    const [cricketNews, setCricketNews] = useState([])   // ← ADD
//   const [iplNews, setIplNews] = useState([])    
//           // ← ADD
//   useEffect(() => {
//     const fetchAll = async () => {
//       try {
//         const [c, i] = await Promise.all([getCricketNews(), getIPLNews()])
//         if (c.success) {
//           setCricketNews(
//             c.data.map((item, idx) => ({
//               id:          `${idx}-c`,
//               title:       item.title,
//               description: item.description,
//               image:       item.image,
//               source:      item.source,
//               time:        new Date(item.publishedAt).toLocaleDateString(),
//               slug:        `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`,
//               category:    'Cricket',
//             }))
//           )
//         }
//         if (i.success) {
//           setIplNews(
//             i.data.map((item, idx) => ({
//               id:          `${idx}-i`,
//               title:       item.title,
//               description: item.description,
//               image:       item.image,
//               source:      item.source,
//               time:        new Date(item.publishedAt).toLocaleDateString(),
//               slug:        `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`,
//               category:    'IPL',
//             }))
//           )
//         }
//       } catch (e) {
//         console.error(e)
//       }
//     }
//     fetchAll()
//   }, [])


//   const faCupArticle = footballNewsData.find(article => article.id === 'fn-8')

//   const handleFACupClick = () => {
//     if (faCupArticle) {
//       navigate(`/football/news/${faCupArticle.slug}`)
//     } else {
//       navigate('/football/news')
//     }
//   }

//   return (
//     <>
//       <SeoManager
//         title={seoConfig.pages.home.title}
//         description={seoConfig.pages.home.description}
//       />
//       <HeroSection />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

//         {/* ── FeaturedMatch + QuickLinks sidebar ── */}
//         <div className="flex flex-col lg:flex-row gap-6 mb-4">
//           <div className="flex-1 min-w-0">
//             <FeaturedMatch />
//             <div
//               className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 mb-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
//               onClick={handleFACupClick}
//             >
//               <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">
//                 Weekend predictions: Can Wrexham top Chelsea in FA Cup?
//               </p>
//               <img
//                 src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=700&q=80"
//                 alt="FA Cup"
//                 className="w-full h-40 object-cover rounded-lg mt-2"
//                 loading="lazy"
//               />
//             </div>
//           </div>

//           <div className="lg:w-64 flex-shrink-0">
//             <QuickLinks />
//           </div>
//         </div>

//         {/* ── TopHeadlines ── */}
//         <div className="flex gap-6 mb-4">
//           <div className="w-full lg:w-[80%] min-w-0">
//             <LatestNewsSection />
//           </div>
//           <div className="hidden lg:block lg:w-[20%]" />
//         </div>

//         {/* ── Cricket NewsGrid ── */}
//         <div className="flex gap-6 mb-4">
//           <div className="w-full lg:w-[80%] min-w-0">
//             <NewsGrid
//               title="Cricket News & Updates"
//               viewAllTo="/news"
//               items={cricketNews}        
//               basePath="/cricket/news"
//             />
//           </div>
//           <div className="hidden lg:block lg:w-[20%]" />
//         </div>

//         {/* ── Football NewsGrid ── */}
//         <div className="flex gap-6 mb-4">
//           <div className="w-full lg:w-[80%] min-w-0">
//             <NewsGrid
//               title="Football News & Updates"
//               viewAllTo="/football/news"
//               items={footballNewsData}
//               basePath="/football/news"
//             />
//           </div>
//           <div className="hidden lg:block lg:w-[20%]" />
//         </div>

//         {/* ── Other Sports NewsGrid ── */}
//         <div className="flex gap-6 mb-4">
//           <div className="w-full lg:w-[80%] min-w-0">
//             <NewsGrid
//               title="Other Sports News & Updates"
//               viewAllTo="/sports/news"
//               items={otherSportsNewsData}
//               basePath="/sports/news"
//             />
//           </div>
//           <div className="hidden lg:block lg:w-[20%]" />
//         </div>

//         {/* ── Photos, Videos, Blogs ── */}
//         <PhotosSection />
//         <VideosSection />
//         <BlogsRow />

//       </div>
//     </>
//   )
// }

// export default HomePage


// import { memo, useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import SeoManager from '@/core/seo/SeoManager'
// import { seoConfig } from '@/config/seo.config'
// import BlogCard from '@/shared/components/BlogCard'
// import { blogPosts } from '@/shared/constants/blogs.data'
// import { photos, videos } from '@/shared/constants/Vedio.data'
// import Category from '../../layouts/Category.jsx'
// import Headline from '../../layouts/Headline.jsx'
// import { cricketNewsData } from '@/shared/constants/cricketNews.data'
// import { footballNewsData } from '@/shared/constants/footballNews.data'
// import { otherSportsNewsData } from '@/shared/constants/otherSportsNews.data'
// import NewsGrid from '../../features/home/sections/NewsGrid'
// import HeroSection from '../../features/home/sections/HeroSection.jsx'

// // HomePage.jsx mein — TopHeadlines import hata do, ye add karo:

// import { getCricketNews, getIPLNews } from '../../service/sports.service.js' // path adjust karo
// import BlogsRow from '../../shared/components/Blogsrow.jsx'

// const LatestNewsSection = memo(() => {
//   const [news, setNews] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchLatest = async () => {
//       setLoading(true)
//       try {
//         const [c, i] = await Promise.all([getCricketNews(), getIPLNews()])
//         const cricket = c.success
//           ? c.data.map((item, idx) => ({
//               id: `${idx}-c`,
//               title: item.title,
//               source: item.source,
//               time: new Date(item.publishedAt).toLocaleDateString(),
//               slug: `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`,
//               image: item.image,
//               description: item.description,
//               category: 'Cricket',
//             }))
//           : []
//         const ipl = i.success
//           ? i.data.map((item, idx) => ({
//               id: `${idx}-i`,
//               title: item.title,
//               source: item.source,
//               time: new Date(item.publishedAt).toLocaleDateString(),
//               slug: `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`,
//               image: item.image,
//               description: item.description,
//               category: 'IPL',
//             }))
//           : []
//         setNews([...cricket, ...ipl].slice(0, 9))
//       } catch (e) {
//         console.error(e)
//         setNews([])
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchLatest()
//   }, [])

//   if (loading) {
//     return (
//       <div className="mb-8">
//         <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">Latest News</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {[1, 2, 3].map((i) => (
//             <div key={i} className="animate-pulse">
//               <div className="flex items-start gap-2.5">
//                 <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 mt-1.5" />
//                 <div className="flex-1">
//                   <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
//                   <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     )
//   }

//   if (!news.length) {
//     return (
//       <div className="mb-8">
//         <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">Latest News</h2>
//         <div className="text-center py-8 text-gray-400 bg-gray-50 dark:bg-gray-800/30 rounded-lg">
//           <svg className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
//           </svg>
//           <p className="text-sm">No articles found</p>
//           <p className="text-xs text-gray-400 mt-1">Unable to connect to news server</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="mb-8">
//       <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">Latest News</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {news.map((item) => (
//           <Link
//             key={item.id}
//             to={`/cricket/news/${item.slug}`}
//             state={{ article: item }}
//             className="flex items-start gap-2.5 cursor-pointer group"
//           >
//             <div className="w-2 h-2 rounded-full bg-[#00698c] mt-1.5 flex-shrink-0" />
//             <div>
//               <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-[#00698c] transition-colors leading-snug line-clamp-2">
//                 {item.title}
//               </p>
//               <span className="text-xs font-medium text-gray-400 dark:text-gray-500">{item.time}</span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// })

// const toSlug = (title) =>
//   title
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9\s-]/g, '')
//     .replace(/\s+/g, '-')
//     .replace(/-+/g, '-')

// const FeaturedMatch = memo(() => {
//   const navigate = useNavigate()

//   const handleClick = () => {
//     navigate('/cricket/ipl')
//   }

//   return (
//     <div
//       className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm mb-6 cursor-pointer hover:shadow-md transition-shadow"
//       onClick={handleClick}
//     >
//       <div className="relative h-48 md:h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80"
//           alt="Cricket match"
//           className="w-full h-full object-cover opacity-60"
//           loading="lazy"
//         />
//         <div className="absolute inset-0 flex flex-col justify-end p-4">
//           <div className="flex items-center gap-2 mb-2">
//             <span className="flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
//               <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
//               Live
//             </span>
//             <span className="text-white/80 text-xs">Cricket</span>
//           </div>
//           <h3 className="text-white font-bold text-lg leading-tight">India Women Tour of Australia</h3>
//           <div className="flex items-center gap-3 mt-2 text-white text-sm">
//             <span>🇮🇳 India Women</span>
//             <span className="font-bold">184/8 • 97 overs</span>
//           </div>
//           <div className="flex items-center gap-3 mt-1 text-white text-sm">
//             <span>🇦🇺 Australian Women</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// })

// // ─── Latest News Sidebar Component (Replaces QuickLinks) ─────────────────────
// const LatestNewsSidebar = memo(() => {
//   const [latestNews, setLatestNews] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchLatestSidebarNews = async () => {
//       setLoading(true)
//       try {
//         const [c, i] = await Promise.all([getCricketNews(), getIPLNews()])
//         const cricket = c.success
//           ? c.data.map((item, idx) => ({
//               id: `${idx}-c-side`,
//               title: item.title,
//               source: item.source,
//               time: new Date(item.publishedAt).toLocaleDateString(),
//               slug: `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`,
//               image: item.image,
//               description: item.description,
//               category: 'Cricket',
//             }))
//           : []
//         const ipl = i.success
//           ? i.data.map((item, idx) => ({
//               id: `${idx}-i-side`,
//               title: item.title,
//               source: item.source,
//               time: new Date(item.publishedAt).toLocaleDateString(),
//               slug: `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`,
//               image: item.image,
//               description: item.description,
//               category: 'IPL',
//             }))
//           : []
        
//         // Combine and take first 9 latest news
//         const allNews = [...cricket, ...ipl].slice(0, 9)
//         setLatestNews(allNews)
//       } catch (e) {
//         console.error(e)
//         setLatestNews([])
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchLatestSidebarNews()
//   }, [])

//   if (loading) {
//     return (
//       <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm mb-6">
//         <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 px-1">Quick Links</h3>
//         <ul>
//           {[1, 2, 3, 4, 5].map((i) => (
//             <li key={i}>
//               <div className="animate-pulse px-1 py-2 border-b border-gray-100 dark:border-gray-700">
//                 <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }

//   if (!latestNews.length) {
//     return (
//       <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm mb-6">
//         <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 px-1">Quick Links</h3>
//         <div className="text-center py-6 text-gray-400">
//           <svg className="w-8 h-8 mx-auto mb-2 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
//           </svg>
//           <p className="text-xs">No articles found</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm mb-6">
//       <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 px-1">Quick Links</h3>
//       <ul>
//         {latestNews.map((item) => (
//           <li key={item.id}>
//             <Link
//               to={`/cricket/news/${item.slug}`}
//               state={{ article: item }}
//               className="flex items-center justify-between px-1 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#00698c] dark:hover:text-[#3387a3] border-b border-gray-100 dark:border-gray-700 last:border-0 transition-colors group"
//             >
//               <span className="line-clamp-2 flex-1 pr-2 group-hover:text-[#00698c]">
//                 {item.title}
//               </span>
//               <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
//               </svg>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// })

// // ─── Photos Section ───────────────────────────────────────────────────────────
// const PhotosSection = memo(() => {
//   // CHANGED: 4 → 3
//   const latest = photos.slice(0, 3)

//   return (
//     <div className="mb-12 mt-4">
//       <div className="flex items-center justify-between mb-4">
//         {/* CHANGED: text-lg font-bold → text-2xl font-extrabold */}
//         <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Photos</h2>
//         <Link to="/photogallary" className="text-sm text-[#00698c] hover:underline font-medium">
//           View all
//         </Link>
//       </div>
//       {/* CHANGED: md:grid-cols-4 → md:grid-cols-3 */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         {latest.map((item, idx) => (
//           <Link to={`/photogallary/${toSlug(item.cardTitle)}`} key={idx} className="group block">
//             <div className="relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow" style={{ aspectRatio: '4/3' }}>
//               <img
//                 src={item.images[0].url}
//                 alt={item.cardTitle}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-3">
//                 {/* CHANGED: text-xs → text-sm font-bold */}
//                 <p className="text-white text-sm font-bold leading-snug line-clamp-2">
//                   {item.cardTitle}
//                 </p>
//                 {/* CHANGED: text-xs → text-xs font-medium */}
//                 <p className="text-gray-300 text-xs font-medium mt-1">{item.date}</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// })

// // ─── Videos Section ───────────────────────────────────────────────────────────
// const VideosSection = memo(() => {
//   // CHANGED: 4 → 3
//   const latest = videos.slice(0, 3)

//   return (
//     <div className="mb-12 mt-4">
//       <div className="flex items-center justify-between mb-4">
//         {/* CHANGED: text-lg font-bold → text-2xl font-extrabold */}
//         <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Videos</h2>
//         <Link to="/vediogallary" className="text-sm text-[#00698c] hover:underline font-medium">
//           View all
//         </Link>
//       </div>
//       {/* CHANGED: md:grid-cols-4 → md:grid-cols-3 */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         {latest.map((item, idx) => (
//           <Link to={`/vediogallary/${toSlug(item.title)}`} key={idx} className="group block">
//             <div className="relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow" style={{ aspectRatio: '16/9' }}>
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-11 h-11 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-all duration-200 group-hover:scale-110">
//                   <svg width="15" height="15" viewBox="0 0 24 24" fill="#111" className="ml-0.5">
//                     <polygon points="5,3 19,12 5,21" />
//                   </svg>
//                 </div>
//               </div>
//               {item.duration && (
//                 <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-0.5 rounded">
//                   {item.duration}
//                 </div>
//               )}
//             </div>
//             <div className="mt-2 px-0.5">
//               {/* CHANGED: text-xs font-semibold → text-sm font-bold */}
//               <p className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug line-clamp-2 group-hover:text-[#00698c] transition-colors">
//                 {item.title}
//               </p>
//               {/* CHANGED: text-xs → text-xs font-medium */}
//               <p className="text-xs font-medium text-gray-400 mt-1">{item.date}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// })

// const HomePage = () => {
//   const navigate = useNavigate()
//   const [cricketNews, setCricketNews] = useState([])
//   const [iplNews, setIplNews] = useState([])
//   const [cricketLoading, setCricketLoading] = useState(true)
//   const [iplLoading, setIplLoading] = useState(true)
  
//   useEffect(() => {
//     const fetchAll = async () => {
//       try {
//         const [c, i] = await Promise.all([getCricketNews(), getIPLNews()])
//         if (c.success) {
//           setCricketNews(
//             c.data.map((item, idx) => ({
//               id:          `${idx}-c`,
//               title:       item.title,
//               description: item.description,
//               image:       item.image,
//               source:      item.source,
//               time:        new Date(item.publishedAt).toLocaleDateString(),
//               slug:        `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`,
//               category:    'Cricket',
//             }))
//           )
//         } else {
//           setCricketNews([])
//         }
//         if (i.success) {
//           setIplNews(
//             i.data.map((item, idx) => ({
//               id:          `${idx}-i`,
//               title:       item.title,
//               description: item.description,
//               image:       item.image,
//               source:      item.source,
//               time:        new Date(item.publishedAt).toLocaleDateString(),
//               slug:        `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${idx}`,
//               category:    'IPL',
//             }))
//           )
//         } else {
//           setIplNews([])
//         }
//       } catch (e) {
//         console.error(e)
//         setCricketNews([])
//         setIplNews([])
//       } finally {
//         setCricketLoading(false)
//         setIplLoading(false)
//       }
//     }
//     fetchAll()
//   }, [])

//   const faCupArticle = footballNewsData.find(article => article.id === 'fn-8')

//   const handleFACupClick = () => {
//     if (faCupArticle) {
//       navigate(`/football/news/${faCupArticle.slug}`)
//     } else {
//       navigate('/football/news')
//     }
//   }

//   return (
//     <>
//       <SeoManager
//         title={seoConfig.pages.home.title}
//         description={seoConfig.pages.home.description}
//       />
//       <HeroSection />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

//         {/* ── FeaturedMatch + Latest News Sidebar ── */}
//         <div className="flex flex-col lg:flex-row gap-6 mb-4">
//           <div className="flex-1 min-w-0">
//             <FeaturedMatch />
//             <div
//               className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 mb-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
//               onClick={handleFACupClick}
//             >
//               <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">
//                 Weekend predictions: Can Wrexham top Chelsea in FA Cup?
//               </p>
//               <img
//                 src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=700&q=80"
//                 alt="FA Cup"
//                 className="w-full h-40 object-cover rounded-lg mt-2"
//                 loading="lazy"
//               />
//             </div>
//           </div>

//           <div className="lg:w-64 flex-shrink-0">
//             <LatestNewsSidebar />
//           </div>
//         </div>

//         {/* ── TopHeadlines ── */}
//         <div className="flex gap-6 mb-4">
//           <div className="w-full lg:w-[80%] min-w-0">
//             <LatestNewsSection />
//           </div>
//           <div className="hidden lg:block lg:w-[20%]" />
//         </div>

//         {/* ── Cricket NewsGrid ── */}
//         <div className="flex gap-6 mb-4">
//           <div className="w-full lg:w-[80%] min-w-0">
//             <NewsGrid
//               title="Cricket News & Updates"
//               viewAllTo="/news"
//               items={cricketNews}
//               loading={cricketLoading}
//               basePath="/cricket/news"
//             />
//           </div>
//           <div className="hidden lg:block lg:w-[20%]" />
//         </div>

//         {/* ── Football NewsGrid ── */}
//         <div className="flex gap-6 mb-4">
//           <div className="w-full lg:w-[80%] min-w-0">
//             <NewsGrid
//               title="Football News & Updates"
//               viewAllTo="/football/news"
//               items={footballNewsData}
//               loading={false}
//               basePath="/football/news"
//             />
//           </div>
//           <div className="hidden lg:block lg:w-[20%]" />
//         </div>

//         {/* ── Other Sports NewsGrid ── */}
//         <div className="flex gap-6 mb-4">
//           <div className="w-full lg:w-[80%] min-w-0">
//             <NewsGrid
//               title="Other Sports News & Updates"
//               viewAllTo="/sports/news"
//               items={otherSportsNewsData}
//               loading={false}
//               basePath="/sports/news"
//             />
//           </div>
//           <div className="hidden lg:block lg:w-[20%]" />
//         </div>

//         {/* ── Photos, Videos, Blogs ── */}
//         <PhotosSection />
//         <VideosSection />
//         <BlogsRow />

//       </div>
//     </>
//   )
// }

// export default HomePage

import { memo, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SeoManager from '@/core/seo/SeoManager'
import { seoConfig } from '@/config/seo.config'
import { photos, videos } from '@/shared/constants/Vedio.data'
import { footballNewsData } from '@/shared/constants/footballNews.data'
import { otherSportsNewsData } from '@/shared/constants/otherSportsNews.data'
import NewsGrid from '../../features/home/sections/NewsGrid'
import HeroSection from '../../features/home/sections/HeroSection.jsx'
import { getLatestNews } from '../../service/sports.service.js'
import BlogsRow from '../../shared/components/Blogsrow.jsx'

// ─── Latest News Section ──────────────────────────────────────────────────────
const LatestNewsSection = memo(({ news, loading }) => {
  if (loading) {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 mt-1.5" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!news.length) {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">Latest News</h2>
        <div className="text-center py-8 text-gray-400 bg-gray-50 dark:bg-gray-800/30 rounded-lg">
          <svg className="w-12 h-12 mx-auto mb-3 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <p className="text-sm">No articles found</p>
          <p className="text-xs text-gray-400 mt-1">Unable to connect to news server</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {news.map((item) => (
          <Link
            key={item.id}
            to={`/cricket/news/${item.slug}`}
            state={{ article: item }}
            className="flex items-start gap-2.5 cursor-pointer group"
          >
            <div className="w-2 h-2 rounded-full bg-[#00698c] mt-1.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-[#00698c] transition-colors leading-snug line-clamp-2">
                {item.title}
              </p>
              <span className="text-xs font-medium text-gray-400 dark:text-gray-500">{item.time}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
})

// ─── Latest News Sidebar ──────────────────────────────────────────────────────
const LatestNewsSidebar = memo(({ news, loading }) => {
  if (loading) {
    return (
      <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm mb-6">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 px-1">Quick Links</h3>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i}>
              <div className="animate-pulse px-1 py-2 border-b border-gray-100 dark:border-gray-700">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (!news.length) {
    return (
      <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm mb-6">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 px-1">Quick Links</h3>
        <div className="text-center py-6 text-gray-400">
          <svg className="w-8 h-8 mx-auto mb-2 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <p className="text-xs">No articles found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm mb-6">
      <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 px-1">Quick Links</h3>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <Link
              to={`/cricket/news/${item.slug}`}
              state={{ article: item }}
              className="flex items-center justify-between px-1 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#00698c] dark:hover:text-[#3387a3] border-b border-gray-100 dark:border-gray-700 last:border-0 transition-colors group"
            >
              <span className="line-clamp-2 flex-1 pr-2 group-hover:text-[#00698c]">
                {item.title}
              </span>
              <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
})

// ─── Photos Section ───────────────────────────────────────────────────────────
const toSlug = (title) =>
  title.toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

const PhotosSection = memo(() => {
  const latest = photos.slice(0, 3)
  return (
    <div className="mb-12 mt-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Photos</h2>
        <Link to="/photogallary" className="text-sm text-[#00698c] hover:underline font-medium">View all</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {latest.map((item, idx) => (
          <Link to={`/photogallary/${toSlug(item.cardTitle)}`} key={idx} className="group block">
            <div className="relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow" style={{ aspectRatio: '4/3' }}>
              <img src={item.images[0].url} alt={item.cardTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-sm font-bold leading-snug line-clamp-2">{item.cardTitle}</p>
                <p className="text-gray-300 text-xs font-medium mt-1">{item.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
})

// ─── Videos Section ───────────────────────────────────────────────────────────
const VideosSection = memo(() => {
  const latest = videos.slice(0, 3)
  return (
    <div className="mb-12 mt-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Videos</h2>
        <Link to="/vediogallary" className="text-sm text-[#00698c] hover:underline font-medium">View all</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {latest.map((item, idx) => (
          <Link to={`/vediogallary/${toSlug(item.title)}`} key={idx} className="group block">
            <div className="relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow" style={{ aspectRatio: '16/9' }}>
              <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-all duration-200 group-hover:scale-110">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#111" className="ml-0.5">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
              {item.duration && (
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-0.5 rounded">{item.duration}</div>
              )}
            </div>
            <div className="mt-2 px-0.5">
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-snug line-clamp-2 group-hover:text-[#00698c] transition-colors">{item.title}</p>
              <p className="text-xs font-medium text-gray-400 mt-1">{item.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
})

// ─── Featured Match ───────────────────────────────────────────────────────────
const FeaturedMatch = memo(() => {
  const navigate = useNavigate()
  return (
    <div
      className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm mb-6 cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => navigate('/cricket/ipl')}
    >
      <div className="relative h-48 md:h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80" alt="Cricket match" className="w-full h-full object-cover opacity-60" loading="lazy" />
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Live
            </span>
            <span className="text-white/80 text-xs">Cricket</span>
          </div>
          <h3 className="text-white font-bold text-lg leading-tight">India Women Tour of Australia</h3>
          <div className="flex items-center gap-3 mt-2 text-white text-sm">
            <span>🇮🇳 India Women</span>
            <span className="font-bold">184/8 • 97 overs</span>
          </div>
          <div className="flex items-center gap-3 mt-1 text-white text-sm">
            <span>🇦🇺 Australian Women</span>
          </div>
        </div>
      </div>
    </div>
  )
})

// ─── HomePage ─────────────────────────────────────────────────────────────────
const HomePage = () => {
  const navigate = useNavigate()

  // ✅ Sirf ek baar API call — sab components ko same data pass karo
  const [apiNews, setApiNews] = useState([])
  const [newsLoading, setNewsLoading] = useState(true)

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await getLatestNews()
        if (res.success) {
          const mapped = res.data.map((item) => ({
            id:          item.id,
            title:       item.title,
            description: item.description,
            image:       item.image,
            source:      item.source,
            time:        new Date(item.publishedAt).toLocaleDateString(),
            slug:        item.slug,
            category:    'Cricket',
            url:         item.url,
            final_content: item.final_content ?? '',
            tags:        Array.isArray(item.tags) ? item.tags : [],
          }))
          setApiNews(mapped)
        } else {
          setApiNews([])
        }
      } catch (e) {
        console.error(e)
        setApiNews([])
      } finally {
        setNewsLoading(false)
      }
    }
    fetchAll()
  }, [])

  const faCupArticle = footballNewsData.find((a) => a.id === 'fn-8')

  return (
    <>
      <SeoManager
        title={seoConfig.pages.home.title}
        description={seoConfig.pages.home.description}
      />
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

        {/* ── FeaturedMatch + Sidebar ── */}
        <div className="flex flex-col lg:flex-row gap-6 mb-4">
          <div className="flex-1 min-w-0">
            <FeaturedMatch />
            <div
              className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 mb-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => faCupArticle ? navigate(`/football/news/${faCupArticle.slug}`) : navigate('/football/news')}
            >
              <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                Weekend predictions: Can Wrexham top Chelsea in FA Cup?
              </p>
              <img
                src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=700&q=80"
                alt="FA Cup"
                className="w-full h-40 object-cover rounded-lg mt-2"
                loading="lazy"
              />
            </div>
          </div>

          {/* ✅ Same apiNews sidebar ko pass */}
          <div className="lg:w-64 flex-shrink-0">
            <LatestNewsSidebar news={apiNews.slice(0, 9)} loading={newsLoading} />
          </div>
        </div>

        {/* ✅ Same apiNews LatestNewsSection ko pass */}
        <div className="flex gap-6 mb-4">
          <div className="w-full lg:w-[80%] min-w-0">
            <LatestNewsSection news={apiNews.slice(0, 9)} loading={newsLoading} />
          </div>
          <div className="hidden lg:block lg:w-[20%]" />
        </div>

        {/* ✅ Same apiNews NewsGrid ko pass */}
        <div className="flex gap-6 mb-4">
          <div className="w-full lg:w-[80%] min-w-0">
            <NewsGrid
              title="Cricket News & Updates"
              viewAllTo="/news"
              items={apiNews}
              loading={newsLoading}
              basePath="/cricket/news"
            />
          </div>
          <div className="hidden lg:block lg:w-[20%]" />
        </div>

        <div className="flex gap-6 mb-4">
          <div className="w-full lg:w-[80%] min-w-0">
            <NewsGrid
              title="Football News & Updates"
              viewAllTo="/football/news"
              items={footballNewsData}
              loading={false}
              basePath="/football/news"
            />
          </div>
          <div className="hidden lg:block lg:w-[20%]" />
        </div>

        <div className="flex gap-6 mb-4">
          <div className="w-full lg:w-[80%] min-w-0">
            <NewsGrid
              title="Other Sports News & Updates"
              viewAllTo="/sports/news"
              items={otherSportsNewsData}
              loading={false}
              basePath="/sports/news"
            />
          </div>
          <div className="hidden lg:block lg:w-[20%]" />
        </div>

        <PhotosSection />
        <VideosSection />
        <BlogsRow />

      </div>
    </>
  )
}

export default HomePage