import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput, SelectInput, required, TimeInput } from 'react-admin';

export const Community_eventEdit = () => (
    <Edit>
        <SimpleForm>
       
        <SelectInput
                source='event_type'
                validate={[required()]}
                choices={[
            { id: 'Games Night', name: 'Games Night' },
            { id: 'Bring and Braai', name: 'Bring and Braai' },
            { id: 'Live Music', name: 'Live Music' },
            { id: 'Fun Run', name: 'Fun Run' },
           
          ]}
        />

        <ReferenceInput source="author" reference="users" >
                <SelectInput optionText="email" validate={[required()]} />
        </ReferenceInput>

        <DateInput source="event_location" validate={[required()]}/>

        <DateInput source="event_date" validate={[required()]}/>
        <TimeInput source="event_time" validate={[required()]}/>
       

        </SimpleForm>
    </Edit>
);