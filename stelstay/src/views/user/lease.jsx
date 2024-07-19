import { List, Datagrid, DateField, ReferenceField, Show, TextField, TabbedShowLayout, NumberField } from 'react-admin';

 // UserLeaseList a React component for displaying a list of leases through the use of refrencing the users table, bill oayer table and room table.
export const UserLeaseList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" label="Lease Reference"/>
            <ReferenceField source="room_id" reference="room" label="Room ID" >
                <TextField source='id' />
            </ReferenceField>
            <ReferenceField source="student_id" reference="users" >
                <TextField source='first_name'/> <> </>
                <TextField source='last_name'/>
            </ReferenceField>
            <DateField source="start_date" />
             <DateField source="end_date" />
            <DateField source="created" />
            <DateField source="updated" />
            <ReferenceField source="bill_payer_id" reference="bill_payer" >
                <TextField source='first_name'/> <> </>
                <TextField source='last_name'/>
            </ReferenceField>
        </Datagrid>
    </List>
);

// UserLeaseShow a React component for showing detailed lease information in a tabbed format and displays data from tables such as users, and bill payer.
export const UserLeaseShow = () => (
        <Show>
            <TabbedShowLayout>
                <TabbedShowLayout.Tab label="Student Information">
                    <ReferenceField label= "Student First Name"source="student_id" reference="users" >
                        <TextField source='first_name'/>
                    </ReferenceField>

                    <ReferenceField label= "Student Surname"source="student_id" reference="users" >
                        <TextField source='last_name'/>
                    </ReferenceField>
                </TabbedShowLayout.Tab>

                <TabbedShowLayout.Tab label="Bill Payer Information" path="Bill Payer Information">
                    <ReferenceField label= "Bill Payer First Name" source="bill_payer_id" reference="bill_payer" >
                        <TextField source='first_name'/>
                    </ReferenceField>

                    <ReferenceField label= "Bill Payer Surname" source="bill_payer_id" reference="bill_payer" >
                        <TextField source='last_name'/>
                    </ReferenceField>

                    <ReferenceField label= "Bill Payer Email" source="bill_payer_id" reference="bill_payer" >
                        <TextField source='email'/>
                    </ReferenceField>

                    <ReferenceField label= "Bill Payer ID Number" source="bill_payer_id" reference="bill_payer" >
                        <TextField source='id_number'/>
                    </ReferenceField>

                    <ReferenceField label= "Billing Address" source="bill_payer_id" reference="bill_payer" >
                        <TextField source='address'/>
                    </ReferenceField>
                </TabbedShowLayout.Tab>

                <TabbedShowLayout.Tab label="Summary of Lease" path="Summary of Lease">
                    <DateField label="Approved Date" source="created" />
                    <DateField label="Lease Start Date" source="start_date" />
                    <DateField label="Lease End Date" source="end_date" />
                </TabbedShowLayout.Tab>
            </TabbedShowLayout>
        </Show>
    );