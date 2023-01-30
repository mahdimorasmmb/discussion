import React, { useState } from "react";
import style from "./style.module.less";

interface Props {
  likes: number;
  iLikedIt: boolean;
}

const Like = ({ iLikedIt, likes: numberLikes }: Props) => {
  const [isLike, setLike] = useState(iLikedIt);
  const [likes, setLikes] = useState(numberLikes);

  const handleLike = () => {
    if (!isLike) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setLike(!isLike);
  };
  return (
    <div className={`${style.like_btn} ${isLike && style.isActive}`}>
      <button onClick={handleLike}>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
      </button>{" "}
      {likes}
    </div>
  );
};

export default Like;
