import { useEffect, useState } from "react";
import MenuItem from "../models/menuItem";

const useMenuItemEditorViewController = (menuId?: number, itemId?: string) => {
  const [title, setTitle] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [description, setDescription] = useState<string>();

  useEffect(() => {
    if (!itemId) {
      setTitle("");
      setPrice(0);
      setDescription("");
      return;
    }
    fetch(`api/v1/menu/${menuId}/item/${itemId}`)
      .then((response) => response.json())
      .then((menuItem) => {
        menuItem = menuItem as MenuItem;
        setTitle(menuItem.title);
        setPrice(menuItem.price);
        setDescription(menuItem.description);
      });
  }, [itemId]);

  const save = () => {
    var menuItem: MenuItem = {
      description: description,
      title: title,
      id: itemId,
      price: price,
    };

    fetch(`/api/v1/menu/${menuId}/item`, {
      body: JSON.stringify(menuItem),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => window.location.reload());
  };
  return {
    title,
    price,
    description,
    setTitle,
    setDescription,
    setPrice,
    save,
  };
};

export default useMenuItemEditorViewController;
