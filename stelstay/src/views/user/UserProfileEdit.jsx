import {
    PasswordInput,
    email,
    regex,
    SimpleForm,
    TextInput,
    required,
    Edit,
    DateField, 
    EmailField, 
    List,
    TextField,
    Datagrid
  } from 'react-admin'

  import * as React from 'react'
  // Custom validation function to check if two password fields match.
  const equalToPassword = (value, allValues) => {
    if (value !== allValues.password) {
      return 'The two passwords must match'
    }
  }
  // Custom validation function to validate the password format.
  const validatePassword = regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*;])[A-Za-z\d@#$%^&*;]{8,}$/, 'Must be a password with 8 characters, including at least one uppercase letter, one digit, and one special character')
  // Custom validation function to validate a phone number format.
  const validatePhoneNumber = regex(/^0\d{9}$/, 'Enter a valid phone number please')
// UserProfileEdit  a React component for editing user profile information
  export const UserProfileEdit = () => (
    
      <Edit
        title='Profile Edit'
        
      >
        <SimpleForm>
          <><h3>Username:</h3></>
          <TextInput
            label='Username'
            source='username'
            validate={[required()]}
          />
          <><h3>Email Address:</h3></>
          <TextInput
            label='Email'
            source='email'
            validate={[required(), email('Must please be a valid email')]}
          />
          <><h3>Change Password:</h3></>
          <PasswordInput
            label='Password'
            source='password'
            validate={[required(), validatePassword]}
          />
          <><h3>Confirm Password:</h3></>
          <PasswordInput
            label='Confirm Password'
            source='passwordConfirm'
            validate={equalToPassword}
          />
          <><h3>First Name:</h3></>
          <TextInput
            label='First Name'
            source='first_name'
            validate={[required()]}
          />
          <><h3>Last Name:</h3></>
          <TextInput
            label='Last Name'
            source='last_name'
            validate={[required()]}
          />
         
          <><h3>Phone Number:</h3></>
          <TextInput
            label='Phone Number'
            source='phone_number'
            validate={[required(), validatePhoneNumber]}
          />
        </SimpleForm>
      </Edit>
    );

    
  // UserProfileEditList a React component for displaying a list of user profile information.
    export const UserProfileEditList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="username" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <EmailField source="email" />
            <TextField source="phone_number" />
            <TextField source="type" />
            <DateField source="updated" />
    
        </Datagrid>
    </List>
);

 
  