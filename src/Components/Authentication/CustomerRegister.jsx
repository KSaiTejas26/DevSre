import React,{useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const CustomerRegister = () => {


   const [user, setUser] = React.useState('');

    const handleChange = (event) => {
    setUser(event.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleGenerateOTP = () => {
    // Logic to generate OTP goes here
    console.log('Generating OTP for phone number:', phoneNumber);
  };

  

  return (
    <div>
      <br></br>
      <br></br>

    <div  className='login-container' >
      <div className="raul-login-container">
        <form  role="form" action="">
          

              {/* email */}
              

        <div className="form-group">
            <TextField
              id="email"
              type="email"
              className="form-control"
              name="email"
              label="Email"
              required
              InputLabelProps={{ style: { fontSize: 16 } }}
              InputProps={{
                style: {
                  fontSize: 18,
                },
              }}
            />
          </div>
          <br></br>

<br></br>
          {/* name */}

          <div className="form-group" >
            <TextField
              id="name"
              type="text"
              className="form-control"
              name="name"
              label="Name"
              required
              InputLabelProps={{ style: { fontSize: 16 } }}
              InputProps={{
                style: {
                  fontSize: 18,
                },
              }}
            />
          </div>

          {/* dropdowncode */}

          <br/><br/>


{/* <br></br> */}


<div className="form-group">
      <TextField
        id="phone-number"
        type="tel"
        className="form-control"
        name="phone-number"
        label="Phone Number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        required
        InputLabelProps={{ style: { fontSize: 16 } }}
        InputProps={{
          style: {
            fontSize: 18,
          },
        }}
      />
      {/* <Button variant="contained" onClick={handleGenerateOTP}>
        Generate OTP
      </Button> */}
    </div>

          {/* password */}
          <br/>
          <br></br>

          <div className="form-group">
            <TextField
              id="password"
              type="password"
              className="form-control"
              name="password"
              label="Password"
              required
              InputLabelProps={{ style: { fontSize: 16 } }}
              InputProps={{
                style: {
                  fontSize: 18,
                },
              }}
            />
          </div>

          

          <br/><br/>

          <div className="form-group">
            <TextField
              id="password"
              type="password"
              className="form-control"
              name="password"
              label="Repeat Password"
              required
              InputLabelProps={{ style: { fontSize: 16 } }}
              InputProps={{
                style: {
                  fontSize: 18,
                },
              }}
            />
          </div>

          

          <br/><br/>
          

          

          <div className="form-group">
            <button type="submit" className="button button-primary button-block">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default CustomerRegister;
