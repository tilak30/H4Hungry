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
            <Center mt={5} fontSize="22px" lineHeight="33px" fontWeight="500">Tarla Dalal</Center>
            <Center fontSize="16px" lineHeight="24px">Chef Profile</Center>
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
          <Spacer />
          <Box m={4} borderRadius="xl" p={6} boxShadow="md" bg="white">
            <Flex pb={5} justify="space-between" align="center">
              <Text fontSize="20px" lineHeight="30px" fontWeight="500">Portofolios</Text>
              <DragHandleIcon />
            </Flex>
            <Flex mb={5} h="49px" borderRadius="18px" bg="#FBFBFB" align="center">
              <IconButton borderRadius="full" icon={<PhoneIcon />} /><Text fontSize="16px" fontWeight="500" ml={3}>/davidheree.porto</Text>
            </Flex>
            <Flex mb={5} h="49px" borderRadius="18px" bg="#FBFBFB" align="center">
              <IconButton borderRadius="full" icon={<PhoneIcon />} /><Text fontSize="16px" fontWeight="500" ml={3}>/david.drib</Text>
            </Flex>
            <Flex mb={5} h="49px" borderRadius="18px" bg="#FBFBFB" align="center">
              <IconButton borderRadius="full" icon={<PhoneIcon />} /><Text fontSize="16px" fontWeight="500" ml={3}>/davidheree222</Text>
            </Flex>
            <Flex mb={5} h="49px" borderRadius="18px" bg="#FBFBFB" align="center">
              <IconButton borderRadius="full" icon={<PhoneIcon />} /><Text fontSize="16px" fontWeight="500" ml={3}>/davidhereechan</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box borderRadius="xl" boxShadow="md" w={3 / 4} m={4} p={4} h="full" bg="white">
        <Flex justify="space-between" align="center" p={4}>
          <Text fontSize="24px" fontWeight="600">Edit Profile</Text>
          <Flex justify="space-between" align="center">
            <Text fontSize="16px" fontWeight="600">Available for hire?</Text>
            <Switch defaultChecked="true" pr={5} pl={2} colorScheme="purple" />
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
          <Flex mb={5}>
            <FormControl mr={6} id="firstname">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151">First Name</FormLabel>
              <Input borderRadius="20px" size="lg"  />
            </FormControl>
            <FormControl mr={6} id="middlename">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151">Middle Name</FormLabel>
              <Input borderRadius="20px" size="lg"  />
            </FormControl>
            <FormControl mr={6} id="lastname">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151">Last Name</FormLabel>
              <Input borderRadius="20px" size="lg"  />
            </FormControl>
          </Flex>
          <Flex>
            <FormControl mr={6} id="fssai">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151">Fssai</FormLabel>
              <Input borderRadius="20px" size="lg"  />
            </FormControl>
            <FormControl mr={6} id="gst">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151">GST</FormLabel>
              <Input borderRadius="20px" size="lg"  />
            </FormControl>
            <FormControl mr={6} id="retypepassword">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151">Re-Type Password</FormLabel>
              <Input borderRadius="20px" size="lg"  />
            </FormControl>
          </Flex>
        </Box>
        <Flex mt={5} align="center">
          <Text fontSize="18px" fontWeight="600" p={4}>CONTACT</Text>
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
          <Flex>
            <FormControl mr={6} id="address">
              <FormLabel fontSize="16px" fontWeight="500" color="#515151" >Address</FormLabel>
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
        </Box>
        <Flex mt={5} align="center">
          <Text flexShrink={0} fontSize="18px" fontWeight="600" p={4}>ABOUT ME</Text>
          <Divider />
        </Flex>
        <Box p={4}>
          <Text fontSize="16px" fontWeight="500" color="#515151" mb={5}>Tell about you</Text>
          <Textarea borderRadius="20px" style={{border : "1px solid #C2C2C2"}} h="170px" bg="#FBFBFB" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum que laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta su" />
        </Box>
        <Flex mt={5} align="center">
          <Text fontSize="18px" fontWeight="600" p={4}>SKILLS</Text>
          <Divider w="70%" mr={1} />
          <Text fontSize="18px" fontWeight="600" color="#8743DF">+ Add New Skills</Text>
        </Flex>
        <Flex>
          <Flex p={4}  w="50%" justify="space-between">
            <Flex align="center" justify="center" bg="#F3EFF9" w="62px" h="62px" color="#8743DF" borderRadius="18px" fontSize="16px" fontWeight="600">78%</Flex>
            <Flex direction="column">
              <Text fontSize="16px" fontWeight="500">Italian</Text>
              <Slider w="300px" defaultValue={78} min={0} max={100} step={1}>
                <SliderTrack bg="purple.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="#8743DF" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
              </Slider>
            </Flex>
          </Flex>
          <Flex p={4}  w="50%" justify="space-between">
            <Flex align="center" justify="center" bg="#F3EFF9" w="62px" h="62px" color="#8743DF" borderRadius="18px" fontSize="16px" fontWeight="600">65%</Flex>
            <Flex direction="column">
              <Text fontSize="16px" fontWeight="500">Mexican</Text>
              <Slider w="300px" defaultValue={65} min={0} max={100} step={1}>
                <SliderTrack bg="purple.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="#8743DF" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
              </Slider>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Flex p={4}  w="50%" justify="space-between">
            <Flex align="center" justify="center" bg="#F3EFF9" w="62px" h="62px" color="#8743DF" borderRadius="18px" fontSize="16px" fontWeight="600">89%</Flex>
            <Flex direction="column">
              <Text fontSize="16px" fontWeight="500">Indian</Text>
              <Slider w="300px" defaultValue={89} min={0} max={100} step={1}>
                <SliderTrack bg="purple.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="#8743DF" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
              </Slider>
            </Flex>
          </Flex>
          <Flex p={4} w="50%" justify="space-between">
            <Flex align="center" justify="center" bg="#F3EFF9" w="62px" h="62px" color="#8743DF" borderRadius="18px" fontSize="16px" fontWeight="600">94%</Flex>
            <Flex direction="column">
              <Text fontSize="16px" fontWeight="500">Thai</Text>
              <Slider w="300px" defaultValue={94} min={0} max={100} step={1}>
                <SliderTrack bg="purple.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="#8743DF" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
              </Slider>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}