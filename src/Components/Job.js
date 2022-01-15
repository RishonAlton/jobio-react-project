import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useGlobalContext } from '../Context/context'


const Job = ({ _id: jobID, company, position, status, createdAt }) => {

    const { deleteJob } = useGlobalContext()

    return (
        <Wrapper>
            <div className="small-screen-view">
                <h2>{company.charAt(0)}</h2>
                <div className="job-info">
                    <h5>{position}</h5>
                    <p className="company">{company}</p>
                    <p className="date">{moment(createdAt).format('MMMM Do, YYYY')}</p>
                    <p className={`status ${status.toLowerCase()}`}>
                        {status}
                    </p>
                </div>
                <div className="icons">
                    <Link
                        to={`edit/${jobID}`}
                        className="icon edit-icon" 
                        type="button"
                    >
                        <FaEdit />
                    </Link>
                    <button 
                        className="icon delete-icon" 
                        onClick={() => deleteJob(jobID)}
                        type="button"
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
            <div className="large-screen-view">
                <span className="position">{position}</span>
                <span className="company">{company}</span>
                <span className="date">{moment(createdAt).format('MMMM Do, YYYY')}</span>
                <span className={`status ${status.toLowerCase()}`}>
                    {status}
                </span>
                <div className="icons">
                    <Link
                        to={`edit/${jobID}`}
                        className="icon edit-icon" 
                        type="button"
                    >
                        <FaEdit />
                    </Link>
                    <button 
                        className="icon delete-icon" 
                        onClick={() => deleteJob(jobID)}
                        type="button"
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
        </Wrapper>
    )

}


const Wrapper = styled.article ` 

    background: var(--white);
    box-shadow: var(--light-shadow);
    border-radius: 0.5rem;
    padding: 2rem;
    text-align: center;
    text-transform: capitalize;
    transition: var(--transition);

    &:hover {
        box-shadow: var(--dark-shadow);
    }
    
    .small-screen-view {
        h2,
        h5 {
            font-family: 'Nunito', sans-serif;
        }
        h2 {
            display: block;
            font-size: 2rem;
            font-weight: normal;
            color: var(--white);
            background: var(--primary-500);
            padding: 0.25rem 0.5rem;
            border-radius: var(--border-radius);
            width: max-content;
            margin: 0 auto 1.25rem auto;
        }
        h5 {
            margin-bottom: 0.25rem;
        }
        p {
            margin-bottom: 0.25rem;
            letter-spacing: 1px;
        }
        .company {
            color: var(--gray-900);
        }
        .date {
            color: var(--gray-500);
            font-size: 1rem;
        }
        .status {
            padding: 0.2rem 0.75rem;
            margin: 0.75rem auto 1rem auto;
        }
    }

    .large-screen-view {
        display: none;
        padding: 1.75rem;
        span {
            font-size: 0.9rem;
            letter-spacing: 1px;
        }
        .date {
            color: var(--gray-500);
        }
        .status {
            font-size: 0.75rem;
            padding: 0.1rem 1rem;
            justify-self: center;
        }
    }

    .status {
        width: max-content;
        text-align: center;
        border-radius: var(--border-radius);
    }

    .interview {
        color: var(--success-text);
        background: var(--success-background);
    }

    .pending {
        color: var(--warning-text);
        background: var(--warning-background);
    }

    .declined {
        color: var(--danger-text);
        background: var(--danger-background);
    }

    .icons {
        display: flex;
        justify-content: center;
        .icon {
            border: none;
            background: transparent;
            display: grid;
            place-items: center;
            font-size: 1rem;
        }
    }

    .edit-icon {
        margin-right: 0.5rem;
        color: var(--dark-green);
    }

    .delete-icon {
        margin-left: 0.5rem;
        color: var(--dark-red);
    }

    @media (min-width: 1000px) {
        box-shadow: none;
        margin-bottom: 0.1rem;
        border-radius: 0;
        border-bottom: 1px solid var(--gray-200);
        border-bottom-left-radius: var(border-radius);
        border-bottom-right-radius: var(border-radius);
        padding: 0;
        &:last-child {
            border-bottom: none;
        } 
        &:hover {
            box-shadow: none;
        }
        .small-screen-view {
            display: none;
        }
        .large-screen-view {
            display: grid;
            grid-template-columns: 1fr 1fr 200px 100px auto;
            grid-gap: 2rem;
            align-items: center;
            justify-items: left;
        }
    }


`


export default Job
