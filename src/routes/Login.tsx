import React from 'react'
import TextInput from '../components/input'
import './Login.scss'


const Login = () => {

    return (
        <main className='login-form'>
            <section>
                <span>Enter Credentials</span>
            </section>
            <section className='form-inputs'>
                <form action="#">
                    <div>
                        <TextInput id="username" name="username" label='Username' />
                        <TextInput id="password" type="password" name="password" label='Password' />
                    </div>
                    <button type="submit" className='btn-login'>Login</button>
                </form>
            </section>
        </main>
    )
}

export default Login