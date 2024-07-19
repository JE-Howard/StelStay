import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required
} from 'react-admin';

const CommunityRuleCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
    
      <NumberInput source="Amount" validate={[required()]} />
      <TextInput source="Rule" validate={[required()]} />

    </SimpleForm>
  </Create>
);

export default CommunityRuleCreate;
