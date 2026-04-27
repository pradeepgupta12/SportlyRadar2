

// // // import { useParams } from 'react-router-dom'
// // // import SportsTabs from '@/layouts/SportsTabs'
// // // import CricketTabs from '../components/CricketTabs'
// // // import SectionHeader from '@/shared/components/SectionHeader'
// // // import BlogsSection from '@/shared/components/BlogsSection'
// // // import SeoManager from '@/core/seo/SeoManager'
// // // import { playerDetail } from '../../../shared/constants/cricket.data'
// // // import { useEffect } from 'react'



// // // const PlayerDetailPage = () => {
// // // const { id } = useParams()

// // // const getSlug = (name) =>
// // //   name.toLowerCase().replace(/\s+/g, '-')

// // // const player = playerDetail.find(
// // //   (p) => getSlug(p.name) === id
// // // )

// // // if (!player) {
// // //   return <div className="p-6 text-center">Player not found</div>
// // // }
 
// // // useEffect(() => {
// // //   window.scrollTo(0, 0)
// // //   console.log(player);
// // //   console.log("IMAGE URL:", player.image)
// // // }, [])

// // //   return (
// // //     <>
// // //       <SeoManager title={`${player.name} | SportyRadar`} />
// // //       <SportsTabs />
// // //       <CricketTabs />

// // //       {/* Main layout: player detail content + right sidebar space */}
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
// // //         <div className="flex gap-6">

// // //           {/* Left: Player detail content — narrowed to make room for right sidebar */}
// // //           <div className="w-full lg:w-[80%] min-w-0">
// // //             <SectionHeader title="Player Info" />

// // //             <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm mb-6 sm:mb-8">
// // //               {/* Player header */}
// // //               <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 mb-5 sm:mb-6">
// // //                 {/* Player Image Section */}
// // //                 <div className="flex-shrink-0 self-center md:self-auto">
// // //                   <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-40 md:h-44 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-blue-100 shadow-md mx-auto md:mx-0">
                  
// // //                   {player.image ? (
// // //   <img
// // //   src={player.image}
// // //   alt={player.name}
// // //   className="w-full h-full object-cover"
// // //   loading="lazy"
// // //   onError={(e) => {
// // //     e.target.onerror = null
// // //     e.target.src = '/fallback-player.png' // add a local image in public folder
// // //   }}
// // // />
// // // ) : (
// // //   <div className="w-full h-full flex items-center justify-center">
// // //     <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
// // //       <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// // //     </svg>
// // //   </div>
// // // )}
// // //                   </div>
// // //                 </div>

// // //                 {/* Player Info Section */}
// // //                 <div className="flex-1 text-center md:text-left">
// // //                   <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4 break-words">
// // //                     {player.name}
// // //                   </h2>

// // //                   {/* Player Details Grid */}
// // //                   <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
// // //                     {[
// // //                       ['Born', player.born],
// // //                       ['Birth Place', player.birthPlace],
// // //                       ['Height', player.height],
// // //                       ['Role', player.role],
// // //                       ['Batting Style', player.battingStyle],
// // //                       ['Bowling Style', player.bowlingStyle],
// // //                     ].map(([label, value]) => (
// // //                       <div key={label} className="border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0">
// // //                         <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
// // //                           {label}
// // //                         </p>
// // //                         <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white break-words">
// // //                           {value || 'N/A'}
// // //                         </p>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Player Summary Section */}
// // //               <div className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-gray-100 dark:border-gray-700">
// // //                 <div className="flex items-center gap-2 mb-3 sm:mb-4">
// // //                   <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// // //                   </svg>
// // //                   <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
// // //                     Career Summary
// // //                   </p>
// // //                 </div>

