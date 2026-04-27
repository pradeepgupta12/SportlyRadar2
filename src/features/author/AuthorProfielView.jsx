// // src/pages/AuthorProfileView.jsx (Public / Frontend)
// // Route: blog/author/:authorName
// // e.g. /blog/author/john-doe  →  authorName = "john-doe"
// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toast";
// import {
//   FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGlobe,
//   FaArrowLeft, FaChevronRight,
// } from "react-icons/fa";
// import { VITE_BACKEND_URL } from "../../../config.js";

// /* ── helpers ── */
// const resolveImgUrl = (imgObj) => {
//   if (!imgObj) return null;
//   if (typeof imgObj === 'string') {
//     if (!imgObj.trim()) return null;
//     return imgObj.startsWith('http') ? imgObj : `${VITE_BACKEND_URL}/${imgObj.replace(/^\//, '')}`;
//   }
//   if (imgObj?.src) {
//     const s = imgObj.src.trim();
//     if (!s) return null;
//     if (imgObj.mode === 'url' || s.startsWith('http')) return s;
//     return `${VITE_BACKEND_URL}${s.startsWith('/') ? s : '/' + s}`;
//   }
//   return null;
// };

// const getBlogBanner = (blog) =>
//   resolveImgUrl(blog?.bannerImage) || resolveImgUrl(blog?.image) || null;

// const toSlug = (t = '') =>
//   t.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');

// // Convert author name to URL slug (same logic used in BlogDetailPage)
// const toAuthorSlug = (name = '') =>
//   name.toLowerCase().trim().replace(/\s+/g, '-');

// const CATEGORY_COLORS = {
//   cricket:   { bg: '#10b98115', text: '#10b981' },
//   football:  { bg: '#3b82f615', text: '#3b82f6' },
//   badminton: { bg: '#8b5cf615', text: '#8b5cf6' },
//   tennis:    { bg: '#ec489915', text: '#ec4899' },
//   formula1:  { bg: '#f59e0b15', text: '#f59e0b' },
// };
// const getCatStyle = (cat) =>
//   CATEGORY_COLORS[cat?.toLowerCase()] || { bg: '#6b728015', text: '#6b7280' };

// const SOCIAL_CONFIG = [
//   { key: 'twitter',   icon: FaTwitter,    color: '#1DA1F2', label: 'Twitter' },
//   { key: 'linkedin',  icon: FaLinkedinIn, color: '#0A66C2', label: 'LinkedIn' },
//   { key: 'instagram', icon: FaInstagram,  color: '#E1306C', label: 'Instagram' },
//   { key: 'facebook',  icon: FaFacebookF,  color: '#1877F2', label: 'Facebook' },
//   { key: 'website',   icon: FaGlobe,      color: '#374151', label: 'Website' },
// ];

// export default function AuthorProfileView() {
//   // Route param: blog/author/:authorName  →  authorName is a name-based slug like "john-doe"
//   const { authorName: authorSlug } = useParams();
//   const navigate = useNavigate();

//   const [author, setAuthor] = useState(null);
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [notFound, setNotFound] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setNotFound(false);

//         // Fetch all authors + all blogs simultaneously
//         const [authorsRes, blogsRes] = await Promise.all([
//           axios.get(`${VITE_BACKEND_URL}/authors`),
//           axios.get(`${VITE_BACKEND_URL}/blogs`),
//         ]);

//         const allAuthors = authorsRes.data?.authors || [];
//         const allBlogs = blogsRes.data?.blogs || [];

//         // Find author whose name slug matches the URL param
//         const matchedAuthor = allAuthors.find(
//           a => toAuthorSlug(a.name) === authorSlug
//         );

//         if (!matchedAuthor) {
//           setNotFound(true);
//           return;
//         }

//         setAuthor(matchedAuthor);

//         // Filter published blogs for this author
//         const authorBlogs = allBlogs.filter(b => {
//           const blogAuthorId =
//             typeof b.author === 'object' ? b.author?._id : b.author;
//           return blogAuthorId === matchedAuthor._id && b.status === 'published';
//         });

//         setBlogs(authorBlogs);
//       } catch (err) {
//         console.error(err);
//         toast.error('Failed to load author');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (authorSlug) fetchData();
//   }, [authorSlug]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#0a0f1e] flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin h-12 w-12 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto" />
//           <p className="mt-4 text-gray-400 text-sm">Loading author...</p>
//         </div>
//       </div>
//     );
//   }

