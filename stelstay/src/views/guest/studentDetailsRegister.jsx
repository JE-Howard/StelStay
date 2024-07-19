import * as React from 'react'
import {
        Create, 
        SimpleForm, 
        TextInput, 
        SelectInput, 
        ReferenceInput, 
        required, 
        useNotify,
        useRedirect, 
        regex, 
        //useUnique
} from 'react-admin'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

//const validateID = regex(/^(?!000000)(?!0000000000)(?!00000$)(?!0000$)(?!00$)(\d{2}((19|20)\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))\d{4}[0-1]\d{2}$/, 'Please enter a valid South African Identification Number')
const validateStudentNumber = regex(/^[1-9]\d{7,}$/, 'Enter a valid Stellenbosch University student number please')

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
// StudentCreate a React component that creates a student detail in pocketbase 
export const StudentCreate = (props) => {
  const notify = useNotify()
  const redirect = useRedirect()
  //const unique = useUnique()
  // This component is used to redirect the user on a successful submission to the next view
  const onSuccess = (data) => {
    notify('Changes saved')
    redirect(`/RegisterPage/lease_application/create/*${data.id}`)
  }
  return (
    <Create 
    title='Step:2 Applicant Details'
    disableAuthentication
    mutationOptions={{ onSuccess }}
    aside={<Aside />}
    >
      <SimpleForm>
      <><h1>Step:2 - Applicant Details</h1></>
      <><h3>Identification Number:</h3></>
        <TextInput 
        source='id_number' 
        validate={[required()]} 
        />
         <><h3>Applicant Student Number:</h3></>
        <TextInput
          source='student_number'
          validate={[required(),validateStudentNumber]}
        />
         <><h3>Faculty of Study:</h3></>
        <SelectInput
          source='Faculty'
          validate={[required()]}
          choices={[
            { id: 'Economics', name: 'Economics' },
            { id: 'Science', name: 'Science' },
            { id: 'Engineering', name: 'Engineering' },
            { id: 'Social Sciences', name: 'Social Sciences' },
            { id: 'Health Sciences', name: 'Health Sciences' }

          ]}
        />
         <><h3>Applicant Email Address:</h3></>
        <ReferenceInput source='email' reference='users'>
          <SelectInput optionText='email' validate={[required()]} />
        </ReferenceInput>
        <><h3>Current Year of Study:</h3></>
        <SelectInput
          source='year_of_study'
          validate={[required()]}
          choices={[
            { id: 'first', name: 'first' },
            { id: 'second', name: 'second' },
            { id: 'third', name: 'third' },
            { id: 'fourth', name: 'fourth' },
            { id: 'fith', name: 'fith' },
            { id: 'sixth', name: 'sixth' }
          ]}
        />
      </SimpleForm>
    </Create>
  )
}
