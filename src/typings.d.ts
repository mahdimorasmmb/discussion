interface IUser {
    name: string;
    avatar?: string;
}
interface IComment {
    id: number;
    date: number; // unix timestamp in milliseconds.
    user: IUser;
    text: string;
    likes: number;
    iLikedIt: boolean;
}
interface IDiscussion extends IComment {
    replies: IComment[];
}
interface IProps {
    comments: IComment[];
}