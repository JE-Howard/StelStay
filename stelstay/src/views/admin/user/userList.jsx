import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField, TextInput, DeleteButton } from 'react-admin';


// const postFilters = [
//   <TextInput label="Last Name" source="last_name" alwaysOn />,
// ];



export const UserList = () => (
    <List >
        <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="username" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <TextField source="phone_number" />
        <TextField source="email" />
        <TextField source="type" />
        <TextField source="billpayer" />
        <DateField source="created" />
        <BooleanField source="verified" />
        <DeleteButton/>
        </Datagrid>
    </List>
);