import { useEffect, useState } from "react";
import MenuItem from "../models/menuItem";

const useMenuListViewController = (menuId?: number) => {
  const [items, setItems] = useState<MenuItem[]>();
  const [init, setInit] = useState<boolean>(true);
  useEffect(() => {
    if (init) {
      setInit(false);
      return;
    }
    if (!menuId) {
      setItems([]);
      return;
    }

    fetch("/api/v1/menu/" + menuId)
      .then((response) => response.json())
      .then((menu) => {
        console.log(menu);
        setItems(menu.body);
      });
  }, [menuId]);

  return {
    items,
  };
};

export default useMenuListViewController;
