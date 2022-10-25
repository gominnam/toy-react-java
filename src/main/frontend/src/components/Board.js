import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios";
import {
    Box, Collapse,
    Grid, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader
} from "@mui/material";
import Button from '@material-ui/core/Button';
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fa1} from "@fortawesome/free-solid-svg-icons";

function SendIcon() {
    return null;
}

function DraftsIcon() {
    return null;
}

function InboxIcon() {
    return null;
}

const Board = () => {
    const navigate = useNavigate();
    const [rankItems, setRankItems] = useState([]);
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

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
                <ListItemButton component="a" href={rank.href}>
                    <Icon>
                        <FontAwesomeIcon icon={fa1} />
                    </Icon>
                    <ListItemText primary={rank.title} />
                </ListItemButton>

            ))}

            <ListItemButton>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>



        <Button onClick={()=>navigate(-1)} variant="contained" color="primary">
            Go Back Page
        </Button>
    </>
    )
};

export default Board;