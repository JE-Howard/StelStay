import { Admin,Resource,houseLightTheme,houseDarkTheme} from 'react-admin';
import { PocketBaseProvider } from '../ra-pocketbase';

// Views
import Dashboard from '../views/guest/registrationDashboard';
import { UserCreate } from '../views/guest/userRegistration';
import { Lease_applicationCreate } from '../views/guest/userLeaseRegister';
import { Bill_payerCreate } from '../views/guest/billPayerRegister';
import { StudentCreate } from '../views/guest/studentDetailsRegister';

const pbProvider = PocketBaseProvider('https://animated-system-x5w964w47vrg3v596-8090.app.github.dev/');

function RegisterPage () {//The Register Page react admin view
  return (
    <Admin
      dataProvider={pbProvider.dataProvider}
      basename='/RegisterPage'
      dashboard={Dashboard}
      theme={houseLightTheme}
      darkTheme={houseDarkTheme}
    >
      <Resource options={{ label: 'Step:1' }} name='users' create={UserCreate} disable />
      <Resource options={{ label: 'Step:2' }} name='students' create={StudentCreate} />
      <Resource options={{ label: 'Step:3' }} name='lease_application' create={Lease_applicationCreate} />
      <Resource options={{ label: 'Step:4' }} name='bill_payer' create={Bill_payerCreate} />
    </Admin>
  )
};
export default RegisterPage;
