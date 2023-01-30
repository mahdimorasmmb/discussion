import CommentsItem from "../comment-item"
import style from "./style.module.less"


interface Props {
  list:IDiscussion[] 
}



const CommentsList = ({list}:Props)  => {
  return (
    <div className={style.container}>
      {
        list.map((comment) =>(
          <div key={comment.id}>
            <CommentsItem  {...comment}/>
            </div>
        ))
      }
    </div>
  )
}

export default CommentsList