import { Datagrid, DateField, List, ReferenceField, TextField, NumberField, EmailField, DeleteButton} from 'react-admin';

export const LeaseList = () => (
    <List>
        <Datagrid rowClick="edit">

        <TextField source="id" />

            <ReferenceField source="bill_payer_id" reference="bill_payer" >
                <EmailField source='email' />
            </ReferenceField>

            <ReferenceField source="room_id" reference="room" >
                <TextField source='id'  />
            </ReferenceField>

            <ReferenceField source='student_id' reference='users'>
                <EmailField source='email'  />
            </ReferenceField>

           
            <DateField source="start_date" />
            <DateField source="end_date" />
            <DateField source="created" />
           
            <DeleteButton/>
        </Datagrid>
    </List>
);