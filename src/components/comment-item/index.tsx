import Like from "../like";
import style from "./style.module.less";

interface Props {
  data: IDiscussion;
}

const CommentsItem = ({ data }: Props) => {
  return (
    <div>
      <div>
        <img src={data.user.avatar} />
      </div>
      <div>
        <div>
          <h3>{data.user.name}</h3>
          <span>{data.date}</span>
        </div>
        <p>{data.text}</p>
        <div>
          <Like />
          <button>Reply</button>
        </div>
      </div>
    </div>
  );
};

export default CommentsItem;
