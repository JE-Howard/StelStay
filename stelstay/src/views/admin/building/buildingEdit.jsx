import { DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, required } from 'react-admin';

export const BuildingEdit = () => (
    <Edit>
        <SimpleForm>
        <TextInput source="id" validate={[required()]} />
        <TextInput source="building_name" validate={[required()]}/>
        <TextInput source="address" validate={[required()]}/>
        <TextInput source="country"validate={[required()]} />
        <TextInput source="province" validate={[required()]}/>
        <NumberInput source="num_apartments" validate={[required()]}/>

        </SimpleForm>
    </Edit>
);