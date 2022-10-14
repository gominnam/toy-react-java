import React from 'react';
import {useNavigate} from "react-router-dom"

const Chat = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1 style={{color:"green"}}>Here is Chatting Room</h1>
            <button onClick={()=>navigate(-1)}>Go Back Page</button>
        </>
    )
};

export default Chat;