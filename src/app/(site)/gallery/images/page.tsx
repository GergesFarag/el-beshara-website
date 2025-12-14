import Masonry from '@/components/Masonry'
import Pagination from '@/components/ui/Pagination'
import { images } from '@/data/images'
import React from 'react'

const page = () => {

  return (
    <div className='min-h-screen'>
      <Masonry items={images} mediaType='image'/>
      <Pagination/>
    </div>
  )
}

export default page