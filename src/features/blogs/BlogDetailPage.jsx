


// // import React, { useEffect, useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';

// // // ✅ Correct named import
// // import { VITE_BACKEND_URL } from '../../../config.js';

// // import {
// //   FaArrowLeft,
// //   FaFacebookF,
// //   FaTwitter,
// //   FaLinkedinIn,
// //   FaWhatsapp,
// //   FaChevronRight,
// //   FaCopy,
// //   FaCheck,
// //   FaUser,
// // } from 'react-icons/fa';

// // import { getBlogs, getBlogBySlug } from '../../service/blogs.service.js';
// // import { submitComment, fetchApprovedComments } from '../../service/comment.service';

// // /* ── Fallbacks ── */
// // const fallbackBlog = {
// //   title: "Post Not Found",
// //   description: "",
// //   content: "<p>Not found.</p>",
// //   banner: null,
// //   service: "General",
// //   date: new Date().toISOString(),
// //   author: "Admin",
// // };

// // const fallbackImage = '/fallback-blog.jpg';
// // const fallbackAvatar = 'https://ui-avatars.com/api/?name=Author&background=292B97&color=fff&size=80';

// // /* ── Helpers ── */
// // const getBannerUrl = (banner) => {
// //   if (!banner) return fallbackImage;
// //   if (typeof banner === 'string') {
// //     return banner.startsWith('http') 
// //       ? banner 
// //       : `${VITE_BACKEND_URL}${banner.startsWith('/') ? '' : '/'}${banner}`;
// //   }
// //   if (banner?.src) {
// //     const s = banner.src;
// //     if (!s.trim()) return fallbackImage;
// //     return s.startsWith('http') 
// //       ? s 
// //       : `${VITE_BACKEND_URL}${s.startsWith('/') ? s : '/' + s}`;
// //   }
// //   return fallbackImage;
// // };

// // const getAuthorImageUrl = (authorImage) => {
// //   if (!authorImage) return null;
// //   if (typeof authorImage === 'object' && authorImage?.src) {
// //     const s = authorImage.src;
// //     if (!s.trim()) return null;
// //     return s.startsWith('http') 
// //       ? s 
// //       : `${VITE_BACKEND_URL}${s.startsWith('/') ? s : '/' + s}`;
// //   }
// //   return null;
// // };

// // const formatDate = (d) => {
// //   if (!d) return '—';
// //   return new Date(d).toLocaleDateString('en-US', { 
// //     year: 'numeric', 
// //     month: 'long', 
// //     day: 'numeric' 
// //   });
// // };

// // const toSlug = (t = '') => 
// //   t.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');

// // /* ════════════════════════════════════════════════
// //    COMMENT SECTION
// //    ════════════════════════════════════════════════ */
// // const CommentSection = ({ blogId }) => {
// //   const [comments, setComments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [submitting, setSubmitting] = useState(false);
// //   const [formOpen, setFormOpen] = useState(false);
// //   const [submitted, setSubmitted] = useState(false);
// //   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
// //   const [errors, setErrors] = useState({});

// //   const loadComments = async () => {
// //     if (!blogId) return;
// //     try {
// //       setLoading(true);
// //       const res = await fetchApprovedComments(blogId);
// //       setComments(res.data?.comments || []);
// //     } catch (err) {
// //       console.error("Failed to load comments:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     loadComments();
// //   }, [blogId]);

// //   const validate = () => {
// //     const e = {};
// //     if (!formData.name.trim()) e.name = "Name is required";
// //     if (!formData.email.trim()) e.email = "Email is required";
// //     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
// //       e.email = "Invalid email";
// //     if (!formData.message.trim()) e.message = "Comment is required";
// //     return e;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const errs = validate();
// //     if (Object.keys(errs).length) {
// //       setErrors(errs);
// //       return;
// //     }

// //     setSubmitting(true);
// //     try {
// //       await submitComment(blogId, formData);
// //       setSubmitted(true);
// //       setFormData({ name: '', email: '', message: '' });
// //       setErrors({});
// //       setFormOpen(false);
// //     } catch (err) {
// //       setErrors({ 
// //         submit: err.response?.data?.message || "Failed to post comment" 
// //       });
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //     if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
// //   };

// //   const commentCount = comments.length;

// //   return (
// //     <div className="mt-12 pt-8 border-t border-gray-100">
// //       {submitted && (
// //         <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700 flex items-center gap-3">
// //           <FaCheck className="shrink-0" />
// //           <span>Comment submitted! It will appear after review.</span>
// //           <button 
// //             onClick={() => setSubmitted(false)} 
// //             className="ml-auto text-green-500 hover:text-green-700"
// //           >
// //             ×
// //           </button>
// //         </div>
// //       )}

// //       {!formOpen ? (
// //         <div
// //           onClick={() => setFormOpen(true)}
// //           className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3.5 cursor-pointer hover:border-gray-300 hover:bg-white hover:shadow-sm transition-all group mb-8"
// //         >
// //           <div className="flex items-center gap-3">
// //             <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-gray-300 transition-colors">
// //               <FaUser className="text-sm" />
// //             </div>
// //             <span className="text-gray-400 group-hover:text-gray-500 text-sm">Write a comment...</span>
// //           </div>
// //         </div>
// //       ) : (
// //         <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100 shadow-sm">
// //           <div className="flex items-center justify-between mb-5">
// //             <h4 className="text-base font-semibold text-gray-900">Add a Comment</h4>
// //             <button 
// //               onClick={() => setFormOpen(false)} 
// //               className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-200 text-xl leading-none"
// //             >
// //               ×
// //             </button>
// //           </div>

// //           <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               <div>
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   placeholder="Name"
// //                   required
// //                   autoFocus
// //                   className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none text-sm transition-all ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
// //                 />
// //                 {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
// //               </div>
// //               <div>
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   placeholder="Email"
// //                   required
// //                   className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none text-sm transition-all ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
// //                 />
// //                 {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
// //               </div>
// //             </div>

// //             <div>
// //               <textarea
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 rows={4}
// //                 placeholder="Share your thoughts..."
// //                 required
// //                 className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none resize-y text-sm transition-all ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200'}`}
// //               />
// //               {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
// //             </div>

// //             {errors.submit && <p className="text-xs text-red-600">{errors.submit}</p>}

// //             <div className="flex justify-end gap-3 pt-2">
// //               <button
// //                 type="button"
// //                 onClick={() => setFormOpen(false)}
// //                 className="px-5 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 type="submit"
// //                 disabled={submitting}
// //                 className="px-6 py-2 bg-[#292B97] text-white rounded-xl hover:bg-[#1e237e] transition-all disabled:opacity-50 flex items-center gap-2 shadow-sm text-sm font-medium"
// //               >
// //                 {submitting && (
// //                   <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
// //                 )}
// //                 {submitting ? 'Posting...' : 'Submit'}
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       )}

// //       {commentCount > 0 && (
// //         <h3 className="text-base font-bold text-gray-900 mb-4">
// //           Comments <span className="text-gray-400 font-normal">({commentCount})</span>
// //         </h3>
// //       )}

// //       {loading ? (
// //         <div className="flex justify-center py-8">
// //           <div className="animate-spin h-7 w-7 border-3 border-[#292B97] border-t-transparent rounded-full" />
// //         </div>
// //       ) : commentCount === 0 ? (
// //         <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
// //           <svg className="w-14 h-14 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
// //           </svg>
// //           <p className="text-gray-400 text-sm">No comments yet.</p>
// //           <button 
// //             onClick={() => setFormOpen(true)} 
// //             className="mt-3 text-[#292B97] hover:text-[#1e237e] text-sm font-medium transition-colors"
// //           >
// //             Be the first to comment →
// //           </button>
// //         </div>
// //       ) : (
// //         <div className="space-y-4 mt-2">
// //           {comments.map((c) => (
// //             <div key={c._id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
// //               <div className="flex items-center gap-3 mb-2">
// //                 <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#292B97] to-[#4B6CB7] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">
// //                   {c.name.charAt(0).toUpperCase()}
// //                 </div>
// //                 <div className="flex-1 min-w-0">
// //                   <p className="font-semibold text-gray-900 text-sm leading-none">{c.name}</p>
// //                   <p className="text-xs text-gray-400 mt-0.5">
// //                     {new Date(c.createdAt).toLocaleDateString('en-US', { 
// //                       year: 'numeric', 
// //                       month: 'short', 
// //                       day: 'numeric' 
// //                     })}
// //                   </p>
// //                 </div>
// //               </div>
// //               <p className="text-sm text-gray-700 leading-relaxed pl-12">{c.message}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // /* ════════════════════════════════════════════════
// //    MAIN BLOG DETAIL PAGE
// //    ════════════════════════════════════════════════ */
// // const BlogDetailPage = () => {
// //   const { title: slug } = useParams();
// //   const navigate = useNavigate();

// //   const [blog, setBlog] = useState(null);
// //   const [relatedBlogs, setRelatedBlogs] = useState([]);
// //   const [allServices, setAllServices] = useState([]);
// //   const [allTags, setAllTags] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [layoutMode, setLayoutMode] = useState('left');
// //   const [copied, setCopied] = useState(false);

// //   const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

// //   const handleCopy = () => {
// //     navigator.clipboard.writeText(shareUrl).then(() => {
// //       setCopied(true);
// //       setTimeout(() => setCopied(false), 2000);
// //     });
// //   };

// //   // Fetch blog data directly using service
// //   useEffect(() => {
// //     const loadBlogData = async () => {
// //       try {
// //         setLoading(true);
// //         setError(null);

// //         let currentBlog = null;
// //         let allPublished = [];

// //         // Try fetching by slug first
// //         try {
// //           const slugRes = await getBlogBySlug(slug);
// //           if (slugRes.data?.blog || slugRes.data?.data?.blog) {
// //             currentBlog = slugRes.data.blog || slugRes.data.data.blog;
// //           }
// //         } catch (err) {
// //           console.log("Blog by slug failed, trying all blogs...");
// //         }

// //         // Fallback: fetch all blogs
// //         if (!currentBlog) {
// //           const res = await getBlogs();
// //           const blogsData = res.data?.blogs || res.data?.data?.blogs || [];
// //           allPublished = blogsData.filter(b => b.status?.toLowerCase() === 'published');
// //           currentBlog = allPublished.find(b => toSlug(b.title) === slug) || fallbackBlog;
// //         }

// //         setBlog(currentBlog);

// //         // Related blogs
// //         const related = allPublished.filter(
// //           b => b.service === currentBlog.service && toSlug(b.title) !== slug
// //         ).slice(0, 4);
// //         setRelatedBlogs(related);

// //         // Services (Categories)
// //         setAllServices([...new Set(allPublished.map(b => b.service).filter(Boolean))]);

// //         // Popular Tags
// //         const freq = {};
// //         allPublished.forEach(b => {
// //           (b.tags || []).forEach(t => {
// //             if (t) freq[t] = (freq[t] || 0) + 1;
// //           });
// //         });
// //         setAllTags(
// //           Object.entries(freq)
// //             .sort((a, b) => b[1] - a[1])
// //             .map(([t]) => t)
// //             .slice(0, 10)
// //         );

// //       } catch (e) {
// //         console.error("Error loading blog:", e);
// //         setError("Failed to load article");
// //         setBlog(fallbackBlog);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (slug) {
// //       loadBlogData();
// //       window.scrollTo({ top: 0, behavior: 'smooth' });
// //     }
// //   }, [slug]);

// //   const truncateTitle = (t = '', n = 7) => {
// //     const words = t.split(/\s+/);
// //     return words.length <= n ? t : words.slice(0, n).join(' ') + '...';
// //   };

// //   const socialLinks = [
// //     { icon: FaFacebookF, color: '#1877F2', label: 'Facebook', href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
// //     { icon: FaTwitter, color: '#1DA1F2', label: 'Twitter', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}` },
// //     { icon: FaLinkedinIn, color: '#0A66C2', label: 'LinkedIn', href: `https://linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}` },
// //     { icon: FaWhatsapp, color: '#25D366', label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(shareUrl)}` },
// //   ];

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //         <div className="text-center">
// //           <div className="animate-spin h-12 w-12 border-4 border-[#292B97] border-t-transparent rounded-full mx-auto" />
// //           <p className="mt-6 text-lg text-gray-600">Loading article...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error || !blog) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
// //         <div className="text-center max-w-md">
// //           <h1 className="text-3xl font-bold mb-4 text-gray-800">Article Not Found</h1>
// //           <button 
// //             onClick={() => navigate('/blog')} 
// //             className="px-6 py-3 bg-[#292B97] text-white rounded-lg hover:bg-[#1e237e] transition"
// //           >
// //             Back to Blog
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const bannerUrl = getBannerUrl(blog.banner);
// //   const authorImgUrl = getAuthorImageUrl(blog.authorImage);
// //   const authorId = typeof blog.author === 'object' ? blog.author?._id : blog.author;
// //   const authorName = typeof blog.author === 'object' ? blog.author?.name : blog.author;

