import { Datagrid, DateField, List, ReferenceField, TextField, EmailField, DeleteButton} from 'react-admin';

export const RoomList = () => (
    <List>
        <Datagrid rowClick="edit">
        <TextField source="id" />

        <ReferenceField source="apartment_id" reference="apartment" >
                <TextField source='apartment_number'  />
            </ReferenceField>

            <ReferenceField source='student' reference='users'>
                <EmailField source='email'  />
            </ReferenceField>

            <DateField source="created" />
            <DeleteButton/>
        </Datagrid>
    </List>
);