// // //                 {player.summary ? (
// // //                   <div className="space-y-3 sm:space-y-4">
// // //                     {player.summary.split('\n\n').map((para, i) => (
// // //                       <p
// // //                         key={i}
// // //                         className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
// // //                       >
// // //                         {para}
// // //                       </p>
// // //                     ))}
// // //                   </div>
// // //                 ) : (
// // //                   <div className="text-center py-8">
// // //                     <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                       <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // //                     </svg>
// // //                     <p className="text-gray-500 dark:text-gray-400">No summary available for this player.</p>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             {/* Additional Stats Section */}
// // //             {player.stats && (
// // //               <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm mb-6 sm:mb-8">
// // //                 <div className="flex items-center gap-2 mb-4">
// // //                   <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
// // //                   </svg>
// // //                   <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
// // //                     Career Statistics
// // //                   </h3>
// // //                 </div>
// // //                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
// // //                   {Object.entries(player.stats).map(([key, value]) => (
// // //                     <div key={key} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-center">
// // //                       <p className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">{key}</p>
// // //                       <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{value}</p>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>

// // //           {/* Right: Empty space reserved for future sidebar — adjust w-[20%] to control width */}
// // //           <div className="hidden lg:block lg:w-[20%]">
// // //             {/* Sidebar content add karo yahan */}
// // //           </div>

// // //         </div>
// // //       </div>

// // //       {/* BlogsSection: separate full-width container — unaffected by above layout changes */}
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <BlogsSection />
// // //       </div>
// // //     </>
// // //   )
// // // }

// // // export default PlayerDetailPageimport { useState, useEffect } from 'react'
// // import { useParams, Link } from 'react-router-dom'
// // import SportsTabs from '@/layouts/SportsTabs'
// // import CricketTabs from '../components/CricketTabs'
// // import BlogsSection from '@/shared/components/BlogsSection'
// // import SeoManager from '@/core/seo/SeoManager'
// // import SectionHeader from '@/shared/components/SectionHeader'
// // import { useEffect, useState } from 'react'
// // import { VITE_API_BASE_URL } from '../../../../config'

// // const API_BASE = `${VITE_API_BASE_URL}/cricket`

// // // ─── Skeleton ─────────────────────────────────────────────────────────────────
// // const Sk = ({ w = 'w-full', h = 'h-4' }) => (
// //   <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${w} ${h}`} />
// // )

// // // ─── Role Badge ───────────────────────────────────────────────────────────────
// // const RoleBadge = ({ role }) => {
// //   const cfg = {
// //     BAT:     { label: 'Batsman',        cls: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' },
// //     BOWL:    { label: 'Bowler',         cls: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' },
// //     ALL:     { label: 'All-rounder',    cls: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300' },
// //     WK:      { label: 'Wicket-keeper',  cls: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300' },
// //     UNKNOWN: { label: 'Player',         cls: 'bg-gray-100 dark:bg-gray-800 text-gray-500' },
// //   }
// //   const { label, cls } = cfg[role] || cfg.UNKNOWN
// //   return <span className={`text-xs font-bold px-3 py-1 rounded-full ${cls}`}>{label}</span>
// // }

// // // ─── Info Cell ────────────────────────────────────────────────────────────────
// // const InfoCell = ({ label, value }) => {
// //   if (!value) return null
// //   return (
// //     <div className="border-b border-gray-100 dark:border-gray-700/60 pb-3 last:border-0">
// //       <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium mb-0.5">{label}</p>
// //       <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white break-words">{value}</p>
// //     </div>
// //   )
// // }

// // // ─── Stats Table ──────────────────────────────────────────────────────────────
// // // battingStats / bowlingStats = array of { matchType, innings, runs, avg, sr, hs, 50s, 100s, wkts, economy, bbi }
// // const StatsTable = ({ title, rows, cols }) => {
// //   if (!rows?.length) return null
// //   const filtered = rows.filter(r => r && Object.keys(r).length > 1)
// //   if (!filtered.length) return null

