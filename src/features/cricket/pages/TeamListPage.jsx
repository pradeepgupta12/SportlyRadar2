// // // // import { useState, useEffect } from 'react'
// // // // import { useSearchParams } from 'react-router-dom'
// // // // import { Link } from 'react-router-dom'
// // // // import SportsTabs from '@/layouts/SportsTabs'
// // // // import CricketTabs from '../components/CricketTabs'
// // // // import BlogsSection from '@/shared/components/BlogsSection'
// // // // import SeoManager from '@/core/seo/SeoManager'
// // // // import { IPLBanner, IPLSubTabs } from '../components/iplshared'
// // // // import { iplTeams, iplTeamPlayers } from '@/shared/constants/cricket.data'


// // // // const IPL_TEAMS = [
// // // //   'Mumbai Indians',
// // // //   'Chennai Super Kings',
// // // //   'Royal Challengers Bengaluru',
// // // //   'Kolkata Knight Riders',
// // // //   'Delhi Capitals',
// // // //   'Punjab Kings',
// // // //   'Rajasthan Royals',
// // // //   'Sunrisers Hyderabad',
// // // //   'Lucknow Super Giants',
// // // //   'Gujarat Titans',
// // // // ]
// // // // const getSlug = (name) => name.toLowerCase().replace(/\s+/g, '-')

// // // // const PlayerRow = ({ player }) => (
// // // //   <Link
// // // //     to={`/cricket/player/${getSlug(player.name)}`}
// // // //     className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
// // // //   >
// // // //     <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
// // // //       {player.image ? (
// // // //         <img src={player.image} alt={player.name} className="w-full h-full object-cover" loading="lazy" />
// // // //       ) : (
// // // //         <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-purple-300 flex items-center justify-center">
// // // //           <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
// // // //             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// // // //           </svg>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //     <div className="flex-1 min-w-0">
// // // //       <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base truncate">{player.name}</h4>
// // // //       <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{player.role}</p>
// // // //       <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
// // // //         <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Age: {player.age}</p>
// // // //         <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
// // // //           Batting: <span className="font-semibold text-gray-700 dark:text-gray-300">{player.batting}</span>
// // // //         </p>
// // // //         <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
// // // //           Bowling: <span className="font-semibold text-gray-700 dark:text-gray-300">{player.bowling}</span>
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //     <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //       <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
// // // //     </svg>
// // // //   </Link>
// // // // )

// // // // const TeamListPage = () => {
// // // //   const [searchParams, setSearchParams] = useSearchParams()
// // // //   const [selectedTeam, setSelectedTeam] = useState('Royal Challengers Bengaluru')
// // // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false)

// // // //   useEffect(() => {
// // // //     const teamFromUrl = searchParams.get('team')
// // // //     if (teamFromUrl && iplTeams.includes(teamFromUrl)) {
// // // //       setSelectedTeam(teamFromUrl)
// // // //     }
// // // //   }, [searchParams])

// // // //   const handleTeamChange = (team) => {
// // // //     setSelectedTeam(team)
// // // //     setSearchParams({ team })
// // // //     setIsSidebarOpen(false)
// // // //   }

// // // //   const players = iplTeamPlayers[selectedTeam] || []

// // // //   return (
// // // //     <>
// // // //       <SeoManager title={`IPL 2026 Teams - ${selectedTeam} | SportyRadar`} />
// // // //       <SportsTabs />
// // // //       <CricketTabs extraTab={{ label: 'IPL 2025', path: '/cricket/ipl' }} />

// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
// // // //         <div className="flex gap-6">
// // // //           <div className="w-full lg:w-[80%] min-w-0">

// // // //             {/* ── IPL Banner + SubTabs (same as other IPL pages) ── */}
// // // //             <IPLBanner />
// // // //             <IPLSubTabs active="Teams" />

// // // //             {/* ── All existing TeamListPage content — untouched ── */}
// // // //             <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 border-t-0 rounded-b-lg p-3 sm:p-4">

// // // //               {/* Mobile Team Selector Button */}
// // // //               <div className="lg:hidden mb-4">
// // // //                 <button
// // // //                   onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// // // //                   className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
// // // //                 >
// // // //                   <span className="font-medium text-gray-900 dark:text-white">{selectedTeam}</span>
// // // //                   <div className="flex items-center gap-2">
// // // //                     <span className="text-xs text-gray-500 dark:text-gray-400">{players.length} Players</span>
// // // //                     <svg
// // // //                       className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isSidebarOpen ? 'rotate-180' : ''}`}
// // // //                       fill="none" stroke="currentColor" viewBox="0 0 24 24"
// // // //                     >
// // // //                       <path strokeWidth="2" strokeLinecap="round" d="M19 9l-7 7-7-7" />
// // // //                     </svg>
// // // //                   </div>
// // // //                 </button>

// // // //                 {isSidebarOpen && (
// // // //                   <div className="mt-2 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-20">
// // // //                     {iplTeams.map((team) => (
// // // //                       <button
// // // //                         key={team}
// // // //                         onClick={() => handleTeamChange(team)}
// // // //                         className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center justify-between transition-colors ${
// // // //                           selectedTeam === team
// // // //                             ? 'bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white'
// // // //                             : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
// // // //                         }`}
// // // //                       >
// // // //                         {team}
// // // //                         {selectedTeam === team && (
// // // //                           <svg className="w-4 h-4 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                             <path strokeWidth="2" strokeLinecap="round" d="M5 13l4 4L19 7" />
// // // //                           </svg>
// // // //                         )}
// // // //                       </button>
// // // //                     ))}
// // // //                   </div>
// // // //                 )}
// // // //               </div>

// // // //               {/* Desktop Layout: inner teams sidebar + players list */}
// // // //               <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

