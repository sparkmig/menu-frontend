import MenuItem from "./menuItem";

export default interface Menu {
  id?: number;
  body: MenuItem[];
  name: string;
  active: boolean;
}
