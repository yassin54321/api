import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Footer = () => {
  return (
    <div style={{ marginTop:'100px' }}>

<h1>welcome</h1>
      <Form style={{ textAlign: 'center' ,height:'500px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{ width: '500px', marginLeft: '510px' }} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" style={{ width: '500px', marginLeft: '510px' }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" style={{ marginLeft: '510px' }} />
        </Form.Group>
        <Button style={{backgroundColor:'#CD9D2B'}}  type="submit">
          Submit
        </Button>
      </Form>

    </div>
  )
}

export default Footer