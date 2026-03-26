// // import { useState, useEffect } from 'react'
// // import { useSearchParams } from 'react-router-dom' // or useLocation if you prefer
// // import SportsTabs from '@/layouts/SportsTabs'
// // import CricketTabs from '../components/CricketTabs'
// // import SectionHeader from '@/shared/components/SectionHeader'
// // import BlogsSection from '@/shared/components/BlogsSection'
// // import SeoManager from '@/core/seo/SeoManager'
// // import { iplTeams, iplTeamPlayers } from '@/shared/constants/cricket.data'
// // import { Link } from 'react-router-dom'

// // const PlayerRow = ({ player }) => (
// //   <Link
// //     to={`/cricket/player/${player.id}`}
// //     className="flex items-center gap-3 p-4 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
// //   >
// //     <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
// //       {player.image ? (
// //         <img src={player.image} alt={player.name} className="w-full h-full object-cover" loading="lazy" />
// //       ) : (
// //         <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-purple-300 flex items-center justify-center">
// //           <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
// //             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// //           </svg>
// //         </div>
// //       )}
// //     </div>
// //     <div className="flex-1 min-w-0">
// //       <h4 className="font-bold text-gray-900 dark:text-white text-sm">{player.name}</h4>
// //       <p className="text-xs text-gray-500 dark:text-gray-400">{player.role}</p>
// //       <p className="text-xs text-gray-500 dark:text-gray-400">Age: {player.age}</p>
// //       <p className="text-xs text-gray-500 dark:text-gray-400">
// //         Batting: <span className="font-semibold text-gray-700 dark:text-gray-300">{player.batting}</span>
// //       </p>
// //       <p className="text-xs text-gray-500 dark:text-gray-400">
// //         Bowling: <span className="font-semibold text-gray-700 dark:text-gray-300">{player.bowling}</span>
// //       </p>
// //     </div>
// //     <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //       <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
// //     </svg>
// //   </Link>
// // )

// // const TeamListPage = () => {
// //   const [searchParams, setSearchParams] = useSearchParams()
// //   const [selectedTeam, setSelectedTeam] = useState('Royal Challengers Bengaluru')

// //   // Read team from URL on component mount and when URL changes
// //   useEffect(() => {
// //     const teamFromUrl = searchParams.get('team')
// //     if (teamFromUrl && iplTeams.includes(teamFromUrl)) {
// //       setSelectedTeam(teamFromUrl)
// //     }
// //   }, [searchParams])

// //   // Update URL when team changes
// //   const handleTeamChange = (team) => {
// //     setSelectedTeam(team)
// //     setSearchParams({ team: team })
// //   }

// //   const players = iplTeamPlayers[selectedTeam] || []

// //   return (
// //     <>
// //       <SeoManager title={`IPL 2026 Teams - ${selectedTeam} | SportyRadar`} />
// //       <SportsTabs />
// //       <CricketTabs />
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
// //         <SectionHeader title={`IPL 2026 Teams - ${selectedTeam}`} />

// //         <div className="flex gap-4">
// //           {/* Teams sidebar */}
// //           <div className="w-56 flex-shrink-0 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm self-start">
// //             {iplTeams.map((team) => (
// //               <button
// //                 key={team}
// //                 onClick={() => handleTeamChange(team)}
// //                 className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center justify-between transition-colors ${
// //                   selectedTeam === team
// //                     ? 'bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white'
// //                     : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
// //                 }`}
// //               >
// //                 {team}
// //                 {selectedTeam === team && (
// //                   <svg className="w-4 h-4 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
// //                   </svg>
// //                 )}
// //               </button>
// //             ))}
// //           </div>

// //           {/* Players list */}
// //           <div className="flex-1 space-y-3">
// //             {players.map((player) => (
// //               <PlayerRow key={player.id} player={player} />
// //             ))}
// //             {players.length === 0 && (
// //               <p className="text-gray-500 dark:text-gray-400 text-sm py-8 text-center">No players found.</p>
// //             )}
// //           </div>
// //         </div>

// //         <div className="mt-8">
// //           <BlogsSection />
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default TeamListPage

// import { useState, useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom' // or useLocation if you prefer
// import SportsTabs from '@/layouts/SportsTabs'
// import CricketTabs from '../components/CricketTabs'
// import SectionHeader from '@/shared/components/SectionHeader'
// import BlogsSection from '@/shared/components/BlogsSection'
// import SeoManager from '@/core/seo/SeoManager'
// import { iplTeams, iplTeamPlayers } from '@/shared/constants/cricket.data'
// import { Link } from 'react-router-dom'

