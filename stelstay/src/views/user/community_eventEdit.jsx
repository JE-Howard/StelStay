import { DateInput, Edit, ReferenceField, ReferenceInput, SelectInput, SimpleForm, TextInput, TimeInput, required, Create } from 'react-admin';

// UserCommunity_eventEdit  React component used for editing a community event associated with a user through refrencing the users table.
export const UserCommunity_eventEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source='author' reference='users'>
               <SelectInput optionText="email" validate={[required()]}/> 
            </ReferenceInput>
            <DateInput source="event_date"  validate={[required()]}/>
            <TextInput source="event_location"  validate={[required()]}/>
            <TimeInput source="event_time" validate={[required()]} />
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
        </SimpleForm>
    </Edit>
);

// UserCommunity_eventCreate React component for creating a new community event associated with a user and providing reference input fields to connect the event to a user in the users table.
export const UserCommunity_eventCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source='author' reference='users'>
               <SelectInput optionText="email" validate={[required()]}/> 
            </ReferenceInput>
            <DateInput source="event_date"  validate={[required()]}/>
            <TextInput source="event_location"  validate={[required()]}/>
            <TimeInput source="event_time" validate={[required()]} />
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
        </SimpleForm>
    </Create>
);