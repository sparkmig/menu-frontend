import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import useMenuPickerViewController from "../../view-controllers/useMenuPickerViewController";

type props = {
  setSelected: Function;
};

const MenuPicker = ({ setSelected }: props) => {
  const { menus, createMenu } = useMenuPickerViewController();
  return (
    <Flex gap={10} style={{ display: "inline-block" }}>
      {menus?.map((menu, index) => (
        <Button key={index} onClick={() => setSelected(menu.id)}>
          {menu.name} {menu.id}
        </Button>
      ))}
      <Button onClick={() => createMenu()}>+</Button>
    </Flex>
  );
};

export default MenuPicker;
