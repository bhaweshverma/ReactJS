import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

interface LikeProps {
    onLike: () => void;
}
const Like = ({ onLike }: LikeProps) => {
    const [status, setStatus] = useState(false);

    const toggle = () => {
        setStatus(!status);
        onLike();
    };

    if (status)
        return (<div><AiFillHeart size={50} color="#ff6b81" onClick={toggle}></AiFillHeart></div>);
    else
        return (<div><AiOutlineHeart size={50} onClick={toggle}></AiOutlineHeart></div>);

}

export default Like