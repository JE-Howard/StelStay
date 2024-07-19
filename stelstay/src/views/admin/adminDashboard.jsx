// React
import * as React from "react";
import { Title } from "react-admin";

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
import MyPieChart from "./charts/myResponsivePie";
import MyLineChart from "./charts/chart";




const Dashboard = (props) => (
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
        src="https://source.unsplash.com/2GZvGZh4dJc"
      />
      <div style={overlayStyle}>
        <Typography variant="h5" component="div" style={{ ...cardHeaderTextStyle, color: 'white', fontSize: '64px', fontWeight: 'bold' }}>
          StelStay Admin Page
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ ...cardHeaderTextStyle, color: 'white', fontSize: '32px', fontWeight: 'bold' }}>
         Unlock Your Student Living Experience with Stelstay!
        </Typography>
      </div>
    </div>

    <div style={{ marginTop: 30 }}>
      <Grid container spacing={2}>
        {/* Total Users Card */}
        <Grid item xs={12} sm={4}>
          <Card style={{ ...cardStyle, backgroundColor: '#fc940a' }}>
            <CardContent style={{ ...cardContentStyle }}>
              <div style={cardHeaderStyle}>
                <UsersIcon style={{ ...iconStyle, fontSize: 42, marginRight: 5, margin: 15 }} />
                <Typography variant="h6" component="div" style={cardHeaderTextStyle}>
                  Total Users
                </Typography>
              </div>
              <Card style={{ borderRadius: 0 }}>
                <Typography color="text.secondary" style={cardNumberStyle}>
                  102
                </Typography>
              </Card>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} sm={4}>
          <Card style={{ ...cardStyle, backgroundColor: '#51aa55' }}>
            <CardContent style={{ ...cardContentStyle }}>
              <div style={cardHeaderStyle}>
                <MapsHomeWorkIcon style={{ ...iconStyle, fontSize: 42, marginRight: 5, margin: 15 }} />
                <Typography variant="h6" component="div" style={cardHeaderTextStyle}>
                  Total Buildings
                </Typography>
              </div>
              <Card style={{ borderRadius: 0 }}>
                <Typography color="text.secondary" style={cardNumberStyle}>
                  32
                </Typography>
              </Card>
            </CardContent>
          </Card>
        </Grid>

        {/* Total Applicants Card */}
        <Grid item xs={12} sm={4}>
          <Card style={{ ...cardStyle, backgroundColor: '#1db9cd' }}>
            <CardContent style={{ ...cardContentStyle }}>
              <div style={cardHeaderStyle}>
                <StickyNote2Icon style={{ ...iconStyle, fontSize: 42, marginRight: 5, margin: 15 }} />
                <Typography variant="h6" component="div" style={cardHeaderTextStyle}>
                  Total Applicants
                </Typography>
              </div>
              <Card style={{ borderRadius: 0 }}>
                <Typography color="text.secondary" style={cardNumberStyle}>
                  12
                </Typography>
              </Card>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>

    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" component="div" style={{ ...cardNumberStyle, textAlign: 'center', fontSize: 25, marginTop: 20 }}>
          Room Availability
        </Typography>
        <MyPieChart />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" component="div" style={{ ...cardNumberStyle, textAlign: 'center', fontSize: 25, marginTop: 20 }}>
          Applications
        </Typography>
        <MyLineChart />
      </Grid>
    </Grid>
  </Card>
);

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