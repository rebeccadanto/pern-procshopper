import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperContainer } from "../components/commons";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { scans } from "../scans.json";
import { Box } from "@mui/system";
import axios from "axios";

const MyScans = () => {
  const navigate = useNavigate();
  const { error, user } = useSelector((state) => state.users);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.id) {
      navigate("/login");
    }
  }, [user?.id]);

  const getTransactions = async () => {
    setLoading(true);
    const { data } = await axios.get(`http://localhost:5000/transactions/${user.id}`);
    setTransactions(data.transactions);
    setLoading(false);
  };

  useEffect(() => {
    getTransactions();
  }, [user?.id]);

  if (loading)
    return (
      <h4 style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>
        Loading....
      </h4>
    );

  return (
    <WrapperContainer>
      <h2>Booked Scans</h2>
      <Divider sx={{ margin: "20px 0px" }} />
      <TableContainer component={Box}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Scan Name</TableCell>
              <TableCell>Transaction Date</TableCell>
              <TableCell>Transaction Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions?.map((transaction, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {i}
                </TableCell>
                <TableCell>{transaction.name}</TableCell>
                <TableCell>{transaction.scans.split("|").join(", ")}</TableCell>
                <TableCell>Date {i}</TableCell>
                <TableCell>{transaction.total} </TableCell>
                <TableCell>pending</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </WrapperContainer>
  );
};

export default MyScans;
