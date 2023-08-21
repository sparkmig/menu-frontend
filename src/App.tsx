import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuList from "./components/menu-list/menu-list";
import MenuItemEditor from "./components/menu-item-editor/menu-item-editor";
import MenuPicker from "./components/menu-picker/menu-picker";

function App() {
  const [selectedMenu, setSelectedMenu] = useState<number>();
  const [selectedItem, setSelectedItem] = useState<string>();

  return (
    <div className="App">
      <MenuPicker setSelected={setSelectedMenu}></MenuPicker>
      <MenuList menuId={selectedMenu} setSelected={setSelectedItem}></MenuList>
      <MenuItemEditor
        menuId={selectedMenu}
        itemId={selectedItem}
      ></MenuItemEditor>
    </div>
  );
}

export default App;