// // // //                 {/* Inner Teams sidebar - Desktop only */}
// // // //                 <div className="hidden lg:block w-56 xl:w-64 flex-shrink-0 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm self-start sticky top-4">
// // // //                   <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
// // // //                     <h3 className="font-semibold text-gray-900 dark:text-white text-sm">IPL Teams 2026</h3>
// // // //                   </div>
// // // //                   <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
// // // //                     {iplTeams.map((team) => (
// // // //                       <button
// // // //                         key={team}
// // // //                         onClick={() => handleTeamChange(team)}
// // // //                         className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center justify-between transition-colors ${
// // // //                           selectedTeam === team
// // // //                             ? 'bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white'
// // // //                             : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
// // // //                         }`}
// // // //                       >
// // // //                         <span className="truncate">{team}</span>
// // // //                         {selectedTeam === team && (
// // // //                           <svg className="w-4 h-4 text-[#00698c] flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                             <path strokeWidth="2" strokeLinecap="round" d="M5 13l4 4L19 7" />
// // // //                           </svg>
// // // //                         )}
// // // //                       </button>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>

// // // //                 {/* Players list */}
// // // //                 <div className="flex-1">
// // // //                   <div className="hidden lg:flex items-center justify-between mb-4 px-2">
// // // //                     <div className="flex items-center gap-2">
// // // //                       <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-200 to-purple-300 flex items-center justify-center">
// // // //                         <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
// // // //                           <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// // // //                         </svg>
// // // //                       </div>
// // // //                       <div>
// // // //                         <p className="text-sm text-gray-600 dark:text-gray-400">Squad Size</p>
// // // //                         <p className="text-lg font-bold text-gray-900 dark:text-white">{players.length} Players</p>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="space-y-3 sm:space-y-4">
// // // //                     {players.map((player) => (
// // // //                       <PlayerRow key={getSlug(player.name)} player={player} />
// // // //                     ))}
// // // //                     {players.length === 0 && (
// // // //                       <div className="text-center py-8 sm:py-12">
// // // //                         <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
// // // //                           <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
// // // //                             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// // // //                           </svg>
// // // //                         </div>
// // // //                         <p className="text-gray-500 dark:text-gray-400 text-sm">No players found for this team.</p>
// // // //                       </div>
// // // //                     )}
// // // //                   </div>

// // // //                   {players.length > 10 && (
// // // //                     <div className="mt-6 text-center">
// // // //                       <button className="px-6 py-2 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
// // // //                         Load More Players
// // // //                       </button>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               </div>

// // // //             </div>
// // // //           </div>

// // // //           <div className="hidden lg:block lg:w-[20%]">{/* sidebar */}</div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //         <BlogsSection />
// // // //       </div>

// // // //       {isSidebarOpen && (
// // // //         <div
// // // //           className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
// // // //           onClick={() => setIsSidebarOpen(false)}
// // // //         />
// // // //       )}
// // // //     </>
// // // //   )
// // // // }

// // // // export default TeamListPageimport { useState, useEffect, useCallback } from 'react'
// // // import { useSearchParams, Link } from 'react-router-dom'
// // // import SportsTabs from '@/layouts/SportsTabs'
// // // import CricketTabs from '../components/CricketTabs'
// // // import BlogsSection from '@/shared/components/BlogsSection'
// // // import SeoManager from '@/core/seo/SeoManager'
// // // import { IPLBanner, IPLSubTabs } from '../components/iplshared'
// // // import { useCallback, useEffect, useState } from 'react'
// // // import { VITE_API_BASE_URL } from '../../../../config'

// // // const API_BASE = `${VITE_API_BASE_URL}/cricket`

// // // // Hard-coded mapping from your backend debug output
// // // // distinctTeamIds: [255, 58, 59, 61, 62, 63, 64, 65, 966, 971]
// // // const IPL_TEAM_MAP = [
// // //   { name: 'Mumbai Indians',              teamId: '62',  shortName: 'MI'  },
// // //   { name: 'Chennai Super Kings',         teamId: '58',  shortName: 'CSK' },
// // //   { name: 'Royal Challengers Bengaluru', teamId: '61',  shortName: 'RCB' },
// // //   { name: 'Kolkata Knight Riders',       teamId: '63',  shortName: 'KKR' },
// // //   { name: 'Delhi Capitals',              teamId: '59',  shortName: 'DC'  },
// // //   { name: 'Punjab Kings',                teamId: '65',  shortName: 'PBKS'},
// // //   { name: 'Rajasthan Royals',            teamId: '64',  shortName: 'RR'  },
// // //   { name: 'Sunrisers Hyderabad',         teamId: '255', shortName: 'SRH' },
// // //   { name: 'Lucknow Super Giants',        teamId: '971', shortName: 'LSG' },
// // //   { name: 'Gujarat Titans',              teamId: '966', shortName: 'GT'  },
// // // ]

// // // // ─── Role Badge ───────────────────────────────────────────────────────────────
// // // const RoleBadge = ({ role }) => {
// // //   const cfg = {
// // //     BAT:     { label: 'BAT',  cls: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' },
// // //     BOWL:    { label: 'BOWL', cls: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' },
// // //     ALL:     { label: 'ALL',  cls: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300' },
// // //     WK:      { label: 'WK',   cls: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300' },
// // //     UNKNOWN: { label: '—',    cls: 'bg-gray-100 dark:bg-gray-800 text-gray-400' },
// // //   }
// // //   const { label, cls } = cfg[role] || cfg.UNKNOWN
// // //   return <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${cls}`}>{label}</span>
// // // }