//   if (notFound || !author) {
//     return (
//       <div className="min-h-screen bg-[#0a0f1e] flex items-center justify-center px-4">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-white mb-4">Author Not Found</h1>
//           <button onClick={() => navigate('/blog')}
//             className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
//             Back to Blog
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const avatarUrl = resolveImgUrl(author.image);
//   const initials = author.name?.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase() || 'A';
//   const activeSocials = SOCIAL_CONFIG.filter(s => author.socialLinks?.[s.key]);

//   return (
//     <div className="min-h-screen bg-[#0a0f1e]">

//       {/* ── Hero ── */}
//       <div className="relative overflow-hidden">
//         {/* Ambient glow */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-10 left-1/4 w-80 h-80 bg-indigo-600 opacity-10 rounded-full filter blur-3xl" />
//           <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600 opacity-10 rounded-full filter blur-3xl" />
//         </div>

//         <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14">

//           {/* Back */}
//           <button onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-10 group">
//             <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-xs" />
//             <span className="text-sm font-medium">Back</span>
//           </button>

//           {/* Profile */}
//           <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

//             {/* Avatar */}
//             <div className="shrink-0">
//               {avatarUrl ? (
//                 <img src={avatarUrl} alt={author.name}
//                   className="w-32 h-32 md:w-36 md:h-36 rounded-2xl object-cover border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/20"
//                   onError={(e) => { e.target.style.display = 'none'; }} />
//               ) : (
//                 <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-indigo-500/20">
//                   {initials}
//                 </div>
//               )}
//             </div>

//             {/* Info — only render fields that exist */}
//             <div className="flex-1 text-center md:text-left">

//               <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-1">{author.name}</h1>

//               {/* Designation */}
//               {author.designation && (
//                 <p className="text-indigo-400 font-semibold text-sm mb-2">{author.designation}</p>
//               )}

//               {/* Email */}
//               {author.email && (
//                 <a href={`mailto:${author.email}`}
//                   className="text-gray-400 text-sm hover:text-white transition block mb-3">
//                   {author.email}
//                 </a>
//               )}

//               {/* Bio */}
//               {author.bio && (
//                 <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mt-2 mb-5">
//                   {author.bio}
//                 </p>
//               )}

//               {/* Articles count */}
//               <div className="flex items-center gap-6 justify-center md:justify-start mb-5">
//                 <div>
//                   <p className="text-2xl font-bold text-white">{blogs.length}</p>
//                   <p className="text-xs text-gray-500 uppercase tracking-wider">Articles</p>
//                 </div>
//               </div>

//               {/* Social links — only if any exist */}
//               {activeSocials.length > 0 && (
//                 <div className="flex items-center gap-3 justify-center md:justify-start">
//                   <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Follow</span>
//                   <div className="flex gap-2">
//                     {activeSocials.map(({ key, icon: Icon, color, label }) => (
//                       <a key={key} href={author.socialLinks[key]} target="_blank" rel="noopener noreferrer"
//                         title={label}
//                         className="w-9 h-9 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
//                         style={{ backgroundColor: color }}>
//                         <Icon className="text-sm" />
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Blogs Grid ── */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-xl font-bold text-white">
//             Latest Articles
//             <span className="ml-2 text-sm font-normal text-gray-500">({blogs.length})</span>
//           </h2>
//         </div>

//         {blogs.length === 0 ? (
//           <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
//             <p className="text-gray-500 text-sm">No published articles yet.</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {blogs.map(blog => {
//               const bannerSrc = getBlogBanner(blog);
//               const catStyle = getCatStyle(blog.category);

