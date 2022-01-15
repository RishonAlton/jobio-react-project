import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import logo from '../Assets/Logo.svg'
import { useGlobalContext } from '../Context/context'


const Login = () => {

    const { user, isLoading, register, login, showAlert, errorMessage } = useGlobalContext()

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        isMember: true,
        incompleteFields: false
    })

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember, incompleteFields: false, name: '', email: '', password: '' })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, password, isMember } = values
        if (!isMember) {
            if (!name || !email || !password) {
                setValues({ ...values, incompleteFields: true })
                return 
            }
            register({ name, email, password })
        }
        else {
            login({ email, password })
        }
    }

    return (
        <>
            { user && <Redirect to="/dashboard" /> }
            <Wrapper>
                <div className={(values.incompleteFields || showAlert) ? 'alert alert-danger show-alert' : 'alert alert-danger'}>
                    { values.incompleteFields ? 'Please fill all the fields!' : errorMessage }
                </div>
                <form className="section form" onSubmit={handleSubmit}>
                    <header>
                        <img src={logo} alt="Jobio" />
                        <h4>
                            { values.isMember ? 'Login' : 'Register' }
                        </h4>
                    </header>
                    <article>
                        {
                            !values.isMember && (
                                <div>
                                    <label htmlFor="name">
                                        Name
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            )
                        }
                        <div>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                        </div>
                    </article>
                    <footer>
                        <button type="submit" className="button" disabled={isLoading}>
                            { isLoading ? 'Loading...' : 'Submit' }
                        </button>
                        {
                            values.isMember ? (
                                <p>
                                    Not a member yet?
                                    <button type="button" onClick={toggleMember}>Register</button>
                                </p>
                            ) : (
                                <p>
                                    Already a member?
                                    <button type="button" onClick={toggleMember}>Login</button>
                                </p>
                            )
                        }
                    </footer>
                </form>
            </Wrapper>
        </>
    )

}


const Wrapper = styled.main `

    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    padding-top: 3rem;
    padding-bottom: 3rem;
    transform: translateY(-2rem);
    
    .form {
        background: var(--white);
        max-width: 500px;
        box-shadow: var(--light-shadow);
        border-radius: var(--border-radius);
        padding: 2rem;
        border-top: 0.25rem solid var(--primary-500);
        margin-top: 1rem;
    }

    header {
        img {
        width: 10rem;
        margin: 0 auto;
        }
        h4 {
            text-align: center;
            font-weight: normal;
            margin-top: 1.5rem;
        }
    }

    article {
        div {
            margin-bottom: 1rem;
        }
        label {
            display: block;
            font-size: 0.75rem;
            letter-spacing: 1px;
            margin-bottom: 0.5rem;
        }
        input {
            border: 1px solid var(--gray-200);
            border-radius: var(--border-radius);
            background: var(--gray-050);
            padding: 0.5rem 0.75rem;
            width: 100%;
            outline: none;
            font-size: 1rem;
            color: var(--gray-800);
            letter-spacing: 1px;
        }
    }

    .button {
        width: 100%;
        margin-top: 2rem;
        margin-bottom: 1.5rem;
    }

    footer {
        p {
            margin-bottom: 0;
            text-align: center;
            font-size: 1rem;
            button {
                border: none;
                background: transparent;
                color: var(--primary-500);
                margin-left: 0.5rem;
                font-size: 1rem;
            }
        }
    }


`


export default Login
