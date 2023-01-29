import myProfile from "../assets/profileme.jpg"
import style from "./style.module.css"



const StartDiscussion = () => {
  return (
    <div className={style.container}>
        <img className={style.icon} src={myProfile}/>
        <input className={style.input} placeholder='Start a discussion'/>
    </div>
  )
}

export default StartDiscussion