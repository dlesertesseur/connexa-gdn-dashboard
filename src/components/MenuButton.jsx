/* eslint-disable react/prop-types */

import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const MenuButton = ({ children, path, toggleMenu }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="subtle"
      onClick={() => {
        navigate(path);
        if(toggleMenu){
          toggleMenu()
        }
      }}
    >
      {children}
    </Button>
  );
};

export default MenuButton;