// const PlayerRow = ({ player }) => (
//   <Link
//     to={`/cricket/player/${player.id}`}
//     className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
//   >
//     <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
//       {player.image ? (
//         <img src={player.image} alt={player.name} className="w-full h-full object-cover" loading="lazy" />
//       ) : (
//         <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-purple-300 flex items-center justify-center">
//           <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//           </svg>
//         </div>
//       )}
//     </div>
//     <div className="flex-1 min-w-0">
//       <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base truncate">{player.name}</h4>
//       <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{player.role}</p>
//       <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
//         <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Age: {player.age}</p>
//         <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
//           Batting: <span className="font-semibold text-gray-700 dark:text-gray-300">{player.batting}</span>
//         </p>
//         <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
//           Bowling: <span className="font-semibold text-gray-700 dark:text-gray-300">{player.bowling}</span>
//         </p>
//       </div>
//     </div>
//     <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
//     </svg>
//   </Link>
// )

// const TeamListPage = () => {
//   const [searchParams, setSearchParams] = useSearchParams()
//   const [selectedTeam, setSelectedTeam] = useState('Royal Challengers Bengaluru')
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)

//   // Read team from URL on component mount and when URL changes
//   useEffect(() => {
//     const teamFromUrl = searchParams.get('team')
//     if (teamFromUrl && iplTeams.includes(teamFromUrl)) {
//       setSelectedTeam(teamFromUrl)
//     }
//   }, [searchParams])

//   // Update URL when team changes
//   const handleTeamChange = (team) => {
//     setSelectedTeam(team)
//     setSearchParams({ team: team })
//     setIsSidebarOpen(false) // Close sidebar on mobile after selection
//   }

//   const players = iplTeamPlayers[selectedTeam] || []

//   return (
//     <>
//       <SeoManager title={`IPL 2026 Teams - ${selectedTeam} | SportyRadar`} />
//       <SportsTabs />
//       <CricketTabs />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
//         <SectionHeader title={`IPL 2026 Teams - ${selectedTeam}`} />

//         {/* Mobile Team Selector Button */}
//         <div className="lg:hidden mb-4">
//           <button
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
//           >
//             <span className="font-medium text-gray-900 dark:text-white">
//               {selectedTeam}
//             </span>
//             <div className="flex items-center gap-2">
//               <span className="text-xs text-gray-500 dark:text-gray-400">
//                 {players.length} Players
//               </span>
//               <svg 
//                 className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isSidebarOpen ? 'rotate-180' : ''}`} 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeWidth="2" strokeLinecap="round" d="M19 9l-7 7-7-7" />
//               </svg>
//             </div>
//           </button>

//           {/* Mobile Sidebar Dropdown */}
//           {isSidebarOpen && (
//             <div className="mt-2 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-20">
//               {iplTeams.map((team) => (
//                 <button
//                   key={team}
//                   onClick={() => handleTeamChange(team)}
//                   className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center justify-between transition-colors ${
//                     selectedTeam === team
//                       ? 'bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white'
//                       : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
//                   }`}
//                 >
//                   {team}
//                   {selectedTeam === team && (
//                     <svg className="w-4 h-4 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeWidth="2" strokeLinecap="round" d="M5 13l4 4L19 7" />
//                     </svg>
//                   )}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Desktop Layout */}
//         <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
//           {/* Teams sidebar - Desktop */}
//           <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm self-start sticky top-4">
//             <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
//               <h3 className="font-semibold text-gray-900 dark:text-white text-sm">IPL Teams 2026</h3>
//             </div>
//             <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
//               {iplTeams.map((team) => (
//                 <button
//                   key={team}
//                   onClick={() => handleTeamChange(team)}
//                   className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center justify-between transition-colors ${
//                     selectedTeam === team
//                       ? 'bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white'
//                       : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
//                   }`}
//                 >
//                   <span className="truncate">{team}</span>
//                   {selectedTeam === team && (
//                     <svg className="w-4 h-4 text-[#00698c] flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeWidth="2" strokeLinecap="round" d="M5 13l4 4L19 7" />
//                     </svg>
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Players list */}
//           <div className="flex-1">
//             {/* Team Stats Bar */}
//             <div className="hidden lg:flex items-center justify-between mb-4 px-2">
//               <div className="flex items-center gap-2">
//                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-200 to-purple-300 flex items-center justify-center">
//                   <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">Squad Size</p>
//                   <p className="text-lg font-bold text-gray-900 dark:text-white">{players.length} Players</p>
//                 </div>
//               </div>
//             </div>

//             {/* Players Grid/List */}
//             <div className="space-y-3 sm:space-y-4">
//               {players.map((player) => (
//                 <PlayerRow key={player.id} player={player} />
//               ))}
//               {players.length === 0 && (
//                 <div className="text-center py-8 sm:py-12">
//                   <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
//                     <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//                     </svg>
//                   </div>
//                   <p className="text-gray-500 dark:text-gray-400 text-sm">No players found for this team.</p>
//                 </div>
//               )}
//             </div>

