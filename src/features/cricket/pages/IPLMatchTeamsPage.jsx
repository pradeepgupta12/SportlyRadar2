// // import { useState, useEffect } from 'react'
// // import { useParams, Link } from 'react-router-dom'
// // import SportsTabs from '@/layouts/SportsTabs'
// // import CricketTabs from '../components/CricketTabs'
// // import BlogsSection from '@/shared/components/BlogsSection'
// // import SeoManager from '@/core/seo/SeoManager'
// // import { iplMatches, iplMatchTeams } from '@/shared/constants/cricket.data'

// // const PlayerItem = ({ player }) => (
// //   <Link
// //     to={`/cricket/player/${player.id}`}
// //     className="flex items-center gap-2 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-lg px-2 -mx-2"
// //   >
// //     <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center overflow-hidden">
// //       {player.image ? (
// //         <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
// //       ) : (
// //         <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
// //           <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// //         </svg>
// //       )}
// //     </div>
// //     <div className="flex-1">
// //       <p className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#00698c] dark:hover:text-[#00698c] transition-colors">
// //         {player.name}
// //       </p>
// //       <p className="text-xs text-gray-500 dark:text-gray-400">{player.role}</p>
// //     </div>
// //     <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //       <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
// //     </svg>
// //   </Link>
// // )

// // const IPLMatchTeamsPage = () => {
// //   const { matchId } = useParams()
// //   const [activeTab, setActiveTab] = useState('Teams')
// //   const [match, setMatch] = useState(null)
// //   const [teamsData, setTeamsData] = useState(null)
  
// //   const tabs = ['Home', 'Live', 'Teams', 'Table', 'News', 'Photos', 'Video']

// //   useEffect(() => {
// //     // Use matchId to get specific match data
// //     const currentMatch = iplMatches.find(m => m.id === parseInt(matchId)) || iplMatches[0]
// //     setMatch(currentMatch)
    
// //     // Get teams data for this match
// //     const matchTeams = iplMatchTeams[currentMatch?.id] || iplMatchTeams.default || iplMatchTeams
// //     setTeamsData(matchTeams)
// //   }, [matchId])

// //   if (!match || !teamsData) {
// //     return (
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
// //         <p className="text-center text-gray-500">Loading...</p>
// //       </div>
// //     )
// //   }

// //   return (
// //     <>
// //       <SeoManager title={`IPL Match: ${match.team1.name} vs ${match.team2.name} | SportyRadar`} />
// //       <SportsTabs />
// //       <CricketTabs extraTab={{ label: 'IPL 2026', path: '/cricket/ipl' }} />
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
// //         {/* Match header banner */}
// //         <div className="bg-[#00698c] text-white rounded-lg px-4 py-3 mb-4">
// //           <h2 className="text-base font-bold">INDIAN PREMIER LEAGUE 2026</h2>
// //         </div>

// //         {/* Match info */}
// //         <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm mb-4">
// //           <div className="flex items-center gap-4 mb-3 flex-wrap">
// //             <div className="flex items-center gap-2">
// //               <span 
// //                 className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
// //                 style={{ backgroundColor: match.team1.color || '#dc2626' }}
// //               >
// //                 {match.team1.shortName}
// //               </span>
// //               <span className="font-bold text-gray-900 dark:text-white text-sm">{match.team1.name}</span>
// //             </div>
// //             <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">VS</span>
// //             <div className="flex items-center gap-2">
// //               <span 
// //                 className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
// //                 style={{ backgroundColor: match.team2.color || '#f97316' }}
// //               >
// //                 {match.team2.shortName}
// //               </span>
// //               <span className="font-bold text-gray-900 dark:text-white text-sm">{match.team2.name}</span>
// //             </div>
// //           </div>
// //           <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 dark:text-gray-400 mb-3">
// //             <div>
// //               <p className="font-semibold text-gray-700 dark:text-gray-300 mb-0.5">Location</p>
// //               <p>{match.venue}</p>
// //             </div>
// //             <div>
// //               <p className="font-semibold text-gray-700 dark:text-gray-300 mb-0.5">Date & Time</p>
// //               <p>{match.dateTime}</p>
// //             </div>
// //           </div>
// //           <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-3">
// //             <span>{match.date}</span>
// //             <span className="font-semibold">{match.matchNumber}</span>
// //           </div>

