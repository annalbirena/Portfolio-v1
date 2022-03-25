import { IconButton, Link, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";

const HeaderMenu = () => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<MenuIcon />}
                variant='outline'
            />
            <MenuList>
                <Link href='#skills'>
                    <MenuItem>
                        Acerca de mi
                    </MenuItem>
                </Link>
                <Link href='#skills'>
                    <MenuItem>
                        Tecnologias
                    </MenuItem>
                </Link>
                <Link href='#projects'>
                    <MenuItem>
                        Proyectos
                    </MenuItem>
                </Link>
                <Link href='#contact'>
                    <MenuItem>
                        Contacto
                    </MenuItem>
                </Link>
            </MenuList>
        </Menu>
    )
}

export default HeaderMenu;