// //   return (
// //     <div className="mb-4">
// //       <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">{title}</h4>
// //       <div className="overflow-x-auto">
// //         <table className="w-full text-xs sm:text-sm border-collapse">
// //           <thead>
// //             <tr className="bg-gray-50 dark:bg-gray-800/60">
// //               <th className="text-left px-3 py-2 text-gray-500 dark:text-gray-400 font-semibold rounded-tl-md">Format</th>
// //               {cols.map(c => (
// //                 <th key={c.key} className="text-center px-3 py-2 text-gray-500 dark:text-gray-400 font-semibold last:rounded-tr-md">{c.label}</th>
// //               ))}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {filtered.map((row, i) => (
// //               <tr key={i} className="border-t border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-800/30">
// //                 <td className="px-3 py-2 font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
// //                   {row.matchType || row.type || 'N/A'}
// //                 </td>
// //                 {cols.map(c => (
// //                   <td key={c.key} className="px-3 py-2 text-center text-gray-600 dark:text-gray-400">
// //                     {row[c.key] ?? '-'}
// //                   </td>
// //                 ))}
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   )
// // }

// // const BAT_COLS = [
// //   { key: 'innings', label: 'Inn' },
// //   { key: 'runs',    label: 'Runs' },
// //   { key: 'avg',     label: 'Avg' },
// //   { key: 'sr',      label: 'S/R' },
// //   { key: 'hs',      label: 'HS' },
// //   { key: '50s',     label: '50s' },
// //   { key: '100s',    label: '100s' },
// // ]
// // const BOWL_COLS = [
// //   { key: 'innings',  label: 'Inn' },
// //   { key: 'wkts',    label: 'Wkts' },
// //   { key: 'avg',     label: 'Avg' },
// //   { key: 'economy', label: 'Eco' },
// //   { key: 'sr',      label: 'S/R' },
// //   { key: 'bbi',     label: 'BBI' },
// // ]

// // // ─── Main Page ─────────────────────────────────────────────────────────────────
// // const PlayerDetailPage = () => {
// //   const { id } = useParams()   // id = playerId (number string e.g. "8497")
// //   const [player, setPlayer]   = useState(null)
// //   const [loading, setLoading] = useState(true)
// //   const [error, setError]     = useState(null)
// //   const [imgErr, setImgErr]   = useState(false)

// //   useEffect(() => {
// //     window.scrollTo(0, 0)
// //     setLoading(true)
// //     setError(null)
// //     setImgErr(false)
// //     setPlayer(null)
// //     fetch(`${API_BASE}/ipl/player/${id}`)
// //       .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() })
// //       .then(json => {
// //         if (!json?.data) throw new Error('Player not found')
// //         setPlayer(json.data)
// //       })
// //       .catch(err => setError(err.message))
// //       .finally(() => setLoading(false))
// //   }, [id])

// //   const formatDate = (d) => {
// //     if (!d) return null
// //     try { return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }) }
// //     catch { return d }
// //   }

// //   // ── Error ──────────────────────────────────────────────────────────────────
// //   if (!loading && error) return (
// //     <>
// //       <SportsTabs /><CricketTabs />
// //       <div className="max-w-7xl mx-auto px-4 py-16 text-center">
// //         <p className="text-gray-500 dark:text-gray-400 mb-4">{error}</p>
// //         <Link to="/cricket/ipl/teams" className="text-[#00698c] hover:underline text-sm">← Back to Teams</Link>
// //       </div>
// //     </>
// //   )

// //   return (
// //     <>
// //       <SeoManager title={`${player?.name || 'Player'} | SportyRadar`} />
// //       <SportsTabs />
// //       <CricketTabs />

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
// //         <div className="flex gap-6">
// //           <div className="w-full lg:w-[80%] min-w-0">
// //             <SectionHeader title="Player Info" />

// //             {/* ── Profile Card ── */}
// //             <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm mb-5">
// //               <div className="flex flex-col md:flex-row gap-5 md:gap-6">

