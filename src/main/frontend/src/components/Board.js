import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios";
import Button from '@mui/material/button';

const Board = () => {
    const navigate = useNavigate();
    const [rankItems, setRankItems] = useState([]);

    useEffect(() => {
        axios.get('/api/real-time')
            .then(res => {

                const rankItems = res.data.result.map((e, i) => {
                    return {"no": i+1, "title": e.title, "href": e.href}
                });

                setRankItems(rankItems);
            })
            .catch(err =>{
                console.log(err);
            })
    }, [])

    return (
        <>
            <h1 style={{color:"green"}}>네이버 실시간 검색어</h1>

            <div className="rank-column">
                {rankItems.map(rank => (
                    <div>
                        <a href={rank.href} className="rank-layer">
                        <span className="rank-num">{rank.no}</span>
                        <span className="rank-title">{rank.title}</span>
                        </a>
                    </div>
                ))}
            </div>

            <Button varient="contained" onClick={()=>navigate(-1)}>Go Back Page</Button>
        </>
    )
};

export default Board;