// //   const ArticleContent = () => (
// //     <article>
// //       {/* Author */}
// //       <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
// //         <button
// //           onClick={() => authorId && navigate(`/blog/author/${authorId}`)}
// //           className={`flex items-center gap-3 group ${authorId ? 'cursor-pointer' : 'cursor-default'}`}
// //         >
// //           {authorImgUrl ? (
// //             <img 
// //               src={authorImgUrl} 
// //               alt={authorName} 
// //               className="w-10 h-10 rounded-full object-cover border-2 border-gray-200 group-hover:border-[#292B97] transition-colors" 
// //               onError={(e) => { e.target.src = fallbackAvatar; }} 
// //             />
// //           ) : (
// //             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#292B97] to-[#4B6CB7] flex items-center justify-center text-white text-sm font-bold">
// //               {(authorName || 'A').charAt(0).toUpperCase()}
// //             </div>
// //           )}
// //           <div>
// //             <p className="text-sm font-semibold text-gray-900 group-hover:text-[#292B97] transition-colors">
// //               {authorName || 'Admin'}
// //             </p>
// //             <p className="text-xs text-gray-400 mt-0.5">{formatDate(blog.createdAt || blog.date)}</p>
// //           </div>
// //         </button>
// //       </div>

// //       {blog.description && (
// //         <p className="text-sm text-gray-600 leading-relaxed mb-6">{blog.description}</p>
// //       )}

// //       {blog.tags?.length > 0 && (
// //         <div className="flex flex-wrap gap-2 mb-6">
// //           {blog.tags.map((tag) => (
// //             <span key={tag} className="px-3 py-1 bg-[#292B97]/5 text-[#292B97] text-xs font-medium rounded-full border border-[#292B97]/20">
// //               #{tag}
// //             </span>
// //           ))}
// //         </div>
// //       )}

// //       <div
// //         className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#4B6CB7] prose-a:hover:text-[#292B97]"
// //         dangerouslySetInnerHTML={{ __html: blog.content || '<p>No content available.</p>' }}
// //       />

// //       {/* Share */}
// //       <div className="mt-10 pt-6 border-t border-gray-100">
// //         <p className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-3">Share this article</p>
// //         <div className="flex flex-wrap gap-3">
// //           {socialLinks.map(({ icon: Icon, color, href, label }) => (
// //             <a
// //               key={label}
// //               href={href}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
// //               style={{ backgroundColor: color }}
// //               title={label}
// //             >
// //               <Icon className="text-lg" />
// //             </a>
// //           ))}
// //           <button
// //             onClick={handleCopy}
// //             className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all ${copied ? 'bg-green-500' : 'bg-gray-600'}`}
// //             title="Copy link"
// //           >
// //             {copied ? <FaCheck /> : <FaCopy />}
// //           </button>
// //         </div>
// //       </div>

// //       <CommentSection blogId={blog._id} />
// //     </article>
// //   );

// //   const Sidebar = () => (
// //     <aside className="w-full lg:w-80 shrink-0 sticky top-20 self-start">
// //       <div className="space-y-10">
// //         {/* Related Blogs */}
// //         <div>
// //           <h3 className="text-lg font-bold text-gray-900 mb-4">Related Blogs</h3>
// //           {relatedBlogs.length === 0 ? (
// //             <p className="text-sm text-gray-500">No related posts yet.</p>
// //           ) : (
// //             <div className="space-y-4">
// //               {relatedBlogs.map((item) => (
// //                 <button
// //                   key={item._id}
// //                   onClick={() => navigate(`/blog/${toSlug(item.title)}`)}
// //                   className="flex items-start gap-3 text-left w-full group"
// //                 >
// //                   <FaChevronRight className="text-[#292B97] mt-1.5 text-xs shrink-0" />
// //                   <p className="text-sm text-[#292B97] group-hover:underline leading-tight">
// //                     {truncateTitle(item.title)}
// //                   </p>
// //                 </button>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         {/* Categories */}
// //         <div>
// //           <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
// //           {allServices.length === 0 ? (
// //             <p className="text-sm text-gray-500">No categories found.</p>
// //           ) : (
// //             <div className="space-y-3">
// //               {allServices.map((service) => (
// //                 <button
// //                   key={service}
// //                   onClick={() => navigate('/blog', { state: { activeTab: service } })}
// //                   className="flex items-center gap-2 text-[#292B97] hover:underline text-sm capitalize w-full text-left"
// //                 >
// //                   <FaChevronRight className="text-xs" />
// //                   {service}
// //                 </button>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </aside>
// //   );

// //   return (
// //     <div className="min-h-screen bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="flex items-center gap-2 text-gray-600 hover:text-[#292B97] mb-8 transition-colors"
// //         >
// //           <FaArrowLeft className="text-sm" />
// //           <span className="font-medium">Back</span>
// //         </button>

// //         <img
// //           src={bannerUrl}
// //           alt={blog.title}
// //           className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8 shadow-md"
// //           loading="lazy"
// //         />

// //         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
// //           {blog.title}
// //         </h1>

// //         <div className="flex flex-col lg:flex-row gap-12">
// //           <main className="flex-1">
// //             <ArticleContent />
// //           </main>
// //           <Sidebar />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BlogDetailPage;



// // import React, { useEffect, useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { VITE_BACKEND_URL } from '../../../config.js';
// // import {
// //   FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedinIn,
// //   FaWhatsapp, FaChevronRight, FaCopy, FaCheck, FaUser,
// // } from 'react-icons/fa';
// // import { getBlogs, getBlogBySlug } from '../../service/blogs.service.js';
// // import { submitComment, fetchApprovedComments } from '../../service/comment.service';

// // /* ── Constants ── */
// // const fallbackImage = '/fallback-blog.jpg';
// // const fallbackAvatar = 'https://ui-avatars.com/api/?name=Author&background=292B97&color=fff&size=80';

// // /* ════════════════════════════════
// //    IMAGE HELPERS
// //    API response has:
// //      bannerImage: { mode: "url", src: "http://..." }
// //      image:       { mode: "url", src: "http://..." }
// //    ════════════════════════════════ */
// // const resolveImgUrl = (imgObj) => {
// //   if (!imgObj) return null;
// //   // plain string
// //   if (typeof imgObj === 'string') {
// //     if (!imgObj.trim()) return null;
// //     return imgObj.startsWith('http') ? imgObj : `${VITE_BACKEND_URL}/${imgObj.replace(/^\//, '')}`;
// //   }
// //   // object with src
// //   if (imgObj?.src) {
// //     const s = imgObj.src.trim();
// //     if (!s) return null;
// //     if (imgObj.mode === 'url' || s.startsWith('http')) return s;          // already full URL
// //     return `${VITE_BACKEND_URL}${s.startsWith('/') ? s : '/' + s}`;      // upload path
// //   }
// //   return null;
// // };

// // // Best banner for a blog: try bannerImage → image → null
// // const getBlogBanner = (blog) =>
// //   resolveImgUrl(blog?.bannerImage) || resolveImgUrl(blog?.image) || null;

// // // Author avatar
// // const getAuthorAvatar = (authorObj) =>
// //   authorObj?.image ? resolveImgUrl(authorObj.image) : null;

// // const formatDate = (d) => {
// //   if (!d) return '—';
// //   return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
// // };

// // const toSlug = (t = '') =>
// //   t.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');

// // // Author name → URL slug matching route: blog/author/:authorName
// // const toAuthorSlug = (name = '') =>
// //   name.toLowerCase().trim().replace(/\s+/g, '-');

// // /* ════════════════════════════════
// //    COMMENT SECTION
// //    ════════════════════════════════ */
// // const CommentSection = ({ blogId }) => {
// //   const [comments, setComments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [submitting, setSubmitting] = useState(false);
// //   const [formOpen, setFormOpen] = useState(false);
// //   const [submitted, setSubmitted] = useState(false);
// //   const [form, setForm] = useState({ name: '', email: '', message: '' });
// //   const [errors, setErrors] = useState({});

// //   useEffect(() => {
// //     if (!blogId) return;
// //     (async () => {
// //       try {
// //         setLoading(true);
// //         const res = await fetchApprovedComments(blogId);
// //         setComments(res.data?.comments || []);
// //       } catch { /* silent */ } finally { setLoading(false); }
// //     })();
// //   }, [blogId]);

// //   const validate = () => {
// //     const e = {};
// //     if (!form.name.trim()) e.name = 'Name is required';
// //     if (!form.email.trim()) e.email = 'Email is required';
// //     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
// //     if (!form.message.trim()) e.message = 'Comment is required';
// //     return e;
// //   };

// //   const handleSubmit = async (ev) => {
// //     ev.preventDefault();
// //     const errs = validate();
// //     if (Object.keys(errs).length) { setErrors(errs); return; }
// //     setSubmitting(true);
// //     try {
// //       await submitComment(blogId, form);
// //       setSubmitted(true);
// //       setForm({ name: '', email: '', message: '' });
// //       setErrors({});
// //       setFormOpen(false);
// //     } catch (err) {
// //       setErrors({ submit: err.response?.data?.message || 'Failed to post comment' });
// //     } finally { setSubmitting(false); }
// //   };

// //   const onChange = (ev) => {
// //     const { name, value } = ev.target;
// //     setForm(p => ({ ...p, [name]: value }));
// //     if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
// //   };

// //   return (
// //     <div className="mt-12 pt-8 border-t border-gray-100">
// //       {submitted && (
// //         <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700 flex items-center gap-3">
// //           <FaCheck className="shrink-0" />
// //           <span>Comment submitted! It will appear after review.</span>
// //           <button onClick={() => setSubmitted(false)} className="ml-auto text-green-500">×</button>
// //         </div>
// //       )}

// //       {!formOpen ? (
// //         <div onClick={() => setFormOpen(true)}
// //           className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3.5 cursor-pointer hover:bg-white hover:shadow-sm transition-all group mb-8">
// //           <div className="flex items-center gap-3">
// //             <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
// //               <FaUser className="text-sm" />
// //             </div>
// //             <span className="text-gray-400 text-sm">Write a comment...</span>
// //           </div>
// //         </div>
// //       ) : (
// //         <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100 shadow-sm">
// //           <div className="flex items-center justify-between mb-5">
// //             <h4 className="text-base font-semibold text-gray-900">Add a Comment</h4>
// //             <button onClick={() => setFormOpen(false)} className="text-gray-400 hover:text-gray-600 text-xl">×</button>
// //           </div>
// //           <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               <div>
// //                 <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Name" autoFocus
// //                   className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none text-sm ${errors.name ? 'border-red-400' : 'border-gray-200'}`} />
// //                 {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
// //               </div>
// //               <div>
// //                 <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Email"
// //                   className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none text-sm ${errors.email ? 'border-red-400' : 'border-gray-200'}`} />
// //                 {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
// //               </div>
// //             </div>
// //             <div>
// //               <textarea name="message" value={form.message} onChange={onChange} rows={4} placeholder="Share your thoughts..."
// //                 className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none resize-y text-sm ${errors.message ? 'border-red-400' : 'border-gray-200'}`} />
// //               {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
// //             </div>
// //             {errors.submit && <p className="text-xs text-red-600">{errors.submit}</p>}
// //             <div className="flex justify-end gap-3">
// //               <button type="button" onClick={() => setFormOpen(false)} className="px-5 py-2 text-sm text-gray-500">Cancel</button>
// //               <button type="submit" disabled={submitting}
// //                 className="px-6 py-2 bg-[#292B97] text-white rounded-xl hover:bg-[#1e237e] disabled:opacity-50 flex items-center gap-2 text-sm font-medium">
// //                 {submitting && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
// //                 {submitting ? 'Posting...' : 'Submit'}
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       )}

// //       {comments.length > 0 && (
// //         <h3 className="text-base font-bold text-gray-900 mb-4">
// //           Comments <span className="text-gray-400 font-normal">({comments.length})</span>
// //         </h3>
// //       )}

// //       {loading ? (
// //         <div className="flex justify-center py-8">
// //           <div className="animate-spin h-7 w-7 border-[3px] border-[#292B97] border-t-transparent rounded-full" />
// //         </div>
// //       ) : comments.length === 0 ? (
// //         <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
// //           <svg className="w-12 h-12 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
// //           </svg>
// //           <p className="text-gray-400 text-sm">No comments yet.</p>
// //           <button onClick={() => setFormOpen(true)} className="mt-3 text-[#292B97] text-sm font-medium">Be the first →</button>
// //         </div>
// //       ) : (
// //         <div className="space-y-4">
// //           {comments.map((c) => (
// //             <div key={c._id} className="bg-white rounded-xl p-4 shadow-sm">
// //               <div className="flex items-center gap-3 mb-2">
// //                 <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#292B97] to-[#4B6CB7] flex items-center justify-center text-white font-bold text-sm">
// //                   {c.name.charAt(0).toUpperCase()}
// //                 </div>
// //                 <div>
// //                   <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
// //                   <p className="text-xs text-gray-400">{new Date(c.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
// //                 </div>
// //               </div>
// //               <p className="text-sm text-gray-700 leading-relaxed pl-12">{c.message}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // /* ════════════════════════════════
// //    MAIN BLOG DETAIL PAGE
// //    ════════════════════════════════ */
// // const BlogDetailPage = () => {
// //   const { title: slug } = useParams();
// //   const navigate = useNavigate();

