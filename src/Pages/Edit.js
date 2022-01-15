import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'

import { useGlobalContext } from '../Context/context'
import Loading from '../Components/Loading'
import Navbar from '../Components/Navbar'


const Edit = () => {

    const { id } = useParams()
    const { getJob, editJob, isLoading, editItem, edited, showAlert, errorMessage } = useGlobalContext()

    const [values, setValues] = useState({ company: '', position: '', status: '' })
    const [incompleteFields, setIncompleteFields] = useState(false)

    useEffect(() => {
        getJob(id)
    }, [id])

    useEffect(() => {
        if (editItem) {
            const { company, position, status } = editItem
            setValues({ company, position, status })
        }
    }, [editItem])

    const handleSubmit = (e) => {
        e.preventDefault()
        const { company, position, status } = values
        if (!company || !position) {
            setIncompleteFields(true)
            return 
        }
        editJob(id, { company, position, status })
        setIncompleteFields(false)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    if (isLoading && !editItem) {
        return (
            <>
                <Navbar showUser />
                <Wrapper className="section">
                    <Link to="/dashboard" className="back-home button">Back Home</Link>
                </Wrapper>
                <Loading />
            </>
        )
    }

    const { position, company, status } = values

    return (
        <>
            <Navbar showUser />
            <Wrapper className="section">
                <div className={(incompleteFields || showAlert) ? 'alert alert-danger show-alert' : 'alert alert-danger'}>
                    { incompleteFields ? 'Please fill all the fields!' : errorMessage }
                </div>
                <Link to="/dashboard" className="back-home button">Back Home</Link>
                <form 
                    className="edit-form"
                    onSubmit={handleSubmit}
                >
                    { (edited && !showAlert && !incompleteFields) && (
                        <p>Job successfully edited!</p>
                    ) }
                    <h4>Update Job</h4>
                    <article>
                        <div>
                            <label htmlFor="position">Position</label>
                            <input 
                                type="text" 
                                id="position" 
                                value={position}
                                onChange={handleChange}
                                name="position"
                            />
                        </div>
                        <div>
                            <label htmlFor="company">Company</label>
                            <input 
                                type="text" 
                                id="company" 
                                value={company}
                                onChange={handleChange}
                                name="company"
                            />
                        </div>
                        <div>
                            <label htmlFor="status">Status</label>
                            <select 
                                name="status" 
                                id="status"
                                value={status}
                                onChange={handleChange}
                            >
                                <option value="Pending">Pending</option>
                                <option value="Interview">Interview</option>
                                <option value="Declined">Declined</option>
                            </select>
                        </div>
                        <button 
                            type="submit" 
                            className="button"
                            disabled={isLoading}
                        >
                            { isLoading ? 'Editing...' : 'Edit' }
                        </button>
                    </article>
                </form>
            </Wrapper>
        </>
    )

}


const Wrapper = styled.main ` 

    margin-bottom: 3rem;

    .back-home {
        margin-top: 1.75rem;
        color: var(--white);
        background: var(--black);
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        padding-left: 3rem;
        padding-right: 3rem;
        font-size: 1rem;
        &:hover {
            background: var(--gray-500);
        }
    }

    .edit-form {
        background: var(--white);
        box-shadow: var(--light-shadow);
        border-radius: 0.5rem;
        margin: 2rem auto 1rem auto;
        padding: 2rem;
        padding-bottom: 1rem;
        position: relative;
        p {
            font-size: 1rem;
            letter-spacing: 1px;
            color: var(--success-text);
            position: absolute;
            top: 1rem;
            left: 2rem;
        }
        h4 {
            font-weight: normal;
            margin-top: 1rem;
        }
    }

    article {
        margin-top: 2rem;
        div {
            margin-bottom: 1rem;
        }
        label {
            display: block;
            font-size: 0.75rem;
            letter-spacing: 1px;
            margin-bottom: 0.5rem;
        }
        input, select {
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
        .button {
            width: 100%;
            margin-top: 2rem;
            margin-bottom: 1.5rem;
            min-width: 150px;
            height: 2.25rem;
        }
    }

    @media (min-width: 700px) {
        article {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 150px;
            grid-gap: 1rem;
            align-items: center;
        } 
    }

`


export default Edit