// //           {/* Sub tabs */}
// //           <div className="flex items-center gap-0 border-b border-gray-100 dark:border-gray-700 mt-3 -mx-4 px-4 overflow-x-auto scrollbar-hide">
// //             {tabs.map((tab) => (
// //               <button
// //                 key={tab}
// //                 onClick={() => setActiveTab(tab)}
// //                 className={`flex-shrink-0 px-3 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
// //                   activeTab === tab
// //                     ? 'border-[#00698c] text-[#00698c]'
// //                     : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
// //                 }`}
// //               >
// //                 {tab}
// //               </button>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Teams content */}
// //         {activeTab === 'Teams' && (
// //           <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm mb-8">
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //               {/* Team 1 */}
// //               <div>
// //                 <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
// //                   <span 
// //                     className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
// //                     style={{ backgroundColor: match.team1.color || '#dc2626' }}
// //                   >
// //                     {match.team1.shortName}
// //                   </span>
// //                   <div>
// //                     <span className="font-bold text-sm text-gray-900 dark:text-white">{match.team1.name}</span>
// //                     <p className="text-xs text-gray-500 dark:text-gray-400">
// //                       {teamsData.team1?.players?.length || 0} Players
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="space-y-1">
// //                   {teamsData.team1?.players?.map((player) => (
// //                     <PlayerItem key={player.id} player={player} />
// //                   ))}
// //                   {(!teamsData.team1?.players || teamsData.team1.players.length === 0) && (
// //                     <p className="text-gray-500 dark:text-gray-400 text-sm py-4 text-center">
// //                       No players found.
// //                     </p>
// //                   )}
// //                 </div>
// //               </div>

// //               {/* Team 2 */}
// //               <div>
// //                 <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
// //                   <span 
// //                     className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
// //                     style={{ backgroundColor: match.team2.color || '#f97316' }}
// //                   >
// //                     {match.team2.shortName}
// //                   </span>
// //                   <div>
// //                     <span className="font-bold text-sm text-gray-900 dark:text-white">{match.team2.name}</span>
// //                     <p className="text-xs text-gray-500 dark:text-gray-400">
// //                       {teamsData.team2?.players?.length || 0} Players
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="space-y-1">
// //                   {teamsData.team2?.players?.map((player) => (
// //                     <PlayerItem key={player.id} player={player} />
// //                   ))}
// //                   {(!teamsData.team2?.players || teamsData.team2.players.length === 0) && (
// //                     <p className="text-gray-500 dark:text-gray-400 text-sm py-4 text-center">
// //                       No players found.
// //                     </p>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         <BlogsSection />
// //       </div>
// //     </>
// //   )
// // }

// // export default IPLMatchTeamsPage

// import { useState, useEffect } from 'react'
// import { useParams, Link } from 'react-router-dom'
// import SportsTabs from '@/layouts/SportsTabs'
// import CricketTabs from '../components/CricketTabs'
// import BlogsSection from '@/shared/components/BlogsSection'
// import SeoManager from '@/core/seo/SeoManager'
// import { iplMatches, iplMatchTeams } from '@/shared/constants/cricket.data'

// const PlayerItem = ({ player }) => (
//   <Link
//     to={`/cricket/player/${player.id}`}
//     className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-lg px-2 sm:px-3 -mx-2 sm:-mx-3"
//   >
//     <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center overflow-hidden">
//       {player.image ? (
//         <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
//       ) : (
//         <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//         </svg>
//       )}
//     </div>
//     <div className="flex-1 min-w-0">
//       <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white hover:text-[#00698c] dark:hover:text-[#00698c] transition-colors truncate">
//         {player.name}
//       </p>
//       <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{player.role}</p>
//     </div>
//     <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
//     </svg>
//   </Link>
// )

// const IPLMatchTeamsPage = () => {
//   const { matchId } = useParams()
//   const [activeTab, setActiveTab] = useState('Teams')
//   const [match, setMatch] = useState(null)
//   const [teamsData, setTeamsData] = useState(null)
  
//   const tabs = ['Home', 'Live', 'Teams', 'Table', 'News', 'Photos', 'Video']

//   useEffect(() => {
//     // Use matchId to get specific match data
//     const currentMatch = iplMatches.find(m => m.id === parseInt(matchId)) || iplMatches[0]
//     setMatch(currentMatch)
    
//     // Get teams data for this match
//     const matchTeams = iplMatchTeams[currentMatch?.id] || iplMatchTeams.default || iplMatchTeams
//     setTeamsData(matchTeams)
//   }, [matchId])

