import React from "react"
import { Form, Field } from 'react-final-form'

export function Login() {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm/>
    </div>
  )
}

export function LoginForm() {
  console.log('rerender')
  return (
    <Form
      onSubmit={(data) => {
        console.log(data)
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field name="firstName" component={'input'} placeholder="First Name" />
          </div>
          <div>
            <label>Last Name</label>
            <Field name="lastName" component={'input'} placeholder="Last Name" />
          </div>
          <div>
            <label>Remember me</label>
            <Field name="rememberMe" type={'checkbox'} component={'input'} placeholder="Last Name" />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    />
  )
}