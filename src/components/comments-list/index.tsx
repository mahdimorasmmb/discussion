import CommentsItem from "../comment-item"
import style from "./style.module.less"

interface Props {
  list:IDiscussion[]
}

const CommentsList = ({list}:Props) => {
  return (
    <div className={style.container}>
      {
        list.map((item) =>(
          <CommentsItem key={item.id} data={item}/>
        ))
      }
    </div>
  )
}

export default CommentsList