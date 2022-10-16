import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import axios from "axios";
import {
    Avatar,
    Box, Checkbox,
    createTheme,
    CssBaseline,
    FormControlLabel,
    Grid, Link, Paper,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import Button from "@mui/material/button";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/gominnam/toy-react-java">
                Github
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

function LockOutlinedIcon() {
    return null;
}

function Login(){
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const navigate = useNavigate();

    const handleInputId = (e) => {
        setInputId(e.target.value);
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    }

    const onClickLogin = () => {
        const body = { 'userId': inputId, 'password': inputPw };
        console.log(`click login button. : ${body}`);
        axios.post('http://localhost:8080/api/login', body)
            .then(response => {
                console.log(response.data);
                navigate("../board")
            })
            .catch(error =>{
                console.error('There was an error!', error);
            });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            userid: data.get('user-id'),
            password: data.get('password'),
        });
    };

    return(
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(/static/img/login.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'lightgrey' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                           REVOLUTION
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="user-id"
                                label="아이디"
                                name="user-id"
                                autoComplete="user-id"
                                autoFocus
                                onChange={handleInputId}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="비밀번호"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleInputPw}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={onClickLogin}
                            >
                                로그인
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                      비밀번호 찾기
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"회원가입"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Login;
