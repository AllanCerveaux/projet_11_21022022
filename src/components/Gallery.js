import React, { useState } from 'react';

export default function Gallery({lodging}) {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const lodgingLength = lodging?.pictures?.length || 0

  const nextPicture = () => {
    setGalleryIndex(galleryIndex === lodgingLength-1 ? 0 : galleryIndex+1)
  }
  const previousPicture = () => {
    setGalleryIndex(galleryIndex === 0 ? lodgingLength-1 : galleryIndex-1)
  }

  return (
    <div style={{backgroundImage: `url(${lodging.pictures[galleryIndex]})`}} className='gallery'>
      <span className='gallery-pagination'>{galleryIndex + 1} / { lodgingLength }</span>
      <span className='gallery-control--previous' onClick={previousPicture}>&lt;</span>
      <span className='gallery-control--next'onClick={nextPicture}>&gt;</span>
    </div>
  )
}
