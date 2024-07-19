import { BooleanInput, DateInput, Edit, ReferenceInput, SimpleForm, TextInput, SelectInput, required } from 'react-admin';

export const FineEdit = () => (
    <Edit>
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
    </Edit>
);