// //   const [blog, setBlog] = useState(null);
// //   const [relatedBlogs, setRelatedBlogs] = useState([]);
// //   const [allCategories, setAllCategories] = useState([]);
// //   const [allTags, setAllTags] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [copied, setCopied] = useState(false);

// //   const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

// //   const handleCopy = () => {
// //     navigator.clipboard.writeText(shareUrl).then(() => {
// //       setCopied(true);
// //       setTimeout(() => setCopied(false), 2000);
// //     });
// //   };

// //   useEffect(() => {
// //     const load = async () => {
// //       try {
// //         setLoading(true);
// //         setError(null);

// //         let currentBlog = null;

// //         // 1. Try slug API
// //         try {
// //           const res = await getBlogBySlug(slug);
// //           currentBlog = res.data?.blog || res.data?.data?.blog || null;
// //         } catch { /* fallback below */ }

// //         // 2. Fetch all published blogs (needed for sidebar + fallback)
// //         const allRes = await getBlogs();
// //         const allBlogs = allRes.data?.blogs || allRes.data?.data?.blogs || [];
// //         const published = allBlogs.filter(b => b.status?.toLowerCase() === 'published');

// //         // 3. Fallback: match by slug field or title-slug
// //         if (!currentBlog) {
// //           currentBlog = published.find(b => b.slug === slug || toSlug(b.title) === slug) || null;
// //         }

// //         if (!currentBlog) { setError('not_found'); return; }

// //         setBlog(currentBlog);

// //         // Related: same category (API field = "category")
// //         setRelatedBlogs(
// //           published.filter(b => b.category === currentBlog.category && b._id !== currentBlog._id).slice(0, 5)
// //         );

// //         // All categories
// //         setAllCategories([...new Set(published.map(b => b.category).filter(Boolean))]);

// //         // Tag frequency
// //         const freq = {};
// //         published.forEach(b => (b.tags || []).forEach(t => { if (t) freq[t] = (freq[t] || 0) + 1; }));
// //         setAllTags(Object.entries(freq).sort((a, b) => b[1] - a[1]).map(([t]) => t).slice(0, 12));

// //       } catch (e) {
// //         console.error(e);
// //         setError('failed');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (slug) { load(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
// //   }, [slug]);

// //   if (loading) return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //       <div className="text-center">
// //         <div className="animate-spin h-12 w-12 border-4 border-[#292B97] border-t-transparent rounded-full mx-auto" />
// //         <p className="mt-6 text-gray-500 text-sm">Loading article...</p>
// //       </div>
// //     </div>
// //   );

// //   if (error || !blog) return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
// //       <div className="text-center">
// //         <h1 className="text-3xl font-bold mb-4 text-gray-800">Article Not Found</h1>
// //         <button onClick={() => navigate('/blog')} className="px-6 py-3 bg-[#292B97] text-white rounded-xl hover:bg-[#1e237e]">
// //           Back to Blog
// //         </button>
// //       </div>
// //     </div>
// //   );

// //   // Author — API returns populated object: { _id, name, image, email }
// //   const authorObj = typeof blog.author === 'object' ? blog.author : null;
// //   const authorName = authorObj?.name || (typeof blog.author === 'string' ? blog.author : 'Admin');
// //   const authorImgUrl = getAuthorAvatar(authorObj);

// //   // Banner image — API fields: bannerImage, image
// //   const bannerUrl = getBlogBanner(blog);

// //   const socialLinks = [
// //     { icon: FaFacebookF, color: '#1877F2', label: 'Facebook', href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
// //     { icon: FaTwitter, color: '#1DA1F2', label: 'Twitter', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}` },
// //     { icon: FaLinkedinIn, color: '#0A66C2', label: 'LinkedIn', href: `https://linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}` },
// //     { icon: FaWhatsapp, color: '#25D366', label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(shareUrl)}` },
// //   ];

// //   /* ── Sidebar ── */
// //   const Sidebar = () => (
// //     <aside className="w-full lg:w-72 xl:w-80 shrink-0">
// //       <div className="space-y-6 lg:sticky lg:top-24">

// //         {/* Related Blogs */}
// //         {relatedBlogs.length > 0 && (
// //           <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
// //             <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Related Articles</h3>
// //             <div className="space-y-4">
// //               {relatedBlogs.map((item) => {
// //                 const thumb = getBlogBanner(item);
// //                 return (
// //                   <button
// //                     key={item._id}
// //                     onClick={() => navigate(`/blog/${item.slug || toSlug(item.title)}`)}
// //                     className="flex items-start gap-3 text-left w-full group"
// //                   >
// //                     <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-200">
// //                       {thumb ? (
// //                         <img src={thumb} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
// //                           onError={(e) => { e.target.style.display = 'none'; }} />
// //                       ) : (
// //                         <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold text-sm">
// //                           {(item.title || '?').charAt(0).toUpperCase()}
// //                         </div>
// //                       )}
// //                     </div>
// //                     <p className="text-sm text-gray-700 group-hover:text-[#292B97] leading-tight line-clamp-2 transition-colors pt-0.5">
// //                       {item.title}
// //                     </p>
// //                   </button>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         )}

// //         {/* Categories */}
// //         {allCategories.length > 0 && (
// //           <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
// //             <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Categories</h3>
// //             <div className="space-y-1">
// //               {allCategories.map((cat) => (
// //                 <button
// //                   key={cat}
// //                   onClick={() => navigate('/blog', { state: { activeTab: cat } })}
// //                   className="flex items-center gap-2 text-gray-700 hover:text-[#292B97] text-sm capitalize w-full text-left py-1.5 px-2 rounded-lg hover:bg-white transition-all"
// //                 >
// //                   <FaChevronRight className="text-[9px] text-gray-400 shrink-0" />
// //                   {cat}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* Tags */}
// //         {allTags.length > 0 && (
// //           <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
// //             <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Popular Tags</h3>
// //             <div className="flex flex-wrap gap-2">
// //               {allTags.map(tag => (
// //                 <span key={tag} className="px-2.5 py-1 bg-white border border-gray-200 text-xs text-gray-600 rounded-full hover:border-[#292B97] hover:text-[#292B97] cursor-pointer transition">
// //                   #{tag}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </aside>
// //   );

// //   return (
// //     <div className="min-h-screen bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

// //         {/* Back */}
// //         <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-[#292B97] mb-8 transition-colors">
// //           <FaArrowLeft className="text-sm" />
// //           <span className="font-medium text-sm">Back</span>
// //         </button>

// //         {/* Two-column layout */}
// //         <div className="flex flex-col lg:flex-row gap-10">

// //           {/* ── Main Article ── */}
// //           <main className="flex-1 min-w-0">

// //             {/* Banner image — inside main column so sidebar stays beside it from top */}
// //             {bannerUrl && (
// //               <img
// //                 src={bannerUrl}
// //                 alt={blog.title}
// //                 className="w-full h-56 md:h-72 object-cover rounded-2xl mb-6 shadow-sm"
// //                 loading="lazy"
// //                 onError={(e) => { e.target.style.display = 'none'; }}
// //               />
// //             )}

// //             {/* Title */}
// //             <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-5">
// //               {blog.title}
// //             </h1>

// //             {/* Author + date + category */}
// //             <div className="flex items-center gap-3 flex-wrap mb-6 pb-5 border-b border-gray-100">
// //               <button
// //                 onClick={() => {
// //                   // Route: blog/author/:authorName — uses name-based slug
// //                   if (authorName && authorName !== 'Admin') {
// //                     navigate(`/blog/author/${toAuthorSlug(authorName)}`);
// //                   }
// //                 }}
// //                 className={`flex items-center gap-3 group ${authorName !== 'Admin' ? 'cursor-pointer' : 'cursor-default'}`}
// //               >
// //                 {authorImgUrl ? (
// //                   <img src={authorImgUrl} alt={authorName}
// //                     className="w-9 h-9 rounded-full object-cover border-2 border-gray-200 group-hover:border-[#292B97] transition-colors"
// //                     onError={(e) => { e.target.src = fallbackAvatar; }} />
// //                 ) : (
// //                   <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#292B97] to-[#4B6CB7] flex items-center justify-center text-white text-sm font-bold shrink-0">
// //                     {(authorName || 'A').charAt(0).toUpperCase()}
// //                   </div>
// //                 )}
// //                 <div className="text-left">
// //                   <p className="text-sm font-semibold text-gray-900 group-hover:text-[#292B97] transition-colors leading-none">
// //                     {authorName}
// //                   </p>
// //                   <p className="text-xs text-gray-400 mt-0.5">
// //                     {formatDate(blog.publishedDate || blog.createdAt || blog.date)}
// //                   </p>
// //                 </div>
// //               </button>

// //               {blog.category && (
// //                 <span className="ml-auto px-3 py-1 bg-[#292B97]/8 text-[#292B97] text-xs font-semibold rounded-full capitalize">
// //                   {blog.category}
// //                 </span>
// //               )}
// //             </div>

// //             {/* Description */}
// //             {blog.description && (
// //               <p className="text-base text-gray-600 leading-relaxed mb-6">{blog.description}</p>
// //             )}

// //             {/* Tags */}
// //             {blog.tags?.length > 0 && (
// //               <div className="flex flex-wrap gap-2 mb-6">
// //                 {blog.tags.map(tag => (
// //                   <span key={tag} className="px-3 py-1 bg-[#292B97]/5 text-[#292B97] text-xs font-medium rounded-full border border-[#292B97]/20">
// //                     #{tag}
// //                   </span>
// //                 ))}
// //               </div>
// //             )}

// //             {/* HTML Content from Summernote */}
// //             <div
// //               className="prose prose-sm max-w-none
// //                 prose-headings:text-gray-900 prose-headings:font-bold
// //                 prose-p:text-gray-700 prose-p:leading-relaxed
// //                 prose-a:text-[#4B6CB7] prose-a:hover:text-[#292B97]
// //                 prose-img:rounded-xl prose-img:shadow-sm prose-img:mx-auto
// //                 prose-strong:text-gray-900
// //                 prose-ul:text-gray-700 prose-ol:text-gray-700"
// //               dangerouslySetInnerHTML={{ __html: blog.content || '<p>No content available.</p>' }}
// //             />

// //             {/* Share */}
// //             <div className="mt-10 pt-6 border-t border-gray-100">
// //               <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">Share this article</p>
// //               <div className="flex flex-wrap gap-2">
// //                 {socialLinks.map(({ icon: Icon, color, href, label }) => (
// //                   <a key={label} href={href} target="_blank" rel="noopener noreferrer"
// //                     className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform text-sm"
// //                     style={{ backgroundColor: color }} title={label}>
// //                     <Icon />
// //                   </a>
// //                 ))}
// //                 <button onClick={handleCopy}
// //                   className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm transition-all ${copied ? 'bg-green-500' : 'bg-gray-500 hover:bg-gray-600'}`}
// //                   title="Copy link">
// //                   {copied ? <FaCheck /> : <FaCopy />}
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Comments */}
// //             <CommentSection blogId={blog._id} />
// //           </main>

// //           {/* ── Sidebar ── */}
// //           <Sidebar />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BlogDetailPage;

// // import React, { useEffect, useState,useRef } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { VITE_BACKEND_URL } from '../../../config.js';
// // import {
// //   FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedinIn,
// //   FaWhatsapp, FaChevronRight, FaCopy, FaCheck, FaUser,
// // } from 'react-icons/fa';
// // import { getBlogs, getBlogBySlug } from '../../service/blogs.service.js';
// // import { submitComment, fetchApprovedComments } from '../../service/comment.service';

// // /* ── Constants ── */
// // const fallbackAvatar = 'https://ui-avatars.com/api/?name=Author&background=292B97&color=fff&size=80';

// // /* ── Image Helpers ── */
// // const resolveImgUrl = (imgObj) => {
// //   if (!imgObj) return null;
// //   if (typeof imgObj === 'string') {
// //     if (!imgObj.trim()) return null;
// //     return imgObj.startsWith('http') ? imgObj : `${VITE_BACKEND_URL}/${imgObj.replace(/^\//, '')}`;
// //   }
// //   if (imgObj?.src) {
// //     const s = imgObj.src.trim();
// //     if (!s) return null;
// //     if (imgObj.mode === 'url' || s.startsWith('http')) return s;
// //     return `${VITE_BACKEND_URL}${s.startsWith('/') ? s : '/' + s}`;
// //   }
// //   return null;
// // };

// // const getBlogBanner = (blog) =>
// //   resolveImgUrl(blog?.bannerImage) || resolveImgUrl(blog?.image) || null;

// // const getAuthorAvatar = (authorObj) =>
// //   authorObj?.image ? resolveImgUrl(authorObj.image) : null;

