import style from "./style.module.less"


const TimeAgo = ({ date }: { date: number }) => {
  const time = new Date().getTime() - date;
  const month = new Date(time).getMonth();
  const day = new Date(time).getDay();
  const h = new Date(time).getHours();
  const miunute = new Date(time).getMinutes();

  return (
    <div className={style.time_ago}>
      {month
        ? month + "month "
        : day
        ? day + "day "
        : h
        ? h + "h"
        : miunute > 1
        ? miunute + "min "
        : "a minute "}
         ago
    </div>
  );
};

export default TimeAgo;
