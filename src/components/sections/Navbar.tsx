import { Button } from "../styled/Button.styled";
import { Logo } from "../styled/Global.styled";
import {
  LogoContainer,
  Menu,
  MenuContainer,
  MenuItem,
  MenuText,
  NavButtonContainer,
  NavContainer,
} from "../styled/sections/Navbar.styled";
import logo from "/log.svg";
import {
  FaCode,
  FaUser,
  FaProjectDiagram,
  FaCertificate,
  FaGraduationCap,
} from "react-icons/fa";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo src={logo} alt="" />{" "}
      </LogoContainer>
      <MenuContainer>
        <Menu>
          <MenuItem href="https://www.google.com" >
            <FaUser style={{ fontSize: "1.75rem" }} />
            <MenuText>About Me</MenuText>
          </MenuItem>
          <MenuItem href="https://www.google.com">
            <FaCode style={{ fontSize: "1.75rem" }} />
            <MenuText>Tech Stack</MenuText>
          </MenuItem>
          <MenuItem href="https://www.google.com">
            <FaGraduationCap style={{ fontSize: "1.75rem" }} />
            <MenuText>Education</MenuText>
          </MenuItem>
          <MenuItem href="https://www.google.com">
            <FaProjectDiagram style={{ fontSize: "1.75rem" }} />
            <MenuText>Projects</MenuText>
          </MenuItem>
          <MenuItem href="https://www.google.com">
            <FaCertificate style={{ fontSize: "1.75rem" }} />
            <MenuText>Certification</MenuText>
          </MenuItem>
        </Menu>
      </MenuContainer>{" "}
      <NavButtonContainer>
        <Button > Download Resume </Button>
      </NavButtonContainer>
    </NavContainer>
  );
};

export default Navbar;
