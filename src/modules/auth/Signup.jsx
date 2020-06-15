import React, { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import Navbar from "../../lib/components/navbar/Navbar"
import { signInWithGoogle } from "../../lib/utils/firebase"
import _ from "underscore"

export default () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [values, setValues] = useState({});

    const handleSubmit = event => {
        if (event) event.preventDefault();
        setEmail("")
        setPassword("")
    }

    const handleChange = event => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    }

    return (
        <Container>
            <div className="mt-100"></div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="">Email</label>
                <input type="email" name="email" vale={email} onChange={handleChange} required />

                <label htmlFor="">Password</label>
                <input type="password" name="password" vale={password} onChange={handleChange} required />

                <Button type="submit">Sign In</Button>
                <Button onClick={signInWithGoogle}>Sign In</Button>
            </form>
        </Container>
    )
}