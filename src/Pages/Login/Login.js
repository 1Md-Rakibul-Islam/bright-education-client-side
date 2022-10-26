import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (
        <Form className='form-container mx-auto border rounded-3 mt-5 p-4 bg-light'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
        <Button variant="info w-100"  type="submit">
          Login
        </Button>
        <Form.Text className="text-danger d-block">
            <p>Status</p>
        </Form.Text>
      </Form>
    );
};

export default Login;