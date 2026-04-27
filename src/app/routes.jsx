
// import { lazy } from 'react'
// import { createBrowserRouter } from 'react-router-dom'
// import MainLayout from '@/layouts/MainLayout'
// import ScrollToTop from '@/components/ScrollToTop' // Import the ScrollToTop component
// //import IPLScorecardPage from '../features/cricket/pages/Iplscorecardpage.jsx'

// // Lazy-loaded pages for code splitting
// const HomePage = lazy(() => import('@/features/home/HomePage'))
// const BlogsPage = lazy(() => import('@/features/blogs/BlogsPage'))
// const BlogDetailPage = lazy(() => import('@/features/blogs/BlogDetailPage'))
// const ContactPage = lazy(() => import('@/features/contact/ContactPage'))
// const AuthorProfileView = lazy(() => import('../features/author/AuthorProfielView.jsx'))

// const NewsPage = lazy(() => import('@/features/news/pages/NewsPage'))
// const NewsListPage = lazy(() => import('@/features/news/pages/NewsListPage'))
// const NewsDetailPage = lazy(() => import('@/features/news/pages/NewsDetailPage'))

// // Cricket pages
// const CricketScoresPage = lazy(() => import('@/features/cricket/pages/CricketScoresPage'))
// const CricketSeriesPage = lazy(() => import('@/features/cricket/pages/CricketSeriesPage'))
// const CricketFixturesPage = lazy(() => import('@/features/cricket/pages/CricketFixturesPage'))
// const CricketResultsPage = lazy(() => import('@/features/cricket/pages/CricketResultsPage'))
// const IPLPage = lazy(() => import('@/features/cricket/pages/IPLPage'))
// const IPLScorecardPage = lazy(() => import('../features/cricket/pages/Iplscorecardpage.jsx'))
// const IPLMatchTeamsPage = lazy(() => import('@/features/cricket/pages/IPLMatchTeamsPage'))
// const PlayerCardPage = lazy(() => import('@/features/cricket/pages/PlayerCardPage'))
// const PlayerDetailPage = lazy(() => import('../features/cricket/pages/PlayerDetailPage'))
// const TeamListPage = lazy(() => import('@/features/cricket/pages/TeamListPage'))
// const NotFoundPage = lazy(() => import('./NotFoundPage'))



// const IPLHomePage        = lazy(() => import('@/features/cricket/pages/IPLHomePage'))
// const IPLMatchesPage     = lazy(() => import('@/features/cricket/pages/IPLMatchesPage'))
// const IPLPointsTablePage = lazy(() => import('@/features/cricket/pages/IPLPointsTablePage'))
// const IPLSquadsPage      = lazy(() => import('@/features/cricket/pages/IPLSquadsPage'))
// const IPLPhotosPage      = lazy(() => import('@/features/cricket/pages/IPLPhotosPage'))


// const Allphoto = lazy(() => import('../features/news/pages/Allphoto.jsx'))
// const GalleryView = lazy(() => import('../features/news/pages/Allphoto.jsx').then((mod) => ({ default: mod.GalleryView })))

// const AllVideo = lazy(() => import('../features/news/pages/Allvedio.jsx'))
// const VideoDetail = lazy(() => import('../features/news/pages/Allvedio.jsx').then((mod) => ({ default: mod.VideoDetail })))

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <>
//         <ScrollToTop /> {/* Add ScrollToTop component here */}
//         <MainLayout />
//       </>
//     ),
//     children: [
//       { index: true, element: <HomePage /> },

//       // Blogs
//       { path: 'blogs', element: <BlogsPage /> },
//       { path: 'blogs/:title', element: <BlogDetailPage /> },

//       { path:'blog/author/:authorName', element: <AuthorProfileView
//          /> }, // Filter by author

//       // News
//       { path: 'cricket/news', element: <NewsListPage /> },
//       { path: 'cricket/news/:slug', element: <NewsDetailPage /> },

//       // Contact
//       { path: 'contact', element: <ContactPage /> },


