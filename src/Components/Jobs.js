import React from 'react'
import styled from 'styled-components'

import { useGlobalContext } from '../Context/context'
import Loading from './Loading'
import Job from './Job'


const Jobs = () => {

    const { isLoading, jobs } = useGlobalContext()

    if (isLoading) {
        return <Loading />
    }

    if (jobs.length === 0) {
        return (
            <Wrapper className="section">
                <h4 className="no-jobs">Currently, you have no <span>jobs</span> to display!</h4>
            </Wrapper>
        )
    }

    return (
        <Wrapper className="section">
            <article className="column-headings">
                <span>Position</span>
                <span>Company</span>
                <span className="date">Date</span>
                <span className="status">Status</span>
                <span className="action">Action</span>
            </article>
            {
                jobs.map(job => <Job {...job} key={job._id} />)
            }
        </Wrapper>
    )

}


const Wrapper = styled.section ` 

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: center;
    grid-gap: 1rem;
    margin-bottom: 5rem;

    .column-headings {
        display: none;
        background: var(--gray-200);
        color: var(--gray-500);
        padding: 1.25rem 1.75rem;
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
        font-size: 0.9rem;
        font-weight: bold;
        letter-spacing: 1px;
    }

    .status, .action {
        justify-self: center;
    }

    .no-jobs {
        margin-top: 3rem;
        font-weight: normal;
        text-transform: none;
        text-align: center;
        span {
            text-transform: uppercase;
            color: var(--primary-500);
        }
    }

    @media (min-width: 1000px) {
        display: flex;
        flex-direction: column;
        grid-gap: 0;
        .column-headings {
            display: grid;
            grid-template-columns: 1fr 1fr 200px 100px auto;
            grid-gap: 2rem;
            align-items: center;
            justify-items: left;
        }
    }

`


export default Jobs
