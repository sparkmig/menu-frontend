import { Button, Card, FormLabel, Input } from "@chakra-ui/react";
import useMenuItemEditorViewController from "../../view-controllers/use-menu-item-editor-view-controller";

type props = {
  menuId?: number;
  itemId?: string;
};

const MenuItemEditor = ({ menuId, itemId }: props) => {
  const {
    description,
    price,
    title,
    setDescription,
    setPrice,
    setTitle,
    save,
  } = useMenuItemEditorViewController(menuId, itemId);
  return (
    <Card>
      <FormLabel>Titel</FormLabel>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      ></Input>
      <FormLabel>Price</FormLabel>
      <Input
        value={price}
        onChange={(e) => setPrice(parseInt(e.target.value))}
        type="number"
      ></Input>
      <FormLabel>Beskrivelse</FormLabel>
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="Description"
      ></Input>
      <Button onClick={save}>Gem</Button>
    </Card>
  );
};

export default MenuItemEditor;
