import React, {useState} from 'react'

import { NavLink, useLocation } from 'react-router-dom'

import { Flex, List, ListItem, ListIcon,Box, Container, VStack, HStack, Heading, Button, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuList, MenuItem, Avatar, Text } from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon, SearchIcon, EmailIcon } from '@chakra-ui/icons'

const link = [{name: 'Dashboard', linker: '/'},
              {name: 'Chef On-Boarding', linker: '/chefonboarding'},
              {name: 'Add Items', linker: '/additems'},
              {name: 'Approvals', linker: '/approvals'},
              {name: 'Marketing', linker: '/marketing'},
              {name: 'Settings', linker: '/settings'},
             ]

export default function({mini}) {
  return (
    <VStack spacing={4} p={4} w={mini ? "72px" :"240px"} flexShrink={0}>
      <Box w="48px" h="48px" bg="purple.500" borderRadius="2xl" mb={8}/>
      <List>
      {link.map((screens, i) => (
        <SidebarItem screens={screens} mini={mini} key={i}/>
      ))}
      </List>
    </VStack>
  )
}

function SidebarItem({screens, mini}) {
  const location = useLocation();
  const isActive = location.pathname === screens.linker
  return (
    <NavLink to={screens.linker}>
      <Flex align="center" p={2} mb={3} bg={isActive ? "gray.50" : "white"} pr="40px" mr="-50px" borderRadius="18px">
        <Flex justify="center" align="center" w="48px" h="48px" bg="white" boxShadow={isActive ? "0px 16px 31px rgba(145, 96, 209, 0.28)": "none"} borderRadius="2xl" >
          <SearchIcon color={isActive ? "#8743DF" : "#BFBFBF"} />
        </Flex>
        <Text ml={2} fontSize="15px" fontWeight="600" lineHeight="27px" color={isActive ? "" : "#BFBFBF"}>{mini ? null : screens.name}
        </Text>
      </Flex>
    </NavLink>
  )
}