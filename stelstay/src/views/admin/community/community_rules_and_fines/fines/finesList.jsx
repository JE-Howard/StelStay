import { BooleanField, Datagrid, DateField, List, ReferenceField, TextField, EmailField } from 'react-admin';

export const FineList = () => (
    <List>
        <Datagrid rowClick="edit">
        <TextField source="id" />

            <BooleanField source="Paid" />
            <ReferenceField source="details_id" reference="community_rules" >
                <TextField source='Rule'  />
            </ReferenceField>

            <ReferenceField source='student_email' reference='users'>
                <EmailField source='email'  />
            </ReferenceField>
            <DateField source="created" />
        </Datagrid>
    </List>
);