//   if (!match || !teamsData) {
//     return (
//       <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
//         <p className="text-center text-gray-500">Loading...</p>
//       </div>
//     )
//   }

//   return (
//     <>
//       <SeoManager title={`IPL Match: ${match.team1.name} vs ${match.team2.name} | SportyRadar`} />
//       <SportsTabs />
//       <CricketTabs extraTab={{ label: 'IPL 2026', path: '/cricket/ipl' }} />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
//         {/* Match header banner */}
//         <div className="bg-[#00698c] text-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 mb-3 sm:mb-4">
//           <h2 className="text-sm sm:text-base font-bold">INDIAN PREMIER LEAGUE 2026</h2>
//         </div>

//         {/* Match info */}
//         <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 shadow-sm mb-3 sm:mb-4">
//           <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3">
//             <div className="flex items-center gap-2 flex-wrap">
//               <div className="flex items-center gap-2">
//                 <span 
//                   className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold"
//                   style={{ backgroundColor: match.team1.color || '#dc2626' }}
//                 >
//                   {match.team1.shortName}
//                 </span>
//                 <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{match.team1.name}</span>
//               </div>
//               <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">VS</span>
//               <div className="flex items-center gap-2">
//                 <span 
//                   className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold"
//                   style={{ backgroundColor: match.team2.color || '#f97316' }}
//                 >
//                   {match.team2.shortName}
//                 </span>
//                 <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{match.team2.name}</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">
//             <div>
//               <p className="font-semibold text-gray-700 dark:text-gray-300 mb-0.5">Location</p>
//               <p className="break-words">{match.venue}</p>
//             </div>
//             <div>
//               <p className="font-semibold text-gray-700 dark:text-gray-300 mb-0.5">Date & Time</p>
//               <p className="break-words">{match.dateTime}</p>
//             </div>
//           </div>
          
//           <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-3">
//             <span>{match.date}</span>
//             <span className="font-semibold">{match.matchNumber}</span>
//           </div>

//           {/* Sub tabs - Horizontal scroll for mobile */}
//           <div className="relative mt-3 -mx-3 sm:-mx-4">
//             <div className="flex items-center gap-0 border-b border-gray-100 dark:border-gray-700 overflow-x-auto scrollbar-hide px-3 sm:px-4">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`flex-shrink-0 px-2 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
//                     activeTab === tab
//                       ? 'border-[#00698c] text-[#00698c]'
//                       : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Teams content */}
//         {activeTab === 'Teams' && (
//           <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 shadow-sm mb-6 sm:mb-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//               {/* Team 1 */}
//               <div className="mb-6 lg:mb-0">
//                 <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-[#1c2128] z-10">
//                   <span 
//                     className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0"
//                     style={{ backgroundColor: match.team1.color || '#dc2626' }}
//                   >
//                     {match.team1.shortName}
//                   </span>
//                   <div className="min-w-0 flex-1">
//                     <span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white block truncate">{match.team1.name}</span>
//                     <p className="text-xs text-gray-500 dark:text-gray-400">
//                       {teamsData.team1?.players?.length || 0} Players
//                     </p>
//                   </div>
//                 </div>
//                 <div className="space-y-1 max-h-[calc(100vh-300px)] lg:max-h-[600px] overflow-y-auto pr-2">
//                   {teamsData.team1?.players?.map((player) => (
//                     <PlayerItem key={player.id} player={player} />
//                   ))}
//                   {(!teamsData.team1?.players || teamsData.team1.players.length === 0) && (
//                     <p className="text-gray-500 dark:text-gray-400 text-sm py-4 text-center">
//                       No players found.
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Team 2 */}
//               <div>
//                 <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-[#1c2128] z-10">
//                   <span 
//                     className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0"
//                     style={{ backgroundColor: match.team2.color || '#f97316' }}
//                   >
//                     {match.team2.shortName}
//                   </span>
//                   <div className="min-w-0 flex-1">
//                     <span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white block truncate">{match.team2.name}</span>
//                     <p className="text-xs text-gray-500 dark:text-gray-400">
//                       {teamsData.team2?.players?.length || 0} Players
//                     </p>
//                   </div>
//                 </div>
//                 <div className="space-y-1 max-h-[calc(100vh-300px)] lg:max-h-[600px] overflow-y-auto pr-2">
//                   {teamsData.team2?.players?.map((player) => (
//                     <PlayerItem key={player.id} player={player} />
//                   ))}
//                   {(!teamsData.team2?.players || teamsData.team2.players.length === 0) && (
//                     <p className="text-gray-500 dark:text-gray-400 text-sm py-4 text-center">
//                       No players found.
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         <BlogsSection />
//       </div>
//     </>
//   )
// }

