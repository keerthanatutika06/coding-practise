// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, isLiked} = props
  const {name, comment, date, initialClassName, id} = commentDetails
  const initial = name[0]

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    isLiked(id)
  }

  const onClickDelete = () => {}

  return (
    <li className="comment-item">
      <div className="first-section">
        <div className={initialClassName}>{initial}</div>
        <div className="info">
          <div className="name-container">
            <p className="name">{name}</p>
            <p className="date">{date}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="second-section">
        <div className="like-section">
          <button type="button" className="like-button" onClick={onClickLike}>
            <img src={likeImgUrl} alt="like" />
            Like
          </button>
        </div>
        <div className="delete-section">
          <button
            type="button"
            className="delete-button"
            onClick={onClickDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
