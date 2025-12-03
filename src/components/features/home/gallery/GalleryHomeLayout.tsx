import React from 'react'
import GalleryHomeLeft from './GalleryHomeLeft'
import GalleryHomeRight from './GalleryHomeRight'

const GalleryHomeLayout = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-x-30 gap-5 justify-center items-center ">
        <GalleryHomeRight className="w-full md:w-1/2" />
        <GalleryHomeLeft className="w-full md:w-1/2" />
    </div>
  )
}

export default GalleryHomeLayout