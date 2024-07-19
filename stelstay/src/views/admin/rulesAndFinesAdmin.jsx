import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, Create, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin'
import { RichTextInput } from 'ra-input-rich-text'

export const CommunityRuleCreate = () => (
  <Create>
    <SimpleForm>
      <RichTextInput source='rule' />
      <NumberInput source='amount' />
    </SimpleForm>
  </Create>
)

export const Community_ruleList = () => (
  <List>
    <Datagrid rowClick='edit'>
      <NumberField source='Amount' />
      <DateField source='created' />
      <TextField source='rule' />
      <DateField source='updated' />
      <DeleteButton />
    </Datagrid>
  </List>
)

export const Community_ruleEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source='rule' />
      <NumberInput source='Amount' />
    </SimpleForm>
  </Edit>
)
