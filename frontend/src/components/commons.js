import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
import Sidebar from "./Sidebar";

export const WrapperContainer = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Box sx={{ padding: "20px" }}>{children}</Box>
    </Container>
  );
};
const Container = styled(Box)(({ theme }) => ({
  background: "#e9e9e9",
  minHeight: "100vh",
  display: "grid",
  gridTemplateColumns: "250px 1fr",
}));

export const CustomButton = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

const ButtonContainer = styled(Button)(({ theme }) => ({
  background: "#f44336",
  color: "#fff",
  "&:hover": {
    background: "#f44336",
  },
}));