// // const formatDate = (d) => {
// //   if (!d) return '—';
// //   return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
// // };

// // const toSlug = (t = '') =>
// //   t.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');

// // const toAuthorSlug = (name = '') =>
// //   name.toLowerCase().trim().replace(/\s+/g, '-');

// // /* ════════════════════════════════
// //    BLOG CONTENT STYLES
// //    KEY FIX: table wrapper makes wide tables scroll horizontally
// //    instead of bleeding into sidebar.
// //    ════════════════════════════════ */
// // const BLOG_CONTENT_STYLES = `
// //   /* Wrapper that constrains & scrolls wide tables */
// //   .blog-content .table-wrapper {
// //     width: 100%;
// //     overflow-x: auto;
// //     -webkit-overflow-scrolling: touch;
// //     margin: 1.25rem 0;
// //     border-radius: 0.5rem;
// //     border: 1px solid #e5e7eb;
// //   }

// //   .blog-content table {
// //     width: 100%;
// //     min-width: 480px;          /* table won't crush below this */
// //     border-collapse: collapse;
// //     font-size: 0.875rem;
// //     margin: 0;                 /* margin lives on wrapper */
// //   }

// //   .blog-content th {
// //     background: #f3f4f6;
// //     font-weight: 600;
// //     padding: 10px 14px;
// //     text-align: left;
// //     color: #111827;
// //     border: 1px solid #d1d5db;
// //     white-space: nowrap;
// //   }

// //   .blog-content td {
// //     padding: 8px 14px;
// //     vertical-align: top;
// //     color: #374151;
// //     border: 1px solid #d1d5db;
// //     line-height: 1.6;
// //   }

// //   .blog-content tr:nth-child(even) td {
// //     background: #f9fafb;
// //   }

// //   /* Lists */
// //   .blog-content ul {
// //     list-style-type: disc !important;
// //     padding-left: 1.75em !important;
// //     margin: 0.75rem 0 !important;
// //   }
// //   .blog-content ol {
// //     list-style-type: decimal !important;
// //     padding-left: 1.75em !important;
// //     margin: 0.75rem 0 !important;
// //   }
// //   .blog-content li {
// //     display: list-item !important;
// //     margin: 0.4rem 0 !important;
// //     line-height: 1.7;
// //     color: #374151;
// //   }

// //   /* Paragraphs & headings */
// //   .blog-content p {
// //     margin: 0.8rem 0;
// //     line-height: 1.85;
// //     color: #374151;
// //   }
// //   .blog-content h1,
// //   .blog-content h2,
// //   .blog-content h3,
// //   .blog-content h4,
// //   .blog-content h5,
// //   .blog-content h6 {
// //     font-weight: 700;
// //     color: #111827;
// //     margin-top: 1.6rem;
// //     margin-bottom: 0.5rem;
// //     line-height: 1.3;
// //   }
// //   .blog-content h1 { font-size: 1.75rem; }
// //   .blog-content h2 { font-size: 1.4rem;  }
// //   .blog-content h3 { font-size: 1.2rem;  }
// //   .blog-content h4 { font-size: 1.05rem; }

// //   /* Links */
// //   .blog-content a            { color: #4B6CB7; text-decoration: underline; }
// //   .blog-content a:hover      { color: #292B97; }

// //   /* Images */
// //   .blog-content img {
// //     max-width: 100%;
// //     height: auto;
// //     border-radius: 0.75rem;
// //     margin: 1rem auto;
// //     display: block;
// //     box-shadow: 0 1px 4px rgba(0,0,0,0.1);
// //   }

// //   /* Blockquote */
// //   .blog-content blockquote {
// //     border-left: 4px solid #292B97;
// //     padding: 0.5rem 0 0.5rem 1rem;
// //     margin: 1rem 0;
// //     background: #f0f1ff;
// //     border-radius: 0 0.5rem 0.5rem 0;
// //     font-style: italic;
// //     color: #374151;
// //   }

// //   /* Code */
// //   .blog-content pre {
// //     background: #f3f4f6;
// //     border-radius: 0.375rem;
// //     padding: 1rem;
// //     overflow-x: auto;
// //     margin: 1rem 0;
// //     font-family: monospace;
// //     font-size: 0.875rem;
// //   }
// //   .blog-content code {
// //     background: #f3f4f6;
// //     border-radius: 0.25rem;
// //     padding: 0.15em 0.4em;
// //     font-family: monospace;
// //     font-size: 0.875rem;
// //   }

// //   .blog-content strong { color: #111827; }
// // `;

// // /* ────────────────────────────────────────────────
// //    Wrap every <table> in a scrollable div after
// //    dangerouslySetInnerHTML has rendered.
// //    Called once via useEffect on the content div.
// // ──────────────────────────────────────────────── */
// // function wrapTables(containerEl) {
// //   if (!containerEl) return;
// //   containerEl.querySelectorAll('table').forEach((table) => {
// //     if (table.parentElement?.classList.contains('table-wrapper')) return; // already wrapped
// //     const wrapper = document.createElement('div');
// //     wrapper.className = 'table-wrapper';
// //     table.parentNode.insertBefore(wrapper, table);
// //     wrapper.appendChild(table);
// //   });
// // }

// // /* ════════════════════════════════
// //    COMMENT SECTION
// //    ════════════════════════════════ */
// // const CommentSection = ({ blogId }) => {
// //   const [comments,   setComments]   = useState([]);
// //   const [loading,    setLoading]    = useState(true);
// //   const [submitting, setSubmitting] = useState(false);
// //   const [formOpen,   setFormOpen]   = useState(false);
// //   const [submitted,  setSubmitted]  = useState(false);
// //   const [form,       setForm]       = useState({ name: '', email: '', message: '' });
// //   const [errors,     setErrors]     = useState({});

// //   useEffect(() => {
// //     if (!blogId) return;
// //     (async () => {
// //       try {
// //         setLoading(true);
// //         const res = await fetchApprovedComments(blogId);
// //         setComments(res.data?.comments || []);
// //       } catch { } finally { setLoading(false); }
// //     })();
// //   }, [blogId]);

// //   const validate = () => {
// //     const e = {};
// //     if (!form.name.trim())    e.name    = 'Name is required';
// //     if (!form.email.trim())   e.email   = 'Email is required';
// //     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
// //     if (!form.message.trim()) e.message = 'Comment is required';
// //     return e;
// //   };

// //   const handleSubmit = async (ev) => {
// //     ev.preventDefault();
// //     const errs = validate();
// //     if (Object.keys(errs).length) { setErrors(errs); return; }
// //     setSubmitting(true);
// //     try {
// //       await submitComment(blogId, form);
// //       setSubmitted(true);
// //       setForm({ name: '', email: '', message: '' });
// //       setErrors({});
// //       setFormOpen(false);
// //     } catch (err) {
// //       setErrors({ submit: err.response?.data?.message || 'Failed to post comment' });
// //     } finally { setSubmitting(false); }
// //   };

// //   const onChange = (ev) => {
// //     const { name, value } = ev.target;
// //     setForm(p => ({ ...p, [name]: value }));
// //     if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
// //   };

// //   return (
// //     <div className="mt-12 pt-8 border-t border-gray-100">
// //       {submitted && (
// //         <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700 flex items-center gap-3">
// //           <FaCheck className="shrink-0" />
// //           <span>Comment submitted! It will appear after review.</span>
// //           <button onClick={() => setSubmitted(false)} className="ml-auto text-green-500">×</button>
// //         </div>
// //       )}

// //       {!formOpen ? (
// //         <div
// //           onClick={() => setFormOpen(true)}
// //           className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3.5 cursor-pointer hover:bg-white hover:shadow-sm transition-all mb-8"
// //         >
// //           <div className="flex items-center gap-3">
// //             <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
// //               <FaUser className="text-sm" />
// //             </div>
// //             <span className="text-gray-400 text-sm">Write a comment...</span>
// //           </div>
// //         </div>
// //       ) : (
// //         <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100 shadow-sm">
// //           <div className="flex items-center justify-between mb-5">
// //             <h4 className="text-base font-semibold text-gray-900">Add a Comment</h4>
// //             <button onClick={() => setFormOpen(false)} className="text-gray-400 hover:text-gray-600 text-xl">×</button>
// //           </div>
// //           <form onSubmit={handleSubmit} className="space-y-4" noValidate>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               <div>
// //                 <input type="text" name="name" value={form.name} onChange={onChange}
// //                   placeholder="Name" autoFocus
// //                   className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none text-sm ${errors.name ? 'border-red-400' : 'border-gray-200'}`} />
// //                 {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
// //               </div>
// //               <div>
// //                 <input type="email" name="email" value={form.email} onChange={onChange}
// //                   placeholder="Email"
// //                   className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none text-sm ${errors.email ? 'border-red-400' : 'border-gray-200'}`} />
// //                 {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
// //               </div>
// //             </div>
// //             <div>
// //               <textarea name="message" value={form.message} onChange={onChange} rows={4}
// //                 placeholder="Share your thoughts..."
// //                 className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none resize-y text-sm ${errors.message ? 'border-red-400' : 'border-gray-200'}`} />
// //               {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
// //             </div>
// //             {errors.submit && <p className="text-xs text-red-600">{errors.submit}</p>}
// //             <div className="flex justify-end gap-3">
// //               <button type="button" onClick={() => setFormOpen(false)}
// //                 className="px-5 py-2 text-sm text-gray-500">Cancel</button>
// //               <button type="submit" disabled={submitting}
// //                 className="px-6 py-2 bg-[#292B97] text-white rounded-xl hover:bg-[#1e237e] disabled:opacity-50 flex items-center gap-2 text-sm font-medium">
// //                 {submitting && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
// //                 {submitting ? 'Posting...' : 'Submit'}
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       )}

// //       {comments.length > 0 && (
// //         <h3 className="text-base font-bold text-gray-900 mb-4">
// //           Comments <span className="text-gray-400 font-normal">({comments.length})</span>
// //         </h3>
// //       )}

// //       {loading ? (
// //         <div className="flex justify-center py-8">
// //           <div className="animate-spin h-7 w-7 border-[3px] border-[#292B97] border-t-transparent rounded-full" />
// //         </div>
// //       ) : comments.length === 0 ? (
// //         <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
// //           <svg className="w-12 h-12 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
// //               d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
// //           </svg>
// //           <p className="text-gray-400 text-sm">No comments yet.</p>
// //           <button onClick={() => setFormOpen(true)} className="mt-3 text-[#292B97] text-sm font-medium">
// //             Be the first →
// //           </button>
// //         </div>
// //       ) : (
// //         <div className="space-y-4">
// //           {comments.map((c) => (
// //             <div key={c._id} className="bg-white rounded-xl p-4 shadow-sm">
// //               <div className="flex items-center gap-3 mb-2">
// //                 <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#292B97] to-[#4B6CB7] flex items-center justify-center text-white font-bold text-sm">
// //                   {c.name.charAt(0).toUpperCase()}
// //                 </div>
// //                 <div>
// //                   <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
// //                   <p className="text-xs text-gray-400">
// //                     {new Date(c.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
// //                   </p>
// //                 </div>
// //               </div>
// //               <p className="text-sm text-gray-700 leading-relaxed pl-12">{c.message}</p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // /* ════════════════════════════════
// //    SIDEBAR CONTENT (shared desktop + mobile)
// //    ════════════════════════════════ */
// // const SidebarContent = ({ relatedBlogs, allCategories, allTags, navigate }) => (
// //   <>
// //     {relatedBlogs.length > 0 && (
// //       <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
// //         <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Related Articles</h3>
// //         <div className="space-y-4">
// //           {relatedBlogs.map((item) => {
// //             const thumb = getBlogBanner(item);
// //             return (
// //               <button
// //                 key={item._id}
// //                 onClick={() => navigate(`/blog/${item.slug || toSlug(item.title)}`)}
// //                 className="flex items-start gap-3 text-left w-full group"
// //               >
// //                 <div className="w-14 h-11 rounded-lg overflow-hidden shrink-0 bg-gray-200">
// //                   {thumb ? (
// //                     <img src={thumb} alt={item.title}
// //                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
// //                       onError={(e) => { e.target.style.display = 'none'; }} />
// //                   ) : (
// //                     <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold text-sm">
// //                       {(item.title || '?').charAt(0).toUpperCase()}
// //                     </div>
// //                   )}
// //                 </div>
// //                 <p className="text-xs text-gray-700 group-hover:text-[#292B97] leading-snug line-clamp-3 transition-colors">
// //                   {item.title}
// //                 </p>
// //               </button>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     )}

// //     {allCategories.length > 0 && (
// //       <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
// //         <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">Categories</h3>
// //         <div className="space-y-0.5">
// //           {allCategories.map((cat) => (
// //             <button key={cat}
// //               onClick={() => navigate('/blog', { state: { activeTab: cat } })}
// //               className="flex items-center gap-2 text-gray-700 hover:text-[#292B97] text-sm capitalize w-full text-left py-1.5 px-2 rounded-lg hover:bg-white transition-all">
// //               <FaChevronRight className="text-[9px] text-gray-400 shrink-0" />
// //               {cat}
// //             </button>
// //           ))}
// //         </div>
// //       </div>
// //     )}

