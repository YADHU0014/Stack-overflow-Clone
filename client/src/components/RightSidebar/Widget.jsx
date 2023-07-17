import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment.svg'
import pen  from '../../assets/pen.svg'
import blacklogo from '../../assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18' />
                <p>Part man. Part machine</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18' />
                <p>Throwing away the script on testing</p>
            </div>
        </div>

        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment" width='18' />
                <p>Statement from SO: June 5, 2023 Moderator Action</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment" width='18' />
                <p>Starting the Prompt Design Site: A New Home in our Stack Exchange Neighborhood</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blacklogo} alt="blcklogo" width='18' />
                <p>Does the policy change for AI-generated content affect users who (want to)...</p>
            </div>
        </div>

        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>4</p>
                 <p>Edit the [nuclio] tag wiki</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>8</p>
                <p> Burninate [contentview]</p>
            </div>
        </div>
      
    </div>
  )
}

export default Widget
