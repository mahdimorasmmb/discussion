import { useState } from "react";
import Avatar from "../avatar";
import CommentsList from "../comments-list";
import Input from "../input";
import Like from "../like";
import StartDiscussion from "../start-discussion";
import TimeAgo from "../time-ago";
import style from "./style.module.less";
import myProfile from "../../assets/profileme.jpg";

type Props = IDiscussion;

const CommentsItem = ({
  user,
  date,
  iLikedIt,
  id,
  likes,
  replies,
  text,
}: Props) => {
  const loginUser: IUser = {
    name: "mahdi",
    avatar: myProfile,
  };

  const [reply, setReply] = useState(false);

  return (
    <div className={`${style.container} ${replies && style.border}`}>
      <div className={style.box_avatar}>
        <Avatar {...user} />
        {replies && replies.length > 0 && <div className={style.border_left} />}
      </div>

      <div>
        <div className={style.name_data}>
          <h3>{user?.name}</h3>
          <TimeAgo date={date} />
        </div>
        <p className={style.text}>{text}</p>
        <div className={style.button_container}>
          <Like iLikedIt={iLikedIt} likes={likes} />
          { replies  && (
            <button className={style.reply_btn} onClick={() => setReply(true)}>
              Reply
            </button>
          )}
        </div>
        {replies && replies.length > 0 && <CommentsList list={replies} />}
        {  reply && <StartDiscussion isReply {...loginUser} />}
      </div>
    </div>
  );
};

export default CommentsItem;
