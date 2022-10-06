import React, {useState, useEffect} from 'react';
import axios from "axios";

function Login(){
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

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
                console.log(response.data)
            })
            .catch(error =>{
                console.error('There was an error!', error);
            });
    }

    useEffect(() => {
        axios.get('/api/hello', inputId)
            .then(res => console.log(res)
            )
            .catch()
    }, [])

    return(
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login;
