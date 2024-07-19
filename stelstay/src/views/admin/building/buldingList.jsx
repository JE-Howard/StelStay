import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, DeleteButton } from 'react-admin';

export const BuildingList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="building_name" />
            <TextField source="address" />
            <TextField source="country" />
            <TextField source="province" />
            <NumberField source="num_apartments" />
            <DeleteButton/>  
        </Datagrid>
    </List>
);