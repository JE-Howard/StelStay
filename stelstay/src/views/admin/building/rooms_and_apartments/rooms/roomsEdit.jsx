import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput, EmailField, SelectInput, required } from 'react-admin';

export const RoomEdit = () => (
    <Edit>
        <SimpleForm>
        <ReferenceInput source="apartment_id" reference="apartment" >
                <SelectInput optionText='apartment_number'validate={[required()]} />
            </ReferenceInput>

            <ReferenceInput source='student' reference='users'>
                <SelectInput optionText='email' validate={[required()]} />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);