// // // // ─── Player Row ───────────────────────────────────────────────────────────────
// // // const PlayerRow = ({ player }) => (
// // //   <Link
// // //     to={`/cricket/player/${player.playerId}`}
// // //     className="flex items-center gap-3 p-3 sm:p-4 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md hover:border-[#00698c]/40 transition-all duration-200"
// // //   >
// // //     <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-yellow-100 to-purple-200 dark:from-yellow-900/30 dark:to-purple-900/30 border border-gray-100 dark:border-gray-700">
// // //       {player.imageUrl ? (
// // //         <img src={player.imageUrl} alt={player.name} className="w-full h-full object-cover"
// // //           loading="lazy" onError={e => { e.target.onerror = null; e.target.style.display = 'none' }} />
// // //       ) : (
// // //         <div className="w-full h-full flex items-center justify-center">
// // //           <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
// // //             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// // //           </svg>
// // //         </div>
// // //       )}
// // //     </div>

// // //     <div className="flex-1 min-w-0">
// // //       <div className="flex items-center gap-2">
// // //         <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base truncate">{player.name}</h4>
// // //         <RoleBadge role={player.role} />
// // //       </div>
// // //       {player.battingStyle && (
// // //         <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
// // //           {player.battingStyle}{player.bowlingStyle ? ` · ${player.bowlingStyle}` : ''}
// // //         </p>
// // //       )}
// // //     </div>

// // //     <svg className="w-4 h-4 text-gray-300 dark:text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //       <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
// // //     </svg>
// // //   </Link>
// // // )

// // // const PlayerSkeleton = () => (
// // //   <div className="flex items-center gap-3 p-4 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg animate-pulse">
// // //     <div className="w-11 h-11 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
// // //     <div className="flex-1"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-2" /><div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-48" /></div>
// // //   </div>
// // // )

// // // // ─── Main Page ─────────────────────────────────────────────────────────────────
// // // const TeamListPage = () => {
// // //   const [searchParams, setSearchParams] = useSearchParams()
// // //   const [selectedTeam, setSelectedTeam] = useState(IPL_TEAM_MAP[0])
// // //   const [players, setPlayers]           = useState([])
// // //   const [loading, setLoading]           = useState(false)
// // //   const [error, setError]               = useState(null)
// // //   const [sidebarOpen, setSidebarOpen]   = useState(false)

// // //   useEffect(() => {
// // //     const name = searchParams.get('team')
// // //     const found = IPL_TEAM_MAP.find(t => t.name === name || t.shortName === name)
// // //     if (found) setSelectedTeam(found)
// // //   }, [])

// // //   const fetchPlayers = useCallback(async (team) => {
// // //     setLoading(true); setError(null); setPlayers([])
// // //     try {
// // //       const res = await fetch(`${API_BASE}/ipl/teams/${team.teamId}/players`)
// // //       if (!res.ok) throw new Error(`HTTP ${res.status}`)
// // //       const json = await res.json()
// // //       setPlayers(json?.data?.players || [])
// // //     } catch (err) {
// // //       setError('Players load nahi ho sake.')
// // //     } finally { setLoading(false) }
// // //   }, [])

// // //   useEffect(() => { fetchPlayers(selectedTeam) }, [selectedTeam])

// // //   const handleTeamChange = (team) => {
// // //     setSelectedTeam(team)
// // //     setSearchParams({ team: team.name })
// // //     setSidebarOpen(false)
// // //   }

// // //   return (
// // //     <>
// // //       <SeoManager title={`IPL 2025 Teams — ${selectedTeam.name} | SportyRadar`} />
// // //       <SportsTabs />
// // //       <CricketTabs extraTab={{ label: 'IPL 2025', path: '/cricket/ipl' }} />

// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
// // //         <div className="flex gap-6">
// // //           <div className="w-full lg:w-[80%] min-w-0">
// // //             <IPLBanner />
// // //             <IPLSubTabs active="Teams" />

// // //             <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 border-t-0 rounded-b-lg p-3 sm:p-4">

// // //               {/* Mobile Dropdown */}
// // //               <div className="lg:hidden mb-4">
// // //                 <button onClick={() => setSidebarOpen(!sidebarOpen)}
// // //                   className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg">
// // //                   <div className="flex items-center gap-2">
// // //                     <span className="text-xs font-bold text-[#00698c]">{selectedTeam.shortName}</span>
// // //                     <span className="text-sm font-medium text-gray-900 dark:text-white">{selectedTeam.name}</span>
// // //                   </div>
// // //                   <svg className={`w-5 h-5 text-gray-400 transition-transform ${sidebarOpen ? 'rotate-180' : ''}`}
// // //                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeWidth="2" strokeLinecap="round" d="M19 9l-7 7-7-7" />
// // //                   </svg>
// // //                 </button>
// // //                 {sidebarOpen && (
// // //                   <div className="mt-1 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-20">
// // //                     {IPL_TEAM_MAP.map(team => (
// // //                       <button key={team.teamId} onClick={() => handleTeamChange(team)}
// // //                         className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center gap-3 transition-colors ${
// // //                           selectedTeam.teamId === team.teamId
// // //                             ? 'bg-[#00698c]/5 font-semibold text-gray-900 dark:text-white'
// // //                             : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
// // //                         }`}>
// // //                         <span className="w-10 text-xs font-bold text-[#00698c]">{team.shortName}</span>
// // //                         {team.name}
// // //                       </button>
// // //                     ))}
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
// // //                 {/* Desktop Sidebar */}
// // //                 <div className="hidden lg:block w-56 xl:w-64 flex-shrink-0 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden self-start sticky top-4">
// // //                   <div className="px-3 py-2.5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
// // //                     <h3 className="font-semibold text-gray-900 dark:text-white text-sm">IPL Teams 2025</h3>
// // //                   </div>
// // //                   {IPL_TEAM_MAP.map(team => (
// // //                     <button key={team.teamId} onClick={() => handleTeamChange(team)}
// // //                       className={`w-full text-left px-3 py-2.5 text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center gap-2 transition-colors ${
// // //                         selectedTeam.teamId === team.teamId
// // //                           ? 'bg-[#00698c]/5 dark:bg-[#00698c]/10 font-semibold text-gray-900 dark:text-white'
// // //                           : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 bg-white dark:bg-[#1c2128]'
// // //                       }`}>
// // //                       <span className="w-9 text-xs font-bold text-[#00698c] flex-shrink-0">{team.shortName}</span>
// // //                       <span className="truncate text-xs">{team.name}</span>
// // //                       {selectedTeam.teamId === team.teamId && (
// // //                         <svg className="w-3.5 h-3.5 text-[#00698c] ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                           <path strokeWidth="2.5" strokeLinecap="round" d="M5 13l4 4L19 7" />
// // //                         </svg>
// // //                       )}
// // //                     </button>
// // //                   ))}
// // //                 </div>

