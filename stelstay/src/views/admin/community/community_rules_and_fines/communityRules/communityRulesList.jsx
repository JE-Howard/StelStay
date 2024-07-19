import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, DeleteButton } from 'react-admin';

export const Community_ruleList = () => (
    <List>
        <Datagrid rowClick="edit">
        
            <NumberField source="Amount" />
            <TextField source="Rule" />
            <DateField source="created" />
            <DeleteButton/>
        </Datagrid>
    </List>
);