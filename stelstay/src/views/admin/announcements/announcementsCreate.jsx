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

const announcementCreate = (props) => (
    <Create {...props}>
    <SimpleForm>

      <TextInput source="message" validate={[required()]}/>
      <TextInput source="attachment" />

      <DateInput source="date" validate={[required()]}/>

    </SimpleForm>
    </Create>
);

export default announcementCreate;
