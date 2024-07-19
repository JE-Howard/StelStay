import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, DeleteButton} from 'react-admin';

export const ApartmentList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="building_id" reference="building" >
                <TextField source='building_name'  />
            </ReferenceField>
            <NumberField source="apartment_number" />
            <NumberField source="floor_number" />
            <TextField source="number_of_rooms" />
            <DateField source="created" />
            <DeleteButton/>
        </Datagrid>
    </List>
);