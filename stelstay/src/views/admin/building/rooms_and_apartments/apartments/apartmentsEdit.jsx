import { DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, SelectInput, required } from 'react-admin';

export const ApartmentEdit = () => (
    <Edit>
        <SimpleForm>
       

        <ReferenceInput source='building_id' reference='building'>
                <SelectInput optionText='building_name' validate={[required()]}/>
            </ReferenceInput>
            <NumberInput source="apartment_number"validate={[required()]} />
            <NumberInput source="floor_number" validate={[required()]}/>
            <SelectInput
                source='number_of_rooms'
                validate={[required()]}
                choices={[
                    { id: 'single', name: 'single' },
                    { id: 'two', name: 'two' },
                    { id: 'three', name: 'three' },
                    
                ]}
        />
        </SimpleForm>
    </Edit>
);