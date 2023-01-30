import Avatar from "../avatar";
import Input from "../input";
import style from "./style.module.less";

interface Props extends IUser {
  isReply?:boolean
}

const StartDiscussion = ({isReply,...otherProps}: Props) => {
  return (
    <div className={`${style.container} ${isReply && style.isActiveBg}`}>
      <div className={style.avatar_container}>
        <Avatar {...otherProps} />
      </div>
      <Input isReply={isReply}  />
    </div>
  );
};

export default StartDiscussion;
