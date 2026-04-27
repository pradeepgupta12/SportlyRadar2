// /**
//  * ipl.api.js
//  * ─────────────────────────────────────────────────────────────────────────────
//  * Single source of truth for all IPL API calls.
//  * Import karo yahan se — har jagah alag URL mat likho.
//  *
//  * Backend endpoints (from cricket-backend-v2):
//  *   GET /api/cricket/ipl/live          → live + recent + upcoming (ONE call)
//  *   GET /api/cricket/ipl/recent        → recent completed matches
//  *   GET /api/cricket/ipl/schedule      → upcoming matches
//  *   GET /api/cricket/ipl/matches       → all matches list (match selector ke liye)
//  *   GET /api/cricket/ipl/points-table  → IPL standings
//  *   GET /api/cricket/ipl/scorecard/:id → match scorecard
//  *   GET /api/cricket/ipl/match/:id     → match detail/info
//  *   GET /api/cricket/ipl/players       → players list (?team=Mumbai+Indians)
//  *   GET /api/cricket/ipl/photos        → latest IPL photos
//  *   GET /api/cricket/ipl/photos/:id    → specific match photos
//  */

// import axios from 'axios'

// // ── Config ───────────────────────────────────────────────────────────────────
// const BASE = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api') + '/cricket'

// // Client-side memory cache (prevents duplicate calls within same session)
// const _cache = new Map()

// const DEFAULT_TTL = {
//   live:        2 * 60 * 1000,   // 2 min
//   recent:      5 * 60 * 1000,   // 5 min
//   schedule:   10 * 60 * 1000,   // 10 min
//   matches:    10 * 60 * 1000,   // 10 min
//   pointsTable: 5 * 60 * 1000,   // 5 min
//   scorecard:  30 * 1000,        // 30 sec for live, permanent for completed
//   matchInfo:   2 * 60 * 1000,   // 2 min
//   players:    30 * 60 * 1000,   // 30 min (squad doesn't change)
//   photos:     10 * 60 * 1000,   // 10 min
//    fixtures:   10 * 60 * 1000,

//   // ✅ NEW
//   series:     15 * 60 * 1000, // 15 min (series frequently change nahi hoti)

// }

// // ── Cached GET helper ─────────────────────────────────────────────────────────
// async function cachedGet(url, ttlMs = 60_000, params = {}) {
//   const key = url + JSON.stringify(params)
//   const hit  = _cache.get(key)
//   if (hit && Date.now() - hit.ts < ttlMs) return hit.data

//   const res  = await axios.get(url, { params, timeout: 12000 })
//   const data = res.data?.data ?? res.data
//   _cache.set(key, { data, ts: Date.now() })
//   return data
// }

// // ── Team logo helper (from Cricbuzz CDN) ─────────────────────────────────────
// export const getTeamLogo = (imageId) =>
//   imageId ? `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg` : null

// // ── Static team flags map (fallback when imageId not available) ───────────────
// const TEAM_FLAGS = {
//   'Mumbai Indians':               'https://static.cricbuzz.com/a/img/v1/i1/c66951/i.jpg',
//   'Chennai Super Kings':          'https://static.cricbuzz.com/a/img/v1/i1/c66952/i.jpg',
//   'Royal Challengers Bengaluru':  'https://static.cricbuzz.com/a/img/v1/i1/c66953/i.jpg',
//   'Royal Challengers Bangalore':  'https://static.cricbuzz.com/a/img/v1/i1/c66953/i.jpg',
//   'Kolkata Knight Riders':        'https://static.cricbuzz.com/a/img/v1/i1/c66954/i.jpg',
//   'Delhi Capitals':               'https://static.cricbuzz.com/a/img/v1/i1/c66955/i.jpg',
//   'Punjab Kings':                 'https://static.cricbuzz.com/a/img/v1/i1/c66956/i.jpg',
//   'Rajasthan Royals':             'https://static.cricbuzz.com/a/img/v1/i1/c66957/i.jpg',
//   'Sunrisers Hyderabad':          'https://static.cricbuzz.com/a/img/v1/i1/c66958/i.jpg',
//   'Lucknow Super Giants':         'https://static.cricbuzz.com/a/img/v1/i1/c82768/i.jpg',
//   'Gujarat Titans':               'https://static.cricbuzz.com/a/img/v1/i1/c82769/i.jpg',
// }

