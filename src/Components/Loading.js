import React from 'react'
import styled from 'styled-components'


const Loading = () => {

    return (
        <Wrapper>
            <div className="loading"></div>
        </Wrapper>
    )

}


const Wrapper = styled.div ` 

    @keyframes spinner {
        to {
            transform: rotate(360deg);
        }
    }

    .loading {
        width: 5rem;
        height: 5rem;
        margin: 0 auto;
        margin-top: 7rem;
        border-radius: 50%;
        border: 2px solid var(--gray-100);
        border-top-color: var(--primary-300);
        animation: spinner 0.75s linear infinite;
    }

`


export default Loading