// //                 {/* Image */}
// //                 <div className="flex-shrink-0 self-center md:self-start">
// //                   {loading ? (
// //                     <Sk w="w-36" h="h-44" />
// //                   ) : (
// //                     <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-40 md:h-44 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-900/20 dark:to-blue-900/20 shadow-md mx-auto md:mx-0">
// //                       {player?.imageUrl && !imgErr ? (
// //                         <img src={player.imageUrl} alt={player.name} className="w-full h-full object-cover"
// //                           loading="lazy" onError={() => setImgErr(true)} />
// //                       ) : (
// //                         <div className="w-full h-full flex items-center justify-center">
// //                           <svg className="w-14 h-14 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
// //                             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// //                           </svg>
// //                         </div>
// //                       )}
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Info */}
// //                 <div className="flex-1 min-w-0">
// //                   {loading ? (
// //                     <div className="space-y-3">
// //                       <Sk w="w-48" h="h-8" />
// //                       <Sk w="w-24" h="h-5" />
// //                       <div className="grid grid-cols-2 gap-3 mt-4">
// //                         {[...Array(6)].map((_, i) => <div key={i}><Sk w="w-20" h="h-3" /><Sk w="w-32" h="h-5" /></div>)}
// //                       </div>
// //                     </div>
// //                   ) : player ? (
// //                     <>
// //                       <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start mb-1">
// //                         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{player.name}</h2>
// //                         {player.nickName && player.nickName !== player.name && (
// //                           <span className="text-sm text-gray-500 dark:text-gray-400">"{player.nickName}"</span>
// //                         )}
// //                       </div>

// //                       <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
// //                         <RoleBadge role={player.role} />
// //                         {player.teamName && (
// //                           <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#00698c]/10 text-[#00698c]">
// //                             {player.teamName}
// //                           </span>
// //                         )}
// //                       </div>

// //                       <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
// //                         <InfoCell label="Batting Style" value={player.battingStyle} />
// //                         <InfoCell label="Bowling Style" value={player.bowlingStyle} />
// //                         <InfoCell label="Nationality"   value={player.nationality} />
// //                         <InfoCell label="Age"           value={player.age ? `${player.age} years` : null} />
// //                         <InfoCell label="Date of Birth" value={formatDate(player.dob)} />
// //                         <InfoCell label="Birth Place"   value={player.birthPlace} />
// //                       </div>
// //                     </>
// //                   ) : null}
// //                 </div>
// //               </div>

// //               {/* Bio */}
// //               {!loading && player?.bio && (
// //                 <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-700">
// //                   <div className="flex items-center gap-2 mb-3">
// //                     <svg className="w-5 h-5 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// //                     </svg>
// //                     <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">About</p>
// //                   </div>
// //                 {player.bio
// //   .replace(/<br\s*\/?>/gi, '\n')   // <br> ko newline me convert karo
// //   .split('\n\n')                   // phir paragraphs split karo
// //   .map((para, i) => (
// //     <p
// //       key={i}
// //       className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-2 last:mb-0"
// //     >
// //       {para}
// //     </p>
// // ))}
// //                 </div>
// //               )}
// //             </div>

// //             {/* ── Stats Card ── */}
// //             {!loading && player && (player.battingStats?.length > 0 || player.bowlingStats?.length > 0) && (
// //               <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 shadow-sm mb-5">
// //                 <div className="flex items-center gap-2 mb-4">
// //                   <svg className="w-5 h-5 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
// //                   </svg>
// //                   <h3 className="text-base font-bold text-gray-900 dark:text-white">Career Statistics</h3>
// //                 </div>

// //                 <StatsTable title="Batting" rows={player.battingStats} cols={BAT_COLS} />
// //                 <StatsTable title="Bowling" rows={player.bowlingStats} cols={BOWL_COLS} />
// //               </div>
// //             )}

// //             {/* ── Back ── */}
// //             <Link to="/cricket/ipl/teams"
// //               className="inline-flex items-center gap-2 text-sm text-[#00698c] hover:underline font-medium">
// //               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeWidth="2" strokeLinecap="round" d="M15 19l-7-7 7-7" />
// //               </svg>
// //               Back to Teams
// //             </Link>
// //           </div>

// //           <div className="hidden lg:block lg:w-[20%]" />
// //         </div>
// //       </div>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <BlogsSection />
// //       </div>
// //     </>
// //   )
// // }

// // export default PlayerDetailPage




