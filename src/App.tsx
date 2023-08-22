import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuList from "./components/menu-list/menu-list";
import MenuItemEditor from "./components/menu-item-editor/menu-item-editor";
import MenuPicker from "./components/menu-picker/menu-picker";
import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";

function App() {
  const [selectedMenu, setSelectedMenu] = useState<number>();
  const [selectedItem, setSelectedItem] = useState<string>();

  return (
    <ChakraProvider>
      <MenuPicker setSelected={setSelectedMenu}></MenuPicker>
      <SimpleGrid spacing={10} columns={2}>
        <MenuList
          menuId={selectedMenu}
          setSelected={setSelectedItem}
        ></MenuList>
        <MenuItemEditor
          menuId={selectedMenu}
          itemId={selectedItem}
        ></MenuItemEditor>
      </SimpleGrid>
    </ChakraProvider>
  );
}

export default App;
