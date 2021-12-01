import { Divider, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { WrapperContainer } from "../../components/commons";
import ScanCard from "../../components/ScanCard";

import {scans} from '../../scans.json'

const PhysicianHome = () => {
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

export default PhysicianHome;
