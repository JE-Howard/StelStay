
import { BooleanInput, DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, SelectInput, AutocompleteInput, required } from 'react-admin';

export const leaseApplicationEdit = () => (
    <Edit>
        <SimpleForm>
            <BooleanInput source="approved" />

            <ReferenceInput source='student_id' reference='students'>
                <AutocompleteInput optionText='student_number' validate={[required()]} />
            </ReferenceInput>

            <ReferenceInput source='email' reference='users'>
                <SelectInput optionText='email' validate={[required()]} />
            </ReferenceInput>

            <DateInput source="updated" />
            <DateInput source="created" />
        </SimpleForm>
    </Edit>
);