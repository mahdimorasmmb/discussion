
import Avatar from "../avatar"
import style from "./style.module.less"



const CreateDiscussion = (props:IUser) => {
  return (
    <div className={style.container}>
      <Avatar {...props} />
        <input className={style.input} placeholder='Start a discussion'/>
    </div>
  )
}

export default CreateDiscussion