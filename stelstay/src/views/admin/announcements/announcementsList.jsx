import { Datagrid, DateField, List,  TextField, required, DeleteButton} from 'react-admin';

export const announcementsList = () => (
    <List>
        <Datagrid rowClick="edit" >
            <TextField source="id" validate={[required()]}/>
            <TextField source="message" validate={[required()]}/>
            <TextField source="attchement" validate={[required()]}/>
            <DateField source="date"validate={[required()]} />
            <DateField source="created" validate={[required()]} />
            <DeleteButton/>
        </Datagrid>
    </List>
);