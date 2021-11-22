import React from 'react'

import { Spacer, IconButton, Checkbox, Switch, Select, Center, Text, Divider, Box, HStack, VStack, Wrap, WrapItem, Flex, Grid, GridItem, Heading, Button, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption } from "@chakra-ui/react"
import { ChevronDownIcon, HamburgerIcon, SearchIcon, EmailIcon, DragHandleIcon } from '@chakra-ui/icons'


export default function() {
  return (
    <Box>
      <Flex align="center">
        <Box>
          <Text fontWeight="600">Showing 246 Jobs Results</Text>
          <Text fontSize="14px">Based your preferences</Text>
        </Box>
        <Spacer />
        <HStack>
          <Switch colorScheme="purple">Latest</Switch>
          <Switch colorScheme="purple">Active</Switch>
          <Button colorScheme="purple">Send Invite</Button>
          <Select colorScheme="purple" placeholder="Newest" w="120px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <IconButton colorScheme="purple" aria-label="Notifications" icon={<SearchIcon />} />
          <IconButton colorScheme="purple" aria-label="Notifications" icon={<SearchIcon />} />
        </HStack>
      </Flex>
      <Table bg="white" borderRadius="xl" my={6}>
        <Thead>
          <Tr role="row">
            <Th><Checkbox /></Th>
            <Th>Chef Name</Th>
            <Th>Date Applied</Th>
            <Th>Condominium</Th>
            <Th>Type</Th>
            <Th>FSSAI</Th>
            <Th>Contact</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from({length:6}).map((_,i)=>(
            <TableRow />
          ))}
        </Tbody>
      </Table>
      <Flex>
        <Text fontSize="16px" fontWeight="500">Showing 1 to 6 of 6 entries</Text>
        <Spacer />
        <HStack spacing={2}>
          <Button>{"<< Previous"}</Button>
          <span>
            <Button colorScheme="purple">1</Button>
          </span>
          <Button>{"Next >>"}</Button>
        </HStack>
      </Flex>
    </Box>
  )
}

function TableRow() {
  return (
    <Tr>
      <Td>
        <Checkbox />
      </Td>
      <Td>
        <Text fontSize="16" fontWeight="400">Neha Kulkarni</Text>
      </Td>
      <Td>
        <Text fontSize="16" fontWeight="400">June 1, 2020, 08:22 AM</Text>
      </Td>
      <Td>
        <HStack>
          <Box minW="48px" h="48px" bg="gray.100" borderRadius="2xl" />
          <div className="media-body text-nowrap">
            <Text fontSize="16px" fontWeight="600">Highspeed</Text>
            <Text fontSize="14px" fontWeight="400">Creative Design</Text>
          </div>
        </HStack>
      </Td>
      <Td>
        <Text fontSize="16" fontWeight="400">Hobby</Text>
      </Td>
      <Td>
        <Text fontSize="16" fontWeight="400">100000007778890</Text>
      </Td>
      <Td>
      <HStack>
        <Box minW="48px" h="48px" bg="purple.100" borderRadius="2xl" />
        <Box minW="48px" h="48px" bg="purple.100" borderRadius="2xl" />
      </HStack>
      </Td>
      <Td>
        <Flex align="center">
          <Button colorScheme="green">Active</Button>
          <IconButton variant="ghost" icon={<DragHandleIcon />} />
        </Flex>
      </Td>
    </Tr>
  )
}