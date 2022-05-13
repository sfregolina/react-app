/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useContext } from "react";
import ShoppingBagIcon from "../../icons/ShoppingBagIcon";
import CloseIcon from "../../icons/CloseIcon";
import StyledButton from "../StyledComponents/StyledButton";
import StyledHeading2 from "../StyledComponents/StyledHeading2";
import StyledParagraph from "../StyledComponents/StyledParagraph";
import { CartStateContext } from "../CartStateProvider/CartStateProvider";

const StyledHeader = styled.header({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 0 10px",
  borderBottom: "1px solid #ccc",
  marginBottom: "10px",
});

const StyledMiniCart = styled.div({ display: "flex", alignItems: "baseline" });

const Header: React.FC = () => {
  const { isOpen, setIsOpen, count } = useContext(CartStateContext);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <StyledHeading2>My wishlist</StyledHeading2>
      <StyledButton onClick={toggleDrawer}>
        {isOpen ? (
          <CloseIcon />
        ) : (
          <StyledMiniCart>
            <ShoppingBagIcon />
            <StyledParagraph>{count}</StyledParagraph>
          </StyledMiniCart>
        )}
      </StyledButton>
    </StyledHeader>
  );
};

export default Header;
