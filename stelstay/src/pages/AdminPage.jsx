// React & Pocketbase
import { Admin, Resource, ListGuesser, EditGuesser, houseLightTheme, houseDarkTheme, } from "react-admin";
import { PocketBaseProvider } from "../ra-pocketbase";
import Dashboard from "../views/admin/adminDashboard";

// Views
import { UserList } from "../views/admin/user/userList";
import { UserEdit } from "../views/admin/user/userEdit";
import { BuildingList } from "../views/admin/building/buldingList";
import { BuildingEdit } from "../views/admin/building/buildingEdit";

import { Lease_applicationList } from "../views/admin/lease_Application/leaseApplicationList";
import { leaseApplicationEdit } from "../views/admin/lease_Application/leaseApplicationEdit";
import { announcementsList } from "../views/admin/announcements/announcementsList";
import { announcementEdit } from "../views/admin/announcements/announcementsEdit";
import { Community_eventList } from "../views/admin/community/community_eventsList";
import { Community_eventEdit } from "../views/admin/community/community_eventsEdit";
import announcementCreate from "../views/admin/announcements/announcementsCreate";
import { LeaseList } from "../views/admin/lease/leaseList";
import { LeaseEdit } from "../views/admin/lease/leaseEdit";
import LeaseCreate from "../views/admin/lease/leaseCreate";

// @mui Icons
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PeopleIcon from '@mui/icons-material/People';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import PlaceIcon from '@mui/icons-material/Place';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AttachmentIcon from '@mui/icons-material/Attachment';
import buildingCreate from "../views/admin/building/buildingCreate";
import AddHomeIcon from '@mui/icons-material/AddHome';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import GavelIcon from '@mui/icons-material/Gavel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { ApartmentList } from "../views/admin/building/rooms_and_apartments/apartments/apartmentsList";
import { ApartmentEdit } from "../views/admin/building/rooms_and_apartments/apartments/apartmentsEdit";
import ApartmentCreate from "../views/admin/building/rooms_and_apartments/apartments/apartmentsCreate";
import { RoomList } from "../views/admin/building/rooms_and_apartments/rooms/roomsList";
import { RoomEdit } from "../views/admin/building/rooms_and_apartments/rooms/roomsEdit";
import RoomCreate from "../views/admin/building/rooms_and_apartments/rooms/roomsCreate";
import { Community_ruleList } from "../views/admin/community/community_rules_and_fines/communityRules/communityRulesList";
import { Community_ruleEdit } from "../views/admin/community/community_rules_and_fines/communityRules/communityRulesEdit";
import CommunityRuleCreate from "../views/admin/community/community_rules_and_fines/communityRules/communityRulesCreate";
import { FineList } from "../views/admin/community/community_rules_and_fines/fines/finesList";
import { FineEdit } from "../views/admin/community/community_rules_and_fines/fines/finesEdit";
import FineCreate from "../views/admin/community/community_rules_and_fines/fines/finesCreate";
import MyLoginPage from "../views/login";

const pbProvider = PocketBaseProvider('https://animated-system-x5w964w47vrg3v596-8090.app.github.dev/');


function AdminPage () {//The admin react admin view
    return (
      <Admin 
        dataProvider={pbProvider.dataProvider} 
        authProvider={pbProvider.authProvider}
        dashboard={Dashboard} 
        loginPage={MyLoginPage}
        theme={houseLightTheme}
        darkTheme={houseDarkTheme}
        basename="/AdminPage" 
      >
        <Resource name="users" list={UserList}  edit={UserEdit} icon={PeopleIcon}/>
        <Resource name="building" list={BuildingList} edit={BuildingEdit} create={buildingCreate} icon={MapsHomeWorkIcon}/>
        <Resource name="lease_Application" list={Lease_applicationList} edit={leaseApplicationEdit}  icon={AttachmentIcon}/>
        <Resource name="lease" list={LeaseList} edit={LeaseEdit} create={LeaseCreate} icon={HistoryEduIcon}/>
        <Resource name="announcements" list={announcementsList} edit={announcementEdit} create={announcementCreate} icon={NotificationsActiveIcon}/>
        <Resource name="community_events" list={Community_eventList} edit={Community_eventEdit}  icon={PlaceIcon}/>
        <Resource name="apartment" list={ApartmentList} edit={ApartmentEdit} create={ApartmentCreate}  icon={AddHomeIcon}/>
        <Resource name="room" list={RoomList} edit={RoomEdit} create={RoomCreate} icon={MeetingRoomIcon}/>
        <Resource name="community_rules" list={Community_ruleList} edit={Community_ruleEdit} create={CommunityRuleCreate}  icon={GavelIcon}/>
        <Resource name="fines" list={FineList} edit={FineEdit} create={FineCreate}  icon={AttachMoneyIcon}/>

      </Admin>
)
    };
export default AdminPage;