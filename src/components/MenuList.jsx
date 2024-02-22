import { useTranslation } from "react-i18next";
import MenuButton from "./MenuButton";

const MenuList = ({toggle}) => {
  const { t } = useTranslation();
  const options = t("options", { returnObjects: true });

  const ret = [
    <MenuButton key={options[0]} path={""} toggleMenu={toggle}>
      {options[0]}
    </MenuButton>,
    <MenuButton key={options[1]} path={"master-plan"} toggleMenu={toggle} >
      {options[1]}
    </MenuButton>,
  ];

  return ret;
};

export default MenuList;
