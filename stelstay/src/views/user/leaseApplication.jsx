import { BooleanField, Datagrid, DateField, List, NumberField, TextField, Show, SimpleShowLayout, ReferenceField, TabbedShowLayout, EmailField} from "react-admin";

// UserLeaseApplications a React component for displaying a list of lease applications by refrencing the users and students table.

export const UserLeaseApplications = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField label= "Reference" source="id" />
            <ReferenceField  label="Name" source="email" reference="users" >
                <TextField source="first_name" /><> </>
                <TextField source="last_name" />
            </ReferenceField>
            <ReferenceField  label="Student Number" source="student_id" reference="students" >
                <NumberField source="student_number" />
            </ReferenceField>
            
           
            <BooleanField label="Status" source="approved" />
            <DateField source="created" />
            <DateField source="updated" />
        </Datagrid>
    </List>
);

// UserLeaseApplicationShow a React component for showing detailed lease application information by refrencing the users and students table.
export const UserLeaseApplicationShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" label="ID:" />
            <ReferenceField  label="Student Number" source="email" reference="users" >
                <EmailField  source="email" label="Email:" />
            </ReferenceField>
            <ReferenceField  label="Student Number" source="student_id" reference="students" >
                <TextField source="student_number" label="Student Number:" />
            </ReferenceField>
            <BooleanField source="approved" label="Application approved?" />
            <DateField source="created" label="Date Created:" />
        </SimpleShowLayout>
    </Show>
);

