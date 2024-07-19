import { BooleanField, Datagrid, DateField, EmailField, List, NumberField, required, Button, ReferenceField, TextField, useDataProvider, useNotify, DeleteButton, useRedirect} from 'react-admin';



export const Lease_applicationList = () => (
    
    <List>
        <Datagrid rowClick="edit">
            
        <ReferenceField source='student_id' reference='students'>
                <NumberField source='student_number' />
            </ReferenceField>

            <ReferenceField source='email' reference='users'>
                <EmailField source='email'  />
            </ReferenceField>
       
        <DateField source="created" />
        <BooleanField source="approved" />
        <DeleteButton/>
        </Datagrid>
    </List>
);