//             {/* Load More Button (if needed) */}
//             {players.length > 10 && (
//               <div className="mt-6 text-center">
//                 <button className="px-6 py-2 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
//                   Load More Players
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="mt-8 sm:mt-10 lg:mt-12">
//           <BlogsSection />
//         </div>
//       </div>

//       {/* Backdrop for mobile sidebar */}
//       {isSidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}
//     </>
//   )
// }

// export default TeamListPage


import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import SportsTabs from '@/layouts/SportsTabs'
import CricketTabs from '../components/CricketTabs'
import SectionHeader from '@/shared/components/SectionHeader'
import BlogsSection from '@/shared/components/BlogsSection'
import SeoManager from '@/core/seo/SeoManager'
import { iplTeams, iplTeamPlayers } from '@/shared/constants/cricket.data'
import { Link } from 'react-router-dom'

const PlayerRow = ({ player }) => (
  <Link
    to={`/cricket/player/${player.id}`}
    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
      {player.image ? (
        <img src={player.image} alt={player.name} className="w-full h-full object-cover" loading="lazy" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-purple-300 flex items-center justify-center">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        </div>
      )}
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base truncate">{player.name}</h4>
      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">{player.role}</p>
      <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Age: {player.age}</p>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Batting: <span className="font-semibold text-gray-700 dark:text-gray-300">{player.batting}</span>
        </p>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Bowling: <span className="font-semibold text-gray-700 dark:text-gray-300">{player.bowling}</span>
        </p>
      </div>
    </div>
    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" strokeLinecap="round" d="M9 18l6-6-6-6" />
    </svg>
  </Link>
)

const TeamListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedTeam, setSelectedTeam] = useState('Royal Challengers Bengaluru')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const teamFromUrl = searchParams.get('team')
    if (teamFromUrl && iplTeams.includes(teamFromUrl)) {
      setSelectedTeam(teamFromUrl)
    }
  }, [searchParams])

  const handleTeamChange = (team) => {
    setSelectedTeam(team)
    setSearchParams({ team: team })
    setIsSidebarOpen(false)
  }

  const players = iplTeamPlayers[selectedTeam] || []

  return (
    <>
      <SeoManager title={`IPL 2026 Teams - ${selectedTeam} | SportyRadar`} />
      <SportsTabs />
      <CricketTabs />

      {/* Main layout: team list content + right sidebar space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex gap-6">

          {/* Left: Team list content — narrowed to make room for right sidebar */}
          <div className="w-full lg:w-[80%] min-w-0">
            <SectionHeader title={`IPL 2026 Teams - ${selectedTeam}`} />

            {/* Mobile Team Selector Button */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {selectedTeam}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {players.length} Players
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isSidebarOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeWidth="2" strokeLinecap="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Mobile Sidebar Dropdown */}
              {isSidebarOpen && (
                <div className="mt-2 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-20">
                  {iplTeams.map((team) => (
                    <button
                      key={team}
                      onClick={() => handleTeamChange(team)}
                      className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center justify-between transition-colors ${
                        selectedTeam === team
                          ? 'bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white'
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

            {/* Desktop Layout: inner teams sidebar + players list */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              {/* Inner Teams sidebar - Desktop only */}
              <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm self-start sticky top-4">
                <div className="p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">IPL Teams 2026</h3>
                </div>
                <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
                  {iplTeams.map((team) => (
                    <button
                      key={team}
                      onClick={() => handleTeamChange(team)}
                      className={`w-full text-left px-4 py-3 text-sm border-b border-gray-100 dark:border-gray-700 last:border-0 flex items-center justify-between transition-colors ${
                        selectedTeam === team
                          ? 'bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      <span className="truncate">{team}</span>
                      {selectedTeam === team && (
                        <svg className="w-4 h-4 text-[#00698c] flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeWidth="2" strokeLinecap="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Players list */}
              <div className="flex-1">
                {/* Team Stats Bar */}
                <div className="hidden lg:flex items-center justify-between mb-4 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-200 to-purple-300 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Squad Size</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">{players.length} Players</p>
                    </div>
                  </div>
                </div>

                {/* Players Grid/List */}
                <div className="space-y-3 sm:space-y-4">
                  {players.map((player) => (
                    <PlayerRow key={player.id} player={player} />
                  ))}
                  {players.length === 0 && (
                    <div className="text-center py-8 sm:py-12">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">No players found for this team.</p>
                    </div>
                  )}
                </div>

                {players.length > 10 && (
                  <div className="mt-6 text-center">
                    <button className="px-6 py-2 bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      Load More Players
                    </button>
                  </div>
                )}
              </div>
            </div>
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

      {/* Backdrop for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  )
}

export default TeamListPage