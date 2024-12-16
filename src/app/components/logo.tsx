import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image
              src="/logosec.png"
              alt='icon'
              className='ml-10 mb-10'
              width={904}
              height={93}
              />
    </div>
  )
}

export default Logo
