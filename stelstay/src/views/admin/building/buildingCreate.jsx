import { DateInput, Create, NumberInput, ReferenceInput, SimpleForm, TextInput, required } from 'react-admin';

const buildingCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="building_name" validate={[required()]}/>
        <TextInput source="address" validate={[required()]}/>
        <TextInput source="country" validate={[required()]}/>
        <TextInput source="province"validate={[required()]} />
        <NumberInput source="num_apartments" validate={[required()]}/>

        </SimpleForm>
    </Create>
);

export default buildingCreate;
