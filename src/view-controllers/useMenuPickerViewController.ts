import { useEffect, useState } from "react";
import Menu from "../models/menu";
const useMenuPickerViewController = () => {
  const [menus, setMenus] = useState<Menu[]>();

  useEffect(() => {
    fetch("/api/v1/menu/all")
      .then((response) => response.json())
      .then((menus) => setMenus(menus));
  }, []);

  const createMenu = () => {
    const name = prompt("Indtast navn på menu kort");
    fetch("/api/v1/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: [],
        name: name,
        active: false,
      }),
    }).then(() => {
      window.location.reload();
    });
  };
  return {
    menus,
    createMenu,
  };
};

export default useMenuPickerViewController;
