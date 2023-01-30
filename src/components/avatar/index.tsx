import style from "./style.module.less";

const Avatar = ({ avatar, name }: IUser) => {
  const codeColor =
    name.split("").reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0) % 360;

  const getNameAvatar = () => {
    const aryName = name.split(" ");

    return aryName[0][0].toUpperCase() + aryName[1][1].toUpperCase();
  };

  return avatar ? (
    <img className={style.image_profile} src={avatar} />
  ) : (
    <div
      style={{ backgroundColor: `hsla(${codeColor}, 60%, 50%, 1)` }}
      className={style.name_avatar}
    >
      <span>{getNameAvatar()}</span>
    </div>
  );
};

export default Avatar;
