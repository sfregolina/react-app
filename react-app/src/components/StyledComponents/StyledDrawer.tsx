/** @jsxImportSource @emotion/react */
import useBreakpointValue from "../../functions/useBreakpointValue";

interface DrawerProps {
  children: React.ReactNode;
}

const StyledDrawer: React.ElementType = ({ children }: DrawerProps) => (
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

export default StyledDrawer;
