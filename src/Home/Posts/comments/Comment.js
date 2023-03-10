import { Link } from 'react-router-dom';

const Comment = ({comment, currentUser}) => {

  return (
    <div className='comment'>
      <div className='cleft'>
        <img src={currentUser.profilePicture} alt="hello world " />
        <div className='cmiddle'>
        <p><Link to={`/profile/${currentUser.id}`} >{currentUser.name}</Link> </p>
          <p>{comment.description}</p>
        </div>
      </div>
      

      <div className='cright'>
        <span>
          1 minute ago
        </span>
      </div>
    </div>
  )
}

export default Comment