// export const getTeamFlag = (teamName) =>
//   TEAM_FLAGS[teamName] || `https://ui-avatars.com/api/?name=${encodeURIComponent(teamName || 'TM')}&background=00698c&color=fff&size=64`

// // ─────────────────────────────────────────────────────────────────────────────
// // 1. GET /ipl/live — Live + Recent + Upcoming (ONE call, backend combines all)
// //    LiveTicker aur IPLMatchesPage dono yahi use karte hain
// // ─────────────────────────────────────────────────────────────────────────────
// export async function getAllMatchFeeds() {
//   const data = await cachedGet(`${BASE}/ipl/live`, DEFAULT_TTL.live)
//   return {
//     live:     data?.live     || [],
//     recent:   data?.recent   || [],
//     upcoming: data?.upcoming || [],
//   }
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // 2. GET /ipl/live — only live matches (for IPLHomePage)
// // ─────────────────────────────────────────────────────────────────────────────
// export async function getLiveMatches() {
//   const feeds = await getAllMatchFeeds()
//   return feeds.live
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // 3. GET /ipl/recent — recent completed matches
// // ─────────────────────────────────────────────────────────────────────────────
// export async function getRecentMatches() {
//   // Try from combined feed first (no extra API call)
//   try {
//     const feeds = await getAllMatchFeeds()
//     if (feeds.recent?.length) return feeds.recent
//   } catch { /* fallthrough */ }

//   // Dedicated endpoint fallback
//   const data = await cachedGet(`${BASE}/ipl/recent`, DEFAULT_TTL.recent)
//   return data?.matches || data || []
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // 4. GET /ipl/schedule — upcoming matches
// // ─────────────────────────────────────────────────────────────────────────────
// export async function getSchedule() {
//   // Try from combined feed first
//   try {
//     const feeds = await getAllMatchFeeds()
//     if (feeds.upcoming?.length) return feeds.upcoming
//   } catch { /* fallthrough */ }

//   const data = await cachedGet(`${BASE}/ipl/schedule`, DEFAULT_TTL.schedule)
//   return data?.matches || data || []
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // 5. GET /ipl/matches — all IPL matches for selector
// // ─────────────────────────────────────────────────────────────────────────────
// export async function getAllMatches() {
//   const data = await cachedGet(`${BASE}/ipl/matches`, DEFAULT_TTL.matches)
//   return data?.matches || data || []
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // 6. GET /ipl/points-table — IPL standings
// // ─────────────────────────────────────────────────────────────────────────────
// export async function getPointsTable() {
//   const data = await cachedGet(`${BASE}/ipl/points-table`, DEFAULT_TTL.pointsTable)
//   return data
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // 7. GET /ipl/scorecard/:id — match scorecard
// //    Live match: 2-min cache (backend live.worker updates it)
// //    Completed: permanent cache
// // ─────────────────────────────────────────────────────────────────────────────
// export const getScorecard = async (matchId) => {
//   // axios + BASE use karo — baaki APIs ki tarah
//   const res  = await axios.get(`${BASE}/ipl/scorecard/${matchId}`, { timeout: 12000 })
//   const raw  = res.data?.data  // { scorecard: [...], status: "...", ... }

//   if (!raw?.scorecard?.length) return null

//   const innings = raw.scorecard.map((inn) => ({
//     teamName: inn.batteamname || '',
//     score:    inn.score    ?? 0,
//     wickets:  inn.wickets  ?? 0,
//     overs:    inn.overs    ?? 0,
//     extras:   inn.extras?.total ?? 0,

//     batters: (inn.batsman || [])
//       .filter(b => b.balls > 0 || (b.outdec && b.outdec !== ''))
//       .map(b => ({
//         id:         b.id,
//         name:       b.name,
//         runs:       b.runs,
//         balls:      b.balls,
//         fours:      b.fours,
//         sixes:      b.sixes,
//         strikeRate: b.strkrate,
//         dismissal:  b.outdec === 'not out' ? 'not out' : (b.outdec || ''),
//       })),

//     bowlers: (inn.bowler || []).map(b => ({
//       id:      b.id,
//       name:    b.name,
//       overs:   b.overs,
//       maidens: b.maidens,
//       runs:    b.runs,
//       wickets: b.wickets,
//       economy: b.economy,
//     })),

//     wicketsFall: (inn.fow?.fow || []).map((w, i) => ({
//       batName: w.batsmanname,
//       wktRuns: w.runs,
//       wktNbr:  i + 1,
//       wktOvr:  w.overnbr,
//     })),
//   }))

