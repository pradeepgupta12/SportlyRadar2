

// import { useEffect, useState } from 'react'
// import SeoManager from '@/core/seo/SeoManager'
// import { seoConfig } from '@/config/seo.config'
// import { appConfig } from '@/config/app.config'
// import BlogCard from '@/shared/components/BlogCard'
// import { getBlogs } from '../../service/blogs.service.js'
// import Button from '@/design-system/Button'

// // ── Helper: resolve image src correctly ──────────────────────────────────────
// const resolveImage = (banner) => {
//   if (!banner) return ''

//   // string case (rare)
//   if (typeof banner === 'string') {
//     return banner.startsWith('http')
//       ? banner
//       : `${import.meta.env.VITE_BACKEND_URL}/${banner.replace(/^\//, '')}`
//   }

//   // object case (normal)
//   if (banner.src) {
//     return banner.mode === 'url'
//       ? banner.src
//       : `${import.meta.env.VITE_BACKEND_URL}/${banner.src.replace(/^\//, '')}`
//   }

//   return ''
// }

// const mapPost = (post) => ({
//   id: post._id,
//   slug: post.slug,
//   title: post.title,
//   excerpt: post.description,
//   categoryLabel: post.category,
//   image: resolveImage(post.bannerImage), 
//   date: new Date(post.createdAt).toLocaleDateString(),
//  author: post.author?.name || "Unknown Author",
// })

// const BlogsPage = () => {
//   const [activeCategory, setActiveCategory] = useState('all')
//   const [visibleCount, setVisibleCount] = useState(8)
//   const [blogs, setBlogs] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await getBlogs()
//         // ✅ Only show published blogs
//         const published = (res.data.blogs || []).filter(
//           (b) => b.status === 'published'
//         )
//         setBlogs(published)
//       } catch (err) {
//         console.error(err)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchBlogs()
//   }, [])

//   const filtered =
//     activeCategory === 'all'
//       ? blogs
//       : blogs.filter(
//   (p) => p.category?.toLowerCase() === activeCategory.toLowerCase()
// )

//   const visible = filtered.slice(0, visibleCount).map(mapPost)

//   if (loading) {
//     return <div className="text-center py-20 text-gray-500">Loading blogs...</div>
//   }

//   return (
//     <>
//       <SeoManager
//         title={seoConfig.pages.blogs.title}
//         description={seoConfig.pages.blogs.description}
//       />

//       <div className="text-black py-4 px-4">
//         <div className="max-w-7xl mx-auto sm:px-12 md:px-2 lg:px-6">
//           <h1 className="text-xl font-bold dark:text-white">Blogs</h1>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
//         {/* Category filters */}
//         <div className="flex items-center gap-2 flex-wrap mb-6">
//           {appConfig.blogCategories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => { setActiveCategory(cat.id); setVisibleCount(8) }}
//               className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
//                 activeCategory === cat.id
//                   ? 'bg-[#0a3d4f] text-white border-[#0a3d4f]'
//                   : 'bg-white dark:bg-[#1c2128] text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-[#00698c]'
//               }`}
//             >
//               {cat.emoji && <span>{cat.emoji}</span>}
//               {cat.label}
//             </button>
//           ))}
//         </div>

//         {/* Blogs grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//           {visible.map((post) => (
//             <BlogCard key={post.id} post={post} />
//           ))}
//         </div>

//         {visible.length < filtered.length && (
//           <div className="text-center">
//             <Button variant="outline" size="lg" onClick={() => setVisibleCount((c) => c + 8)}>
//               Load More
//             </Button>
//           </div>
//         )}

//         {filtered.length === 0 && (
//           <p className="text-center text-gray-500 dark:text-gray-400 py-12">
//             No blogs found in this category.
//           </p>
//         )}
//       </div>
//     </>
//   )
// }

// export default BlogsPage


import { useEffect, useState } from 'react'
import SeoManager from '@/core/seo/SeoManager'
import { seoConfig } from '@/config/seo.config'
import { appConfig } from '@/config/app.config'
import BlogCard from '@/shared/components/BlogCard'
import { getBlogs } from '../../service/blogs.service.js'
import Button from '@/design-system/Button'

// ── Helper: resolve image src correctly ──────────────────────────────────────
const resolveImage = (banner) => {
  if (!banner) return ''

  if (typeof banner === 'string') {
    return banner.startsWith('http')
      ? banner
      : `${import.meta.env.VITE_BACKEND_URL}/${banner.replace(/^\//, '')}`
  }

  if (banner.src) {
    return banner.mode === 'url'
      ? banner.src
      : `${import.meta.env.VITE_BACKEND_URL}/${banner.src.replace(/^\//, '')}`
  }

  return ''
}

// Strip HTML tags and return plain text preview
const stripHtml = (html = '') => {
  const tmp = document.createElement('div')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
}

const mapPost = (post) => ({
  id: post._id,
  slug: post.slug,
  title: post.title,
  contentPreview: stripHtml(post.content).slice(0, 120).trim() + (post.content?.length > 120 ? '...' : ''),
  categoryLabel: post.category,
  image: resolveImage(post.bannerImage),
  date: new Date(post.createdAt).toLocaleDateString(),
  author: post.author?.name || 'Unknown Author',
  readTime: post.readTime || null,
})

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [visibleCount, setVisibleCount] = useState(8)
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getBlogs()
        const published = (res.data.blogs || []).filter(
          (b) => b.status === 'published'
        )
        setBlogs(published)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  const filtered =
    activeCategory === 'all'
      ? blogs
      : blogs.filter(
          (p) => p.category?.toLowerCase() === activeCategory.toLowerCase()
        )

  const visible = filtered.slice(0, visibleCount).map(mapPost)

  if (loading) {
    return <div className="text-center py-20 text-gray-500">Loading blogs...</div>
  }

  return (
    <>
      <SeoManager
        title={seoConfig.pages.blogs.title}
        description={seoConfig.pages.blogs.description}
      />

      <div className="text-black dark:text-white py-4 px-4">
        <div className="max-w-7xl mx-auto sm:px-12 md:px-2 lg:px-6">
          <h1 className="text-xl font-bold dark:text-white">Blogs</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        {/* Category filters */}
        <div className="flex items-center gap-2 flex-wrap mb-6">
          {appConfig.blogCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setVisibleCount(8) }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === cat.id
                  ? 'bg-[#0a3d4f] text-white border-[#0a3d4f]'
                  : 'bg-white dark:bg-[#1c2128] text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-[#00698c]'
              }`}
            >
              {cat.emoji && <span>{cat.emoji}</span>}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Blogs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {visible.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {visible.length < filtered.length && (
          <div className="text-center">
            <Button variant="outline" size="lg" onClick={() => setVisibleCount((c) => c + 8)}>
              Load More
            </Button>
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-12">
            No blogs found in this category.
          </p>
        )}
      </div>
    </>
  )
}

export default BlogsPage