// // //                 {/* Players List */}
// // //                 <div className="flex-1 min-w-0">
// // //                   <div className="flex items-center justify-between mb-3 px-1">
// // //                     <div>
// // //                       <h2 className="font-bold text-gray-900 dark:text-white text-base">{selectedTeam.name}</h2>
// // //                       {!loading && <p className="text-xs text-gray-500 dark:text-gray-400">{players.length} players</p>}
// // //                     </div>
// // //                     {error && (
// // //                       <button onClick={() => fetchPlayers(selectedTeam)} className="text-xs text-[#00698c] underline">Retry</button>
// // //                     )}
// // //                   </div>

// // //                   {error && !loading && (
// // //                     <div className="text-center py-6 text-sm text-red-500 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/30">{error}</div>
// // //                   )}

// // //                   {loading && <div className="space-y-2">{[...Array(10)].map((_, i) => <PlayerSkeleton key={i} />)}</div>}

// // //                   {!loading && !error && (
// // //                     <div className="space-y-2">
// // //                       {players.map(p => <PlayerRow key={p.playerId} player={p} />)}
// // //                       {!players.length && (
// // //                         <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/30 rounded-lg border border-dashed border-gray-200 dark:border-gray-700">
// // //                           <svg className="w-10 h-10 mx-auto text-gray-300 dark:text-gray-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
// // //                             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// // //                           </svg>
// // //                           <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">No players found</p>
// // //                           <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Run seed-players API first</p>
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="hidden lg:block lg:w-[20%]" />
// // //         </div>
// // //       </div>

// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><BlogsSection /></div>

// // //       {sidebarOpen && (
// // //         <div className="fixed inset-0 bg-black/50 z-10 lg:hidden" onClick={() => setSidebarOpen(false)} />
// // //       )}
// // //     </>
// // //   )
// // // }

// // // export default TeamListPage



// // import { useState, useEffect } from 'react'
// // import { useSearchParams } from 'react-router-dom'
// // import SportsTabs from '@/layouts/SportsTabs'
// // import CricketTabs from '../components/CricketTabs'
// // import SectionHeader from '@/shared/components/SectionHeader'
// // import BlogsSection from '@/shared/components/BlogsSection'
// // import SeoManager from '@/core/seo/SeoManager'
// // import { iplTeams, iplTeamPlayers } from '@/shared/constants/cricket.data'
// // import { Link } from 'react-router-dom'
// // const getSlug = (name) =>
// //   name.toLowerCase().replace(/\s+/g, '-')


// // const PlayerRow = ({ player }) => (
// //   <Link
// //     to={`/cricket/player/${getSlug(player.name)}`}
// //     className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
// //   >
// //     <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
// //       {player.image ? (
// //         <img src={player.image} alt={player.name} className="w-full h-full object-cover" loading="lazy" />
// //       ) : (
// //         <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-purple-300 flex items-center justify-center">
// //           <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
// //             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// //           </svg>
// //         </div>
// //       )}
// //     </div>
// //     <div className="flex-1 min-w-0">
// //       <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base truncate">{player.name}</h4>
// //       <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{player.role}</p>
// //       <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
// //         <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Age: {player.age}</p>
// //         <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
// //           Batting: <span className="font-semibold text-gray-700 dark:text-gray-300">{player.batting}</span>
// //         </p>
// //         <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
// //           Bowling: <span className="font-semibold text-gray-700 dark:text-gray-300">{player.bowling}</span>
// //         </p>
// //       </div>
// //     </div>
// //     <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //       <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
// //     </svg>
// //   </Link>
// // )

// // const TeamListPage = () => {
// //   const [searchParams, setSearchParams] = useSearchParams()
// //   const [selectedTeam, setSelectedTeam] = useState('Royal Challengers Bengaluru')
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(false)

// //   useEffect(() => {
// //     const teamFromUrl = searchParams.get('team')
// //     if (teamFromUrl && iplTeams.includes(teamFromUrl)) {
// //       setSelectedTeam(teamFromUrl)
// //     }
// //   }, [searchParams])

// //   const handleTeamChange = (team) => {
// //     setSelectedTeam(team)
// //     setSearchParams({ team: team })
// //     setIsSidebarOpen(false)
// //   }

// //   const players = iplTeamPlayers[selectedTeam] || []

// //   return (
// //     <>
// //       <SeoManager title={`IPL 2026 Teams - ${selectedTeam} | SportyRadar`} />
// //       <SportsTabs />
// //       <CricketTabs />

// //       {/* Main layout: team list content + right sidebar space */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
// //         <div className="flex gap-6">

// //           {/* Left: Team list content — narrowed to make room for right sidebar */}
// //           <div className="w-full lg:w-[80%] min-w-0">
// //             <SectionHeader title={`IPL 2026 Teams - ${selectedTeam}`} />

