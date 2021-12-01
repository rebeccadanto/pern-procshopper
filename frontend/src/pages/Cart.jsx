import {
  Button,
  ButtonGroup,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
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
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

import { useDispatch } from "react-redux";
import {
  addToCart,
  clearCart,
  decrementCart,
  incrementCart,
  removeCart,
} from "../redux/actions/cart";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.users);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [card, setCard] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputFocus = (e) => {
    setCard((prev) => ({ ...prev, focus: e.target.name }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const total = cart.reduce(
      (acc, curr) => acc + curr.quantity * curr.amount,
      0
    );
    const scans = cart.reduce((acc, curr, i) => {
      let item = acc + curr.name;
      if (i !== cart.length - 1) item += "|";

      return item;
    }, "");
    if (card.cvc && card.expiry && card.name && card.number) {
      const data = {
        cvc: card.cvc,
        expiry: card.expiry,
        name: card.name,
        number: card.number,
        userId: user.id,
        total,
        scans,
      };
      await axios.post("http://localhost:5000/transactions", data);
      dispatch(clearCart());
      handleClose();
    } else {
      alert("All fields are required");
    }
  };

  useEffect(() => {
    if (!user?.id) {
      navigate("/login");
    }
  }, [user?.id]);

  const handleIncrement = (id) => {
    dispatch(incrementCart(id));
  };

  const handleDecrement = (quantity, id) => {
    if (quantity === 1) {
      return dispatch(removeCart(id));
    }
    dispatch(decrementCart(id));
  };

  return (
    <WrapperContainer>
      <h2>My Cart</h2>
      <Divider sx={{ margin: "20px 0px" }} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.map((cart, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {i}
                </TableCell>
                <TableCell>{cart.name}</TableCell>
                <TableCell>
                  <ButtonGroup variant="">
                    <Button
                      onClick={() => handleDecrement(cart.quantity, cart.id)}
                      color="grey"
                      variant="contained"
                    >
                      -
                    </Button>
                    <Button>{cart.quantity}</Button>
                    <Button
                      onClick={() => handleIncrement(cart.id)}
                      color="grey"
                      variant="contained"
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </TableCell>
                <TableCell>$ {cart.amount}</TableCell>
                <TableCell>{cart.amount * cart.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {cart.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "20px 0px",
          }}
        >
          <Paper sx={{ padding: "20px" }}>
            <h4>Summary</h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 0px",
              }}
            >
              <h5 style={{ marginRight: "10px" }}>Total</h5>
              <h3>
                {cart.reduce(
                  (acc, curr) => acc + curr.quantity * curr.amount,
                  0
                )}
              </h3>
            </div>
            <Button onClick={handleOpen} color="primary" variant="contained">
              Checkout
            </Button>
          </Paper>
        </Box>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflow: "auto" }}
      >
        <Box sx={style}>
          <h2>Card Details</h2>
          <br />
          <Cards
            cvc={card.cvc}
            expiry={card.expiry}
            focused={card.focus}
            name={card.name}
            number={card.number}
          />
          <br />
          <div>
            <InputContainer>
              <TextField
                label="Name"
                variant="outlined"
                value={card.name}
                name="name"
                fullWidth
                type="text"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </InputContainer>
            <InputContainer>
              <TextField
                label="Card Number"
                variant="outlined"
                value={card.number}
                name="number"
                fullWidth
                type="text"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </InputContainer>
            <InputContainer>
              <TextField
                label="Expiration Date"
                variant="outlined"
                value={card.expiry}
                name="expiry"
                fullWidth
                type="text"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </InputContainer>
            <InputContainer>
              <TextField
                label="CVC"
                variant="outlined"
                value={card.cvc}
                name="cvc"
                fullWidth
                type="text"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </InputContainer>

            <Button onClick={handleSubmit} color="primary" variant="contained">
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </WrapperContainer>
  );
};

const InputContainer = styled(Box)((theme) => ({
  width: "100%",
  minWidth: "300px",
  margin: "10px 0px",
}));

export default Cart;
