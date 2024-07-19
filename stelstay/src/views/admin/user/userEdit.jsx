import { BooleanInput, DateInput, Edit, ReferenceInput, SimpleForm, TextInput, SelectInput, required } from 'react-admin';

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
        <TextInput source="username" validate={[required()]} />
        <TextInput source="first_name"validate={[required()]} />
        <TextInput source="last_name"validate={[required()]} />
        <TextInput source="phone_number" validate={[required()]}/>
        <TextInput source="email"validate={[required()]} />
        <SelectInput
          label='User Type'
          source='type'
          choices={[
            { id: 'Applicant', name: 'Applicant',
            id: 'Resident', name: 'Resident',
            id: 'Admin', name: 'Admin'
            }
          ]}
          />
        <BooleanInput source="verified" />
        </SimpleForm>
    </Edit>
);