// //             {/* Mobile Team Selector Button */}
// //             <div className="lg:hidden mb-4">
// //               <button
// //                 onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// //                 className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
// //               >
// //                 <span className="font-medium text-gray-900 dark:text-white">
// //                   {selectedTeam}
// //                 </span>
// //                 <div className="flex items-center gap-2">
// //                   <span className="text-xs text-gray-500 dark:text-gray-400">
// //                     {players.length} Players
// //                   </span>
// //                   <svg
// //                     className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isSidebarOpen ? 'rotate-180' : ''}`}
// //                     fill="none"
// //                     stroke="currentColor"
// //                     viewBox="0 0 24 24"
// //                   >
// //                     <path strokeWidth="2" strokeLinecap="round" d="M19 9l-7 7-7-7" />
// //                   </svg>
// //                 </div>
// //               </button>

// //               {/* Mobile Sidebar Dropdown */}
// //               {isSidebarOpen && (
// //                 <div className="mt-2 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-20">
// //                   {iplTeams.map((team) => (
// //                     <button
// //                       key={team}
// //                       onClick={() => handleTeamChange(team)}
// //                       className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center justify-between transition-colors ${
// //                         selectedTeam === team
// //                           ? 'bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white'
// //                           : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
// //                       }`}
// //                     >
// //                       {team}
// //                       {selectedTeam === team && (
// //                         <svg className="w-4 h-4 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                           <path strokeWidth="2" strokeLinecap="round" d="M5 13l4 4L19 7" />
// //                         </svg>
// //                       )}
// //                     </button>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>

// //             {/* Desktop Layout: inner teams sidebar + players list */}
// //             <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
// //               {/* Inner Teams sidebar - Desktop only */}
// //               <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm self-start sticky top-4">
// //                 <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
// //                   <h3 className="font-semibold text-gray-900 dark:text-white text-sm">IPL Teams 2026</h3>
// //                 </div>
// //                 <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
// //                   {iplTeams.map((team) => (
// //                     <button
// //                       key={team}
// //                       onClick={() => handleTeamChange(team)}
// //                       className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center justify-between transition-colors ${
// //                         selectedTeam === team
// //                           ? 'bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white'
// //                           : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
// //                       }`}
// //                     >
// //                       <span className="truncate">{team}</span>
// //                       {selectedTeam === team && (
// //                         <svg className="w-4 h-4 text-[#00698c] flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                           <path strokeWidth="2" strokeLinecap="round" d="M5 13l4 4L19 7" />
// //                         </svg>
// //                       )}
// //                     </button>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Players list */}
// //               <div className="flex-1">
// //                 {/* Team Stats Bar */}
// //                 <div className="hidden lg:flex items-center justify-between mb-4 px-2">
// //                   <div className="flex items-center gap-2">
// //                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-200 to-purple-300 flex items-center justify-center">
// //                       <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
// //                         <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// //                       </svg>
// //                     </div>
// //                     <div>
// //                       <p className="text-sm text-gray-600 dark:text-gray-400">Squad Size</p>
// //                       <p className="text-lg font-bold text-gray-900 dark:text-white">{players.length} Players</p>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Players Grid/List */}
// //                 <div className="space-y-3 sm:space-y-4">
// //                   {players.map((player) => (
// //                     <PlayerRow key={getSlug(player.name)} player={player} />
// //                   ))}
// //                   {players.length === 0 && (
// //                     <div className="text-center py-8 sm:py-12">
// //                       <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
// //                         <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
// //                           <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// //                         </svg>
// //                       </div>
// //                       <p className="text-gray-500 dark:text-gray-400 text-sm">No players found for this team.</p>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {players.length > 10 && (
// //                   <div className="mt-6 text-center">
// //                     <button className="px-6 py-2 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
// //                       Load More Players
// //                     </button>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right: Empty space reserved for future sidebar — adjust w-[20%] to control width */}
// //           <div className="hidden lg:block lg:w-[20%]">
// //             {/* Sidebar content add karo yahan */}
// //           </div>

// //         </div>
// //       </div>

// //       {/* BlogsSection: separate full-width container — unaffected by above layout changes */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <BlogsSection />
// //       </div>

// //       {/* Backdrop for mobile sidebar */}
// //       {isSidebarOpen && (
// //         <div
// //           className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
// //           onClick={() => setIsSidebarOpen(false)}
// //         />
// //       )}
// //     </>
// //   )
// // }

// // export default TeamListPage


// import { useState, useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'
// import SportsTabs from '@/layouts/SportsTabs'
// import CricketTabs from '../components/CricketTabs'
// import SectionHeader from '@/shared/components/SectionHeader'
// import BlogsSection from '@/shared/components/BlogsSection'
// import SeoManager from '@/core/seo/SeoManager'
// import { iplTeams, iplTeamPlayers } from '@/shared/constants/cricketdata'
// import { Link } from 'react-router-dom'

// const getSlug = (name) => name.toLowerCase().replace(/\s+/g, '-')