//       // Cricket - STATIC routes MUST come before dynamic /:matchId
// { path: 'scorecard', element: <CricketScoresPage /> },
// { path: 'cricket/series', element: <CricketSeriesPage /> },
// { path: 'cricket/fixtures', element: <CricketFixturesPage /> },
// { path: 'cricket/results', element: <CricketResultsPage /> },
// //{ path: 'cricket/i', element: <IPLPage /> },
//  //{ path: 'cricket/ipl/scorecard/:slug/:series', element: <IPLScorecardPage /> },
// //{ path: 'cricket/players', element: <PlayerCardPage /> },
// //{ path: 'cricket/:matchId', element: <IPLMatchTeamsPage /> }, // dynamic LAST

//       { path: 'cricket/ipl/teams', element: <TeamListPage /> },
//       { path: 'cricket/player/:id', element: <PlayerDetailPage /> },
//       {path:"/cricket/ipl"                      ,  element:<IPLHomePage />},
//       { path:"/cricket/ipl/matches"              ,  element:<IPLMatchesPage />},
//       { path:"/cricket/ipl/scorecard/:matchId"   , element:<IPLScorecardPage />},
//       { path:"/cricket/ipl/points-table"        ,   element:<IPLPointsTablePage />},
//       { path:"/cricket/ipl/photos"              ,   element:<IPLPhotosPage /> },
//       // { path:"/cricket/ipl/squads"               ,  element:<IPLSquadsPage /> },


//       // Cricket News — list + detail
//      // { path: 'cricket/news', element: <NewsListPage /> },
//       { path: 'cricket/news/:slug', element: <NewsDetailPage /> },

//       { path: 'photogallary', element: <Allphoto /> },
//       { path: 'photogallary/:slug', element: <GalleryView /> },

//       { path: "vediogallary", element: <AllVideo /> },
//       { path: "vediogallary/:slug", element: <VideoDetail /> },

//       // Football (scaffold)
//       { path: 'football', element: <CricketScoresPage /> },

//       // Football News — list + detail
//       { path: 'football/news', element: <NewsListPage /> },
//       { path: 'football/news/:slug', element: <NewsDetailPage /> },

//       // ── Other Sports ─────────────────────────────────────────────────────
//       { path: 'sports/news', element: <NewsListPage /> },
//       { path: 'sports/news/:slug', element: <NewsDetailPage /> },
      
//       // ⚠️  replaces old BlogsPage usage for /news
//       { path: 'news', element: <NewsPage /> },
      
//       // ── Top Headlines ─────────────────────────────────────────────────────
//       //{ path: 'headlines', element: <NewsListPage /> },
//       { path: 'headlines/:slug', element: <NewsDetailPage /> },

//       // Badminton (scaffold)
//       { path: 'badminton', element: <CricketScoresPage /> },

//       // Tennis (scaffold)
//       { path: 'tennis', element: <CricketScoresPage /> },

//       // Formula 1 (scaffold)
//       { path: 'formula1', element: <CricketScoresPage /> },

//       // 404
//       { path: '*', element: <NotFoundPage /> },
//     ],
//   },
// ])

// export default router



import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import ScrollToTop from '@/components/ScrollToTop'

// Lazy-loaded pages
const HomePage           = lazy(() => import('@/features/home/HomePage'))
const BlogsPage          = lazy(() => import('@/features/blogs/BlogsPage'))
const BlogDetailPage     = lazy(() => import('@/features/blogs/BlogDetailPage'))
const ContactPage        = lazy(() => import('@/features/contact/ContactPage'))
const AuthorProfileView  = lazy(() => import('../features/author/AuthorProfielView.jsx'))

const NewsPage       = lazy(() => import('@/features/news/pages/NewsPage'))
const NewsListPage   = lazy(() => import('@/features/news/pages/NewsListPage'))
const NewsDetailPage = lazy(() => import('@/features/news/pages/NewsDetailPage'))

