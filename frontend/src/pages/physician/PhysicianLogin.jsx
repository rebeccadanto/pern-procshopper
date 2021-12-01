import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const PhysicianLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = ()=>{
      console.log({email, password});
  }

  return (
    <Container>
        <h2 style={{marginBottom:"20px"}}>Physician Login</h2>
      <InputContainer>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          type="email"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputContainer>

      <InputContainer>
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          fullWidth
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Button onClick={handleSubmit} fullWidth variant="contained">
          Login
        </Button>
      </InputContainer>

      <h4>Or</h4>
      <Link
        style={{
          textDecoration: "none",
          marginTop:"15px"
        }}
        to="/register"
      >
        Register Here
      </Link>
    </Container>
  );
};

const Container = styled(Box)((theme) => ({
  paddingTop: "100px",
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
export default PhysicianLogin;