// export default IPLMatchTeamsPage


// import { useState, useEffect } from 'react'
// import { useParams, Link } from 'react-router-dom'
// import SportsTabs from '@/layouts/SportsTabs'
// import CricketTabs from '../components/CricketTabs'
// import BlogsSection from '@/shared/components/BlogsSection'
// import SeoManager from '@/core/seo/SeoManager'
// import { iplMatches, iplMatchTeams } from '@/shared/constants/cricket.data'

// const PlayerItem = ({ player }) => (
//   <Link
//     to={`/cricket/player/${player.id}`}
//     className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-lg px-2 sm:px-3 -mx-2 sm:-mx-3"
//   >
//     <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center overflow-hidden">
//       {player.image ? (
//         <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
//       ) : (
//         <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//         </svg>
//       )}
//     </div>
//     <div className="flex-1 min-w-0">
//       <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white hover:text-[#00698c] dark:hover:text-[#00698c] transition-colors truncate">
//         {player.name}
//       </p>
//       <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{player.role}</p>
//     </div>
//     <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
//     </svg>
//   </Link>
// )

// const IPLMatchTeamsPage = () => {
//   const { matchId } = useParams()
//   const [activeTab, setActiveTab] = useState('Teams')
//   const [match, setMatch] = useState(null)
//   const [teamsData, setTeamsData] = useState(null)

//   const tabs = ['Home', 'Live', 'Teams', 'Table', 'News', 'Photos', 'Video']

//   useEffect(() => {
//     const currentMatch = iplMatches.find(m => m.id === parseInt(matchId)) || iplMatches[0]
//     setMatch(currentMatch)
//     const matchTeams = iplMatchTeams[currentMatch?.id] || iplMatchTeams.default || iplMatchTeams
//     setTeamsData(matchTeams)
//   }, [matchId])

//   if (!match || !teamsData) {
//     return (
//       <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
//         <p className="text-center text-gray-500">Loading...</p>
//       </div>
//     )
//   }

//   return (
//     <>
//       <SeoManager title={`IPL Match: ${match.team1.name} vs ${match.team2.name} | SportyRadar`} />
//       <SportsTabs />
//       <CricketTabs extraTab={{ label: 'IPL 2026', path: '/cricket/ipl' }} />

//       {/* Main layout: match content + right sidebar space */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
//         <div className="flex gap-6">

//           {/* Left: Match content — narrowed to make room for right sidebar */}
//           <div className="w-full lg:w-[80%] min-w-0">
//             {/* Match header banner */}
//             <div className="bg-[#00698c] text-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 mb-3 sm:mb-4">
//               <h2 className="text-sm sm:text-base font-bold">INDIAN PREMIER LEAGUE 2026</h2>
//             </div>

//             {/* Match info */}
//             <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 shadow-sm mb-3 sm:mb-4">
//               <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3">
//                 <div className="flex items-center gap-2 flex-wrap">
//                   <div className="flex items-center gap-2">
//                     <span
//                       className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold"
//                       style={{ backgroundColor: match.team1.color || '#dc2626' }}
//                     >
//                       {match.team1.shortName}
//                     </span>
//                     <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{match.team1.name}</span>
//                   </div>
//                   <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">VS</span>
//                   <div className="flex items-center gap-2">
//                     <span
//                       className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold"
//                       style={{ backgroundColor: match.team2.color || '#f97316' }}
//                     >
//                       {match.team2.shortName}
//                     </span>
//                     <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{match.team2.name}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">
//                 <div>
//                   <p className="font-semibold text-gray-700 dark:text-gray-300 mb-0.5">Location</p>
//                   <p className="break-words">{match.venue}</p>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-700 dark:text-gray-300 mb-0.5">Date & Time</p>
//                   <p className="break-words">{match.dateTime}</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-3">
//                 <span>{match.date}</span>
//                 <span className="font-semibold">{match.matchNumber}</span>
//               </div>

