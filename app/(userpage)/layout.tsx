import Thinbar from '@/component/thinbar/page'
import React, { Children } from 'react'

const UserpageLayout = ({children}) => {
  return (
    <div className='flex h-screen'>
        <Thinbar/>
        {children}
          
       
    </div>
  )
}

export default UserpageLayout