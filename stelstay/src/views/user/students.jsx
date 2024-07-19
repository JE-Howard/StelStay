import { Datagrid, List, NumberField, TextField, Edit, SimpleForm,  NumberInput, ReferenceField, ReferenceInput, SelectInput, required} from 'react-admin';

// UserStudentLists a React component for displaying a list of students by referencing users and students tables

export const UserStudentLists = () => (
    <List>
        <Datagrid rowClick="edit">
             <NumberField source="student_number" />
             <NumberField source="id_number" />
            <ReferenceField source='email' reference='users'>
                <TextField source='email'/>
            </ReferenceField>
            <TextField source="faculty" />
            <TextField source="year_of_study" />
        </Datagrid>
    </List>
);
// UserStudentEdit a React component for editing student information by referencing users table
export const UserStudentEdit = () => (
    <Edit>
        <SimpleForm>
            
            <ReferenceInput source='email' reference='users'>
               <SelectInput optionText="email" validate={[required()]} /> 
            </ReferenceInput>
            
           <SelectInput
            source='Faculty'
            validate={[required()]}
            choices={[
                { id: 'Economics', name: 'Economics' },
                { id: 'Science', name: 'Science' },
                { id: 'Engineering', name: 'Engineering' },
                { id: 'Social Sciences', name: 'Social Sciences' },
                { id: 'Health Sciences', name: 'Health Sciences' }
            ]}
            />
           <SelectInput
            source='year_of_study'
            validate={[required()]}
            choices={[
                { id: 'first', name: 'first' },
                { id: 'second', name: 'second' },
                { id: 'third', name: 'third' },
                { id: 'fourth', name: 'fourth' },
                { id: 'fith', name: 'fith' },
                { id: 'sixth', name: 'sixth' }
            ]}
          />
        </SimpleForm>
    </Edit>
);