// //     {allTags.length > 0 && (
// //       <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
// //         <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">Popular Tags</h3>
// //         <div className="flex flex-wrap gap-1.5">
// //           {allTags.map(tag => (
// //             <span key={tag}
// //               className="px-2.5 py-1 bg-white border border-gray-200 text-xs text-gray-600 rounded-full hover:border-[#292B97] hover:text-[#292B97] cursor-pointer transition">
// //               #{tag}
// //             </span>
// //           ))}
// //         </div>
// //       </div>
// //     )}
// //   </>
// // );

// // /* ════════════════════════════════
// //    MAIN PAGE
// //    ════════════════════════════════ */
// // const BlogDetailPage = () => {
// //   const { title: slug } = useParams();
// //   const navigate = useNavigate();

// //   const [blog,          setBlog]          = useState(null);
// //   const [relatedBlogs,  setRelatedBlogs]  = useState([]);
// //   const [allCategories, setAllCategories] = useState([]);
// //   const [allTags,       setAllTags]       = useState([]);
// //   const [loading,       setLoading]       = useState(true);
// //   const [error,         setError]         = useState(null);
// //   const [copied,        setCopied]        = useState(false);

// //   /* ref to the content div — used to wrap tables after render */
// //   const contentDivRef = useRef(null);

// //   const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

// //   const handleCopy = () => {
// //     navigator.clipboard.writeText(shareUrl).then(() => {
// //       setCopied(true);
// //       setTimeout(() => setCopied(false), 2000);
// //     });
// //   };

// //   useEffect(() => {
// //     const load = async () => {
// //       try {
// //         setLoading(true);
// //         setError(null);
// //         let currentBlog = null;

// //         try {
// //           const res = await getBlogBySlug(slug);
// //           currentBlog = res.data?.blog || res.data?.data?.blog || null;
// //         } catch { }

// //         const allRes   = await getBlogs();
// //         const allBlogs = allRes.data?.blogs || allRes.data?.data?.blogs || [];
// //         const published = allBlogs.filter(b => b.status?.toLowerCase() === 'published');

// //         if (!currentBlog)
// //           currentBlog = published.find(b => b.slug === slug || toSlug(b.title) === slug) || null;

// //         if (!currentBlog) { setError('not_found'); return; }

// //         setBlog(currentBlog);
// //         setRelatedBlogs(
// //           published.filter(b => b.category === currentBlog.category && b._id !== currentBlog._id).slice(0, 5)
// //         );
// //         setAllCategories([...new Set(published.map(b => b.category).filter(Boolean))]);

// //         const freq = {};
// //         published.forEach(b => (b.tags || []).forEach(t => { if (t) freq[t] = (freq[t] || 0) + 1; }));
// //         setAllTags(Object.entries(freq).sort((a, b) => b[1] - a[1]).map(([t]) => t).slice(0, 12));

// //       } catch (e) {
// //         console.error(e);
// //         setError('failed');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     if (slug) { load(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
// //   }, [slug]);

// //   /* Wrap tables once content is rendered into the DOM */
// //   useEffect(() => {
// //     if (blog && contentDivRef.current) {
// //       wrapTables(contentDivRef.current);
// //     }
// //   }, [blog]);

// //   if (loading) return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
// //       <div className="text-center">
// //         <div className="animate-spin h-12 w-12 border-4 border-[#292B97] border-t-transparent rounded-full mx-auto" />
// //         <p className="mt-6 text-gray-500 text-sm">Loading article...</p>
// //       </div>
// //     </div>
// //   );

// //   if (error || !blog) return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
// //       <div className="text-center">
// //         <h1 className="text-3xl font-bold mb-4 text-gray-800">Article Not Found</h1>
// //         <button onClick={() => navigate('/blog')}
// //           className="px-6 py-3 bg-[#292B97] text-white rounded-xl hover:bg-[#1e237e]">
// //           Back to Blog
// //         </button>
// //       </div>
// //     </div>
// //   );

// //   const authorObj    = typeof blog.author === 'object' ? blog.author : null;
// //   const authorName   = authorObj?.name || (typeof blog.author === 'string' ? blog.author : 'Admin');
// //   const authorImgUrl = getAuthorAvatar(authorObj);
// //   const bannerUrl    = getBlogBanner(blog);

// //   const socialLinks = [
// //     { icon: FaFacebookF,  color: '#1877F2', label: 'Facebook',  href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
// //     { icon: FaTwitter,    color: '#1DA1F2', label: 'Twitter',   href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}` },
// //     { icon: FaLinkedinIn, color: '#0A66C2', label: 'LinkedIn',  href: `https://linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}` },
// //     { icon: FaWhatsapp,   color: '#25D366', label: 'WhatsApp',  href: `https://wa.me/?text=${encodeURIComponent(shareUrl)}` },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-white">
// //       <style>{BLOG_CONTENT_STYLES}</style>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

// //         {/* Back */}
// //         <button onClick={() => navigate(-1)}
// //           className="flex items-center gap-2 text-gray-600 hover:text-[#292B97] mb-8 transition-colors">
// //           <FaArrowLeft className="text-sm" />
// //           <span className="font-medium text-sm">Back</span>
// //         </button>

// //         {/*
// //           ┌──────────────────────────────────┬─────────────────┐
// //           │  [Banner full width of column]   │  Related blogs  │
// //           │  Title                           │  Categories     │
// //           │  Author / Date                   │  Tags (sticky)  │
// //           │  Description                     │                 │
// //           │  Content (tables scroll inline)  │                 │
// //           │  Share  /  Comments              │                 │
// //           └──────────────────────────────────┴─────────────────┘
// //         */}
// //         <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 items-start">

// //           {/* ══ LEFT COLUMN ══ */}
// //           <main className="flex-1 min-w-0 overflow-hidden">
// //             {/* min-w-0 + overflow-hidden keeps this column from
// //                 expanding beyond its flex share, which is what
// //                 caused the table to bleed into the sidebar */}

// //             {/* Banner */}
// //             {bannerUrl && (
// //               <div className="w-full mb-6">
// //                 <img
// //                   src={bannerUrl}
// //                   alt={blog.title}
// //                   className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-2xl shadow-sm"
// //                   loading="lazy"
// //                   onError={(e) => { e.target.style.display = 'none'; }}
// //                 />
// //               </div>
// //             )}

// //             {/* Title */}
// //             <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-5">
// //               {blog.title}
// //             </h1>

// //             {/* Author row */}
// //             <div className="flex items-center gap-3 flex-wrap mb-6 pb-5 border-b border-gray-100">
// //               <button
// //                 onClick={() => {
// //                   if (authorName && authorName !== 'Admin')
// //                     navigate(`/blog/author/${toAuthorSlug(authorName)}`);
// //                 }}
// //                 className={`flex items-center gap-3 group ${authorName !== 'Admin' ? 'cursor-pointer' : 'cursor-default'}`}
// //               >
// //                 {authorImgUrl ? (
// //                   <img src={authorImgUrl} alt={authorName}
// //                     className="w-9 h-9 rounded-full object-cover border-2 border-gray-200 group-hover:border-[#292B97] transition-colors"
// //                     onError={(e) => { e.target.src = fallbackAvatar; }} />
// //                 ) : (
// //                   <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#292B97] to-[#4B6CB7] flex items-center justify-center text-white text-sm font-bold shrink-0">
// //                     {(authorName || 'A').charAt(0).toUpperCase()}
// //                   </div>
// //                 )}
// //                 <div className="text-left">
// //                   <p className="text-sm font-semibold text-gray-900 group-hover:text-[#292B97] transition-colors leading-none">
// //                     {authorName}
// //                   </p>
// //                   <p className="text-xs text-gray-400 mt-0.5">
// //                     {formatDate(blog.publishedDate || blog.createdAt || blog.date)}
// //                   </p>
// //                 </div>
// //               </button>

// //               {blog.category && (
// //                 <span className="ml-auto px-3 py-1 bg-[#292B97]/10 text-[#292B97] text-xs font-semibold rounded-full capitalize">
// //                   {blog.category}
// //                 </span>
// //               )}
// //             </div>

// //             {/* Description */}
// //             {blog.description && (
// //               <p className="text-base text-gray-600 leading-relaxed mb-6">{blog.description}</p>
// //             )}

// //             {/* Tags */}
// //             {blog.tags?.length > 0 && (
// //               <div className="flex flex-wrap gap-2 mb-6">
// //                 {blog.tags.map(tag => (
// //                   <span key={tag}
// //                     className="px-3 py-1 bg-[#292B97]/5 text-[#292B97] text-xs font-medium rounded-full border border-[#292B97]/20">
// //                     #{tag}
// //                   </span>
// //                 ))}
// //               </div>
// //             )}

// //             {/*
// //               Blog content from Summernote.
// //               Tables are wrapped in .table-wrapper by wrapTables() after mount.
// //               overflow-hidden on <main> + overflow-x:auto on wrapper = clean scroll.
// //             */}
// //             <div
// //               ref={contentDivRef}
// //               className="blog-content"
// //               dangerouslySetInnerHTML={{ __html: blog.content || '<p>No content available.</p>' }}
// //             />

// //             {/* Share */}
// //             <div className="mt-10 pt-6 border-t border-gray-100">
// //               <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
// //                 Share this article
// //               </p>
// //               <div className="flex flex-wrap gap-2">
// //                 {socialLinks.map(({ icon: Icon, color, href, label }) => (
// //                   <a key={label} href={href} target="_blank" rel="noopener noreferrer"
// //                     className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform text-sm"
// //                     style={{ backgroundColor: color }} title={label}>
// //                     <Icon />
// //                   </a>
// //                 ))}
// //                 <button onClick={handleCopy}
// //                   className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm transition-all ${copied ? 'bg-green-500' : 'bg-gray-500 hover:bg-gray-600'}`}
// //                   title="Copy link">
// //                   {copied ? <FaCheck /> : <FaCopy />}
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Comments */}
// //             <CommentSection blogId={blog._id} />

// //             {/* Mobile sidebar — below comments */}
// //             <div className="lg:hidden mt-10 space-y-5">
// //               <SidebarContent
// //                 relatedBlogs={relatedBlogs}
// //                 allCategories={allCategories}
// //                 allTags={allTags}
// //                 navigate={navigate}
// //               />
// //             </div>
// //           </main>

// //           {/* ══ RIGHT COLUMN — sticky sidebar (desktop only) ══ */}
// //           <aside className="hidden lg:block w-60 xl:w-64 shrink-0">
// //             {/* top-24 = below a ~96px fixed navbar. Change to top-6 if no fixed navbar. */}
// //             <div className="sticky top-24 space-y-5">
// //               <SidebarContent
// //                 relatedBlogs={relatedBlogs}
// //                 allCategories={allCategories}
// //                 allTags={allTags}
// //                 navigate={navigate}
// //               />
// //             </div>
// //           </aside>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BlogDetailPage;


// import React, { useEffect, useState, useRef } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { VITE_BACKEND_URL } from '../../../config.js';
// import {
//   FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedinIn,
//   FaWhatsapp, FaChevronRight, FaCopy, FaCheck, FaUser, FaClock,
// } from 'react-icons/fa';
// import { getBlogs, getBlogBySlug } from '../../service/blogs.service.js';
// import { submitComment, fetchApprovedComments } from '../../service/comment.service';

// const fallbackAvatar =
//   'https://ui-avatars.com/api/?name=Author&background=292B97&color=fff&size=80';

// /* ── Image helpers ── */
// const resolveImgUrl = (imgObj) => {
//   if (!imgObj) return null;
//   if (typeof imgObj === 'string') {
//     const s = imgObj.trim();
//     if (!s) return null;
//     return s.startsWith('http') ? s : `${VITE_BACKEND_URL}/${s.replace(/^\//, '')}`;
//   }
//   if (imgObj?.src) {
//     const s = imgObj.src.trim();
//     if (!s) return null;
//     if (imgObj.mode === 'url' || s.startsWith('http')) return s;
//     return `${VITE_BACKEND_URL}${s.startsWith('/') ? s : '/' + s}`;
//   }
//   return null;
// };

// const getBlogBanner  = (blog) =>
//   resolveImgUrl(blog?.bannerImage) || resolveImgUrl(blog?.image) || null;
// const getAuthorAvatar = (a) => (a?.image ? resolveImgUrl(a.image) : null);

// const formatDate = (d) => {
//   if (!d) return '—';
//   return new Date(d).toLocaleDateString('en-US', {
//     year: 'numeric', month: 'long', day: 'numeric',
//   });
// };

// const toSlug       = (t = '') =>
//   t.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
// const toAuthorSlug = (n = '') =>
//   n.toLowerCase().trim().replace(/\s+/g, '-');

// /* ════════════════════════════════════════
//    BLOG CONTENT STYLES

