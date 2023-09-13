import { useState } from 'react';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUsername = (e) => setUsername(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();

        const accounts = JSON.parse(localStorage.getItem('accounts'));

        const account = accounts.find((account) => {
            if (account.username === username && account.password === password){
                return account;
            }

            return null;
        }
        );

        console.log({
            username,
            password
        });
    };


    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="">Username</label>
            <input 
                type="text"
                id = "username"
                value = {username}
                onChange = {onChangeUsername} 
            />

            <label htmlFor="">Password</label>
            <input 
                type="password"
                id = "password"
                value = {password}
                onChange = {onChangePassword} 
            />

            <button type="submit">Log In</button>
        </form>
    );
};

export default LoginForm;