//               return (
//                 <div
//                   key={blog._id}
//                   onClick={() => navigate(`/blog/${blog.slug || toSlug(blog.title)}`)}
//                   className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/30 hover:bg-white/8 transition-all cursor-pointer group"
//                 >
//                   {/* Image */}
//                   <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
//                     {bannerSrc ? (
//                       <img src={bannerSrc} alt={blog.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                         onError={(e) => { e.target.style.display = 'none'; }} />
//                     ) : (
//                       <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl font-bold">
//                         {(blog.title || '?').charAt(0).toUpperCase()}
//                       </div>
//                     )}
//                     {/* Category badge */}
//                     {blog.category && (
//                       <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
//                         style={{ background: catStyle.bg, color: catStyle.text, backdropFilter: 'blur(8px)' }}>
//                         {blog.category}
//                       </span>
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div className="p-5">
//                     <div className="text-xs text-gray-500 mb-2">
//                       {new Date(blog.publishedDate || blog.updatedAt || blog.createdAt).toLocaleDateString('en-US', {
//                         month: 'long', day: 'numeric', year: 'numeric',
//                       })}
//                     </div>
//                     <h3 className="text-sm font-bold text-white line-clamp-2 group-hover:text-indigo-300 transition-colors mb-2">
//                       {blog.title}
//                     </h3>
//                     {blog.description && (
//                       <p className="text-xs text-gray-400 line-clamp-2 mb-4">{blog.description}</p>
//                     )}
//                     <div className="flex items-center justify-between">
//                       {blog.tags?.length > 0 && (
//                         <div className="flex gap-1 flex-wrap">
//                           {blog.tags.slice(0, 2).map(tag => (
//                             <span key={tag} className="px-2 py-0.5 bg-white/5 text-gray-400 text-[10px] rounded-full">
//                               #{tag}
//                             </span>
//                           ))}
//                         </div>
//                       )}
//                       <span className="text-indigo-400 text-xs font-semibold ml-auto flex items-center gap-1">
//                         Read <FaChevronRight className="text-[10px]" />
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>

//       {/* ── Newsletter ── */}
//       <div className="bg-gradient-to-r from-indigo-900/50 to-blue-900/50 border-t border-white/5 py-16">
//         <div className="max-w-2xl mx-auto text-center px-4">
//           <p className="text-2xl font-bold text-white mb-2">Never Miss an Update</p>
//           <p className="text-gray-400 text-sm mb-8">
//             Subscribe to get the latest sports insights delivered to your inbox
//           </p>
//           <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
//             <input type="email" placeholder="Enter your email address"
//               className="px-5 py-3 rounded-xl w-full sm:w-72 bg-white/10 border border-white/20 text-white placeholder-gray-500 outline-none focus:border-indigo-500 transition text-sm" />
//             <button className="px-6 py-3 bg-indigo-600 rounded-xl text-sm font-semibold text-white hover:bg-indigo-700 transition whitespace-nowrap">
//               Subscribe Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/pages/AuthorProfileView.jsx

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toast";
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGlobe,
  FaArrowLeft, FaChevronRight,
} from "react-icons/fa";
import { VITE_BACKEND_URL } from "../../../config.js";

/* ── helpers ── */
const resolveImgUrl = (imgObj) => {
  if (!imgObj) return null;
  if (typeof imgObj === 'string') {
    if (!imgObj.trim()) return null;
    return imgObj.startsWith('http') ? imgObj : `${VITE_BACKEND_URL}/${imgObj.replace(/^\//, '')}`;
  }
  if (imgObj?.src) {
    const s = imgObj.src.trim();
    if (!s) return null;
    if (imgObj.mode === 'url' || s.startsWith('http')) return s;
    return `${VITE_BACKEND_URL}${s.startsWith('/') ? s : '/' + s}`;
  }
  return null;
};

const getBlogBanner = (blog) =>
  resolveImgUrl(blog?.bannerImage) || resolveImgUrl(blog?.image) || null;

const toSlug = (t = '') =>
  t.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');

const toAuthorSlug = (name = '') =>
  name.toLowerCase().trim().replace(/\s+/g, '-');

const CATEGORY_COLORS = {
  cricket:   { bg: '#10b98115', text: '#10b981' },
  football:  { bg: '#3b82f615', text: '#3b82f6' },
  badminton: { bg: '#8b5cf615', text: '#8b5cf6' },
  tennis:    { bg: '#ec489915', text: '#ec4899' },
  formula1:  { bg: '#f59e0b15', text: '#f59e0b' },
};
const getCatStyle = (cat) =>
  CATEGORY_COLORS[cat?.toLowerCase()] || { bg: '#6b728015', text: '#6b7280' };

const SOCIAL_CONFIG = [
  { key: 'twitter',   icon: FaTwitter,    color: '#1DA1F2', label: 'Twitter' },
  { key: 'linkedin',  icon: FaLinkedinIn, color: '#0A66C2', label: 'LinkedIn' },
  { key: 'instagram', icon: FaInstagram,  color: '#E1306C', label: 'Instagram' },
  { key: 'facebook',  icon: FaFacebookF,  color: '#1877F2', label: 'Facebook' },
  { key: 'website',   icon: FaGlobe,      color: '#374151', label: 'Website' },
];

