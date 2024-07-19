// React
import * as React from "react";
import { Title, useGetList } from "react-admin";

// @mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// @mui Icons
import UsersIcon from '@mui/icons-material/Group'; // Replace with appropriate icons
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';

// Charts


const Dashboard = () => 
  {const { data, loading, error } = useGetList("users", { page: 1, perPage: 1 }, {}, {});

  if (loading) { return <div>Loading...</div>;}

  if (error) {return <div>Error: {error.message}</div>;}

  if (!data || data.length === 0) {
      return <div>No user data found.</div>;}

  const userData = data[0];

    return (
  <Card>

    <Title title="Welcome to the User Dashboard" />

    <div style={{ position: 'relative' }}>
      
      <Box
        component="img"
        sx={{
          height: 370,
          width: '100%',
          objectFit: 'cover',
        }}
        alt="The house from the offer."
        src="https://source.unsplash.com/k6oQQl_OYKU"
      />
      <div style={overlayStyle}>
        <Typography variant="h5" component="div" style={{ ...cardHeaderTextStyle, color: 'white', fontSize: '64px', fontWeight: 'bold' }}>
          Welcome, {userData.first_name}!
        </Typography>
      </div>
    </div>

    <div style={{ marginTop: 30 }}>
      <Grid container spacing={2}>
        {/* Username Card */}
        <Grid item xs={12} sm={4}>
          <Card style={{ ...cardStyle, backgroundColor: '#fc940a' }}>
            <CardContent style={{ ...cardContentStyle }}>
              <div style={cardHeaderStyle}>
                <UsersIcon style={{ ...iconStyle, fontSize: 42, marginRight: 5, margin: 15 }} />
                <Typography variant="h6" component="div" style={cardHeaderTextStyle}>
                  Username:
                </Typography>
              </div>
              <Card style={{ borderRadius: 0 }}>
                <Typography color="text.secondary" style={cardNumberStyle}>
                  {userData.username}
                </Typography>
              </Card>
            </CardContent>
          </Card>
        </Grid>

        {/* User Email Card */}
        <Grid item xs={12} sm={4}>
          <Card style={{ ...cardStyle, backgroundColor: '#51aa55' }}>
            <CardContent style={{ ...cardContentStyle }}>
              <div style={cardHeaderStyle}>
                <MapsHomeWorkIcon style={{ ...iconStyle, fontSize: 42, marginRight: 5, margin: 15 }} />
                <Typography variant="h6" component="div" style={cardHeaderTextStyle}>
                  Email:
                </Typography>
              </div>
              <Card style={{ borderRadius: 0 }}>
                <Typography color="text.secondary" style={cardNumberStyle}>
                  {userData.email}
                </Typography>
              </Card>
            </CardContent>
          </Card>
        </Grid>


        {/* Type of User Card */}
        <Grid item xs={12} sm={4}>
          <Card style={{ ...cardStyle, backgroundColor: '#1db9cd' }}>
            <CardContent style={{ ...cardContentStyle }}>
              <div style={cardHeaderStyle}>
                <StickyNote2Icon style={{ ...iconStyle, fontSize: 42, marginRight: 5, margin: 15 }} />
                <Typography variant="h6" component="div" style={cardHeaderTextStyle}>
                  Type: 
                </Typography>
              </div>
              <Card style={{ borderRadius: 0 }}>
                <Typography color="text.secondary" style={cardNumberStyle}>
                  {userData.type ? 'Applicant' : 'Student'} 
                </Typography>
              </Card>
            </CardContent>
          </Card>
        </Grid>

        {/* Phone Number Card */}
        <Grid item xs={12} sm={4}>
          <Card style={{ ...cardStyle, backgroundColor: '#1db9cd' }}>
            <CardContent style={{ ...cardContentStyle }}>
              <div style={cardHeaderStyle}>
                <StickyNote2Icon style={{ ...iconStyle, fontSize: 42, marginRight: 5, margin: 15 }} />
                <Typography variant="h6" component="div" style={cardHeaderTextStyle}>
                  Phone number: 
                </Typography>
              </div>
              <Card style={{ borderRadius: 0 }}>
                <Typography color="text.secondary" style={cardNumberStyle}>
                  {userData.phone_number}
                </Typography>
              </Card>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  </Card>
);}

export default Dashboard;


// Styles
const iconStyle = {
  color: 'white',
};

const cardStyle = {
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
  margin: 10,
};

const cardContentStyle = {
  textAlign: 'center',
};

const cardHeaderStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

const cardHeaderTextStyle = {
  fontWeight: 'bold',
  color: '#fff',
  fontSize: 25,
};

const cardNumberStyle = {
  fontWeight: 'bold',
  color: '#000',
  fontSize: 24,
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, .3)', // White overlay with 80% opacity
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.8)', // Shadow effect
};
