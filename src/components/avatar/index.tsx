import React from "react";
import style from "./style.module.less";

const Avatar = ({ avatar, name }: IUser) => {
  return avatar ? (
    <img className={style.image_profile} src={avatar} />
  ) : (
    <p>{name}</p>
  );
};

export default Avatar;
