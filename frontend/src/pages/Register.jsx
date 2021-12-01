import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Link , useNavigate} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../redux/actions/users";
import Alert from "@mui/material/Alert";


const Register = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    insurance: "",
  });

  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
      const {name, value} = e.target;
      setUser(prev=>({...prev, [name]: value}))
  };

  const handleSubmit = () => {
    user.role="user";
    dispatch(registerUserAction(user));
  };

  useEffect(() => {
    if(state.user?.id) navigate("/")
  }, [state.user])

  return (
    <Container>
      <h2 style={{ marginBottom: "20px" }}>Register</h2>
      {state.error && <Alert severity="error">{state.error}</Alert>}
      <InputContainer>
        <TextField
          label="First Name"
          variant="outlined"
          value={user.firstname}
          type="text"
          name="firstname"
          fullWidth
          onChange={handleInputChange}
        />
      </InputContainer>

      <InputContainer>
        <TextField
          label="Last Name"
          variant="outlined"
          value={user.lastname}
          type="text"
          name="lastname"
          fullWidth
          onChange={handleInputChange}
        />
      </InputContainer>

      <InputContainer>
        <TextField
          label="Email"
          variant="outlined"
          value={user.email}
          type="email"
          name="email"
          fullWidth
          onChange={handleInputChange}
        />
      </InputContainer>

      <InputContainer>
        <TextField
          label="Phone Number"
          variant="outlined"
          value={user.phone}
          type="text"
          name="phone"
          fullWidth
          onChange={handleInputChange}
        />
      </InputContainer>
      
      <InputContainer>
        <TextField
          label="Insurance Number"
          variant="outlined"
          value={user.insurance}
          type="text"
          name="insurance"
          fullWidth
          onChange={handleInputChange}
        />
      </InputContainer>

      <InputContainer>
        <TextField
          label="Password"
          variant="outlined"
          value={user.password}
          name="password"
          fullWidth
          type="password"
          onChange={handleInputChange}
        />
      </InputContainer>
      <InputContainer>
        <Button disabled={state.loading} onClick={handleSubmit} fullWidth variant="contained">
          {state.loading? "Loading..." : "Register"}
        </Button>
      </InputContainer>

      <h4>Or</h4>
      <Link
        style={{
          textDecoration: "none",
          marginTop: "15px",
        }}
        to="/login"
      >
        Login Here
      </Link>
    </Container>
  );
};

const Container = styled(Box)((theme) => ({
  padding: "50px 0px",
  minHeight: "100vh",
  display: "flex",
  // justifyContent:"center",
  alignItems: "center",
  flexDirection: "column",
}));

const InputContainer = styled(Box)((theme) => ({
  minWidth: "400px",
  margin: "10px 0px",
}));
export default Register;
