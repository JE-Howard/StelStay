import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput,required } from 'react-admin';

export const announcementEdit = () => (
    <Edit>
        <SimpleForm>
       
            <TextInput source="message" validate={[required()]}/>
            <TextInput source="attchement" />

            <DateInput source="date" validate={[required()]} />

            

        </SimpleForm>
    </Edit>
);