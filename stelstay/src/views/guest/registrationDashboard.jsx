import * as React from "react";
import { Title } from "react-admin";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom' 
import Button from '@mui/material/Button' 


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
        src="https://source.unsplash.com/IXdv_TGNDCA"
      />
      <div style={overlayStyle}>
        <Typography variant="h5" component="div" style={{ ...cardHeaderTextStyle, color: 'white', fontSize: '64px', fontWeight: 'bold' }}>
          StelStay Registration Page
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ ...cardHeaderTextStyle, color: 'white', fontSize: '32px', fontWeight: 'bold' }}>
        Unlock Your Student Living Experience with Stelstay!
        </Typography>
      </div>
    </div>

    <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <Typography variant='h4' component='div' style={{ ...cardHeaderTextStyle, color: 'black', fontSize: '64px', fontWeight: 'bold', padding:"15px" }}>
          Welcome, Applicant!
      </Typography>
      <Typography variant='body1' style={{lineHeight: '2', fontSize:"2vh"}}>
          We're excited to have you on board as you embark on your journey to find your perfect housing with Stely Stay Properties.
          Stely Stay Properties is committed to providing you with a seamless housing search experience in Stellenbosch. Our user-friendly registration process allows you to explore and apply for premium rooms and apartments effortlessly.
      </Typography>
      <Typography variant='body1'style={{lineHeight: '2', fontSize:"2vh"}}>
          <h3>Here are the steps to apply and register for a lease:</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize:"2vh" }}>
            <li ><b>Step: 1</b> Register an account</li>
            <li style={{  lineHeight: '2' }}><b>Step: 2 </b>Apply for a lease</li>
            <li style={{  lineHeight: '2'  }}><b>Step: 3 </b> Enter Student Details</li>
            <li style={{  lineHeight: '2'  }}><b>Step: 4 </b> Add a bill payer to manage your account</li>
        </ul>
    </Typography>
      <Typography variant='body1'style={{lineHeight: '2', fontSize:"2vh"}}>
          Ready to begin your journey? Complete the registration form, and you'll be one step closer to discovering the perfect accommodation for you.
          If you have any questions or need assistance, our dedicated support team is here to help at every stage of your journey.
      </Typography>

    </div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", padding:"15px"}}>
      <Link to='/RegisterPage/users/create/*'>
        <Button variant='contained' color='primary' style={{ display:"flex", width:"100%", padding:"15px"}}>
          Register Now
        </Button>
      </Link>
        </div>
   
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