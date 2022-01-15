import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import image from '../Assets/404.svg'


const Error = () => {

    return (
        <Wrapper>
            <section>
                <img src={image} alt="404 Not Found" />
                <h3>Oh! Page not found</h3>
                <p>We can't seem to find the page you're looking for!</p>
                <Link to="/" className="button">
                    Back to Home
                </Link>
            </section>
        </Wrapper>
    )

}


const Wrapper = styled.main ` 

    min-height: 100vh;
    display: grid;
    place-items: center;
    width: 90vw;
    max-width: var(--fixed-width);
    margin: 0 auto;

    h3 {
        font-weight: normal;
        margin: 3rem 0;
        margin-bottom: 1rem;
        text-align: center;
    }

    p {
        color: var(--gray-500);
        font-size: 1rem;
        text-align: center;
    }

    .button {
        margin: 0 auto;
    }

`


export default Error
