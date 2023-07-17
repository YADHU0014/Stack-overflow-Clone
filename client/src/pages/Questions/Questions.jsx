import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import '../../App.css'

const Questions = () => {
  return (
    <div className='main-container-1'>
      <LeftSidebar/>
      <div className='main-container-2'>
        <HomeMainbar/>
        <RightSidebar/>

      </div>

    </div>
  )
}

export default Questions
