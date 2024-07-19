import { Datagrid, List, DateField, NumberField, TextField, Show, ReferenceField, TabbedShowLayout} from "react-admin";

// This React component named UserBuildingList that displays a list of user-related building data from the apartment table and building table
export const UserBuildingList = () => (
    <List>
        <Datagrid rowClick="show">
            <ReferenceField label= "Apartment Number" source='apartment_id' reference='apartment'>
                <NumberField source='apartment_number'/>
            </ReferenceField>
            <ReferenceField label= "Floor Number" source='apartment_id' reference='apartment'>
                <NumberField source='floor_number'/>
            </ReferenceField>
            <ReferenceField label= "Building Name" source='apartment_id' reference='apartment'>
                <ReferenceField source='building_id' reference='building'>
                    <TextField source='building_name'/>
                </ReferenceField>
            </ReferenceField>
        </Datagrid>
    </List>
);
// This React component named UserBuildingShow, which is used to display detailed information about a 
//user's apartment and building through refrencing tables such as appartments and  building.
export const UserBuildingShow = () => (
    <Show>
        <TabbedShowLayout>
            <TabbedShowLayout.Tab label="Summary of Apartment:"> 
                    <ReferenceField label= "Apartment number:" source='apartment_id' reference='apartment'>
                        <NumberField source='apartment_number'/>
                    </ReferenceField>
 
                    <ReferenceField label= "Floor number:" source='apartment_id' reference='apartment'>
                        <NumberField source='floor_number'/>
                    </ReferenceField>

                    <ReferenceField label= "Number of rooms in apartment " source='apartment_id' reference='apartment'>
                        <TextField source='number_of_rooms'/>
                    </ReferenceField>
            </TabbedShowLayout.Tab>

            <TabbedShowLayout.Tab label="Summary of Building:">
                    <ReferenceField label= "Building name:" source='apartment_id' reference='apartment'>
                        <ReferenceField source='building_id' reference='building'>
                            <TextField source='building_name'/>
                        </ReferenceField>
                    </ReferenceField>
 
                    <ReferenceField label= "Address:" source='apartment_id' reference='apartment'>
                        <ReferenceField source='building_id' reference='building'>
                            <TextField source='address'/>
                        </ReferenceField>
                    </ReferenceField>

                    <ReferenceField label= "Number of apartments:" source='apartment_id' reference='apartment'>
                        <ReferenceField source='building_id' reference='building'>
                            <TextField source='num_apartments'/>
                        </ReferenceField>
                    </ReferenceField>
            </TabbedShowLayout.Tab>
        </TabbedShowLayout>
    </Show>
); 


  
  
  
  
  
  
  