// import { useParams } from 'react-router-dom'
// import SportsTabs from '@/layouts/SportsTabs'
// import CricketTabs from '../components/CricketTabs'
// import SectionHeader from '@/shared/components/SectionHeader'
// import BlogsSection from '@/shared/components/BlogsSection'
// import SeoManager from '@/core/seo/SeoManager'
// import { playerDetail } from '../../../shared/constants/cricket.data'
// import { useEffect } from 'react'



// const PlayerDetailPage = () => {
// const { id } = useParams()

// const getSlug = (name) =>
//   name.toLowerCase().replace(/\s+/g, '-')

// const player = playerDetail.find(
//   (p) => getSlug(p.name) === id
// )

// if (!player) {
//   return <div className="p-6 text-center">Player not found</div>
// }
 
// useEffect(() => {
//   window.scrollTo(0, 0)
//   console.log(player);
//   console.log("IMAGE URL:", player.image)
// }, [])

//   return (
//     <>
//       <SeoManager title={`${player.name} | SportyRadar`} />
//       <SportsTabs />
//       <CricketTabs />

//       {/* Main layout: player detail content + right sidebar space */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
//         <div className="flex gap-6">

//           {/* Left: Player detail content — narrowed to make room for right sidebar */}
//           <div className="w-full lg:w-[80%] min-w-0">
//             <SectionHeader title="Player Info" />

//             <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm mb-6 sm:mb-8">
//               {/* Player header */}
//               <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 mb-5 sm:mb-6">
//                 {/* Player Image Section */}
//                 <div className="flex-shrink-0 self-center md:self-auto">
//                   <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-40 md:h-44 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-blue-100 shadow-md mx-auto md:mx-0">
                  
//                   {player.image ? (
//   <img
//   src={player.image}
//   alt={player.name}
//   className="w-full h-full object-cover"
//   loading="lazy"
//   onError={(e) => {
//     e.target.onerror = null
//     e.target.src = '/fallback-player.png' // add a local image in public folder
//   }}
// />
// ) : (
//   <div className="w-full h-full flex items-center justify-center">
//     <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//     </svg>
//   </div>
// )}
//                   </div>
//                 </div>

//                 {/* Player Info Section */}
//                 <div className="flex-1 text-center md:text-left">
//                   <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4 break-words">
//                     {player.name}
//                   </h2>

//                   {/* Player Details Grid */}
//                   <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
//                     {[
//                       ['Born', player.born],
//                       ['Birth Place', player.birthPlace],
//                       ['Height', player.height],
//                       ['Role', player.role],
//                       ['Batting Style', player.battingStyle],
//                       ['Bowling Style', player.bowlingStyle],
//                     ].map(([label, value]) => (
//                       <div key={label} className="border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0">
//                         <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
//                           {label}
//                         </p>
//                         <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white break-words">
//                           {value || 'N/A'}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Player Summary Section */}
//               <div className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-gray-100 dark:border-gray-700">
//                 <div className="flex items-center gap-2 mb-3 sm:mb-4">
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
//                     Career Summary
//                   </p>
//                 </div>

//                 {player.summary ? (
//                   <div className="space-y-3 sm:space-y-4">
//                     {player.summary.split('\n\n').map((para, i) => (
//                       <p
//                         key={i}
//                         className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
//                       >
//                         {para}
//                       </p>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="text-center py-8">
//                     <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                     </svg>
//                     <p className="text-gray-500 dark:text-gray-400">No summary available for this player.</p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Additional Stats Section */}
//             {player.stats && (
//               <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm mb-6 sm:mb-8">
//                 <div className="flex items-center gap-2 mb-4">
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                   </svg>
//                   <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
//                     Career Statistics
//                   </h3>
//                 </div>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
//                   {Object.entries(player.stats).map(([key, value]) => (
//                     <div key={key} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-center">
//                       <p className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">{key}</p>
//                       <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{value}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right: Empty space reserved for future sidebar — adjust w-[20%] to control width */}
//           <div className="hidden lg:block lg:w-[20%]">
//             {/* Sidebar content add karo yahan */}
//           </div>

//         </div>
//       </div>

//       {/* BlogsSection: separate full-width container — unaffected by above layout changes */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <BlogsSection />
//       </div>
//     </>
//   )
// }