// // ── Team colors for visual identity ────────────────────────
// const teamColors = {
//   'Chennai Super Kings':       { bg: 'from-yellow-400 to-yellow-600', text: 'text-yellow-700 dark:text-yellow-400', border: 'border-yellow-400/30', badge: 'bg-yellow-50 dark:bg-yellow-900/20' },
//   'Delhi Capitals':            { bg: 'from-blue-500 to-red-600',      text: 'text-blue-700 dark:text-blue-400',    border: 'border-blue-400/30',   badge: 'bg-blue-50 dark:bg-blue-900/20' },
//   'Gujarat Titans':            { bg: 'from-sky-600 to-gray-700',      text: 'text-sky-700 dark:text-sky-400',     border: 'border-sky-400/30',    badge: 'bg-sky-50 dark:bg-sky-900/20' },
//   'Kolkata Knight Riders':     { bg: 'from-purple-700 to-yellow-500', text: 'text-purple-700 dark:text-purple-400',border: 'border-purple-400/30', badge: 'bg-purple-50 dark:bg-purple-900/20' },
//   'Lucknow Super Giants':      { bg: 'from-teal-500 to-blue-700',     text: 'text-teal-700 dark:text-teal-400',   border: 'border-teal-400/30',   badge: 'bg-teal-50 dark:bg-teal-900/20' },
//   'Mumbai Indians':            { bg: 'from-blue-700 to-blue-900',     text: 'text-blue-800 dark:text-blue-300',   border: 'border-blue-500/30',   badge: 'bg-blue-50 dark:bg-blue-900/20' },
//   'Punjab Kings':              { bg: 'from-red-500 to-red-700',       text: 'text-red-700 dark:text-red-400',     border: 'border-red-400/30',    badge: 'bg-red-50 dark:bg-red-900/20' },
//   'Rajasthan Royals':          { bg: 'from-pink-500 to-blue-700',     text: 'text-pink-700 dark:text-pink-400',   border: 'border-pink-400/30',   badge: 'bg-pink-50 dark:bg-pink-900/20' },
//   'Royal Challengers Bengaluru':{ bg: 'from-red-600 to-gray-900',    text: 'text-red-700 dark:text-red-400',     border: 'border-red-400/30',    badge: 'bg-red-50 dark:bg-red-900/20' },
//   'Sunrisers Hyderabad':       { bg: 'from-orange-500 to-orange-700', text: 'text-orange-700 dark:text-orange-400',border: 'border-orange-400/30', badge: 'bg-orange-50 dark:bg-orange-900/20' },
// }

// const PlayerRow = ({ player }) => (
//   <Link
//     to={`/cricket/player/${getSlug(player.name)}`}
//     className="flex items-center gap-3 p-3 sm:p-4 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md hover:border-[#00698c]/40 transition-all group"
//   >
//     {/* Avatar */}
//     <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0 border border-gray-200 dark:border-gray-600">
//       {player.image ? (
//         <img src={player.image} alt={player.name} className="w-full h-full object-cover" loading="lazy" />
//       ) : (
//         <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-purple-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
//           <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//           </svg>
//         </div>
//       )}
//     </div>

//     {/* Info */}
//     <div className="flex-1 min-w-0">
//       <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base truncate group-hover:text-[#00698c] dark:group-hover:text-[#4dd0ff] transition-colors">
//         {player.name}
//       </h4>
//       <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{player.role}</p>
//       <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5">
//         <span className="text-xs text-gray-400 dark:text-gray-500">Age: <span className="text-gray-600 dark:text-gray-300 font-medium">{player.age}</span></span>
//         <span className="text-xs text-gray-400 dark:text-gray-500">Bat: <span className="text-gray-600 dark:text-gray-300 font-medium">{player.batting}</span></span>
//         {player.bowling && player.bowling !== '—' && (
//           <span className="text-xs text-gray-400 dark:text-gray-500">Bowl: <span className="text-gray-600 dark:text-gray-300 font-medium">{player.bowling}</span></span>
//         )}
//       </div>
//     </div>

//     <svg className="w-4 h-4 text-gray-400 flex-shrink-0 group-hover:text-[#00698c] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
//     </svg>
//   </Link>
// )

// const TeamListPage = () => {
//   const [searchParams, setSearchParams] = useSearchParams()
//   const [selectedTeam, setSelectedTeam] = useState('Royal Challengers Bengaluru')
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)

//   useEffect(() => {
//     const teamFromUrl = searchParams.get('team')
//     if (teamFromUrl && iplTeams.includes(teamFromUrl)) {
//       setSelectedTeam(teamFromUrl)
//     }
//   }, [searchParams])

//   const handleTeamChange = (team) => {
//     setSelectedTeam(team)
//     setSearchParams({ team })
//     setIsSidebarOpen(false)
//     window.scrollTo(0, 0)
//   }

//   const players = iplTeamPlayers[selectedTeam] || []
//   const colors = teamColors[selectedTeam] || teamColors['Chennai Super Kings']

//   return (
//     <>
//       <SeoManager title={`IPL 2026 Teams - ${selectedTeam} | SportyRadar`} />
//       <SportsTabs />
//       <CricketTabs extraTab={{ label: 'IPL 2025', path: '/cricket/ipl' }} />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
//         <div className="flex gap-6">

//           {/* ── MAIN CONTENT ───────────────────────────────── */}
//           <div className="w-full lg:w-[80%] min-w-0">
//             <SectionHeader title={`IPL 2026 Teams - ${selectedTeam}`} />

//             {/* Mobile team selector */}
//             <div className="lg:hidden mb-4">
//               <button
//                 onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//                 className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
//               >
//                 <span className="font-medium text-gray-900 dark:text-white">{selectedTeam}</span>
//                 <div className="flex items-center gap-2">
//                   <span className="text-xs text-gray-500 dark:text-gray-400">{players.length} Players</span>
//                   <svg className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isSidebarOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeWidth="2" strokeLinecap="round" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </div>
//               </button>

//               {isSidebarOpen && (
//                 <div className="mt-2 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-20 relative">
//                   {iplTeams.map((team) => (
//                     <button
//                       key={team}
//                       onClick={() => handleTeamChange(team)}
//                       className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center justify-between transition-colors ${
//                         selectedTeam === team
//                           ? 'bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white'
//                           : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
//                       }`}
//                     >
//                       {team}
//                       {selectedTeam === team && (
//                         <svg className="w-4 h-4 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeWidth="2" strokeLinecap="round" d="M5 13l4 4L19 7" />
//                         </svg>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Desktop layout */}
//             <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

