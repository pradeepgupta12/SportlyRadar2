


// import { memo } from 'react'
// import { Link } from 'react-router-dom'
// import BlogCard from './BlogCard'
// import { blogPosts } from '@/shared/constants/blogs.data'

// const BlogsSection = memo(({ limit = 4 }) => {
//   const posts = blogPosts.slice(0, limit)

//   return (
//     <div className="py-8">
//       <div className="flex items-center justify-between mb-4">
//         {/* CHANGED: text-xl font-bold → text-2xl font-extrabold */}
//         <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Blogs</h2>
//         <Link
//           to="/blogs"
//           className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#00698c] dark:hover:text-[#3387a3] transition-colors"
//         >
//           View all
//         </Link>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {posts.map((post) => (
//           <BlogCard key={post.id} post={post} compact />
//         ))}
//       </div>
//     </div>
//   )
// })

// BlogsSection.displayName = 'BlogsSection'

// export default BlogsSection


////// ye neeche api vala hai

// import { memo } from 'react'
// import { Link } from 'react-router-dom'
// import BlogCard from './BlogCard'
// import { useEffect, useState } from 'react'
// import { getBlogs } from '../../service/blogs.service.js'

// const BlogsSection = memo(({ limit = 4 }) => {
// const [blogs, setBlogs] = useState([])

// useEffect(() => {
//   const fetchBlogs = async () => {
//     try {
//       const res = await getBlogs()
//       setBlogs(res.data.blogs || [])
//     } catch (err) {
//       console.error(err)
//     }
//   }

//   fetchBlogs()
// }, [])

// const posts = blogs.slice(0, limit).map((post) => ({
//   id: post._id,
//   slug: post.slug, // ✅ must for routing
//   title: post.title,
//   excerpt: post.description,
//   categoryLabel: post.category,
//   image: post.banner?.src
//     ? post.banner.mode === "url"
//       ? post.banner.src
//       : `${import.meta.env.VITE_BACKEND_URL}${post.banner.src}`
//     : "",
//   date: new Date(post.createdAt).toLocaleDateString(), // ✅ fix date
//   author: post.author,
// }))

//   return (
//     <div className="py-8">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-bold text-gray-900 dark:text-white">Blogs</h2>
//         <Link
//           to="/blogs"
//           className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#00698c] dark:hover:text-[#3387a3] transition-colors"
//         >
//           View all
//         </Link>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {posts.map((post) => (
//           <BlogCard key={post.id} post={post} compact />
//         ))}
//       </div>
//     </div>
//   )
// })

// BlogsSection.displayName = 'BlogsSection'

// export default BlogsSection


import { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BlogCard from '@/shared/components/BlogCard'
import { getBlogs } from '../../service/blogs.service.js'

const resolveImage = (banner) => {
  if (!banner?.src) return ''
  if (banner.mode === 'url') return banner.src
  return `${import.meta.env.VITE_BACKEND_URL}${banner.src}`
}

const BlogsRow = memo(({ limit = 4, showViewAll = true }) => {
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

  const posts = blogs.slice(0, limit).map((post) => ({
    id: post._id,
    slug: post.slug,
    title: post.title,
    excerpt: post.description,
    categoryLabel: post.category,
    image: resolveImage(post.banner),
    date: new Date(post.createdAt).toLocaleDateString(),
    author: post.author?.name || "Unknown",
  }))

  return (
    <div className="mb-12 mt-4">
      <div className="flex items-center justify-between mb-4"> 
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Blogs</h2>
        {showViewAll && posts.length > 0 && (
          <Link
            to="/blogs"
            className="text-sm font-medium text-[#00698c] hover:underline"
          >
            View all
          </Link>
        )}
      </div>

      {/* ── Loading State ── */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: limit }).map((_, i) => (
            <div
              key={i}
              className="h-48 rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse"
            />
          ))}
        </div>
      )}

      {/* ── Empty State ── */}
      {!loading && posts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center  bg-gray-50 dark:bg-gray-800/40">
          
          <p className="text-gray-700 dark:text-gray-300 font-medium">No blogs published yet</p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
            Check back soon for new articles.
          </p>
        </div>
      )}

      {/* ── Blog Cards ── */}
      {!loading && posts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} compact />
          ))}
        </div>
      )}
    </div>
  )
})

BlogsRow.displayName = 'BlogsRow'

export default BlogsRow