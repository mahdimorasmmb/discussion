import Avatar from "../avatar";
import CommentsList from "../comments-list";
import Like from "../like";
import TimeAgo from "../time-ago";
import style from "./style.module.less";

const CommentsItem = ({
  user,
  date,
  iLikedIt,
  id,
  likes,
  replies,
  text
}: IDiscussion) => {
 

  return (
    <div className={style.container}>
      <div>
        <Avatar {...user} />
      </div>
      <div>
        <div className={style.name_data}>
          <h3>{user?.name}</h3>
          <TimeAgo date={date}/>
        </div>
        <p className={style.text}>{text}</p>
        <div className={style.button_container}>
          <Like iLikedIt={iLikedIt} likes={likes}   />
          <button className={style.reply_btn}>Reply</button>
        </div>
        {
        replies &&   replies.length > 0 && (
            <CommentsList list={replies}/>
          )
        }
      </div>
    </div>
  );
};

export default CommentsItem;
