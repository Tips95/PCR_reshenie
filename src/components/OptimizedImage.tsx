'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  quality?: number
  fallbackIcon?: React.ReactNode
}

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false, 
  quality = 85,
  fallbackIcon
}: OptimizedImageProps) => {
  const [hasError, setHasError] = useState(false)

  if (hasError && fallbackIcon) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        {fallbackIcon}
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      loading={priority ? undefined : "lazy"}
      onError={() => setHasError(true)}
    />
  )
}

export default OptimizedImage 