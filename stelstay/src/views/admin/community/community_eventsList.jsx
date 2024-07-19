
import { Datagrid, DateField, List, ReferenceField, TextField, DeleteButton } from 'react-admin';

export const Community_eventList = () => (
    <List>
        <Datagrid rowClick="edit">
      

        <TextField source="event_type" />

        <ReferenceField source="author" reference="users" >
                <TextField source='first_name'  /><> </>
                <TextField source='last_name'  />

            </ReferenceField>

        <DateField source="event_location" />

        <DateField source="event_date" />

        <DateField source="event_time" />

            <DateField source="created" />
            <DeleteButton/>
        </Datagrid>
    </List>
);