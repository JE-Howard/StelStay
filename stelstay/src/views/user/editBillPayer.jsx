import { Datagrid, EmailField, List, Edit, SimpleForm, NumberField, TextField, TextInput, NumberInput, ReferenceField, ReferenceInput, SelectInput, required } from 'react-admin';

// UserBill_payerList a React component for displaying a list of bill payers.

export const UserBill_payerList = () => (
    <List>
        <Datagrid rowClick="edit">

             <TextField source="first_name" />
             <TextField source="last_name" />
             <NumberField source="id_number" />
            <EmailField source="email" />
           <NumberField source="phone_number" />
           <TextField source="address" />
            
        </Datagrid>
    </List>
); 

// UserBill_payerEdit a React component for editing bill payer information and refrences the users table to allow the user to slect a email as a primary key.
export const UserBill_payerEdit = () => (
    <Edit>
        <SimpleForm>
             <TextInput source="first_name" validate={[required()]}/>
             <TextInput source="last_name" validate={[required()]}/>
             <NumberInput source="id_number" validate={[required()]}/>
             <TextInput source="email" validate={[required()]}/>
             <NumberInput source="phone_number" validate={[required()]}/>
            <TextInput source="address" validate={[required()]}/>
            <ReferenceInput source='student_email' reference='users'>
                <SelectInput optionText="email"validate={[required()]}/>
            </ReferenceInput>
         
        </SimpleForm>
    </Edit>
);


