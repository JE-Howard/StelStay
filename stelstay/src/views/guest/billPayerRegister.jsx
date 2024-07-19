import {
    AutocompleteInput,
    NumberInput,
    ReferenceInput,
    regex,
    email,
    useNotify,
    useRedirect
    ,Create, 
    SimpleForm, 
    TextInput, 
    required
} from 'react-admin'

import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
// A component made to hold a regular expression that checks for a valid phone number
const validatePhoneNumber = regex(/^0\d{9}$/, 'Enter a valid phone number please')
//const validateID = regex(/^(?!000000)(?!0000000000)(?!00000$)(?!0000$)(?!00$)(\d{2}((19|20)\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))\d{4}[0-1]\d{2}$/, 'Please enter a valid South African Identification Number')


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

// Bill_payerCreate a React component that creates and assigns a bill payer account in pocketbase 
export const Bill_payerCreate = () => {
  const notify = useNotify()
  const redirect = useRedirect()
  // This component is used to redirect the user on a successful submission to the next view
  const onSuccess = (data) => {
    notify('Thank you, You have successfully applied for a lease at Stel Stay ')
    redirect('/')
  }
  return (
    <Create
      title='Step:4 Assign Bill Payer'
      enable redirect='list'
      disableAuthentication
      mutationOptions={{ onSuccess }}
      aside={<Aside />}
    >
      <SimpleForm>
        <><h1>Step:4 - Bill Payer Information</h1></>
        <><h3>Bill Payer First Name:</h3></>
        <TextInput
          label='First Name'
          source='first_name'
          defaultValue='John'
          validate={[required()]}
        />
        <><h3>Bill Payer Last Name:</h3></>
        <TextInput
          label='Last Name'
          source='last_name'
          defaultValue='Doe'
          validate={[required()]}
        />
        <><h3>Bill Payer Email Address:</h3></>
        <TextInput
          label='Email'
          source='email'
          type='email'
          defaultValue='JohDoet@example.com'
          validate={[required(), email()]}
        />
        <><h3>Bill Payer Identification Number:</h3></>
        <NumberInput
          label='ID Number'
          source='id_number'
          defaultValue={1025978936584}
          validate={[required()]}
        />
        <><h3>Bill Payer Contact Number:</h3></>
        <NumberInput
          label='Phone Number'
          source='phone_number'
          defaultValue={769871268}
          validate={[required(), validatePhoneNumber]}
        />
        <><h3>Bill Payer Email Address:</h3></>
        <TextInput
          label='Address'
          source='address'
          defaultValue='18 Plain Street'
          validate={[required()]}
        />
        <><h3>Applicant Email Address:</h3></>
        <ReferenceInput label='Student Email' source='students_email' reference='users'>
          <AutocompleteInput optionText='email' />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}