//   return {
//     innings,
//     status:        raw.status        || null,
//     toss:          raw.toss          || null,
//     playerOfMatch: raw.playerOfMatch || null,
//   }
// }
// // ─────────────────────────────────────────────────────────────────────────────
// // 8. GET /ipl/match/:id — match detail / info card
// // ─────────────────────────────────────────────────────────────────────────────
// export async function getMatchInfo(matchId) {
//   if (!matchId) return null
//   const data = await cachedGet(
//     `${BASE}/ipl/match/${matchId}`,
//     DEFAULT_TTL.matchInfo
//   )
//   return data
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // 9. GET /ipl/players?team=... — squad for a team
// // ─────────────────────────────────────────────────────────────────────────────
// export async function getPlayers(team = '') {
//   const data = await cachedGet(
//     `${BASE}/ipl/players`,
//     DEFAULT_TTL.players,
//     team ? { team } : {}
//   )
//   return data?.players || data || []
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // 10. GET /ipl/photos/:matchId — match photos
// //     No id → latest match photos
// // ─────────────────────────────────────────────────────────────────────────────
// export async function getPhotos(matchId = '') {
//   const url  = matchId ? `${BASE}/ipl/photos/${matchId}` : `${BASE}/ipl/photos`
//   const data = await cachedGet(url, DEFAULT_TTL.photos)
//   return data?.photos || data || []
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // Cache invalidation (call when you want fresh data)
// // ─────────────────────────────────────────────────────────────────────────────
// export function clearCache(urlPattern = '') {
//   if (!urlPattern) { _cache.clear(); return }
//   for (const key of _cache.keys()) {
//     if (key.includes(urlPattern)) _cache.delete(key)
//   }
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // 11. GET /fixtures — all cricket fixtures (global, not only IPL)
// // ─────────────────────────────────────────────────────────────────────────────
// export async function getFixtures() {
//   const data = await cachedGet(
//     `${BASE}/fixtures`,   // BASE already /cricket hai
//     DEFAULT_TTL.fixtures
//   )

//   return data?.matches || data || []
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // 12. GET /series — all cricket series (international + leagues)
// // ─────────────────────────────────────────────────────────────────────────────
// export async function getSeries() {
//   const data = await cachedGet(
//     `${BASE}/series`,
//     DEFAULT_TTL.series
//   )

//   return data?.series || data || []
// }


import axios from 'axios'
import { VITE_API_BASE_URL } from '../../config' // ✅ yahan se import

// ── Config ─────────────────────────────────────────────────────
const BASE = `${VITE_API_BASE_URL}/cricket`

// ── Cache ──────────────────────────────────────────────────────
const _cache = new Map()

const DEFAULT_TTL = {
  live:        2 * 60 * 1000,
  recent:      5 * 60 * 1000,
  schedule:   10 * 60 * 1000,
  matches:    10 * 60 * 1000,
  pointsTable: 5 * 60 * 1000,
  scorecard:  30 * 1000,
  matchInfo:   2 * 60 * 1000,
  players:    30 * 60 * 1000,
  photos:     10 * 60 * 1000,
  fixtures:   10 * 60 * 1000,
  series:     15 * 60 * 1000,
}

// ── Cached GET helper ──────────────────────────────────────────
async function cachedGet(url, ttlMs = 60_000, params = {}) {
  const key = url + JSON.stringify(params)
  const hit  = _cache.get(key)

  if (hit && Date.now() - hit.ts < ttlMs) return hit.data

  const res  = await axios.get(url, { params, timeout: 12000 })
  const data = res.data?.data ?? res.data

  _cache.set(key, { data, ts: Date.now() })
  return data
}

// ── Helpers ────────────────────────────────────────────────────
export const getTeamLogo = (imageId) =>
  imageId ? `https://static.cricbuzz.com/a/img/v1/i1/c${imageId}/i.jpg` : null

