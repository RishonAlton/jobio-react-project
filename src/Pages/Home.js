import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import image from '../Assets/Main Image.svg'
import Navbar from '../Components/Navbar'


const Home = () => {

    return (
        <>
            <Navbar />
            <Wrapper className="section">
                <section className="main-section">
                    <h1>Job Tracking App</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio repellendus porro placeat rerum, perferendis blanditiis, vel cum ut doloribus officia? Labore, delectus vero! Tempore at aliquid modi? Excepturi, sed!</p>
                    <Link to="/login" className="button">
                        Login / Register
                    </Link>
                </section>
                <section className="image-section">
                    <img src={image} alt="Job Tracking App" />
                </section>
            </Wrapper>
        </>
    )

}


const Wrapper = styled.main `

    min-height: calc(100vh - 5rem);
    display: grid;
    place-items: center;

    .main-section {
        max-width: var(--fixed-width);
        h1 {
            margin-bottom: 2rem;
            margin-top: 0;
        }
    }

    .button {
        font-size: 1.25rem;
        padding: 0.75rem 1.25rem;
        margin: 0;
    }

    .image-section {
        display: none;
    }

    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 5rem;
        .image-section {
            display: block;
        }
    }

`


export default Home
