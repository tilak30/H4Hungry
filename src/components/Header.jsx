import React from 'react'

import {Link} from 'react-router-dom'

import { Box,Container, VStack, HStack, Flex, Spacer, Heading, Button,IconButton, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuList, MenuItem, Avatar, Text } from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon, SearchIcon, EmailIcon, BellIcon } from '@chakra-ui/icons'

export default function ({onToggle}) {
  return (
    <Flex p={4}>
      <IconButton variant="ghost" aria-label="Menu" icon={<HamburgerIcon />} onClick={onToggle} />
      <Spacer />
      <HStack spacing={4}>
      <InputGroup w="500px">
        <Input placeholder="Search something here..." colorScheme="#F9F9F9" variant="filled" borderRadius="full" />
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon />}
        />
      </InputGroup>
      <IconButton variant="ghost" aria-label="Notifications" icon={<BellIcon />} />
      <Menu>
        <MenuButton as={Button} variant="ghost">
          <HStack>
            <Box textAlign="start">
              Saurabh Lodha
              <Text fontSize="12px" color="#adadad">Super Admin</Text>
            </Box>
            <Avatar name="Saurabh Lodha" size="sm" />
          </HStack>
        </MenuButton>
        <MenuList>
          <MenuItem><Link to='/profile'>Profile</Link></MenuItem>
          <MenuItem>Settings</MenuItem>
        </MenuList>
      </Menu>
      </HStack>
    </Flex>
  )
}