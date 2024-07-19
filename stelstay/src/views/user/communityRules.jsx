import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const UserCommunity_ruleList = () => (
    <List>
        <Datagrid >
            <TextField source="Rule" />
            <>R</><NumberField source="Amount" />
        </Datagrid>
    </List>
);