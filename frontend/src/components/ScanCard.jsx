import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button, ButtonGroup } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementCart, incrementCart, removeCart } from "../redux/actions/cart";

export default function ScanCard({ scan }) {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [inCart, setInCart] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);


  const handleAddToCart = () => {
    const item = { ...scan, quantity: 1 };
    dispatch(addToCart(item));
  };

  const handleIncrement = () => {
    dispatch(incrementCart(scan.id));
  };

  const handleDecrement = () => {
    if(quantity === 1){
      return dispatch(removeCart(scan.id));
    }
    dispatch(decrementCart(scan.id));
  };

  React.useEffect(() => {
    const item = cart.find(c=>c.id===scan.id);
    if(item){
      setQuantity(item.quantity);
      setInCart(true)
    }

    if(cart.length===0){
      setQuantity(1);
      setInCart(false)
    }

  }, [cart])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {scan.name.split("").shift()}
          </Avatar>
        }
        title={scan.name}
        subheader={`Available on - ${scan.available}`}
      />
      <CardMedia
        component="img"
        height="104"
        image={scan.image}
        alt="Medical Scan"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {scan.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "0px 15px 20px" }}>
        {inCart ? (
          <ButtonGroup variant="">
            <Button onClick={handleDecrement} color="grey" variant="contained">
              -
            </Button>
            <Button>{quantity}</Button>
            <Button onClick={handleIncrement} color="grey" variant="contained">
              +
            </Button>
          </ButtonGroup>
        ) : (
          <Button
            onClick={handleAddToCart}
            variant="outlined"
            startIcon={<AddShoppingCartIcon />}
          >
            Add To Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
