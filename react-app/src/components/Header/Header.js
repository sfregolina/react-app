/** @jsxImportSource @emotion/react */
import BurgerIcon from "../../icons/BurgerIcon";
import { StyledButton } from "../StyledComponents/StyledButton";

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
  return (
    <StyledHeader>
      <StyledHeading2>My wishlist</StyledHeading2>
      <StyledButton>
        <BurgerIcon />
      </StyledButton>
    </StyledHeader>
  );
};

export default Header;
