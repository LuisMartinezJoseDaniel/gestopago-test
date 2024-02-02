import { Navbar, NavbarBrand } from "@nextui-org/react";

import { validateMe } from "@/actions/validate-me";
import Link from "next/link";

export const Header = async () => {
  const data = await validateMe();
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          {data.RESPONSE.MENSAJE.NOMBRECOMERCIO.text}
        </Link>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
