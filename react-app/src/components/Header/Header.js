/** @jsxImportSource @emotion/react */
import ShoppingBagIcon from "../../icons/ShoppingBagIcon";
import CloseIcon from "../../icons/CloseIcon";
import { StyledButton } from "../StyledComponents/StyledButton";
import { useDrawerState } from "../DrawerStateProvider/DrawerStateProvider";

const StyledHeader = ({ children }) => (
  <header
    css={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 0 10px",
      borderBottom: "1px solid #ccc",
      marginBottom: "10px",
    }}
  >
    {children}
  </header>
);

const StyledHeading2 = ({ children }) => (
  <h2
    css={{
      fontFamily: "Merriweather, serif",
      fontSize: "18px",
      textTransform: "uppercase",
    }}
  >
    {children}
  </h2>
);

const Header = () => {
  const { isOpen, setIsOpen } = useDrawerState();
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <StyledHeading2>My wishlist</StyledHeading2>
      <StyledButton onClick={toggleDrawer}>
        {isOpen ? <CloseIcon /> : <ShoppingBagIcon />}
      </StyledButton>
    </StyledHeader>
  );
};

export default Header;
