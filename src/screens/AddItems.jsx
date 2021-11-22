import React from 'react'

import {
  Box, Avatar, HStack, VStack, Wrap, WrapItem, Flex, Grid, GridItem, Heading, Button, Stat, Spacer, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, Text, Divider, IconButton, Center, Switch, ButtonGroup, Textarea, FormControl, FormLabel, Input, Select, Slider, SliderTrack, SliderFilledTrack,
  SliderThumb, InputGroup, InputLeftElement
} from "@chakra-ui/react"

import { PhoneIcon, EmailIcon, DragHandleIcon } from "@chakra-ui/icons"

export default function() {
  return (
    <Flex h="full" >
      <Box w={1 / 4} h="full">
        <Flex direction="column">
          <Flex direction="column" p={4} m={4} justify="center" borderRadius="xl" boxShadow="md" bg="white">
            <Center mt={4}><Avatar size="xl" name="Christian Nwamba" src="https://bit.ly/ryan-florence" /></Center>
            <Center mt={5} fontSize="18px" lineHeight="33px" fontWeight="500">SuperTech Captown</Center>
            <Center fontSize="14px" lineHeight="24px">Upload Image</Center>
            <Flex justify="center" mt={8} mb={8}>
              <Box mr={8}>
                <Center fontSize="22px" lineHeight="33px" fontWeight="600">567</Center>
                <Center fontSize="16px" lineHeight="24px">Following</Center>
              </Box>
              <Box ml={8}>
                <Center fontSize="22px" lineHeight="33px" fontWeight="600">8,334</Center>
                <Center fontSize="16px" lineHeight="24px">Followers</Center>
              </Box>
            </Flex>
            <Divider mb={8} />
            <Flex mb={5} alignItems="center">
              <Flex alignItems="center" justify="center" w="45px" h="45px" borderRadius="15px" bg="#F4EBFF"><PhoneIcon color="#8743DF" /></Flex>
              <Text ml={3} fontSize="16px">+50 123 456 78</Text>
            </Flex>
            <Flex mb={5} alignItems="center">
              <Flex alignItems="center" justify="center" w="45px" h="45px" borderRadius="15px" bg="#F4EBFF"><EmailIcon color="#8743DF"/> </Flex>
              <Text ml={3} fontSize="16px">davidheree@mail.com</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box borderRadius="xl" boxShadow="md" w={3 / 4} m={4} p={4} h="full" bg="white" >
        <Flex justify="space-between" align="center" p={4}>
          <Text fontSize="24px" fontWeight="600">Add Condomanium</Text>
          <Flex justify="space-between" align="center">
            <ButtonGroup pl={5} spacing="3">
              <Button borderRadius="24px" color="#9F9F9F" >Cancel</Button>
              <Button borderRadius="24px" bg="#8743DF" color="white">Save Changes</Button>
            </ButtonGroup>
          </Flex>
        </Flex>
        <Flex mt={5} align="center">
          <Text fontSize="18px" fontWeight="600" p={4}>GENERALS</Text>
          <Divider />
        </Flex>
        <Box p={4}>
          <Flex>
            <FormControl mr={6} id="address">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151" >Condominium Name</FormLabel>
              <Input borderRadius="20px" size="lg" />
            </FormControl>
            <FormControl mr={6} id="city">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151" >City</FormLabel>
              <Select borderRadius="20px" size="lg" placeholder="Select city">
                <option>London</option>
                <option>Mumbai</option>
              </Select>
            </FormControl>
            <FormControl mr={6} id="country">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151" >Country</FormLabel>
              <Select  borderRadius="20px" size="lg" placeholder="Select country">
                <option>England</option>
                <option>India</option>
              </Select>
            </FormControl>
          </Flex>
          <Flex mt={5} mb={5} w={2/3}>
            <FormControl  mr={6} id="address">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151">Address</FormLabel>
              <Input borderRadius="20px" size="lg"  />
            </FormControl>
            <FormControl mr={6} id="l&l">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151">Lattitude & Longitutde</FormLabel>
              <Input borderRadius="20px" size="lg"  />
            </FormControl>
          </Flex>
        </Box>
        <Flex align="center">
          <Text fontSize="18px" fontWeight="600" p={4} flexShrink={0}>CONDOMINIUM INCHARGE</Text>
          <Divider />
        </Flex>
        <Box p={4}>
          <Flex mb={5}>
            <FormControl mr={6} id="mobile-phone">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151">Mobile Phone</FormLabel>
              <InputGroup size="lg">
                 <Input borderRadius="20px" />
                 <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon boxSize="1.2rem" color="#8743DF" />}
                  />
              </InputGroup>
            </FormControl>
            <FormControl mr={6} id="whatsapp">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151">Whatsapp</FormLabel>
              <InputGroup size="lg">
                 <Input borderRadius="20px" />
                 <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon boxSize="1.2rem" color="#8743DF" />}
                  />
              </InputGroup>
            </FormControl>
            <FormControl mr={6} id="email">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151">Email</FormLabel>
              <InputGroup size="lg">
                 <Input borderRadius="20px" />
                 <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon boxSize="1.2rem" color="#8743DF" />}
                  />
              </InputGroup>
            </FormControl>
          </Flex>
        </Box>
        <Flex align="center">
          <Text fontSize="18px" fontWeight="600" flexShrink={0} p={4}>SOCIAL MEDIA</Text>
          <Divider />
        </Flex>
        <Box p={4} pb={16}>
          <Flex>
            <FormControl mr={6} id="instagram">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151">Instagram Page</FormLabel>
              <Input borderRadius="20px" size="lg"  />
            </FormControl>
            <FormControl mr={6} id="facebook">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151">Facebook</FormLabel>
              <Input borderRadius="20px" size="lg"  />
            </FormControl>
            <FormControl mr={6} id="youtube">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151">YouTube</FormLabel>
              <Input borderRadius="20px" size="lg"  />
            </FormControl>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}