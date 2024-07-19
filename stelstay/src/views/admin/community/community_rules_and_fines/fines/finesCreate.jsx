import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  required
} from 'react-admin';

const FineCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <BooleanInput source="Paid" />
      
      <ReferenceInput source="details_id" reference="community_rules" >
                <SelectInput optionText='Rule'  validate={[required()]}/>
            </ReferenceInput>
           
            <ReferenceInput source='student' reference='users'>
                <SelectInput optionText='email' validate={[required()]} />
            </ReferenceInput>
            <DateInput source="created" />
    </SimpleForm>
  </Create>
);

export default FineCreate;