//               {/* Teams sidebar – Desktop */}
//               <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm self-start sticky top-4">
//                 <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
//                   <h3 className="font-semibold text-gray-900 dark:text-white text-sm">IPL Teams 2026</h3>
//                 </div>
//                 <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
//                   {iplTeams.map((team) => (
//                     <button
//                       key={team}
//                       onClick={() => handleTeamChange(team)}
//                       className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center justify-between transition-colors ${
//                         selectedTeam === team
//                           ? 'bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white'
//                           : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
//                       }`}
//                     >
//                       <span className="truncate">{team}</span>
//                       {selectedTeam === team && (
//                         <svg className="w-4 h-4 text-[#00698c] flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeWidth="2" strokeLinecap="round" d="M5 13l4 4L19 7" />
//                         </svg>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Players list */}
//               <div className="flex-1">
//                 {/* Team header bar */}
//                 <div className={`hidden lg:flex items-center justify-between mb-4 p-3 rounded-lg ${colors.badge} border ${colors.border}`}>
//                   <div>
//                     <p className={`text-xs font-semibold uppercase tracking-wider ${colors.text}`}>Squad</p>
//                     <p className="text-lg font-bold text-gray-900 dark:text-white">{players.length} Players</p>
//                   </div>
//                   <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center shadow`}>
//                     <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//                     </svg>
//                   </div>
//                 </div>

//                 <div className="space-y-3">
//                   {players.map((player) => (
//                     <PlayerRow key={player.name} player={player} />
//                   ))}
//                   {players.length === 0 && (
//                     <div className="text-center py-12">
//                       <svg className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-3" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//                       </svg>
//                       <p className="text-gray-500 dark:text-gray-400">No players found for this team.</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── RIGHT SIDEBAR (reserved) ─────────────────── */}
//           <div className="hidden lg:block lg:w-[20%]">
//             {/* Future sidebar content */}
//           </div>

//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <BlogsSection />
//       </div>

//       {isSidebarOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
//       )}
//     </>
//   )
// }

// export default TeamListPage


import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import SportsTabs from '@/layouts/SportsTabs'
import CricketTabs from '../components/CricketTabs'
import BlogsSection from '@/shared/components/BlogsSection'
import SeoManager from '@/core/seo/SeoManager'
import { IPLBanner, IPLSubTabs } from '../components/iplshared'
import { iplTeams, iplTeamPlayers, playerDetail } from '@/shared/constants/cricketdata.js'

const getSlug = (name) => name.toLowerCase().replace(/\s+/g, '-')

