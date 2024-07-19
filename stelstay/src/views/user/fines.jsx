import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

// UserFineList a React component for displaying a list of fines that are connected to the user through the refrence field from the community rules table.
export const UserFineList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source='details_id' reference='community_rules' label="Rule That Was Broken">
                <TextField source='Rule' />
            </ReferenceField>
            <ReferenceField source='details_id' reference='community_rules' label="Amount Due">
               <>R</> <TextField source='Amount' />
            </ReferenceField>
            <BooleanField source="Paid" />
            <DateField source="created" />
            <TextField source="id"  label="Reference"/>
            <DateField source="updated" />
        </Datagrid>
    </List>
);