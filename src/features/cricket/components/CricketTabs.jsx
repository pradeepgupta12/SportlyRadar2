import { memo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { appConfig } from '@/config/app.config'

const CricketTabs = memo(({ extraTab }) => {
  const location = useLocation()

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#161b22] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center overflow-x-auto scrollbar-hide gap-0">
              
       
          
          {appConfig.cricketTabs.map((tab) => {
  let isActive = false

  if (tab.id === 'ipl') {
    // IPL tab only exact match
    isActive = location.pathname.startsWith('/cricket/ipl')
  } 
  if (tab.id === 'scores') {
    // Scores tab → matches + scorecard etc
    isActive = location.pathname === '/cricket/ipl/matches'
  } 

    // ❗ IMPORTANT: override parent when child active
  if (tab.id === 'ipl' && location.pathname.startsWith('/cricket/ipl/matches')) {
    isActive = false
  } 


  else {
    // baaki tabs normal
    isActive =
      location.pathname === tab.path ||
      location.pathname.startsWith(tab.path)
  }

  return (
   
              <NavLink
                key={tab.id}
                to={tab.path}
                end
                className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-150 whitespace-nowrap ${
                  isActive
                    ? 'border-[#00698c] text-[#00698c]'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </NavLink>
            )
          })}


        
  
        </div>
      </div>
    </div>
  )
})

CricketTabs.displayName = 'CricketTabs'

export default CricketTabs
