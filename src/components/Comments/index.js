import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', count: 0, commentsList: []}

  likeComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onAddComment = event => {
    event.prevetDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: v4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, comment, count, commentsList} = this.state

    return (
      <div className="app-container">
        <div className="comments-container">
          <div className="add-comment-section">
            <h1 className="heading">Comments</h1>
            <p className="desc">Say something about 4.O Technologies</p>
            <form
              className="comments-form-container"
              onSubmit={this.onAddComment}
            >
              <input
                onChange={this.onChangeName}
                value={name}
                type="text"
                placeholder="Your Name"
                className="name-container"
              />
              <textarea
                onChange={this.onChangeComment}
                value={comment}
                rows="8"
                cols="10"
                placeholder="Your Comment"
                className="comment-container"
              >
                {' '}
              </textarea>
              <button type="submit" className="add-comment-btn">
                Add Comment
              </button>
            </form>
          </div>
          <div className="image-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-img"
            />
          </div>
        </div>
        <hr className="horiz" />
        <p>
          <span className="count">{count}</span> Comment
        </p>
        <ul className="comments">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              isLiked={this.likeComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
