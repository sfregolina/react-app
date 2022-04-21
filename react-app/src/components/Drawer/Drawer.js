import styled from "@emotion/styled";
import { useDrawerState } from "../DrawerStateProvider/DrawerStateProvider";

const Drawer = ({ children }) => {
  const { isOpen } = useDrawerState();

  const StyledDrawer = styled("div")`
    width: 0;
    background-color: #dcdcdc;
    overflow-y: scroll;
    transition: width 2s ease-in-out;

    &.isOpen {
      width: 40%;
      min-width: 40%;
    }
  `;

  return (
    <StyledDrawer className={`drawer ${isOpen ? "isOpen" : ""}`}>
      {children}
    </StyledDrawer>
  );
};

export default Drawer;
