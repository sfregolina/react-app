/** @jsxImportSource @emotion/react */
import useBreakpointValue from "../../functions/useBreakpointValue";

const StyledDrawer = ({ children }) => (
  <div
    css={useBreakpointValue({
      minWidth: ["100%", "50%", "40%"],
      backgroundColor: "#dcdcdc",
      overflowY: "scroll",
    })}
  >
    {children}
  </div>
);

const Drawer = ({ children }) => {
  return <StyledDrawer>{children}</StyledDrawer>;
};

export default Drawer;
