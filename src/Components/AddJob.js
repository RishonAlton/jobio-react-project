import React, { useState } from 'react'
import styled from 'styled-components'

import { useGlobalContext } from '../Context/context'


const AddJob = () => {

    const { createJob, showAlert, errorMessage } = useGlobalContext()

    const [position, setPosition] = useState('')
    const [company, setCompany] = useState('')
    const [incompleteFields, setIncompleteFields] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!position || !company) {
            setIncompleteFields(true)
            setPosition('')
            setCompany('')
            return 
        }
        createJob({ position, company })
        setPosition('')
        setCompany('')
        setIncompleteFields(false)
    }

    return (
        <Wrapper className="section" onSubmit={handleSubmit}>
            <div className={(incompleteFields || showAlert) ? 'alert alert-danger show-alert' : 'alert alert-danger'}>
                { incompleteFields ? 'Please fill all the fields!' : errorMessage }
            </div>
            <input 
                type="text" 
                name="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Position"
            />
            <input 
                type="text" 
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company"
            />
            <button type="submit" className="button">
                Add Job
            </button>
        </Wrapper>
    )

}


const Wrapper = styled.form ` 

    position: relative;
    background: var(--white);
    box-shadow: var(--light-shadow);
    padding: 2rem;
    border-radius: 0.5rem;
    margin: 4rem auto 3rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    grid-gap: 1rem 1.5rem;

    input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid var(--gray-300);
        font-size: 1rem;
        letter-spacing: 1px;
        border-radius: var(--border-radius);
        background: var(--gray-050);
        &:focus {
            outline: 1px solid var(--primary-500);
        }
    }

    button {
        padding: 0.75rem 2rem;
        width: 100%;
    }

    .alert {
        position: absolute;
        top: -4rem;
        left: 50%;
        transform: translateX(-50%);
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }

    @media (min-width: 1000px) {
        box-shadow: none;
    }

`


export default AddJob
