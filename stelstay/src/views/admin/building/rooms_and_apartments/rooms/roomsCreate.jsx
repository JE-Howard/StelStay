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

const RoomCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="apartment_id" reference="apartment" >
          <SelectInput optionText='apartment_number' required />
      </ReferenceInput>
      <ReferenceInput source='student' reference='users'>
          <SelectInput optionText='email' validate={[required()]} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export default RoomCreate;