// ─── Role Badge ───────────────────────────────────────────
const RoleBadge = ({ role }) => {
  const r = (role || '').toLowerCase()
  let label = '—', cls = 'bg-gray-100 dark:bg-gray-800 text-gray-400'

  if (r.includes('wicket') || r === 'wk') {
    label = 'WK'; cls = 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300'
  } else if (r.includes('allrounder') || r.includes('all-rounder') || r === 'all') {
    label = 'ALL'; cls = 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
  } else if (r.includes('bowl')) {
    label = 'BOWL'; cls = 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'
  } else if (r.includes('bat') || r.includes('batter') || r.includes('opener')) {
    label = 'BAT'; cls = 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
  }

  return <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${cls}`}>{label}</span>
}

// ─── Player Row Card ──────────────────────────────────────
const PlayerRow = ({ player, onClick }) => (
  <button
    onClick={() => onClick(player)}
    className="w-full flex items-center gap-3 p-3 sm:p-4 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md hover:border-[#00698c]/40 transition-all duration-200 text-left group"
  >
    <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-yellow-100 to-purple-200 dark:from-yellow-900/30 dark:to-purple-900/30 border border-gray-100 dark:border-gray-700">
      {player.image ? (
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={e => { e.target.onerror = null; e.target.style.display = 'none' }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      )}
    </div>

    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2">
        <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base truncate group-hover:text-[#00698c] dark:group-hover:text-[#4dd0ff] transition-colors">
          {player.name}
        </h4>
        <RoleBadge role={player.role} />
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
        {player.batting}{player.bowling && player.bowling !== '—' ? ` · ${player.bowling}` : ''}
      </p>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">Age: {player.age}</p>
    </div>

    <svg className="w-4 h-4 text-gray-300 dark:text-gray-600 flex-shrink-0 group-hover:text-[#00698c] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
    </svg>
  </button>
)

// ─── Inline Player Detail ─────────────────────────────────
const PlayerDetailView = ({ squadPlayer, teamName, onBack, allPlayers, onSelectPlayer }) => {
  // Match full detail from playerDetail array, fallback to squadPlayer
  const detail = playerDetail.find(
    p => getSlug(p.name) === getSlug(squadPlayer.name)
  )

  const name         = detail?.name         || squadPlayer.name
  const image        = detail?.image        || squadPlayer.image || ''
  const born         = detail?.born         || 'N/A'
  const birthPlace   = detail?.birthPlace   || 'N/A'
  const height       = detail?.height       || 'N/A'
  const role         = detail?.role         || squadPlayer.role  || 'N/A'
  const battingStyle = detail?.battingStyle || squadPlayer.batting || 'N/A'
  const bowlingStyle = detail?.bowlingStyle || squadPlayer.bowling || 'N/A'
  const summary      = detail?.summary      || null

  const infoRows = [
    ['Born',          born],
    ['Birth Place',   birthPlace],
    ['Height',        height],
    ['Role',          role],
    ['Batting Style', battingStyle],
    ['Bowling Style', bowlingStyle],
  ]

  const teammates = (allPlayers || []).filter(
    p => getSlug(p.name) !== getSlug(squadPlayer.name)
  )

  return (
    <div>
      {/* Back button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-lg text-sm font-medium text-[#00698c] dark:text-[#4dd0ff] bg-[#00698c]/10 dark:bg-[#00698c]/20 hover:bg-[#00698c]/20 dark:hover:bg-[#00698c]/30 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to {teamName}
      </button>

      {/* Player Card */}
      <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm mb-6">

        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 mb-6">
          {/* Avatar */}
          <div className="flex-shrink-0 self-center md:self-auto">
            <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-40 md:h-44 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-900/20 dark:to-blue-900/20 shadow-md mx-auto md:mx-0 border border-gray-200 dark:border-gray-600">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={e => { e.target.onerror = null; e.target.src = '/fallback-player.png' }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
                  <svg className="w-14 h-14 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block mb-2 px-2 py-0.5 text-xs font-medium rounded bg-[#00698c]/10 text-[#00698c] dark:bg-[#00698c]/20 dark:text-[#4dd0ff] border border-[#00698c]/20">
              {teamName}
            </span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white break-words">
                {name}
              </h2>
              <RoleBadge role={role} />
            </div>

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

        {/* Career Summary */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-[#00698c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Career Summary
            </p>
          </div>
          {summary ? (
            <div className="space-y-3">
              {summary.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400 py-4 text-center">
              No summary available for this player.
            </p>
          )}
        </div>
      </div>

      {/* Teammates */}
      {teammates.length > 0 && (
        <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 shadow-sm mb-6">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              {teamName} Squad
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {teammates.map(tm => (
              <button
                key={tm.name}
                onClick={() => { onSelectPlayer(tm); window.scrollTo(0, 0) }}
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group text-left"
              >
                <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-yellow-100 to-purple-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
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
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <RoleBadge role={tm.role} />
                    <span className="text-xs text-gray-400 dark:text-gray-500 truncate">{tm.batting}</span>
                  </div>
                </div>
                <svg className="w-4 h-4 text-gray-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Main Page ─────────────────────────────────────────────
const TeamListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedTeam, setSelectedTeam] = useState(iplTeams[0])
  const [selectedPlayer, setSelectedPlayer] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Sync team from URL on mount
  useEffect(() => {
    const teamFromUrl = searchParams.get('team')
    if (teamFromUrl && iplTeams.includes(teamFromUrl)) {
      setSelectedTeam(teamFromUrl)
    }
  }, [])

  const handleTeamChange = (team) => {
    setSelectedTeam(team)
    setSelectedPlayer(null)
    setSearchParams({ team })
    setSidebarOpen(false)
    window.scrollTo(0, 0)
  }

  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player)
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    setSelectedPlayer(null)
    window.scrollTo(0, 0)
  }

  const players = iplTeamPlayers[selectedTeam] || []

  return (
    <>
      <SeoManager
        title={
          selectedPlayer
            ? `${selectedPlayer.name} — ${selectedTeam} | SportyRadar`
            : `IPL 2026 Teams — ${selectedTeam} | SportyRadar`
        }
      />

      {/* Always visible — never unmount */}
      <SportsTabs />
      <CricketTabs extraTab={{ label: 'IPL 2025', path: '/cricket/ipl' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex gap-6">
          <div className="w-full lg:w-[80%] min-w-0">

            {/* Always visible */}
            <IPLBanner />
            <IPLSubTabs active="Teams" />

            <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 border-t-0 rounded-b-lg p-3 sm:p-4">

              {/* Mobile dropdown — only on team list view */}
              {!selectedPlayer && (
                <div className="lg:hidden mb-4">
                  <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{selectedTeam}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">{players.length} players</span>
                      <svg className={`w-5 h-5 text-gray-400 transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeWidth="2" strokeLinecap="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {sidebarOpen && (
                    <div className="mt-1 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-20">
                      {iplTeams.map(team => (
                        <button
                          key={team}
                          onClick={() => handleTeamChange(team)}
                          className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center justify-between transition-colors ${
                            selectedTeam === team
                              ? 'bg-[#00698c]/5 font-semibold text-gray-900 dark:text-white'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          {team}
                          {selectedTeam === team && (
                            <svg className="w-4 h-4 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeWidth="2" strokeLinecap="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

                {/* Desktop Teams Sidebar — ALWAYS visible */}
                <div className="hidden lg:block w-56 xl:w-64 flex-shrink-0 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden self-start sticky top-4">
                  <div className="px-3 py-2.5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">IPL Teams 2026</h3>
                  </div>
                  {iplTeams.map(team => (
                    <button
                      key={team}
                      onClick={() => handleTeamChange(team)}
                      className={`w-full text-left px-3 py-2.5 text-xs border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center gap-2 transition-colors ${
                        selectedTeam === team
                          ? 'bg-[#00698c]/5 dark:bg-[#00698c]/10 font-semibold text-gray-900 dark:text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 bg-white dark:bg-[#1c2128]'
                      }`}
                    >
                      <span className="truncate flex-1">{team}</span>
                      {selectedTeam === team && (
                        <svg className="w-3.5 h-3.5 text-[#00698c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2.5" strokeLinecap="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>

                {/* Swappable content */}
                <div className="flex-1 min-w-0">
                  {selectedPlayer ? (
                    <PlayerDetailView
                      squadPlayer={selectedPlayer}
                      teamName={selectedTeam}
                      onBack={handleBack}
                      allPlayers={players}
                      onSelectPlayer={handlePlayerSelect}
                    />
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-3 px-1">
                        <div>
                          <h2 className="font-bold text-gray-900 dark:text-white text-xl sm:text-2xl md:text-3xl">{selectedTeam}</h2>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{players.length} players</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {players.map(p => (
                          <PlayerRow key={p.name} player={p} onClick={handlePlayerSelect} />
                        ))}
                        {players.length === 0 && (
                          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/30 rounded-lg border border-dashed border-gray-200 dark:border-gray-700">
                            <svg className="w-10 h-10 mx-auto text-gray-300 dark:text-gray-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">No players found</p>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>

              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:w-[20%]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogsSection />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-10 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </>
  )
}

export default TeamListPage