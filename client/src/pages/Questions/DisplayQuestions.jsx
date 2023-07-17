import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'
import '../../App.css'

const DisplayQuestions = () => {
  return (
    <div className='main-container-1'>
      <LeftSidebar/>
      <div className='main-container-2'>
        <QuestionDetails/>
        <RightSidebar/>

      </div>

    </div>
  )
}

export default DisplayQuestions
