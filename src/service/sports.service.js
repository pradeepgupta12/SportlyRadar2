

const BASE_URL = 'https://unprostrated-glendora-prediluvial.ngrok-free.dev/api/lastes_news/'

const fetchNews = async () => {
  const res = await fetch(BASE_URL, {
    headers: {
      'ngrok-skip-browser-warning': 'true',
      'Accept': 'application/json',
    },
  })
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
  return res.json()
}

// ✅ status_code === 200 AND status === "publish" + duplicate id filter
const filterValid = (items) => {
  const seen = new Set()
  return items.filter((item) => {
    if (item.status_code !== 200) return false
    if (item.status !== 'publish') return false
    if (seen.has(item.id)) return false
    seen.add(item.id)
    return true
  })
}

const mapItem = (item, category) => ({
  id:            item.id,
  title:         item.title,
  description:   item.description,
  image:         item.image,
  source:        item.source,
  publishedAt:   item.publishedAt,
  url:           item.url,
  final_content: item.final_content ?? '',
  tags:          item.tags ?? [],
  category,
  slug: `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${item.id}`,
})

export const getLatestNews = async () => {
  try {
    const json = await fetchNews()
    const valid = filterValid(json.data ?? [])
    return {
      success: true,
      data: valid.map((item) => mapItem(item, 'Cricket')),
    }
  } catch (err) {
    console.error('getLatestNews error:', err)
    return { success: false, data: [] }
  }
}

export const getCricketNews = getLatestNews
export const getIPLNews = getLatestNews
export const getAllLatestNews = getLatestNews