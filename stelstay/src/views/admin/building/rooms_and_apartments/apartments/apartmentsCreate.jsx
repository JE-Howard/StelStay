import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  required
} from 'react-admin';

const ApartmentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
   
    <ReferenceInput source='building_id' reference='building'>
                <SelectInput optionText='building_name' validate={[required()]}/>
            </ReferenceInput>
      <NumberInput source="apartment_number"validate={[required()]} />
      
    
      <NumberInput source="floor_number" validate={[required()]} />
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
  </Create>
);

export default ApartmentCreate;