//               {/* Sub tabs */}
//               <div className="relative mt-3 -mx-3 sm:-mx-4">
//                 <div className="flex items-center gap-0 border-b border-gray-100 dark:border-gray-700 overflow-x-auto scrollbar-hide px-3 sm:px-4">
//                   {tabs.map((tab) => (
//                     <button
//                       key={tab}
//                       onClick={() => setActiveTab(tab)}
//                       className={`flex-shrink-0 px-2 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
//                         activeTab === tab
//                           ? 'border-[#00698c] text-[#00698c]'
//                           : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
//                       }`}
//                     >
//                       {tab}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Teams content */}
//             {activeTab === 'Teams' && (
//               <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 shadow-sm mb-6 sm:mb-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//                   {/* Team 1 */}
//                   <div className="mb-6 lg:mb-0">
//                     <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-[#1c2128] z-10">
//                       <span
//                         className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0"
//                         style={{ backgroundColor: match.team1.color || '#dc2626' }}
//                       >
//                         {match.team1.shortName}
//                       </span>
//                       <div className="min-w-0 flex-1">
//                         <span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white block truncate">{match.team1.name}</span>
//                         <p className="text-xs text-gray-500 dark:text-gray-400">
//                           {teamsData.team1?.players?.length || 0} Players
//                         </p>
//                       </div>
//                     </div>
//                     <div className="space-y-1 max-h-[calc(100vh-300px)] lg:max-h-[600px] overflow-y-auto pr-2">
//                       {teamsData.team1?.players?.map((player) => (
//                         <PlayerItem key={player.id} player={player} />
//                       ))}
//                       {(!teamsData.team1?.players || teamsData.team1.players.length === 0) && (
//                         <p className="text-gray-500 dark:text-gray-400 text-sm py-4 text-center">
//                           No players found.
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Team 2 */}
//                   <div>
//                     <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-[#1c2128] z-10">
//                       <span
//                         className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0"
//                         style={{ backgroundColor: match.team2.color || '#f97316' }}
//                       >
//                         {match.team2.shortName}
//                       </span>
//                       <div className="min-w-0 flex-1">
//                         <span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white block truncate">{match.team2.name}</span>
//                         <p className="text-xs text-gray-500 dark:text-gray-400">
//                           {teamsData.team2?.players?.length || 0} Players
//                         </p>
//                       </div>
//                     </div>
//                     <div className="space-y-1 max-h-[calc(100vh-300px)] lg:max-h-[600px] overflow-y-auto pr-2">
//                       {teamsData.team2?.players?.map((player) => (
//                         <PlayerItem key={player.id} player={player} />
//                       ))}
//                       {(!teamsData.team2?.players || teamsData.team2.players.length === 0) && (
//                         <p className="text-gray-500 dark:text-gray-400 text-sm py-4 text-center">
//                           No players found.
//                         </p>
//                       )}
//                     </div>
//                   </div>
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

// export default IPLMatchTeamsPage




/////// ye jo neeche code lga hai scorecard ke liye hai upar jo hai usme scorekard vala nahi tha par hai dono sahi 




import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import SportsTabs from '@/layouts/SportsTabs'
import CricketTabs from '../components/CricketTabs'
import BlogsSection from '@/shared/components/BlogsSection'
import SeoManager from '@/core/seo/SeoManager'
import { iplMatches, iplMatchTeams } from '@/shared/constants/cricket.data'

