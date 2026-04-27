


// import { memo, useState, useEffect } from 'react'
// import LiveTicker from '../../../layouts/LiveTicker'
// import Category from '../../../layouts/Category.jsx'
// import Headline from '../../../layouts/Headline.jsx'

// const HeroSection = memo(() => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)

//   const images = [
//     {
//       desktop: '/Desktop4.png',
//       laptop: '/Laptop3.png',
//       tablet: '/Tablet.png',
//       mobile: '/mobile.png',
//       alt: 'Sports Stadium 1'
//     },
//     {
//       desktop: '/Desktop5.png',
//       laptop: '/Laptop4.png',
//       tablet: '/Tablet3.png',
//       mobile: '/mobile2.png',
//       alt: 'Sports Stadium 2'
//     },
//     {
//       desktop: '/Desktop6.png',
//       laptop: '/Laptop5.png',
//       tablet: '/Tablet4.png',
//       mobile: '/mobile3.png',
//       alt: 'Sports Stadium 3'
//     }
//   ]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [images.length])

//   const currentImage = images[currentImageIndex]

//   return (
//     <div className="relative text-white overflow-hidden h-screen">

//       {/* Full responsive background image */}
//       <picture>
//         <source media="(min-width: 1280px)"                         srcSet={currentImage.desktop} />
//         <source media="(min-width: 1024px) and (max-width: 1279px)" srcSet={currentImage.laptop} />
//         <source media="(min-width: 768px)  and (max-width: 1023px)" srcSet={currentImage.tablet} />
//         <source media="(max-width: 767px)"                          srcSet={currentImage.mobile} />
//         <img
//           src={currentImage.desktop}
//           alt={currentImage.alt}
//           className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
//         />
//       </picture>

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* LiveTicker */}
//       <div className="relative z-10">
//         <LiveTicker />
//       </div>

//       {/* Category */}
//       <div className="relative z-10">
//         <Category />
//       </div>

//       {/* Carousel dots */}
//       <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center gap-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImageIndex(index)}
//             className={`transition-all duration-300 rounded-full ${
//               currentImageIndex === index
//                 ? 'w-8 h-2 bg-white'
//                 : 'w-2 h-2 bg-white/50 hover:bg-white/75'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Headline */}
//       <div className="absolute bottom-0 left-0 right-0 z-20">
//         <Headline />
//       </div>

//     </div>
//   )
// })

// HeroSection.displayName = 'HeroSection'

// export default HeroSection


import { memo, useState, useEffect, useRef } from 'react'
import LiveTicker from '../../../layouts/LiveTicker'
import Category from '../../../layouts/Category.jsx'
//import Headline from '../../../layouts/Headline.jsx'

const HeroSection = memo(() => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(null)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('left')
  const timerRef = useRef(null)

  const images = [
    {
      desktop: '/Desktop4.png',
      laptop: '/Laptop3.png',
      tablet: '/Tablet.png',
      mobile: '/mobile.png',
      alt: 'Sports Stadium 1'
    },
    {
      desktop: '/Desktop5.png',
      laptop: '/Laptop4.png',
      tablet: '/Tablet3.png',
      mobile: '/mobile2.png',
      alt: 'Sports Stadium 2'
    },
    {
      desktop: '/Desktop6.png',
      laptop: '/Laptop5.png',
      tablet: '/tablet4.png',
      mobile: '/mobile3.png',
      alt: 'Sports Stadium 3'
    }
  ]

  const goToIndex = (newIndex, dir = 'left') => {
    if (animating || newIndex === currentImageIndex) return
    setDirection(dir)
    setNextImageIndex(newIndex)
    setAnimating(true)
    setTimeout(() => {
      setCurrentImageIndex(newIndex)
      setNextImageIndex(null)
      setAnimating(false)
    }, 380)
  }

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrentImageIndex(prev => {
        const next = (prev + 1) % images.length
        goToIndex(next, 'left')
        return prev
      })
    }, 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [currentImageIndex])

  const ImageSlide = ({ image, className = '' }) => (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      <picture className="absolute inset-0 w-full h-full" style={{ display: 'block' }}>
        <source media="(min-width: 1280px)" srcSet={image.desktop} />
        <source media="(min-width: 1024px) and (max-width: 1279px)" srcSet={image.laptop} />
        <source media="(min-width: 768px) and (max-width: 1023px)" srcSet={image.tablet} />
        <source media="(max-width: 767px)" srcSet={image.mobile} />
        <img
          src={image.desktop}
          alt={image.alt}
          className="w-full h-full object-cover object-bottom"
          style={{ display: 'block' }}
        />
      </picture>
    </div>
  )

  return (
    <div
      className="relative text-white overflow-hidden"
      style={{ height: 'clamp(420px, 75vh, 780px)' }}
    >
      <style>{`
        @keyframes slideCurrentOut {
          from { transform: translateX(0%); }
          to   { transform: translateX(-100%); }
        }
        @keyframes slideNextIn {
          from { transform: translateX(100%); }
          to   { transform: translateX(0%); }
        }
        @keyframes slideCurrentOutReverse {
          from { transform: translateX(0%); }
          to   { transform: translateX(100%); }
        }
        @keyframes slideNextInReverse {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0%); }
        }
        .slide-current-out {
          animation: slideCurrentOut 0.38s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .slide-next-in {
          animation: slideNextIn 0.38s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .slide-current-out-reverse {
          animation: slideCurrentOutReverse 0.38s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .slide-next-in-reverse {
          animation: slideNextInReverse 0.38s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      {/* Current image — slides out */}
      <ImageSlide
        image={images[currentImageIndex]}
        className={
          animating
            ? direction === 'left'
              ? 'slide-current-out'
              : 'slide-current-out-reverse'
            : ''
        }
      />

      {/* Next image — slides in */}
      {animating && nextImageIndex !== null && (
        <ImageSlide
          image={images[nextImageIndex]}
          className={direction === 'left' ? 'slide-next-in' : 'slide-next-in-reverse'}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* LiveTicker */}
      <div className="relative z-20">
        <LiveTicker />
      </div>

      {/* Category */}
      <div className="relative z-20">
        <Category />
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToIndex(index, index > currentImageIndex ? 'left' : 'right')
              resetTimer()
            }}
            className={`transition-all duration-300 rounded-full ${
              currentImageIndex === index
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Headline */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-30">
        <Headline />
      </div> */}
    </div>
  )
})

HeroSection.displayName = 'HeroSection'
export default HeroSection