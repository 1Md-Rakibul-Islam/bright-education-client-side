import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css'

// npm install -g firebase-tools

const Register = () => {
    return (
        <Form className='form-container mx-auto border rounded-3 p-4 bg-light mb-5 mt-5'>
            <h2 className='text-center '>Creat your Account</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Label>Image URL</Form.Label>
                <Form.Control type="text" name='imageURL' placeholder="Enter image url" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' required placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' required placeholder="Password" />
            </Form.Group>

            <Button className='w-100' variant="info" type="submit" >
                Register
            </Button>
        <Form.Text className="text-danger d-block">
            We'll never share your email with anyone else.
        </Form.Text>
      </Form>
    );
};

export default Register;