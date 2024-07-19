import {
  AutocompleteInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  useNotify,
  useRedirect, 
  Create, 
  SimpleForm, 
  required
} from 'react-admin'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'


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
// Lease_applicationCreate a React component that creates a lease application in pocketbase 
export const Lease_applicationCreate = (props) => {
  const notify = useNotify()
  const redirect = useRedirect()

  const onSuccess = (data) => {
    notify('Changes saved')
    redirect(`/RegisterPage/bill_payer/create/*${data.id}`)
  }

  return (
    <Create
      title='Step 3: Lease Application'
      disableAuthentication
      mutationOptions={{ onSuccess }}
      aside={<Aside />}
    >
      <SimpleForm>
      <><h1>Step:3 - Lease Application</h1></>
        <ReferenceInput source='student_id' reference='students'>
          <AutocompleteInput optionText='student_number' validate={[required()]} />
        </ReferenceInput>
        <><h3>Calender Year Needed For Lease:</h3></>
        <NumberInput
          label='Calender Year'
          source='year_required'
          validate={[required()]}
        />
         <><h3>Email Address of Applicant:</h3></>
        <ReferenceInput source='email' reference='users'>
          <SelectInput optionText='email' validate={[required()]} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
