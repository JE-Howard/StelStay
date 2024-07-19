import { Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

// UserCommunity_eventList React component for displaying a list of community events associated with users by refrencing the users table.
export const UserCommunity_eventList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source='author' reference='users'>
                <TextField source="first_name"   /><> </>  
                < TextField source="last_name" />  
            </ReferenceField>
            <DateField source="event_date" />
            <TextField source="event_location" />
            <DateField source="event_time" />
            <TextField source="event_type" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);