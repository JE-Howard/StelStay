import { Admin, Resource, houseLightTheme, houseDarkTheme, ListGuesser } from "react-admin";
import { PocketBaseProvider } from "../ra-pocketbase";
// Views
import Dashboard from "../views/user/userDashboard";
import { UserLeaseApplicationShow, UserLeaseApplications } from "../views/user/leaseApplication";
import { UserBuildingList, UserBuildingShow } from "../views/user/building&room";
import { UserLeaseList, UserLeaseShow } from "../views/user/lease";
import { UserCommunity_ruleList } from "../views/user/communityRules";
import { UserFineList } from "../views/user/fines";
import { UserBill_payerList, UserBill_payerEdit } from "../views/user/editBillPayer";
import { UserCommunity_eventList } from "../views/user/community_eventList"
import { UserCommunity_eventCreate, UserCommunity_eventEdit } from "../views/user/community_eventEdit"
import { UserAnnouncementList } from "../views/user/announcements";
import {UserProfileEdit, UserProfileEditList} from "../views/user/UserProfileEdit"
import MyLoginPage from "../views/login";
// @mui Icons
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import GroupIcon from '@mui/icons-material/Group';
import EditNoteIcon from '@mui/icons-material/EditNote';
import TableViewIcon from '@mui/icons-material/TableView';
import PaidIcon from '@mui/icons-material/Paid';
import GavelIcon from '@mui/icons-material/Gavel';
import ReceiptIcon from '@mui/icons-material/Receipt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PlaceIcon from '@mui/icons-material/Place';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


const pbProvider = PocketBaseProvider('https://animated-system-x5w964w47vrg3v596-8090.app.github.dev/');

function UserPage () {//The User react admin view
    return (
      <Admin 
        dataProvider={pbProvider.dataProvider} 
        authProvider={pbProvider.authProvider}
        loginPage={MyLoginPage}
        dashboard={Dashboard} 
        basename="/UserPage" 
        theme={houseLightTheme}
        darkTheme={houseDarkTheme}>

        <Resource name="lease_Application" list={UserLeaseApplications} show={UserLeaseApplicationShow} icon={EditNoteIcon}/> 
        <Resource name="room" list={UserBuildingList} show={UserBuildingShow} icon={MapsHomeWorkIcon}/>
        <Resource name="lease" list={UserLeaseList} show={UserLeaseShow} icon={TableViewIcon}/>
        <Resource name="fines" list={UserFineList} icon={PaidIcon}/>
        <Resource name="community_rules" list={UserCommunity_ruleList} icon={GavelIcon}/>
        <Resource name="bill_payer" list={UserBill_payerList} edit={UserBill_payerEdit} icon={ReceiptIcon}/>
        <Resource name="announcements" list={UserAnnouncementList} icon={NotificationsActiveIcon}/>
        <Resource name="community_events" list={UserCommunity_eventList} edit={UserCommunity_eventEdit} create={UserCommunity_eventCreate} icon={PlaceIcon}/>
        <Resource name='users' list = {UserProfileEditList} edit={UserProfileEdit} icon={AccountBoxIcon} options={{ label: 'Profile Edit' }} />

      </Admin>
      )
        };
export default UserPage;