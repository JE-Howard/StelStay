import { Datagrid, DateField, List, TextField } from 'react-admin';

export const UserAnnouncementList = () => (
    <List>
        <Datagrid >
            <TextField source="message" />
            <DateField source="date" />
            <TextField source="attchement" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);