import React, { useState } from 'react'
import styled from 'styled-components'
import { FaUser, FaCaretDown } from 'react-icons/fa'

import logo from '../Assets/Logo.svg'
import { useGlobalContext } from '../Context/context'


const Navbar = ({ showUser }) => {

    const { user, logout } = useGlobalContext()
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <Wrapper>
            <img src={logo} alt="" />
            {
                (user && showUser) && (
                    <div>
                        <button className="button" onClick={() => setIsModalOpen(!isModalOpen)}>
                            <FaUser className="user-icon" />
                            <span>
                                { user.split(' ')[0] }
                            </span>
                            <FaCaretDown className="dropdown-icon" />
                        </button>
                        <button 
                            className={isModalOpen ? 'logout-button show-button': 'logout-button'}
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </div>
                )
            }
        </Wrapper>
    )

}


const Wrapper = styled.nav ` 

    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 10rem;
    }

    div {
        position: relative;
    }

    .button {
        display: grid;
        place-items: center;
        grid-template-columns: auto 1fr auto;
        grid-gap: 0.5rem;
    }

    .user-icon {
        background: var(--white);
        color: var(--primary-500);
        padding: 0.1rem;
        border-radius: 50%;
    }

    .dropdown-icon {
        font-size: 1rem;
    }

    .logout-button {
        display: none;
        position: absolute;
        left: 0;
        top: 2.5rem;
        width: 100%;
        background: var(--white);
        color: var(--primary-500);
        font-size: 1rem;
        letter-spacing: 1px;
        border: none;
        border-radius: var(--border-radius);
        padding: 0.75rem;
        box-shadow: var(--light-shadow);
    }

    .show-button {
        display: block;
    }

    @media (max-width: 350px) {
        img {
            width: 7rem;
        }
    }

`


export default Navbar
