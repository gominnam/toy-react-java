import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {
    Box,
    List, ListItemButton, ListItemText, ListSubheader
} from "@mui/material";
import Button from '@material-ui/core/Button';

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
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" style={{fontSize: "25px", color:"green", textAlign:"center"}} id="nested-list-subheader">
                    네이버 실시간 검색어
                </ListSubheader>
            }
        >
            {rankItems.map(rank => (
                <Box key={rank.no} component="a" href={rank.href} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none', // 링크의 밑줄 제거
                    color: 'inherit', // 링크 색상 상속
                }}>
                    <ListItemButton sx={{ padding: '8px 16px', display: 'flex', width: '100%' }}>
                        <img
                            src={`/static/img/${rank.no}.png`}
                            alt={rank.title}
                            style={{ width: 24, height: 24, marginRight: '8px' }}
                            loading="lazy"
                        />
                        <ListItemText primary={rank.title} />
                    </ListItemButton>
                </Box>
            ))}


            <Box textAlign='center'>
                <Button onClick={()=>navigate(-1)} variant="contained" color="primary" style={{ height: 30 }}>
                    Go Back Page
                </Button>
            </Box>
        </List>

    </>
    )
};

export default Board;