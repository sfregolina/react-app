/** @jsxImportSource @emotion/react */
import useBreakpointValue from "../../functions/useBreakpointValue";
import { useDrawerState } from "../DrawerStateProvider/DrawerStateProvider";

const Drawer = ({ children }) => {
  const { isOpen } = useDrawerState();

  const StyledDrawer = ({ children }) => (
    <div
      css={useBreakpointValue({
        maxWidth: ["100%", "50%", "40%"],
        flex: "0",
        backgroundColor: "#dcdcdc",
        overflowY: "scroll",
        transition: "flex 0.3s linear",
        "&.isOpen": {
          flex: ["2", "1", "1"],
        },
      })}
      className={`drawer ${isOpen ? "isOpen" : ""}`}
    >
      {children}
    </div>
  );

  return <StyledDrawer>{children}</StyledDrawer>;
};

export default Drawer;
