import {
  BooleanInput,
  PasswordInput,
  SelectInput,
  email,
  //useUnique,
  regex,
  useNotify,
  useRedirect,
  Create,
  SimpleForm,
  TextInput,
  required
} from 'react-admin'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import * as React from 'react'

const equalToPassword = (value, allValues) => {
  if (value !== allValues.password) {
    return 'The two passwords must match'
  }
}
const validatePassword = regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*;])[A-Za-z\d@#$%^&*;]{8,}$/, 'Must be a password with 8 characters, including at least one uppercase letter, one digit, and one special character')
const validatePhoneNumber = regex(/^0\d{9}$/, 'Enter a valid phone number please')

const Aside = () => (
  <Box sx={{ width: '200px', margin: '1em' }}>
    <Typography variant='h5'><b>INSTRUCTIONS:</b> </Typography>
    <Typography variant='body2'>
      <ul style={{fontSize:"1.80vh", lineHeight:"2"}}>
        <li>Please enter in all the relevant user information and check that it is all correct before you click the save button.</li>
        <li>Once you click the save button you will be registered as a Applicant and will be able to make use of the user login page.</li>
        <li>Please be sure to complete step one, two, three and four before you login.</li>
        <li><b>Note</b> that you will not be able to see your lease details until a admin at Stelstay assigns you an appartment</li>
      </ul>
     </Typography>  
  </Box>
)
// UserCreate React component that creates a user account in pocketbase 
export const UserCreate = () => {
  //const unique = useUnique()
  const notify = useNotify()
  const redirect = useRedirect()

  const onSuccess = (data) => {
    notify('Changes saved')
    redirect(`/RegisterPage/students/create/*${data.id}`)
  }

  return (
    <Create
      title='Step:1 Applicant Registration'
      disableAuthentication
      aside={<Aside />}
      mutationOptions={{ onSuccess }}
    >
      <SimpleForm>
        <><h1>Step:1 - Applicant Registration</h1></>
        <><h3>Username:</h3></>
        <TextInput
          label='Username'
          source='username'
          //validate={() => unique()}
          validate={[required()]}
        />
        <><h3>Email Address:</h3></>
        <TextInput
          label='Email'
          source='email'
          validate={[required(), email('Must please be a valid email')]}
        />
        <><h3>N/A:</h3></>
        <BooleanInput
          label='Email Visibility'
          source='emailVisibility'
          defaultValue
          disabled
        />
        <><h3>Password:</h3></>
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
          
        />
        <><h3>Last Name:</h3></>
        <TextInput
          label='Last Name'
          source='last_name'
          validate={[required()]}
        />
        <><h3>User Type:</h3></>
        <SelectInput
          label='User Type'
          source='type'
          choices={[
            { id: 'Applicant', name: 'Applicant' }
          ]}
          defaultValue='Applicant'
          disabled
        />
        <><h3>Phone Number:</h3></>
        <TextInput
          label='Phone Number'
          source='phone_number'
          validate={[required(), validatePhoneNumber]}
        />
      </SimpleForm>
    </Create>
  )
}
