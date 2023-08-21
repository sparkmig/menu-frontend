import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Menu,
  SimpleGrid,
} from "@chakra-ui/react";
import useMenuListViewController from "../../view-controllers/useMenuListViewController";

type props = { setSelected: Function; menuId?: number };

const MenuList = ({ setSelected, menuId }: props) => {
  const { items } = useMenuListViewController(menuId);

  return (
    <SimpleGrid columns={2}>
      {items?.map((item, index) => (
        <Card
          key={index}
          boxShadow={"md"}
          variant="outline"
          p="6"
          rounded="md"
          bg="white"
        >
          <CardHeader>{item.title ?? "ingen title"}</CardHeader>
          <CardBody>{item.description ?? "ingen beskrivelse"}</CardBody>
          <Button onClick={() => setSelected(item.id)}>Rediger</Button>
        </Card>
      ))}
      <Button onClick={() => setSelected()}>+</Button>
    </SimpleGrid>
  );
};

export default MenuList;