const PlayerItem = ({ player }) => (
  <Link
    to={`/cricket/player/${player.id}`}
    className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-lg px-2 sm:px-3 -mx-2 sm:-mx-3"
  >
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 flex items-center justify-center overflow-hidden">
      {player.image ? (
        <img src={player.image} alt={player.name} className="w-full h-full object-cover" />
      ) : (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )}
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white hover:text-[#00698c] dark:hover:text-[#00698c] transition-colors truncate">
        {player.name}
      </p>
      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{player.role}</p>
    </div>
    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
    </svg>
  </Link>
)

const IPLMatchTeamsPage = () => {
  const { matchId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Teams')
  const [match, setMatch] = useState(null)
  const [teamsData, setTeamsData] = useState(null)

  // Scorecard tab added
  const tabs = ['Home', 'Live', 'Scorecard', 'Teams', 'Table', 'News', 'Photos', 'Video']

  useEffect(() => {
    const currentMatch = iplMatches.find(m => m.id === parseInt(matchId)) || iplMatches[0]
    setMatch(currentMatch)
    const matchTeams = iplMatchTeams[currentMatch?.id] || iplMatchTeams.default || iplMatchTeams
    setTeamsData(matchTeams)
  }, [matchId])

  if (!match || !teamsData) {
    return (
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <p className="text-center text-gray-500">Loading...</p>
      </div>
    )
  }

  return (
    <>
      <SeoManager title={`IPL Match: ${match.team1.name} vs ${match.team2.name} | SportyRadar`} />
      <SportsTabs />
      <CricketTabs extraTab={{ label: 'IPL 2026', path: '/cricket/ipl' }} />

      {/* Main layout: match content + right sidebar space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex gap-6">

          {/* Left: Match content — narrowed to make room for right sidebar */}
          <div className="w-full lg:w-[80%] min-w-0">
            {/* Match header banner */}
            <div className="bg-[#00698c] text-white rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 mb-3 sm:mb-4">
              <h2 className="text-sm sm:text-base font-bold">INDIAN PREMIER LEAGUE 2026</h2>
            </div>

            {/* Match info */}
            <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 shadow-sm mb-3 sm:mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold"
                      style={{ backgroundColor: match.team1.color || '#dc2626' }}
                    >
                      {match.team1.shortName}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{match.team1.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">VS</span>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold"
                      style={{ backgroundColor: match.team2.color || '#f97316' }}
                    >
                      {match.team2.shortName}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{match.team2.name}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300 mb-0.5">Location</p>
                  <p className="break-words">{match.venue}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300 mb-0.5">Date & Time</p>
                  <p className="break-words">{match.dateTime}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-3">
                <span>{match.date}</span>
                <span className="font-semibold">{match.matchNumber}</span>
              </div>

              {/* Sub tabs — Scorecard tab navigate karta hai scorecard page pe */}
              <div className="relative mt-3 -mx-3 sm:-mx-4">
                <div className="flex items-center gap-0 border-b border-gray-100 dark:border-gray-700 overflow-x-auto scrollbar-hide px-3 sm:px-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => {
                        if (tab === 'Scorecard') {
                          navigate(`/cricket/ipl/match/${match.id}/scorecard`)
                        } else {
                          setActiveTab(tab)
                        }
                      }}
                      className={`flex-shrink-0 px-2 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                        activeTab === tab
                          ? 'border-[#00698c] text-[#00698c]'
                          : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Teams content */}
            {activeTab === 'Teams' && (
              <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 shadow-sm mb-6 sm:mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {/* Team 1 */}
                  <div className="mb-6 lg:mb-0">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-[#1c2128] z-10">
                      <span
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0"
                        style={{ backgroundColor: match.team1.color || '#dc2626' }}
                      >
                        {match.team1.shortName}
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white block truncate">{match.team1.name}</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {teamsData.team1?.players?.length || 0} Players
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1 max-h-[calc(100vh-300px)] lg:max-h-[600px] overflow-y-auto pr-2">
                      {teamsData.team1?.players?.map((player) => (
                        <PlayerItem key={player.id} player={player} />
                      ))}
                      {(!teamsData.team1?.players || teamsData.team1.players.length === 0) && (
                        <p className="text-gray-500 dark:text-gray-400 text-sm py-4 text-center">No players found.</p>
                      )}
                    </div>
                  </div>

                  {/* Team 2 */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-[#1c2128] z-10">
                      <span
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold flex-shrink-0"
                        style={{ backgroundColor: match.team2.color || '#f97316' }}
                      >
                        {match.team2.shortName}
                      </span>
                      <div className="min-w-0 flex-1">
                        <span className="font-bold text-sm sm:text-base text-gray-900 dark:text-white block truncate">{match.team2.name}</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {teamsData.team2?.players?.length || 0} Players
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1 max-h-[calc(100vh-300px)] lg:max-h-[600px] overflow-y-auto pr-2">
                      {teamsData.team2?.players?.map((player) => (
                        <PlayerItem key={player.id} player={player} />
                      ))}
                      {(!teamsData.team2?.players || teamsData.team2.players.length === 0) && (
                        <p className="text-gray-500 dark:text-gray-400 text-sm py-4 text-center">No players found.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other tab placeholders */}
            {activeTab !== 'Teams' && (
              <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-6 sm:p-8 text-center mb-6">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gray-400 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {activeTab} Coming Soon
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  We're working on bringing you the latest {activeTab.toLowerCase()} content.
                </p>
              </div>
            )}
          </div>

          {/* Right: Empty space reserved for future sidebar — adjust w-[20%] to control width */}
          <div className="hidden lg:block lg:w-[20%]">
            {/* Sidebar content add karo yahan */}
          </div>

        </div>
      </div>

      {/* BlogsSection: separate full-width container — unaffected by above layout changes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogsSection />
      </div>
    </>
  )
}

export default IPLMatchTeamsPage