import React, {useState, useEffect} from 'react';
import axios from "axios";

function Login(){
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [user, setUser] = useState({userId:'kk',password:null});

    // when change input data then value change and active useState
    const handleInputId = (e) => {
        setInputId(e.target.value);
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    }

    const onClickLogin = () => {
        console.log("click login button.");

        axios(
            {
                url: '/api/login',
                method: 'post',
                data: {
                    id: inputId,
                    password: inputPw
                } ,

                baseURL: 'http://localhost:8080',
            }
        ).then(function (response) {
            console.log(response.data)
            console.log(response.data.User[0])
        });
    }

    useEffect(() => {
        axios.get('/api/hello', user.userId)
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
