import { Divider, Grid } from "@mui/material";
import { WrapperContainer } from "../components/commons";
import ScanCard from "../components/ScanCard";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import {scans} from '../scans.json'

const Home = () => {
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.users);
  useEffect(() => {
    if(!user?.id){
      navigate("/login")
    }
  }, [user?.id])
  return (
    <WrapperContainer>
      <h2>Welcome,</h2>
      <Divider sx={{ margin: "20px 0px" }} />
      <h2>Available Scans</h2>
      <br/>
      <br/>
      <Grid container spacing={2}>
        {scans.map((scan) => (
          <Grid key={scan.id} item xs={12} md={6} lg={4}>
            <ScanCard scan={scan} />
          </Grid>
        ))}
      </Grid>
    </WrapperContainer>
  );
};

export default Home;
