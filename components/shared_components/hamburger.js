import React from "react";
import {IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {HamburgerIcon} from '@chakra-ui/icons'

const Hamburger = () =>
    (
        <Menu>
            <MenuButton
                width='40px'
                height='40px'
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon boxSize={5}/>}
                variant='outline'
                display={['flex', 'flex', 'flex', 'none']}
                marginRight={['25px', '33px', '33px', '33px']}
                background='#E0E9FA'
                color='#7D70FF'
            />
            <MenuList>
                <MenuItem>
                    About
                </MenuItem>
                <MenuItem>
                    Metaverse
                </MenuItem>
                <MenuItem>
                    AmbasSators
                </MenuItem>
                <MenuItem>
                    News
                </MenuItem>
                <MenuItem>
                    Careers
                </MenuItem>
            </MenuList>
        </Menu>
    )

export default Hamburger