// Cricket pages
const CricketScoresPage    = lazy(() => import('@/features/cricket/pages/CricketScoresPage'))
const CricketSeriesPage    = lazy(() => import('@/features/cricket/pages/CricketSeriesPage'))
const CricketFixturesPage  = lazy(() => import('@/features/cricket/pages/CricketFixturesPage'))
const CricketResultsPage   = lazy(() => import('@/features/cricket/pages/CricketResultsPage'))
const IPLScorecardPage     = lazy(() => import('../features/cricket/pages/Iplscorecardpage.jsx'))
const IPLMatchTeamsPage    = lazy(() => import('@/features/cricket/pages/IPLMatchTeamsPage'))
const PlayerDetailPage     = lazy(() => import('../features/cricket/pages/PlayerDetailPage'))
const TeamListPage         = lazy(() => import('@/features/cricket/pages/TeamListPage'))
const NotFoundPage         = lazy(() => import('./NotFoundPage'))

const IPLHomePage        = lazy(() => import('@/features/cricket/pages/IPLHomePage'))
const IPLMatchesPage     = lazy(() => import('@/features/cricket/pages/IPLMatchesPage'))
const IPLPointsTablePage = lazy(() => import('@/features/cricket/pages/IPLPointsTablePage'))
const IPLPhotosPage      = lazy(() => import('@/features/cricket/pages/IPLPhotosPage'))

const Allphoto   = lazy(() => import('../features/news/pages/Allphoto.jsx'))
const GalleryView = lazy(() =>
  import('../features/news/pages/Allphoto.jsx').then((mod) => ({ default: mod.GalleryView }))
)
const AllVideo   = lazy(() => import('../features/news/pages/Allvedio.jsx'))
const VideoDetail = lazy(() =>
  import('../features/news/pages/Allvedio.jsx').then((mod) => ({ default: mod.VideoDetail }))
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <MainLayout />
      </>
    ),
    children: [
      { index: true, element: <HomePage /> },

      // Blogs
      { path: 'blogs', element: <BlogsPage /> },
      { path: 'blogs/:title', element: <BlogDetailPage /> },
      { path: 'blog/author/:authorName', element: <AuthorProfileView /> },

      // News
      { path: 'cricket/news', element: <NewsListPage /> },
      { path: 'cricket/news/:slug', element: <NewsDetailPage /> },

      // Contact
      { path: 'contact', element: <ContactPage /> },

      // Cricket – static routes first (before dynamic)
      { path: 'scorecard', element: <CricketScoresPage /> },
      { path: 'cricket/series', element: <CricketSeriesPage /> },
      { path: 'cricket/fixtures', element: <CricketFixturesPage /> },
      { path: 'cricket/results', element: <CricketResultsPage /> },

      // ── IPL routes ──────────────────────────────────────────
      { path: 'cricket/ipl',                    element: <IPLHomePage /> },
      { path: 'cricket/ipl/matches',             element: <IPLMatchesPage /> },
      { path: 'cricket/ipl/scorecard/:matchId',  element: <IPLScorecardPage /> },
      { path: 'cricket/ipl/points-table',        element: <IPLPointsTablePage /> },
      { path: 'cricket/ipl/photos',              element: <IPLPhotosPage /> },

      // ── Team & Player routes ────────────────────────────────
      // TeamListPage: /cricket/ipl/teams?team=Chennai+Super+Kings
      { path: 'cricket/ipl/teams', element: <TeamListPage /> },

      // PlayerDetailPage: /cricket/player/virat-kohli
      { path: 'cricket/player/:id', element: <PlayerDetailPage /> },

      // Photo gallery
      { path: 'photogallary',       element: <Allphoto /> },
      { path: 'photogallary/:slug', element: <GalleryView /> },

      // Video gallery
      { path: 'vediogallary',       element: <AllVideo /> },
      { path: 'vediogallary/:slug', element: <VideoDetail /> },

      // Football
      { path: 'football',              element: <CricketScoresPage /> },
      { path: 'football/news',         element: <NewsListPage /> },
      { path: 'football/news/:slug',   element: <NewsDetailPage /> },

      // Other sports
      { path: 'sports/news',           element: <NewsListPage /> },
      { path: 'sports/news/:slug',     element: <NewsDetailPage /> },

      // News
      { path: 'news',                  element: <NewsPage /> },
      { path: 'headlines/:slug',       element: <NewsDetailPage /> },

      // Scaffold sports
      { path: 'badminton',  element: <CricketScoresPage /> },
      { path: 'tennis',     element: <CricketScoresPage /> },
      { path: 'formula1',   element: <CricketScoresPage /> },

      // 404
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export default router