//    Table fix strategy (three layers):
//    1. wrapTables() wraps every <table> in .table-wrapper (overflow-x:auto)
//    2. table inside wrapper is constrained to 100% of wrapper width
//    3. <main> has  min-w-0 + overflow-hidden  so flex can't stretch it
//    ════════════════════════════════════════ */

// const BLOG_CONTENT_STYLES = `
//   /* ── Main Container ── */
//   .blog-content {
//     word-wrap: break-word;
//     overflow-wrap: break-word;
//   }

//   /* ── Table Styling (The Ultimate Fix) ── */
//   .blog-content table {
//     width: 100% !important;
//     border-collapse: collapse !important;
//     margin: 1.5rem 0 !important;
//     font-size: 0.95rem !important;
//     background-color: #ffffff !important;
//     border: 1px solid #e2e8f0 !important;
//     box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1) !important;
//   }

//   .blog-content th {
//     background-color: #f8fafc !important;
//     color: #1e293b !important;
//     font-weight: 700 !important;
//     text-transform: uppercase !important;
//     font-size: 0.75rem !important;
//     letter-spacing: 0.05em !important;
//     padding: 12px 15px !important;
//     border: 1px solid #e2e8f0 !important;
//     text-align: left !important;
//   }

//   .blog-content td {
//     padding: 12px 15px !important;
//     border: 1px solid #e2e8f0 !important;
//     color: #475569 !important;
//     vertical-align: middle !important;
//     line-height: 1.5 !important;
//   }

//   .blog-content tr:nth-child(even) {
//     background-color: #f1f5f9 !important;
//   }

//   .blog-content tr:hover {
//     background-color: #f8fafc !important;
//   }

//   /* Responsive wrapper fix without needing extra div */
//   .blog-content {
//     display: block;
//     width: 100%;
//     overflow-x: auto;
//   }

//   /* ── Lists ── */
//   .blog-content ul {
//     list-style-type: disc !important;
//     padding-left: 2rem !important;
//     margin: 1rem 0 !important;
//   }
//   .blog-content ol {
//     list-style-type: decimal !important;
//     padding-left: 2rem !important;
//     margin: 1rem 0 !important;
//   }
//   .blog-content li {
//     margin-bottom: 0.5rem !important;
//     line-height: 1.7 !important;
//   }

//   /* ── Paragraphs & Headings ── */
//   .blog-content p { margin: 1rem 0; line-height: 1.8; color: #334155; }
//   .blog-content h1, .blog-content h2, .blog-content h3 { 
//     color: #0f172a; 
//     margin-top: 2rem; 
//     font-weight: 800; 
//   }

//   /* ── Images ── */
//   .blog-content img {
//     max-width: 100%;
//     height: auto;
//     border-radius: 8px;
//     margin: 1.5rem auto;
//     display: block;
//   }
// `;
// // const BLOG_CONTENT_STYLES = `
// //   /* ── Table: scrollable wrapper ── */
// //   .blog-content .table-wrapper {
// //     width: 100%;
// //     max-width: 100%;
// //     overflow-x: auto;
// //     -webkit-overflow-scrolling: touch;
// //     margin: 1.25rem 0;
// //     border-radius: 0.5rem;
// //     border: 1px solid #e5e7eb;
// //   }
// //   .blog-content .table-wrapper table {
// //     /* table stays inside wrapper — does NOT push past column edge */
// //     width: 100%;
// //     max-width: 100%;
// //     border-collapse: collapse;
// //     font-size: 0.875rem;
// //     margin: 0;
// //     /* auto: columns size to content but respect max-width */
// //     table-layout: fixed;
// //   }
// //   .blog-content .table-wrapper th {
// //     background: #f3f4f6;
// //     font-weight: 600;
// //     padding: 10px 14px;
// //     text-align: left;
// //     color: #111827;
// //     border: 1px solid #d1d5db;
// //     white-space: nowrap;
// //   }
// //   .blog-content .table-wrapper td {
// //     padding: 8px 14px;
// //     vertical-align: top;
// //     color: #374151;
// //     border: 1px solid #d1d5db;
// //       white-space: normal;      /* text wrap kare */
// //   word-break: break-word;
// //     line-height: 1.6;
// //     word-break: break-word;
// //     overflow-wrap: break-word;
// //   }
// //   .blog-content .table-wrapper tr:nth-child(even) td { background: #f9fafb; }

// //   /* Fallback for unwrapped tables */
// // .blog-content .table-wrapper table {
// //   width: max-content;   /* FIX */
// //   min-width: 100%;      /* FIX */
// //   max-width: 100%;
// //   border-collapse: collapse;
// //   font-size: 0.875rem;
// //   margin: 0;
// //   table-layout: auto;
// // }

// //   /* ── Lists ── */
// //   .blog-content ul {
// //     list-style-type: disc !important;
// //     padding-left: 1.75em !important;
// //     margin: 0.75rem 0 !important;
// //   }
// //   .blog-content ol {
// //     list-style-type: decimal !important;
// //     padding-left: 1.75em !important;
// //     margin: 0.75rem 0 !important;
// //   }
// //   .blog-content li {
// //     display: list-item !important;
// //     margin: 0.4rem 0 !important;
// //     line-height: 1.7;
// //     color: #374151;
// //   }

// //   /* ── Paragraphs ── */
// //   .blog-content p {
// //     margin: 0.8rem 0;
// //     line-height: 1.85;
// //     color: #374151;
// //     overflow-wrap: break-word;
// //     word-break: break-word;
// //   }

// //   /* ── Headings ── */
// //   .blog-content h1,.blog-content h2,.blog-content h3,
// //   .blog-content h4,.blog-content h5,.blog-content h6 {
// //     font-weight: 700;
// //     color: #111827;
// //     margin-top: 1.6rem;
// //     margin-bottom: 0.5rem;
// //     line-height: 1.3;
// //     overflow-wrap: break-word;
// //   }
// //   .blog-content h1 { font-size: 1.75rem; }
// //   .blog-content h2 { font-size: 1.4rem;  }
// //   .blog-content h3 { font-size: 1.2rem;  }
// //   .blog-content h4 { font-size: 1.05rem; }

// //   /* ── Links ── */
// //   .blog-content a       { color:#4B6CB7; text-decoration:underline; word-break:break-all; }
// //   .blog-content a:hover { color:#292B97; }

// //   /* ── Images ── */
// //   .blog-content img {
// //     max-width: 100%;
// //     height: auto;
// //     border-radius: 0.75rem;
// //     margin: 1rem auto;
// //     display: block;
// //     box-shadow: 0 1px 4px rgba(0,0,0,0.1);
// //   }

// //   /* ── Blockquote ── */
// //   .blog-content blockquote {
// //     border-left: 4px solid #292B97;
// //     padding: 0.5rem 0 0.5rem 1rem;
// //     margin: 1rem 0;
// //     background: #f0f1ff;
// //     border-radius: 0 0.5rem 0.5rem 0;
// //     font-style: italic;
// //     color: #374151;
// //   }

// //   /* ── Code ── */
// //   .blog-content pre {
// //     background: #f3f4f6;
// //     border-radius: 0.375rem;
// //     padding: 1rem;
// //     overflow-x: auto;
// //     margin: 1rem 0;
// //     font-family: monospace;
// //     font-size: 0.875rem;
// //     max-width: 100%;
// //   }
// //   .blog-content code {
// //     background: #f3f4f6;
// //     border-radius: 0.25rem;
// //     padding: 0.15em 0.4em;
// //     font-family: monospace;
// //     font-size: 0.875rem;
// //     word-break: break-all;
// //   }
// //   .blog-content strong { color: #111827; }
// // `;

// /**
//  * wrapTables — called once after dangerouslySetInnerHTML renders.
//  * Every <table> gets a scrollable <div class="table-wrapper"> parent.
//  */
// function wrapTables(el) {
//   if (!el) return;
//   el.querySelectorAll('table').forEach((table) => {
//     if (table.closest('.table-wrapper')) return;
//     const wrapper = document.createElement('div');
//     wrapper.className = 'table-wrapper';
//     table.parentNode.insertBefore(wrapper, table);
//     wrapper.appendChild(table);
//   });
// }

// /* ══════════ COMMENT SECTION ══════════ */
// const CommentSection = ({ blogId }) => {
//   const [comments,   setComments]   = useState([]);
//   const [loading,    setLoading]    = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [formOpen,   setFormOpen]   = useState(false);
//   const [submitted,  setSubmitted]  = useState(false);
//   const [form,       setForm]       = useState({ name: '', email: '', message: '' });
//   const [errors,     setErrors]     = useState({});

//   useEffect(() => {
//     if (!blogId) return;
//     (async () => {
//       try {
//         setLoading(true);
//         const res = await fetchApprovedComments(blogId);
//         setComments(res.data?.comments || []);
//       } catch {} finally { setLoading(false); }
//     })();
//   }, [blogId]);

//   const validate = () => {
//     const e = {};
//     if (!form.name.trim())    e.name    = 'Name is required';
//     if (!form.email.trim())   e.email   = 'Email is required';
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
//     if (!form.message.trim()) e.message = 'Comment is required';
//     return e;
//   };

//   const handleSubmit = async (ev) => {
//     ev.preventDefault();
//     const errs = validate();
//     if (Object.keys(errs).length) { setErrors(errs); return; }
//     setSubmitting(true);
//     try {
//       await submitComment(blogId, form);
//       setSubmitted(true);
//       setForm({ name: '', email: '', message: '' });
//       setErrors({});
//       setFormOpen(false);
//     } catch (err) {
//       setErrors({ submit: err.response?.data?.message || 'Failed to post comment' });
//     } finally { setSubmitting(false); }
//   };

//   const onChange = (ev) => {
//     const { name, value } = ev.target;
//     setForm(p => ({ ...p, [name]: value }));
//     if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
//   };

//   return (
//     <div className="mt-12 pt-8 border-t border-gray-100">
//       {submitted && (
//         <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700 flex items-center gap-3">
//           <FaCheck className="shrink-0" />
//           <span>Comment submitted! It will appear after review.</span>
//           <button onClick={() => setSubmitted(false)} className="ml-auto text-green-500">×</button>
//         </div>
//       )}

