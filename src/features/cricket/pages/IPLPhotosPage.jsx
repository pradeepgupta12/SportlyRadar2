// pages/IPLPhotosPage.jsx
import { useState, useEffect } from 'react'
import SportsTabs from '@/layouts/SportsTabs'
import CricketTabs from '../components/CricketTabs'
import BlogsSection from '@/shared/components/BlogsSection'
import SeoManager from '@/core/seo/SeoManager'
import {
  IPLBanner, IPLSubTabs, EmptyState, ErrorState,
} from '../components/iplshared'
import { getPhotos } from '../../../service/ipl.api'

const PhotoSkeleton = () => (
  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
)

const Lightbox = ({ photo, onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!photo) return null
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="max-w-4xl w-full relative" onClick={e => e.stopPropagation()}>
        <img
          src={photo.url || photo.imageUrl}
          alt={photo.caption}
          className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
        />
        {photo.caption && (
          <p className="text-white/80 text-sm mt-3 text-center">{photo.caption}</p>
        )}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white text-2xl font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

const IPLPhotosPage = () => {
  const [photos,   setPhotos]   = useState([])
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState(null)
  const [selected, setSelected] = useState(null)

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getPhotos()
      setPhotos(data || [])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  return (
    <>
      <SeoManager title="IPL 2025 Photos | SportyRadar" />
      <SportsTabs />
      <CricketTabs extraTab={{ label: 'IPL 2025', path: '/cricket/ipl' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex gap-6">
          <div className="w-full lg:w-[80%] min-w-0">

            <IPLBanner />
            <IPLSubTabs active="Photos" />

            <div className="bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-gray-700 border-t-0 rounded-b-lg p-3 sm:p-4">

              {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Array.from({ length: 9 }).map((_, i) => <PhotoSkeleton key={i} />)}
                </div>
              ) : error ? (
                <ErrorState onRetry={load} />
              ) : photos.length === 0 ? (
                <EmptyState message="No photos available yet" icon="📷" />
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {photos.map((photo, idx) => (
                    <div
                      key={photo.id || idx}
                      onClick={() => setSelected(photo)}
                      className="group cursor-pointer relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
                    >
                      <img
                        src={photo.url || photo.imageUrl}
                        alt={photo.caption || 'IPL Photo'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = 'https://via.placeholder.com/320x180/1a2a3a/FFF?text=IPL'
                        }}
                      />
                      {photo.caption && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                          <p className="text-white text-xs line-clamp-2">{photo.caption}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
          <div className="hidden lg:block lg:w-[20%]">{/* sidebar */}</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogsSection />
      </div>

      {selected && <Lightbox photo={selected} onClose={() => setSelected(null)} />}
    </>
  )
}

export default IPLPhotosPage
