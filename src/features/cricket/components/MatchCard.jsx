import { memo } from 'react'
import { getTeamFlag } from '../../../service/ipl.api'

const MatchCard = memo(({ match, showScore = false }) => {
  return (
    <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">

      {/* Top Info */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-sm font-semibold text-gray-800 dark:text-white">
            {match.seriesName || match.series}
          </p>

          {match.venue && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {match.venue?.name}, {match.venue?.city}
            </p>
          )}

          {match.startDate && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {new Date(match.startDate).toLocaleString('en-IN')}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
          {match.status && (
            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
              {match.status}
            </span>
          )}
        </div>
      </div>

      {/* Teams */}
      <div className="space-y-2">
        
        {/* Team 1 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={getTeamFlag(match.team1?.teamName)}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {match.team1?.teamName}
            </span>
          </div>

          {showScore && match.team1?.score && (
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {match.team1.score}
            </span>
          )}
        </div>

        {/* Team 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={getTeamFlag(match.team2?.teamName)}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {match.team2?.teamName}
            </span>
          </div>

          {showScore && match.team2?.score && (
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {match.team2.score}
            </span>
          )}
        </div>

      </div>
    </div>
  )
})

MatchCard.displayName = 'MatchCard'
export default MatchCard