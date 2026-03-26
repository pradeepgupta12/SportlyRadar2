// // import { useParams } from 'react-router-dom'
// // import SportsTabs from '@/layouts/SportsTabs'
// // import CricketTabs from '../components/CricketTabs'
// // import SectionHeader from '@/shared/components/SectionHeader'
// // import BlogsSection from '@/shared/components/BlogsSection'
// // import SeoManager from '@/core/seo/SeoManager'
// // import { playerDetail } from '@/shared/constants/cricket.data'

// // const PlayerDetailPage = () => {
// //   const { id } = useParams()
// //   // In production, fetch player by id. Using mock data.
// //   const player = playerDetail

// //   return (
// //     <>
// //       <SeoManager title={`${player.name} | SportyRadar`} />
// //       <SportsTabs />
// //       <CricketTabs />
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
// //         <SectionHeader title="Player Info" />

// //         <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm mb-8">
// //           {/* Player header */}
// //           <div className="flex flex-col sm:flex-row gap-6 mb-6">
// //             <div className="flex-shrink-0">
// //               <div className="w-40 h-44 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-blue-100">
// //                 {player.image ? (
// //                   <img
// //                     src={player.image}
// //                     alt={player.name}
// //                     className="w-full h-full object-cover"
// //                     loading="lazy"
// //                   />
// //                 ) : (
// //                   <div className="w-full h-full flex items-center justify-center">
// //                     <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
// //                       <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
// //                     </svg>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>

// //             <div className="flex-1">
// //               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{player.name}</h2>
// //               <div className="space-y-1.5">
// //                 {[
// //                   ['Born', player.born],
// //                   ['Birth Place', player.birthPlace],
// //                   ['Height', player.height],
// //                   ['Role', player.role],
// //                   ['Batting Style', player.battingStyle],
// //                   ['Bowling Style', player.bowlingStyle],
// //                 ].map(([label, value]) => (
// //                   <div key={label}>
// //                     <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
// //                     <p className="text-sm font-semibold text-gray-800 dark:text-white">{value}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Summary */}
// //           <div>
// //             <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Summary</p>
// //             {player.summary.split('\n\n').map((para, i) => (
// //               <p key={i} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
// //                 {para}
// //               </p>
// //             ))}
// //           </div>
// //         </div>

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
// import { playerDetail } from '@/shared/constants/cricket.data'

// const PlayerDetailPage = () => {
//   const { id } = useParams()
//   // In production, fetch player by id. Using mock data.
//   const player = playerDetail

//   return (
//     <>
//       <SeoManager title={`${player.name} | SportyRadar`} />
//       <SportsTabs />
//       <CricketTabs />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
//         <SectionHeader title="Player Info" />

//         <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm mb-6 sm:mb-8">
//           {/* Player header - Responsive layout */}
//           <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 mb-5 sm:mb-6">
//             {/* Player Image Section */}
//             <div className="flex-shrink-0 self-center md:self-auto">
//               <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-40 md:h-44 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-blue-100 shadow-md mx-auto md:mx-0">
//                 {player.image ? (
//                   <img
//                     src={player.image}
//                     alt={player.name}
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//                     </svg>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Player Info Section */}
//             <div className="flex-1 text-center md:text-left">
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4 break-words">
//                 {player.name}
//               </h2>
              
//               {/* Player Details Grid */}
//               <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
//                 {[
//                   ['Born', player.born],
//                   ['Birth Place', player.birthPlace],
//                   ['Height', player.height],
//                   ['Role', player.role],
//                   ['Batting Style', player.battingStyle],
//                   ['Bowling Style', player.bowlingStyle],
//                 ].map(([label, value]) => (
//                   <div key={label} className="border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0">
//                     <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
//                       {label}
//                     </p>
//                     <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white break-words">
//                       {value || 'N/A'}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Player Summary Section */}
//           <div className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-gray-100 dark:border-gray-700">
//             <div className="flex items-center gap-2 mb-3 sm:mb-4">
//               <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
//                 Career Summary
//               </p>
//             </div>
            
//             {player.summary ? (
//               <div className="space-y-3 sm:space-y-4">
//                 {player.summary.split('\n\n').map((para, i) => (
//                   <p 
//                     key={i} 
//                     className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
//                   >
//                     {para}
//                   </p>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-8">
//                 <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//                 <p className="text-gray-500 dark:text-gray-400">No summary available for this player.</p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Additional Stats Section - Optional but enhances the page */}
//         {player.stats && (
//           <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm mb-6 sm:mb-8">
//             <div className="flex items-center gap-2 mb-4">
//               <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//               </svg>
//               <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
//                 Career Statistics
//               </h3>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
//               {Object.entries(player.stats).map(([key, value]) => (
//                 <div key={key} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-center">
//                   <p className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">{key}</p>
//                   <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{value}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

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
import { playerDetail } from '@/shared/constants/cricket.data'

const PlayerDetailPage = () => {
  const { id } = useParams()
  // In production, fetch player by id. Using mock data.
  const player = playerDetail

  return (
    <>
      <SeoManager title={`${player.name} | SportyRadar`} />
      <SportsTabs />
      <CricketTabs />

      {/* Main layout: player detail content + right sidebar space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex gap-6">

          {/* Left: Player detail content — narrowed to make room for right sidebar */}
          <div className="w-full lg:w-[80%] min-w-0">
            <SectionHeader title="Player Info" />

            <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm mb-6 sm:mb-8">
              {/* Player header */}
              <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 mb-5 sm:mb-6">
                {/* Player Image Section */}
                <div className="flex-shrink-0 self-center md:self-auto">
                  <div className="w-32 h-36 sm:w-36 sm:h-40 md:w-40 md:h-44 rounded-lg overflow-hidden bg-gradient-to-br from-orange-100 to-blue-100 shadow-md mx-auto md:mx-0">
                    {player.image ? (
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Player Info Section */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4 break-words">
                    {player.name}
                  </h2>

                  {/* Player Details Grid */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      ['Born', player.born],
                      ['Birth Place', player.birthPlace],
                      ['Height', player.height],
                      ['Role', player.role],
                      ['Batting Style', player.battingStyle],
                      ['Bowling Style', player.bowlingStyle],
                    ].map(([label, value]) => (
                      <div key={label} className="border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0">
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
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

              {/* Player Summary Section */}
              <div className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Career Summary
                  </p>
                </div>

                {player.summary ? (
                  <div className="space-y-3 sm:space-y-4">
                    {player.summary.split('\n\n').map((para, i) => (
                      <p
                        key={i}
                        className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-gray-500 dark:text-gray-400">No summary available for this player.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Stats Section */}
            {player.stats && (
              <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00698c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                    Career Statistics
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                  {Object.entries(player.stats).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">{key}</p>
                      <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{value}</p>
                    </div>
                  ))}
                </div>
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

export default PlayerDetailPage