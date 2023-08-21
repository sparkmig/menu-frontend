import useMenuPickerViewController from "../../view-controllers/useMenuPickerViewController";

type props = {
  setSelected: Function;
};

const MenuPicker = ({ setSelected }: props) => {
  const { menus, createMenu } = useMenuPickerViewController();
  return (
    <div style={{ display: "inline-block" }}>
      {menus?.map((menu, index) => (
        <button key={index} onClick={() => setSelected(menu.id)}>
          {menu.name} {menu.id}
        </button>
      ))}
      <button onClick={() => createMenu()}>+</button>
    </div>
  );
};

export default MenuPicker;