const TEAM_FLAGS = {
  'Mumbai Indians':               'https://static.cricbuzz.com/a/img/v1/i1/c66951/i.jpg',
  'Chennai Super Kings':          'https://static.cricbuzz.com/a/img/v1/i1/c66952/i.jpg',
  'Royal Challengers Bengaluru':  'https://static.cricbuzz.com/a/img/v1/i1/c66953/i.jpg',
  'Royal Challengers Bangalore':  'https://static.cricbuzz.com/a/img/v1/i1/c66953/i.jpg',
  'Kolkata Knight Riders':        'https://static.cricbuzz.com/a/img/v1/i1/c66954/i.jpg',
  'Delhi Capitals':               'https://static.cricbuzz.com/a/img/v1/i1/c66955/i.jpg',
  'Punjab Kings':                 'https://static.cricbuzz.com/a/img/v1/i1/c66956/i.jpg',
  'Rajasthan Royals':             'https://static.cricbuzz.com/a/img/v1/i1/c66957/i.jpg',
  'Sunrisers Hyderabad':          'https://static.cricbuzz.com/a/img/v1/i1/c66958/i.jpg',
  'Lucknow Super Giants':         'https://static.cricbuzz.com/a/img/v1/i1/c82768/i.jpg',
  'Gujarat Titans':               'https://static.cricbuzz.com/a/img/v1/i1/c82769/i.jpg',
}

export const getTeamFlag = (teamName) =>
  TEAM_FLAGS[teamName] ||
  `https://ui-avatars.com/api/?name=${encodeURIComponent(teamName || 'TM')}&background=00698c&color=fff&size=64`

// ─────────────────────────────────────────────────────────────
// APIs
// ─────────────────────────────────────────────────────────────

// 1. All feeds
export async function getAllMatchFeeds() {
  const data = await cachedGet(`${BASE}/ipl/live`, DEFAULT_TTL.live)
  return {
    live:     data?.live     || [],
    recent:   data?.recent   || [],
    upcoming: data?.upcoming || [],
  }
}

// 2. Live
export async function getLiveMatches() {
  const feeds = await getAllMatchFeeds()
  return feeds.live
}

// 3. Recent
export async function getRecentMatches() {
  try {
    const feeds = await getAllMatchFeeds()
    if (feeds.recent?.length) return feeds.recent
  } catch {}

  const data = await cachedGet(`${BASE}/ipl/recent`, DEFAULT_TTL.recent)
  return data?.matches || data || []
}

// 4. Schedule
export async function getSchedule() {
  try {
    const feeds = await getAllMatchFeeds()
    if (feeds.upcoming?.length) return feeds.upcoming
  } catch {}

  const data = await cachedGet(`${BASE}/ipl/schedule`, DEFAULT_TTL.schedule)
  return data?.matches || data || []
}

// 5. All matches
export async function getAllMatches() {
  const data = await cachedGet(`${BASE}/ipl/matches`, DEFAULT_TTL.matches)
  return data?.matches || data || []
}

// 6. Points table
export async function getPointsTable() {
  return await cachedGet(`${BASE}/ipl/points-table`, DEFAULT_TTL.pointsTable)
}

// 7. Scorecard
export const getScorecard = async (matchId) => {
  const res = await axios.get(`${BASE}/ipl/scorecard/${matchId}`, { timeout: 12000 })
  const raw = res.data?.data

  if (!raw?.scorecard?.length) return null

  return raw
}

// 8. Match info
export async function getMatchInfo(matchId) {
  if (!matchId) return null
  return await cachedGet(`${BASE}/ipl/match/${matchId}`, DEFAULT_TTL.matchInfo)
}

// 9. Players
export async function getPlayers(team = '') {
  const data = await cachedGet(
    `${BASE}/ipl/players`,
    DEFAULT_TTL.players,
    team ? { team } : {}
  )
  return data?.players || data || []
}

// 10. Photos
export async function getPhotos(matchId = '') {
  const url = matchId
    ? `${BASE}/ipl/photos/${matchId}`
    : `${BASE}/ipl/photos`

  const data = await cachedGet(url, DEFAULT_TTL.photos)
  return data?.photos || data || []
}

// 11. Fixtures
export async function getFixtures() {
  const data = await cachedGet(`${BASE}/fixtures`, DEFAULT_TTL.fixtures)
  return data?.matches || data || []
}

// 12. Series
export async function getSeries() {
  const data = await cachedGet(`${BASE}/series`, DEFAULT_TTL.series)
  return data?.series || data || []
}

// ── Cache clear ───────────────────────────────────────────────
export function clearCache(urlPattern = '') {
  if (!urlPattern) return _cache.clear()

  for (const key of _cache.keys()) {
    if (key.includes(urlPattern)) _cache.delete(key)
  }
}