// import { useState } from 'react'
// import SportsTabs from '@/layouts/SportsTabs'
// import CricketTabs from '../components/CricketTabs'
// import SectionHeader from '@/shared/components/SectionHeader'
// import MatchCard from '../components/MatchCard'
// import BlogsSection from '@/shared/components/BlogsSection'
// import SeoManager from '@/core/seo/SeoManager'
// import { fixturesByDate } from '@/shared/constants/cricket.data'

// const SearchIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <circle cx="11" cy="11" r="8" strokeWidth="2"/>
//     <path strokeWidth="2" strokeLinecap="round" d="M21 21l-4.35-4.35"/>
//   </svg>
// )

// const CricketFixturesPage = () => {
//   const [search, setSearch] = useState('')

//   return (
//     <>
//       <SeoManager title="Cricket Fixtures | SportyRadar" />
//       <SportsTabs />
//       <CricketTabs />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
//         <SectionHeader title="Cricket Schedule" />

//         {/* Filters */}
//         <div className="flex items-center gap-3 mb-6">
//           <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-[#00698c] transition-colors bg-white dark:bg-[#1c2128]">
//             Select Series
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeWidth="2" strokeLinecap="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           <div className="flex-1 relative">
//             <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//               <SearchIcon />
//             </span>
//             <input
//               type="text"
//               placeholder="Search Team, Series, Ground"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm bg-white dark:bg-[#1c2128] text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#00698c] transition-colors"
//             />
//           </div>
//         </div>

//         {fixturesByDate.map((group) => (
//           <div key={group.label} className="mb-6">
//             <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">{group.label}</h3>
//             <div className="space-y-3">
//               {group.matches.map((match) => (
//                 <MatchCard key={match.id} match={match} />
//               ))}
//             </div>
//           </div>
//         ))}

//         <BlogsSection />
//       </div>
//     </>
//   )
// }

// export default CricketFixturesPage


// ///// upar vala bhi sahi hai neeche width reduce kar ke hai 


// // import { useState } from 'react'
// // import SportsTabs from '@/layouts/SportsTabs'
// // import CricketTabs from '../components/CricketTabs'
// // import SectionHeader from '@/shared/components/SectionHeader'
// // import MatchCard from '../components/MatchCard'
// // import BlogsSection from '@/shared/components/BlogsSection'
// // import SeoManager from '@/core/seo/SeoManager'
// // import { fixturesByDate } from '@/shared/constants/cricket.data'

// // const SearchIcon = () => (
// //   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //     <circle cx="11" cy="11" r="8" strokeWidth="2"/>
// //     <path strokeWidth="2" strokeLinecap="round" d="M21 21l-4.35-4.35"/>
// //   </svg>
// // )

// // const CricketFixturesPage = () => {
// //   const [search, setSearch] = useState('')

// //   return (
// //     <>
// //       <SeoManager title="Cricket Fixtures | SportyRadar" />
// //       <SportsTabs />
// //       <CricketTabs />
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 relative">
// //         {/* Main content with right padding for ads space */}
// //         <div className="lg:pr-[320px]">
// //           <SectionHeader title="Cricket Schedule" />

// //           {/* Filters */}
// //           <div className="flex items-center gap-3 mb-6">
// //             <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-[#00698c] transition-colors bg-white dark:bg-[#1c2128]">
// //               Select Series
// //               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeWidth="2" strokeLinecap="round" d="M19 9l-7 7-7-7" />
// //               </svg>
// //             </button>
// //             <div className="flex-1 relative">
// //               <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
// //                 <SearchIcon />
// //               </span>
// //               <input
// //                 type="text"
// //                 placeholder="Search Team, Series, Ground"
// //                 value={search}
// //                 onChange={(e) => setSearch(e.target.value)}
// //                 className="w-full pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm bg-white dark:bg-[#1c2128] text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#00698c] transition-colors"
// //               />
// //             </div>
// //           </div>

// //           {fixturesByDate.map((group) => (
// //             <div key={group.label} className="mb-6">
// //               <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">{group.label}</h3>
// //               <div className="space-y-3">
// //                 {group.matches.map((match) => (
// //                   <MatchCard key={match.id} match={match} />
// //                 ))}
// //               </div>
// //             </div>
// //           ))}

// //           {/* BlogsSection with max-w-7xl and centered */}
// //           <div className="max-w-7xl mx-auto">
// //             <BlogsSection />
// //           </div>
// //         </div>

// //         {/* Empty space for ads - right side */}
// //         <div className="hidden lg:block absolute right-4 top-0 w-[300px] h-full">
// //           <div className="sticky top-6">
// //             {/* Just empty space, no banners */}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default CricketFixturesPage

import { useState } from 'react'
import SportsTabs from '@/layouts/SportsTabs'
import CricketTabs from '../components/CricketTabs'
import SectionHeader from '@/shared/components/SectionHeader'
import MatchCard from '../components/MatchCard'
import BlogsSection from '@/shared/components/BlogsSection'
import SeoManager from '@/core/seo/SeoManager'
import { fixturesByDate } from '@/shared/constants/cricket.data'

const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" strokeWidth="2"/>
    <path strokeWidth="2" strokeLinecap="round" d="M21 21l-4.35-4.35"/>
  </svg>
)

const CricketFixturesPage = () => {
  const [search, setSearch] = useState('')

  return (
    <>
      <SeoManager title="Cricket Fixtures | SportyRadar" />
      <SportsTabs />
      <CricketTabs />

      {/* Main layout: fixtures content + right sidebar space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex gap-6">

          {/* Left: Fixtures content — narrowed to make room for right sidebar */}
          <div className="w-full lg:w-[80%] min-w-0">
            <SectionHeader title="Cricket Schedule" />

            {/* Filters */}
            <div className="flex items-center gap-3 mb-6">
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:border-[#00698c] transition-colors bg-white dark:bg-[#1c2128] whitespace-nowrap">
                Select Series
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="flex-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Search Team, Series, Ground"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm bg-white dark:bg-[#1c2128] text-gray-700 dark:text-gray-300 placeholder-gray-400 focus:outline-none focus:border-[#00698c] transition-colors"
                />
              </div>
            </div>

            {fixturesByDate.map((group) => (
              <div key={group.label} className="mb-6">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">{group.label}</h3>
                <div className="space-y-3">
                  {group.matches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Empty space reserved for future sidebar — adjust w-[20%] to control width */}
          <div className="hidden lg:block lg:w-[20%]">
            {/* Sidebar content add karo yahan */}
          </div>

        </div>
      </div>

      {/* BlogsSection: separate full-width container — unaffected by above layout changes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <BlogsSection />
      </div>
    </>
  )
}

export default CricketFixturesPage