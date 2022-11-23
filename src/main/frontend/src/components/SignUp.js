import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/gominnam/toy-react-java">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const handleInputId = (e) => {
        setInputId(e.target.value);
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    }

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value);
    }

    const handleInputAuthCode = (e) => {
        setInputEmail(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            userId: data.get('user-id'),
            email: data.get('email'),
            password: data.get('password'),
        });

        const body = { 'userId': data.get('user-id'), 'password': data.get('password'),
                        'email': data.get('email')};

        axios.post('http://localhost:8080/api/sign-up', body)
            .then(response => {
                //navigate("../board")
            })
            .catch(error =>{
                console.error('There was an error!', error);
            });
    };

    function authCodeAPI(){
        const body = { 'email': inputEmail};
        console.log("authCodeAPI call");
        axios.post('http://localhost:8080/api/mail', body)
            .then(response => {
                //todo: 성공 -> 회원가입 성공적이다 라는 문구, 실패 -> 실패 원인
            })
            .catch(error =>{
                console.error('There was an error!', error);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="user-id"
                                    label="아이디"
                                    name="user-id"
                                    autoComplete="user-id"
                                    onChange={handleInputId}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="비밀번호"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={handleInputPw}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password-confirm"
                                    label="비밀번호 재확인"
                                    type="password"
                                    id="password"
                                    autoComplete="cof-password"
                                />
                            </Grid>
                            <Grid item xs={12}
                                  justify="space-between">
                                <TextField
                                    required
                                    style ={{width: '60%'}}
                                    id="email"
                                    label="이메일 주소"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleInputEmail}

                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ height: '100%', width: '40%' }}
                                    onClick={authCodeAPI}
                                >
                                    인증번호
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="authCode"
                                    label="인증번호"
                                    name="authCode"
                                    autoComplete="authCode"
                                    onChange={handleInputAuthCode}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            가입하기
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="../" variant="body2">
                                    이미 계정이 있습니까? 로그인하기
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
