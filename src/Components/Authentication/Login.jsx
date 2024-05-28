import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import '../../App.css'


const Login = () => {


   const [user, setUser] = React.useState('');

    const handleChange = (event) => {
    setUser(event.target.value);
  };

  

  return (
    <div className='login-container' >
      <div className="raul-login-container">
        <form className="raul-login-form" role="form" action="">


              {/* dropdowncode */}

          

                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">User</InputLabel>
                    <Select
                    labelId="user"
                    id="user"
                    value={user}
                    label="User"
                    onChange={handleChange}
                    sx={{
                      '& .MuiSelect-select': {
                        textAlign: 'left',
                      },
                    }}
                    >
                    <MenuItem value={'Customer'}>Customer</MenuItem>
                    <MenuItem value={'Vendor'}>Vendor</MenuItem>
                    <MenuItem value={'Admin'}>Admin</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <br/><br/>

              {/* email */}

        <div style={{borderRadius:5,}} className="form-group">
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
                  fontSize: 17,
                },
              }}
            />
          </div>

          

          {/* password */}
          <br/>
          <br/><br/>

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
                  fontSize: 17,
                },
              }}
            />
          </div>

          

          <br/><br/>
          

          <div className="form-group clearfix mb-3">
            <div className="raul-login-remember">
              <label className="clearfix">
                <input type="checkbox" name="remember" />

                <div className="raul-login-checkbox-wrap">
                  <i className="fa fa-check-square" aria-hidden="true"></i>
                </div>

                <span>Remember Me</span>
              </label>
            </div>

            <div className="raul-login-forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="button button-primary button-block">
              Login
            </button>
          </div>
        </form>
        
        <div className="or-wrapper">
              <div className="vertical-bar" >
              </div> <p className="or-text">OR</p> 
              <div className="vertical-bar">
              </div> 
        </div>

        <div> <a href="/Register" style={{width:'100%',textDecoration:'None'}} className="button button-accent login-sso-button"> Register </a> </div>

      </div>
    </div>
  );
};

export default Login;
