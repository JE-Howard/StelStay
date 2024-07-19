import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  required
} from 'react-admin';

const LeaseCreate = (props) => (
  <Create {...props}>
    <SimpleForm>

      <ReferenceInput source="bill_payer_id" reference="bill_payer">
        <SelectInput optionText="email" validate={[required()]}/>
      </ReferenceInput>
    
      <ReferenceInput source="student_id" reference="users">
        <SelectInput optionText="email" validate={[required()]}/>
      </ReferenceInput>
   
     
      <ReferenceInput source="room_id" reference="room">
        <SelectInput optionText="id" validate={[required()]}/>
      </ReferenceInput>

      <DateInput source="start_date" validate={[required()]}/>
     
      <DateInput source="end_date" validate={[required()]}/>
      
 
    </SimpleForm>
  </Create>
);

export default LeaseCreate;
