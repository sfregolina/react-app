import styled from "@emotion/styled";
import { useDrawerState } from "../DrawerStateProvider/DrawerStateProvider";

const Drawer = ({ children }) => {
  const { isOpen } = useDrawerState();

  const StyledDrawer = styled("div")`
    max-width: 40%;
    flex: 0;
    background-color: #dcdcdc;
    overflow-y: scroll;
    transition: flex 0.3s ease-in-out;

    &.isOpen {
      flex: 1;
    }
  `;

  return (
    <StyledDrawer className={`drawer ${isOpen ? "isOpen" : ""}`}>
      {children}
    </StyledDrawer>
  );
};

export default Drawer;