//       {!formOpen ? (
//         <div onClick={() => setFormOpen(true)}
//           className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3.5 cursor-pointer hover:bg-white hover:shadow-sm transition-all mb-8">
//           <div className="flex items-center gap-3">
//             <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
//               <FaUser className="text-sm" />
//             </div>
//             <span className="text-gray-400 text-sm">Write a comment...</span>
//           </div>
//         </div>
//       ) : (
//         <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100 shadow-sm">
//           <div className="flex items-center justify-between mb-5">
//             <h4 className="text-base font-semibold text-gray-900">Add a Comment</h4>
//             <button onClick={() => setFormOpen(false)} className="text-gray-400 hover:text-gray-600 text-xl">×</button>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-4" noValidate>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <input type="text" name="name" value={form.name} onChange={onChange}
//                   placeholder="Name" autoFocus
//                   className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none text-sm ${errors.name ? 'border-red-400' : 'border-gray-200'}`} />
//                 {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
//               </div>
//               <div>
//                 <input type="email" name="email" value={form.email} onChange={onChange}
//                   placeholder="Email"
//                   className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none text-sm ${errors.email ? 'border-red-400' : 'border-gray-200'}`} />
//                 {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
//               </div>
//             </div>
//             <div>
//               <textarea name="message" value={form.message} onChange={onChange} rows={4}
//                 placeholder="Share your thoughts..."
//                 className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none resize-y text-sm ${errors.message ? 'border-red-400' : 'border-gray-200'}`} />
//               {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
//             </div>
//             {errors.submit && <p className="text-xs text-red-600">{errors.submit}</p>}
//             <div className="flex justify-end gap-3">
//               <button type="button" onClick={() => setFormOpen(false)}
//                 className="px-5 py-2 text-sm text-gray-500">Cancel</button>
//               <button type="submit" disabled={submitting}
//                 className="px-6 py-2 bg-[#292B97] text-white rounded-xl hover:bg-[#1e237e] disabled:opacity-50 flex items-center gap-2 text-sm font-medium">
//                 {submitting && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
//                 {submitting ? 'Posting...' : 'Submit'}
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {comments.length > 0 && (
//         <h3 className="text-base font-bold text-gray-900 mb-4">
//           Comments <span className="text-gray-400 font-normal">({comments.length})</span>
//         </h3>
//       )}

//       {loading ? (
//         <div className="flex justify-center py-8">
//           <div className="animate-spin h-7 w-7 border-[3px] border-[#292B97] border-t-transparent rounded-full" />
//         </div>
//       ) : comments.length === 0 ? (
//         <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
//           <svg className="w-12 h-12 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
//               d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//           </svg>
//           <p className="text-gray-400 text-sm">No comments yet.</p>
//           <button onClick={() => setFormOpen(true)} className="mt-3 text-[#292B97] text-sm font-medium">
//             Be the first →
//           </button>
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {comments.map((c) => (
//             <div key={c._id} className="bg-white rounded-xl p-4 shadow-sm">
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#292B97] to-[#4B6CB7] flex items-center justify-center text-white font-bold text-sm">
//                   {c.name.charAt(0).toUpperCase()}
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
//                   <p className="text-xs text-gray-400">
//                     {new Date(c.createdAt).toLocaleDateString('en-US', {
//                       month: 'short', day: 'numeric', year: 'numeric',
//                     })}
//                   </p>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-700 leading-relaxed pl-12">{c.message}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// /* ══════════ SIDEBAR ══════════ */
// const SidebarContent = ({ relatedBlogs, allCategories, allTags, navigate }) => (
//   <>
//     {relatedBlogs.length > 0 && (
//       <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
//         <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Related Articles</h3>
//         <div className="space-y-4">
//           {relatedBlogs.map((item) => {
//             const thumb = getBlogBanner(item);
//             return (
//               <button key={item._id}
//                 onClick={() => navigate(`/blog/${item.slug || toSlug(item.title)}`)}
//                 className="flex items-start gap-3 text-left w-full group">
//                 <div className="w-14 h-11 rounded-lg overflow-hidden shrink-0 bg-gray-200">
//                   {thumb ? (
//                     <img src={thumb} alt={item.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                       onError={(e) => { e.target.style.display = 'none'; }} />
//                   ) : (
//                     <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold text-sm">
//                       {(item.title || '?').charAt(0).toUpperCase()}
//                     </div>
//                   )}
//                 </div>
//                 <p className="text-xs text-gray-700 group-hover:text-[#292B97] leading-snug line-clamp-3 transition-colors">
//                   {item.title}
//                 </p>
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     )}

//     {allCategories.length > 0 && (
//       <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
//         <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">Categories</h3>
//         <div className="space-y-0.5">
//           {allCategories.map((cat) => (
//             <button key={cat}
//               onClick={() => navigate('/blog', { state: { activeTab: cat } })}
//               className="flex items-center gap-2 text-gray-700 hover:text-[#292B97] text-sm capitalize w-full text-left py-1.5 px-2 rounded-lg hover:bg-white transition-all">
//               <FaChevronRight className="text-[9px] text-gray-400 shrink-0" />
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>
//     )}

//     {allTags.length > 0 && (
//       <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
//         <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">Popular Tags</h3>
//         <div className="flex flex-wrap gap-1.5">
//           {allTags.map(tag => (
//             <span key={tag}
//               className="px-2.5 py-1 bg-white border border-gray-200 text-xs text-gray-600 rounded-full hover:border-[#292B97] hover:text-[#292B97] cursor-pointer transition">
//               #{tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     )}
//   </>
// );

// /* ══════════ MAIN PAGE ══════════ */
// const BlogDetailPage = () => {
//   const { title: slug } = useParams();
//   const navigate = useNavigate();

//   const [blog,          setBlog]          = useState(null);
//   const [relatedBlogs,  setRelatedBlogs]  = useState([]);
//   const [allCategories, setAllCategories] = useState([]);
//   const [allTags,       setAllTags]       = useState([]);
//   const [loading,       setLoading]       = useState(true);
//   const [error,         setError]         = useState(null);
//   const [copied,        setCopied]        = useState(false);

//   const contentDivRef = useRef(null);
//   const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

//   const handleCopy = () => {
//     navigator.clipboard.writeText(shareUrl).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };

//   useEffect(() => {
//     const load = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         let currentBlog = null;

//         try {
//           const res = await getBlogBySlug(slug);
//           currentBlog = res.data?.blog || res.data?.data?.blog || null;
//         } catch {}

//         const allRes    = await getBlogs();
//         const allBlogs  = allRes.data?.blogs || allRes.data?.data?.blogs || [];
//         const published = allBlogs.filter(b => b.status?.toLowerCase() === 'published');

//         if (!currentBlog)
//           currentBlog =
//             published.find(b => b.slug === slug || toSlug(b.title) === slug) || null;

//         if (!currentBlog) { setError('not_found'); return; }

//         setBlog(currentBlog);
//         setRelatedBlogs(
//           published
//             .filter(b => b.category === currentBlog.category && b._id !== currentBlog._id)
//             .slice(0, 5)
//         );
//         setAllCategories([...new Set(published.map(b => b.category).filter(Boolean))]);

//         const freq = {};
//         published.forEach(b =>
//           (b.tags || []).forEach(t => { if (t) freq[t] = (freq[t] || 0) + 1; })
//         );
//         setAllTags(
//           Object.entries(freq).sort((a, b) => b[1] - a[1]).map(([t]) => t).slice(0, 12)
//         );
//       } catch (err) {
//         console.error(err);
//         setError('failed');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) { load(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
//   }, [slug]);

//   /* Wrap tables once blog HTML is in the DOM */
//   useEffect(() => {
//     if (blog && contentDivRef.current) {
//       wrapTables(contentDivRef.current);
//     }
//   }, [blog]);

//   if (loading) return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="text-center">
//         <div className="animate-spin h-12 w-12 border-4 border-[#292B97] border-t-transparent rounded-full mx-auto" />
//         <p className="mt-6 text-gray-500 text-sm">Loading article...</p>
//       </div>
//     </div>
//   );

//   if (error || !blog) return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold mb-4 text-gray-800">Article Not Found</h1>
//         <button onClick={() => navigate('/blog')}
//           className="px-6 py-3 bg-[#292B97] text-white rounded-xl hover:bg-[#1e237e]">
//           Back to Blog
//         </button>
//       </div>
//     </div>
//   );

//   const authorObj    = typeof blog.author === 'object' ? blog.author : null;
//   const authorName   = authorObj?.name || (typeof blog.author === 'string' ? blog.author : 'Admin');
//   const authorImgUrl = getAuthorAvatar(authorObj);
//   const bannerUrl    = getBlogBanner(blog);

//   const socialLinks = [
//     { icon: FaFacebookF,  color: '#1877F2', label: 'Facebook',  href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
//     { icon: FaTwitter,    color: '#1DA1F2', label: 'Twitter',   href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}` },
//     { icon: FaLinkedinIn, color: '#0A66C2', label: 'LinkedIn',  href: `https://linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}` },
//     { icon: FaWhatsapp,   color: '#25D366', label: 'WhatsApp',  href: `https://wa.me/?text=${encodeURIComponent(shareUrl)}` },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       <style>{BLOG_CONTENT_STYLES}</style>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

//         {/* Back button */}
//         <button onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-gray-600 hover:text-[#292B97] mb-8 transition-colors">
//           <FaArrowLeft className="text-sm" />
//           <span className="font-medium text-sm">Back</span>
//         </button>

//         {/*
//           LAYOUT NOTE
//           ───────────
//           <main> has  flex-1 min-w-0 overflow-hidden
//             • flex-1   → takes all remaining space
//             • min-w-0  → prevents flex from letting it grow
//                          past its computed share (CRITICAL for tables)
//             • overflow-hidden → final hard stop — nothing leaks out

//           Tables inside get wrapped in .table-wrapper (overflow-x:auto)
//           by wrapTables() so they scroll horizontally within the column.
//         */}
//         <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 items-start">

//           {/* ══ MAIN COLUMN ══ */}
//           <main className="flex-1 min-w-0 overflow-hidden">

//             {/* Banner */}
//             {bannerUrl && (
//               <div className="w-full mb-6">
//                 <img src={bannerUrl} alt={blog.title}
//                   className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-2xl shadow-sm"
//                   loading="lazy"
//                   onError={(e) => { e.target.style.display = 'none'; }} />
//               </div>
//             )}

//             {/* Title */}
//             <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-5">
//               {blog.title}
//             </h1>

//             {/* Author row */}
//             <div className="flex items-center gap-3 flex-wrap mb-6 pb-5 border-b border-gray-100">
//               <button
//                 onClick={() => {
//                   if (authorName && authorName !== 'Admin')
//                     navigate(`/blog/author/${toAuthorSlug(authorName)}`);
//                 }}
//                 className={`flex items-center gap-3 group ${authorName !== 'Admin' ? 'cursor-pointer' : 'cursor-default'}`}
//               >
//                 {authorImgUrl ? (
//                   <img src={authorImgUrl} alt={authorName}
//                     className="w-9 h-9 rounded-full object-cover border-2 border-gray-200 group-hover:border-[#292B97] transition-colors"
//                     onError={(e) => { e.target.src = fallbackAvatar; }} />
//                 ) : (
//                   <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#292B97] to-[#4B6CB7] flex items-center justify-center text-white text-sm font-bold shrink-0">
//                     {(authorName || 'A').charAt(0).toUpperCase()}
//                   </div>
//                 )}
//                 <div className="text-left">
//                   <p className="text-sm font-semibold text-gray-900 group-hover:text-[#292B97] transition-colors leading-none">
//                     {authorName}
//                   </p>
//                   <p className="text-xs text-gray-400 mt-0.5">
//                     {formatDate(blog.publishedDate || blog.createdAt || blog.date)}
//                   </p>
//                 </div>
//               </button>

//               {blog.readTime && (
//                 <span className="flex items-center gap-1.5 text-xs text-gray-500 ml-1">
//                   <FaClock className="text-gray-400 text-[11px]" />
//                   {blog.readTime} min read
//                 </span>
//               )}

//               {blog.category && (
//                 <span className="ml-auto px-3 py-1 bg-[#292B97]/10 text-[#292B97] text-xs font-semibold rounded-full capitalize">
//                   {blog.category}
//                 </span>
//               )}
//             </div>

//             {/* Description */}
//             {blog.description && (
//               <p className="text-base text-gray-600 leading-relaxed mb-6">{blog.description}</p>
//             )}

//             {/* Tags */}
//             {blog.tags?.length > 0 && (
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {blog.tags.map(tag => (
//                   <span key={tag}
//                     className="px-3 py-1 bg-[#292B97]/5 text-[#292B97] text-xs font-medium rounded-full border border-[#292B97]/20">
//                     #{tag}
//                   </span>
//                 ))}
//               </div>
//             )}

//             {/* Content */}
//             <div
//               ref={contentDivRef}
//               className="blog-content"
//               dangerouslySetInnerHTML={{ __html: blog.content || '<p>No content available.</p>' }}
//             />

//             {/* Share */}
//             <div className="mt-10 pt-6 border-t border-gray-100">
//               <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
//                 Share this article
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {socialLinks.map(({ icon: Icon, color, href, label }) => (
//                   <a key={label} href={href} target="_blank" rel="noopener noreferrer"
//                     className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform text-sm"
//                     style={{ backgroundColor: color }} title={label}>
//                     <Icon />
//                   </a>
//                 ))}
//                 <button onClick={handleCopy}
//                   className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm transition-all ${copied ? 'bg-green-500' : 'bg-gray-500 hover:bg-gray-600'}`}
//                   title="Copy link">
//                   {copied ? <FaCheck /> : <FaCopy />}
//                 </button>
//               </div>
//             </div>

//             {/* Comments */}
//             <CommentSection blogId={blog._id} />

//             {/* Mobile sidebar */}
//             <div className="lg:hidden mt-10 space-y-5">
//               <SidebarContent relatedBlogs={relatedBlogs} allCategories={allCategories}
//                 allTags={allTags} navigate={navigate} />
//             </div>
//           </main>

//           {/* ══ STICKY SIDEBAR — desktop ══ */}
//           <aside className="hidden lg:block w-60 xl:w-64 shrink-0">
//             <div className="sticky top-24 space-y-5">
//               <SidebarContent relatedBlogs={relatedBlogs} allCategories={allCategories}
//                 allTags={allTags} navigate={navigate} />
//             </div>
//           </aside>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetailPage;



import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { VITE_BACKEND_URL } from '../../../config.js';
import {
  FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedinIn,
  FaWhatsapp, FaChevronRight, FaCopy, FaCheck, FaUser, FaClock,
} from 'react-icons/fa';
import { getBlogs, getBlogBySlug } from '../../service/blogs.service.js';
import { submitComment, fetchApprovedComments } from '../../service/comment.service';

const fallbackAvatar =
  'https://ui-avatars.com/api/?name=Author&background=292B97&color=fff&size=80';

/* ── Image helpers ── */
const resolveImgUrl = (imgObj) => {
  if (!imgObj) return null;
  if (typeof imgObj === 'string') {
    const s = imgObj.trim();
    if (!s) return null;
    return s.startsWith('http') ? s : `${VITE_BACKEND_URL}/${s.replace(/^\//, '')}`;
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

const getAuthorAvatar = (a) => (a?.image ? resolveImgUrl(a.image) : null);

const formatDate = (d) => {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
};

const toSlug = (t = '') =>
  t.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');

const toAuthorSlug = (n = '') =>
  n.toLowerCase().trim().replace(/\s+/g, '-');

const BLOG_CONTENT_STYLES = `
  .blog-content {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  .blog-content table {
    width: 100% !important;
    border-collapse: collapse !important;
    margin: 1.5rem 0 !important;
    font-size: 0.95rem !important;
    background-color: #ffffff !important;
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1) !important;
  }
  .blog-content th {
    background-color: #f8fafc !important;
    color: #1e293b !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    font-size: 0.75rem !important;
    padding: 12px 15px !important;
    border: 1px solid #e2e8f0 !important;
  }
  .blog-content td {
    padding: 12px 15px !important;
    border: 1px solid #e2e8f0 !important;
    color: #475569 !important;
  }
  .blog-content tr:nth-child(even) { background-color: #f1f5f9 !important; }
  .blog-content tr:hover { background-color: #f8fafc !important; }
  .blog-content .table-wrapper {
    width: 100%;
    overflow-x: auto;
    margin-bottom: 1.5rem;
  }
  .blog-content ul { list-style-type: disc !important; padding-left: 2rem !important; margin: 1rem 0 !important; }
  .blog-content ol { list-style-type: decimal !important; padding-left: 2rem !important; margin: 1rem 0 !important; }
  .blog-content li { margin-bottom: 0.5rem !important; line-height: 1.7 !important; }
  .blog-content p { margin: 1rem 0; line-height: 1.8; color: #334155; }
  .blog-content h1, .blog-content h2, .blog-content h3 { color: #0f172a; margin-top: 2rem; font-weight: 800; }
  .blog-content img { max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem auto; display: block; }
`;

function wrapTables(el) {
  if (!el) return;
  el.querySelectorAll('table').forEach((table) => {
    if (table.closest('.table-wrapper')) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}

/* CommentSection remains exactly the same */
const CommentSection = ({ blogId }) => {
  // ... (your existing CommentSection code - no change)
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!blogId) return;
    (async () => {
      try {
        setLoading(true);
        const res = await fetchApprovedComments(blogId);
        setComments(res.data?.comments || []);
      } catch { } finally { setLoading(false); }
    })();
  }, [blogId]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Comment is required';
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);
    try {
      await submitComment(blogId, form);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setErrors({});
      setFormOpen(false);
    } catch (err) {
      setErrors({ submit: err.response?.data?.message || 'Failed to post comment' });
    } finally { setSubmitting(false); }
  };

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-100">
      {/* ... rest of your CommentSection JSX (unchanged) ... */}
      {submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700 flex items-center gap-3">
          <FaCheck className="shrink-0" />
          <span>Comment submitted! It will appear after review.</span>
          <button onClick={() => setSubmitted(false)} className="ml-auto text-green-500">×</button>
        </div>
      )}

      {!formOpen ? (
        <div onClick={() => setFormOpen(true)}
          className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3.5 cursor-pointer hover:bg-white hover:shadow-sm transition-all mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
              <FaUser className="text-sm" />
            </div>
            <span className="text-gray-400 text-sm">Write a comment...</span>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100 shadow-sm">
          {/* form code unchanged */}
          <div className="flex items-center justify-between mb-5">
            <h4 className="text-base font-semibold text-gray-900">Add a Comment</h4>
            <button onClick={() => setFormOpen(false)} className="text-gray-400 hover:text-gray-600 text-xl">×</button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* ... full form JSX unchanged ... */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="text" name="name" value={form.name} onChange={onChange}
                  placeholder="Name" autoFocus
                  className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none text-sm ${errors.name ? 'border-red-400' : 'border-gray-200'}`} />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <input type="email" name="email" value={form.email} onChange={onChange}
                  placeholder="Email"
                  className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none text-sm ${errors.email ? 'border-red-400' : 'border-gray-200'}`} />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <textarea name="message" value={form.message} onChange={onChange} rows={4}
                placeholder="Share your thoughts..."
                className={`w-full px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-[#292B97]/20 focus:border-[#292B97] outline-none resize-y text-sm ${errors.message ? 'border-red-400' : 'border-gray-200'}`} />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>
            {errors.submit && <p className="text-xs text-red-600">{errors.submit}</p>}
            <div className="flex justify-end gap-3">
              <button type="button" onClick={() => setFormOpen(false)}
                className="px-5 py-2 text-sm text-gray-500">Cancel</button>
              <button type="submit" disabled={submitting}
                className="px-6 py-2 bg-[#292B97] text-white rounded-xl hover:bg-[#1e237e] disabled:opacity-50 flex items-center gap-2 text-sm font-medium">
                {submitting && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                {submitting ? 'Posting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      )}

      {comments.length > 0 && (
        <h3 className="text-base font-bold text-gray-900 mb-4">
          Comments <span className="text-gray-400 font-normal">({comments.length})</span>
        </h3>
      )}

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin h-7 w-7 border-[3px] border-[#292B97] border-t-transparent rounded-full" />
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
          <svg className="w-12 h-12 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <p className="text-gray-400 text-sm">No comments yet.</p>
          <button onClick={() => setFormOpen(true)} className="mt-3 text-[#292B97] text-sm font-medium">
            Be the first →
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((c) => (
            <div key={c._id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#292B97] to-[#4B6CB7] flex items-center justify-center text-white font-bold text-sm">
                  {c.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(c.createdAt).toLocaleDateString('en-US', {
                      month: 'short', day: 'numeric', year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed pl-12">{c.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* SidebarContent remains the same */
const SidebarContent = ({ relatedBlogs, allCategories, allTags, navigate }) => (
  <div className="space-y-5">
    {/* Your existing SidebarContent JSX - no changes */}
    {relatedBlogs.length > 0 && (
      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
        <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Related Articles</h3>
        <div className="space-y-4">
          {relatedBlogs.map((item) => {
            const thumb = getBlogBanner(item);
            return (
              <button key={item._id}
                onClick={() => navigate(`/blog/${item.slug || toSlug(item.title)}`)}
                className="flex items-start gap-3 text-left w-full group">
                <div className="w-14 h-11 rounded-lg overflow-hidden shrink-0 bg-gray-200">
                  {thumb ? (
                    <img src={thumb} alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.target.style.display = 'none'; }} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold text-sm">
                      {(item.title || '?').charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-700 group-hover:text-[#292B97] leading-snug line-clamp-3 transition-colors">
                  {item.title}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    )}

    {allCategories.length > 0 && (
      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
        <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">Categories</h3>
        <div className="space-y-0.5">
          {allCategories.map((cat) => (
            <button key={cat}
              onClick={() => navigate('/blog', { state: { activeTab: cat } })}
              className="flex items-center gap-2 text-gray-700 hover:text-[#292B97] text-sm capitalize w-full text-left py-1.5 px-2 rounded-lg hover:bg-white transition-all">
              <FaChevronRight className="text-[9px] text-gray-400 shrink-0" />
              {cat}
            </button>
          ))}
        </div>
      </div>
    )}

    {allTags.length > 0 && (
      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
        <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">Popular Tags</h3>
        <div className="flex flex-wrap gap-1.5">
          {allTags.map(tag => (
            <span key={tag}
              className="px-2.5 py-1 bg-white border border-gray-200 text-xs text-gray-600 rounded-full hover:border-[#292B97] hover:text-[#292B97] cursor-pointer transition">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

/* Main BlogDetailPage */
const BlogDetailPage = () => {
  const { title: slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const contentDivRef = useRef(null);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        let currentBlog = null;
        try {
          const res = await getBlogBySlug(slug);
          currentBlog = res.data?.blog || res.data?.data?.blog || null;
        } catch {}

        const allRes = await getBlogs();
        const allBlogs = allRes.data?.blogs || allRes.data?.data?.blogs || [];
        const published = allBlogs.filter(b => b.status?.toLowerCase() === 'published');

        if (!currentBlog) {
          currentBlog = published.find(b => b.slug === slug || toSlug(b.title) === slug) || null;
        }

        if (!currentBlog) {
          setError('not_found');
          return;
        }

        setBlog(currentBlog);
        setRelatedBlogs(
          published
            .filter(b => b.category === currentBlog.category && b._id !== currentBlog._id)
            .slice(0, 5)
        );
        setAllCategories([...new Set(published.map(b => b.category).filter(Boolean))]);

        const freq = {};
        published.forEach(b =>
          (b.tags || []).forEach(t => { if (t) freq[t] = (freq[t] || 0) + 1; })
        );
        setAllTags(
          Object.entries(freq).sort((a, b) => b[1] - a[1]).map(([t]) => t).slice(0, 12)
        );
      } catch (err) {
        console.error(err);
        setError('failed');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      load();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [slug]);

  useEffect(() => {
    if (blog && contentDivRef.current) wrapTables(contentDivRef.current);
  }, [blog]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin h-12 w-12 border-4 border-[#292B97] border-t-transparent rounded-full mx-auto" />
        <p className="mt-6 text-gray-500 text-sm">Loading article...</p>
      </div>
    </div>
  );

  if (error || !blog) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Article Not Found</h1>
        <button onClick={() => navigate('/blog')}
          className="px-6 py-3 bg-[#292B97] text-white rounded-xl hover:bg-[#1e237e]">
          Back to Blog
        </button>
      </div>
    </div>
  );

  const authorObj = typeof blog.author === 'object' ? blog.author : null;
  const authorName = authorObj?.name || (typeof blog.author === 'string' ? blog.author : 'Admin');
  const authorImgUrl = getAuthorAvatar(authorObj);
  const bannerUrl = getBlogBanner(blog);

  const socialLinks = [
    { icon: FaFacebookF, color: '#1877F2', label: 'Facebook', href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { icon: FaTwitter, color: '#1DA1F2', label: 'Twitter', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}` },
    { icon: FaLinkedinIn, color: '#0A66C2', label: 'LinkedIn', href: `https://linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}` },
    { icon: FaWhatsapp, color: '#25D366', label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(shareUrl)}` },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{BLOG_CONTENT_STYLES}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-[#292B97] mb-8 transition-colors">
          <FaArrowLeft className="text-sm" />
          <span className="font-medium text-sm">Back</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 ">
          {/* MAIN CONTENT */}
          <main className="flex-1 min-w-0">
            {/* Your existing main content (banner, title, author, description, tags, content, share, comments) - unchanged */}
            {bannerUrl && (
              <div className="w-full mb-6">
                <img src={bannerUrl} alt={blog.title}
                  className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-2xl shadow-sm"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
            )}

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-5">
              {blog.title}
            </h1>

            <div className="flex items-center gap-3 flex-wrap mb-6 pb-5 border-b border-gray-100">
              {/* author row unchanged */}
              <button
                onClick={() => {
                  if (authorName && authorName !== 'Admin')
                    navigate(`/blog/author/${toAuthorSlug(authorName)}`);
                }}
                className={`flex items-center gap-3 group ${authorName !== 'Admin' ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {authorImgUrl ? (
                  <img src={authorImgUrl} alt={authorName}
                    className="w-9 h-9 rounded-full object-cover border-2 border-gray-200 group-hover:border-[#292B97] transition-colors"
                    onError={(e) => { e.target.src = fallbackAvatar; }} />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#292B97] to-[#4B6CB7] flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {(authorName || 'A').charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-[#292B97] transition-colors leading-none">
                    {authorName}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {formatDate(blog.publishedDate || blog.createdAt || blog.date)}
                  </p>
                </div>
              </button>

              {blog.readTime && (
                <span className="flex items-center gap-1.5 text-xs text-gray-500 ml-1">
                  <FaClock className="text-gray-400 text-[11px]" />
                  {blog.readTime} min read
                </span>
              )}

              {blog.category && (
                <span className="ml-auto px-3 py-1 bg-[#292B97]/10 text-[#292B97] text-xs font-semibold rounded-full capitalize">
                  {blog.category}
                </span>
              )}
            </div>

            {blog.description && <p className="text-base text-justify text-gray-600 leading-relaxed mb-6">{blog.description}</p>}

            {blog.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map(tag => (
                  <span key={tag}
                    className="px-3 py-1 bg-[#292B97]/5 text-[#292B97] text-xs font-medium rounded-full border border-[#292B97]/20">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div
              ref={contentDivRef}
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content || '<p>No content available.</p>' }}
            />

            {/* Share */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                Share this article
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ icon: Icon, color, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform text-sm"
                    style={{ backgroundColor: color }} title={label}>
                    <Icon />
                  </a>
                ))}
                <button onClick={handleCopy}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm transition-all ${copied ? 'bg-green-500' : 'bg-gray-500 hover:bg-gray-600'}`}
                  title="Copy link">
                  {copied ? <FaCheck /> : <FaCopy />}
                </button>
              </div>
            </div>

            <CommentSection blogId={blog._id} />

            {/* Mobile Sidebar */}
            <div className="lg:hidden mt-10 space-y-5">
              <SidebarContent relatedBlogs={relatedBlogs} allCategories={allCategories}
                allTags={allTags} navigate={navigate} />
            </div>
          </main>

          {/* STICKY SIDEBAR - FIXED */}
 <aside className="hidden lg:block w-60 xl:w-64 shrink-0 sticky top-24 h-fit">
  <div>
    <SidebarContent 
      relatedBlogs={relatedBlogs} 
      allCategories={allCategories}
      allTags={allTags} 
      navigate={navigate} 
    />
  </div>
</aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;