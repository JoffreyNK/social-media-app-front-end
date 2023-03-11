import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import './posts.css'

import posts from '../data.js'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const Posts = () => {
  const {currentUser}  = useContext(AuthContext);
  return (
    <div className='posts'>
     {
      posts.map(post => <div key={post.id} className='post'>
        <div className='user'>
          <div className='left'>
            <img src={currentUser.profilePicture} alt="hello world " />
            <div className='post-status'>
              <span>{currentUser.name}</span>
              <span>1 minute ago</span>
            </div>
          </div>
          <div className='right'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='post-info'>
          <p>P{post.description}</p>
          <img src={post.img} alt={post.description} />
        </div>
        <div className='reactions'>
          <div className='icons'>
            <FavoriteBorderOutlinedIcon />
            <spa>Likes</spa>
          </div>
          <div className='icons'>
            <TextsmsOutlinedIcon />
            <spa>Comments</spa>
          </div>
          <div className='icons'>
            <ShareOutlinedIcon />
            <spa>Share</spa>
          </div>
        </div>
      </div>)
     }
      
    </div>
  )
}

export default Posts