export default function AuthorProfileView() {
  const { authorName: authorSlug } = useParams();
  const navigate = useNavigate();

  const [author, setAuthor] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setNotFound(false);

        const [authorsRes, blogsRes] = await Promise.all([
          axios.get(`${VITE_BACKEND_URL}/authors`),
          axios.get(`${VITE_BACKEND_URL}/blogs`),
        ]);

        const allAuthors = authorsRes.data?.authors || [];
        const allBlogs = blogsRes.data?.blogs || [];

        const matchedAuthor = allAuthors.find(
          a => toAuthorSlug(a.name) === authorSlug
        );

        if (!matchedAuthor) {
          setNotFound(true);
          return;
        }

        setAuthor(matchedAuthor);

        const authorBlogs = allBlogs.filter(b => {
          const blogAuthorId =
            typeof b.author === 'object' ? b.author?._id : b.author;
          return blogAuthorId === matchedAuthor._id && b.status === 'published';
        });

        setBlogs(authorBlogs);
      } catch (err) {
        console.error(err);
        toast.error('Failed to load author');
      } finally {
        setLoading(false);
      }
    };

    if (authorSlug) fetchData();
  }, [authorSlug]);

  /* ── LOADER ── */
  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0f1e] flex items-center justify-center transition-colors">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto" />
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
            Loading author...
          </p>
        </div>
      </div>
    );
  }

  /* ── NOT FOUND ── */
  if (notFound || !author) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0f1e] flex items-center justify-center px-4 transition-colors">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Author Not Found
          </h1>
          <button
            onClick={() => navigate('/blogs')}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const avatarUrl = resolveImgUrl(author.image);
  const initials = author.name?.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase() || 'A';
  const activeSocials = SOCIAL_CONFIG.filter(s => author.socialLinks?.[s.key]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0a0f1e] transition-colors">

      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition mb-10 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-xs" />
            <span className="text-sm font-medium">Back</span>
          </button>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white p-4">

            {/* Avatar */}
            <div className="shrink-0">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={author.name}
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-indigo-500/30 shadow-xl"
                />
              ) : (
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-white flex items-center justify-center text-white text-4xl font-bold">
                  {initials}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-1">
                {author.name}
              </h1>

              {author.designation && (
                <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm mb-2">
                  {author.designation}
                </p>
              )}

              {author.bio && (
                <p className="text-gray-600 dark:text-gray-300 text-sm max-w-2xl mb-5">
                  {author.bio}
                </p>
              )}

              {/* Social */}
              {activeSocials.length > 0 && (
                <div className="flex gap-2 justify-center md:justify-start">
                  {activeSocials.map(({ key, icon: Icon, color }) => (
                    <a
                      key={key}
                      href={author.socialLinks[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white hover:scale-110 transition"
                      style={{ backgroundColor: color }}
                    >
                      <Icon className="text-sm" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* BLOG GRID */}
     {/* ── Blogs Grid ── */}
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

  <div className="flex items-center justify-between mb-8">
    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
      Latest Articles
      <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
        ({blogs.length})
      </span>
    </h2>
  </div>

  {blogs.length === 0 ? (
    <div className="text-center py-20 bg-gray-100 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10">
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        No published articles yet.
      </p>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {blogs.map((blog) => {
        const bannerSrc = getBlogBanner(blog);
        const catStyle = getCatStyle(blog.category);

        return (
          <div
            key={blog._id}
            onClick={() => navigate(`/blog/${blog.slug || toSlug(blog.title)}`)}
            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >

            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-white/5">
              {bannerSrc ? (
                <img
                  src={bannerSrc}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-white/20 text-4xl font-bold">
                  {(blog.title || '?').charAt(0).toUpperCase()}
                </div>
              )}

              {/* Category */}
              {blog.category && (
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    background: catStyle.bg,
                    color: catStyle.text,
                  }}
                >
                  {blog.category}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col h-[160px]">

              <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                {new Date(
                  blog.publishedDate ||
                  blog.updatedAt ||
                  blog.createdAt
                ).toLocaleDateString()}
              </div>

              <h3 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-indigo-500 transition mb-2">
                {blog.title}
              </h3>

              {blog.description && (
                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                  {blog.description}
                </p>
              )}

              <div className="mt-auto flex items-center justify-between">
                <span className="text-indigo-500 text-xs font-semibold flex items-center gap-1">
                  Read <FaChevronRight className="text-[10px]" />
                </span>
              </div>

            </div>
          </div>
        );
      })}

    </div>
  )}
</div>
    </div>
  );
}