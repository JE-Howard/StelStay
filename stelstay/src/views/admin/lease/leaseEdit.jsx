import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput, SelectInput, AutocompleteInput, required } from 'react-admin';

export const LeaseEdit = () => (
    <Edit>
        <SimpleForm>

        <ReferenceInput source="bill_payer_id" reference="bill_payer" >
                <AutocompleteInput optionText='email' validate={[required()]} />
            </ReferenceInput>

            <ReferenceInput source='student_id' reference='users'>
                <SelectInput optionText='email' validate={[required()]} />
            </ReferenceInput>

            <ReferenceInput source="room_id" reference="room" >
                <AutocompleteInput source='id'  />
            </ReferenceInput>

            <DateInput source="start_date" />
            <DateInput source="end_date" />
            <DateInput source="created" />

 
        </SimpleForm>
    </Edit>
);