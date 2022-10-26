import React, { useState } from "react"
import ReactDOM from "react-dom"
import '../css/registration.css'

function App() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value

        const result = await fetch("https://tkahoot.herokuapp.com/user/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then((res) => res.json())

        if (result.status === 'ok') {
            alert('Success')
        } else {
            console.log(result.error)
        }
    };
    return (
        <div className="container">
            <img src={require('./img/imageLogo.jpg')} className='logo'></img>
            <div class="form-container">
                <div className="title">
                    <h2>Registration</h2>
                </div>
                <form id="form-registration" onSubmit={handleSubmit} method="POST">
                    <label for="username">Tài khoản</label>
                    <input id="username" type="text" name="username" autocomplete="on" required />
                    <label for="password">Mật khẩu</label>
                    <input id="password" type="password" name="password" required />

                    <button id="btn-login" type="submit"  >Xác nhận</button>
                </form>
            </div>
        </div>

    );
}


export default App;