// export default PlayerDetailPage

import { useParams } from 'react-router-dom'
import SportsTabs from '@/layouts/SportsTabs'
import CricketTabs from '../components/CricketTabs'
import SectionHeader from '@/shared/components/SectionHeader'
import BlogsSection from '@/shared/components/BlogsSection'
import SeoManager from '@/core/seo/SeoManager'
import { playerDetail, iplTeamPlayers } from '../../../shared/constants/cricketdata'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const getSlug = (name) => name.toLowerCase().replace(/\s+/g, '-')

const PlayerDetailPage = () => {
  const { id } = useParams()

  const player = playerDetail.find((p) => getSlug(p.name) === id)

  if (!player) {
    return (
      <div className="p-6 text-center text-gray-500 dark:text-gray-400">
        Player not found
      </div>
    )
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // Get teammates from same team
  const teammates = (iplTeamPlayers[player.team] || []).filter(
    (p) => getSlug(p.name) !== id
  )

  const infoRows = [
    ['Born', player.born],
    ['Birth Place', player.birthPlace],
    ['Height', player.height],
    ['Role', player.role],
    ['Batting Style', player.battingStyle],
    ['Bowling Style', player.bowlingStyle],
  ]

  return (
    <>
      <SeoManager title={`${player.name} | SportyRadar`} />
      <SportsTabs />
      <CricketTabs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex gap-6">

          {/* ── MAIN CONTENT ───────────────────────────────── */}
          <div className="w-full lg:w-[80%] min-w-0">
            <SectionHeader title="Player Info" />

            {/* ── Player Card ───────────────────────────────── */}
            <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm mb-6">

              {/* Header Row */}
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mb-6">

                {/* Avatar */}
                <div className="flex-shrink-0 self-center md:self-auto">
                  <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-40 md:h-44 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-900/30 dark:to-blue-900/30 shadow-md mx-auto md:mx-0 border border-gray-200 dark:border-gray-600">
                    {player.image ? (
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = '/fallback-player.png'
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-orange-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
                        <svg className="w-14 h-14 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  {/* Team badge */}
                  <span className="inline-block mb-2 px-2 py-0.5 text-xs font-medium rounded bg-[#00698c]/10 text-[#00698c] dark:bg-[#00698c]/20 dark:text-[#4dd0ff] border border-[#00698c]/20">
                    {player.team}
                  </span>

                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 break-words">
                    {player.name}
                  </h1>

                  {/* Details grid */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-3">
                    {infoRows.map(([label, value]) => (
                      <div key={label} className="border-b border-gray-100 dark:border-gray-700 pb-2">
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium mb-0.5">
                          {label}
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white break-words">
                          {value || 'N/A'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Career Summary ──────────────────────────── */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-[#00698c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Career Summary
                  </p>
                </div>

                {player.summary ? (
                  <div className="space-y-3">
                    {player.summary.split('\n\n').map((para, i) => (
                      <p key={i} className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 text-sm py-4 text-center">
                    No summary available for this player.
                  </p>
                )}
              </div>
            </div>

            {/* ── Teammates ───────────────────────────────── */}
            {teammates.length > 0 && (
              <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                    {player.team} Squad
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {teammates.map((tm) => (
                    <Link
                      key={tm.name}
                      to={`/cricket/player/${getSlug(tm.name)}`}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                    >
                      {/* mini avatar */}
                      <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-yellow-200 to-purple-300 dark:from-yellow-900/40 dark:to-purple-900/40 flex items-center justify-center">
                        {tm.image ? (
                          <img src={tm.image} alt={tm.name} className="w-full h-full object-cover" />
                        ) : (
                          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-[#00698c] dark:group-hover:text-[#4dd0ff] transition-colors">
                          {tm.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{tm.role}</p>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT SIDEBAR (reserved) ─────────────────── */}
          <div className="hidden lg:block lg:w-[20%]">
            {/* Future sidebar content here */}
          </div>

        </div>
      </div>

      {/* Blogs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogsSection />
      </div>
    </>
  )
}

export default PlayerDetailPage