import { DateInput, Edit, NumberInput, SimpleForm, TextInput, required } from 'react-admin';

export const Community_ruleEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="Amount" validate={[required()]}  />
            <TextInput source="Rule" validate={[required()]}  />

            <DateInput source="created" />
        </SimpleForm>
    </Edit>
);