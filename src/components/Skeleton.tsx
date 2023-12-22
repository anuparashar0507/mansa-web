import React from 'react'

const Skeleton = () => {
  return (
    <div role="status" className="flex justify-center animate-pulse p-0">
    <div className="h-12 bg-gray-200 rounded-md dark:bg-gray-700 w-48"></div>
    </div>
  )
}

export default Skeleton