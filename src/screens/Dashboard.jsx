import React, { useState } from 'react'

import { Circle, Avatar, IconButton, Switch, Select, Spacer, Center, Text, Divider, Box, HStack, VStack, Wrap, WrapItem, Flex, Grid, GridItem, Heading, Button, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, } from "@chakra-ui/react"
import { DragHandleIcon, PhoneIcon, ChevronDownIcon, HamburgerIcon, SearchIcon, EmailIcon } from '@chakra-ui/icons'
import Chart from "react-apexcharts";

export default function() {
  const [series, setSeries] = useState
    ([{
      name: 'Hobby Chef’s', data: [31, 40, 28, 62, 42]
    }, {
      name: 'Intermediate', data: [11, 32, 45, 32, 65]
    }]);
  const [options, setOptions] = useState({
    chart: {
      height: 450,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  });


  return (
    <VStack spacing={12}>
      <Grid
        templateRows="repeat(3, minmax(1fr, 160px))"
        templateColumns="repeat(4, 1fr)"
        gap={6}
        w="full"
      >
        <GridItem h="160px" colSpan={1} borderRadius="xl" boxShadow="md" bg="white" p={4} borderBottom="4px solid #2BC155">
          <Flex justify="space-between" align="center">
            <Stat>
              <Text fontWeight="600" color="#2BC155" fontSize="54px">43</Text>
              <Text color="#0F0F0FB2" fontSize="18px" >Active Campaigns</Text>
            </Stat>
            <Box boxSize="69px" bg="#E9FFEF" borderRadius="2xl" />
          </Flex>
        </GridItem>
        <GridItem h="160px" colSpan={1} borderRadius="xl" boxShadow="md" bg="white" p={4} borderBottom="4px solid #3F9AE0">
          <Flex justify="space-between" align="center">
            <Stat>
              <Text fontWeight="600" color="#3F9AE0" fontSize="54px">27</Text>
              <Text color="#0F0F0FB2" fontSize="18px" >Pending Requests </Text>
            </Stat>
            <Box boxSize="69px" bg="#E0F2FF" borderRadius="2xl" />
          </Flex>
        </GridItem>
        <GridItem h="160px" colSpan={1} borderRadius="xl" boxShadow="md" bg="white" p={4} borderBottom="4px solid #FF9B52">
          <Flex justify="space-between" align="center">
            <Stat>
              <Text fontWeight="600" color="#FF9B52" fontSize="54px">52</Text>
              <Text color="#0F0F0FB2" fontSize="18px" >Total Chef’s</Text>
            </Stat>
            <Box boxSize="69px" bg="#FFF0EB" borderRadius="2xl" />
          </Flex>
        </GridItem>
        <GridItem colSpan={1} rowSpan={3} borderRadius="xl" boxShadow="md" bg="white">
          <Flex direction="column">
          <Box m={4}>
            <Center><Avatar size="xl" name="Christian Nwamba" src="https://bit.ly/code-beast" /></Center>
            <Center mt={5} fontSize="22px" fontWeight="500" lineHeight="33px">Sourabh Lodha</Center>
            <Center color="rgba(0, 0, 0, 0.7)" fontSize="16px" >H4Hungry</Center>
            <Flex mt={8} mb={4} justify="space-around">
              <VStack><Flex align="center" justify="center" w="49px" h="49px" borderRadius="38px" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.13)" bg="#E78123"><Text color="white" fontSize="14px" fontWeight="600" >86%</Text></Flex><Text color="#787878" fontSize="14px">New Download’s</Text></VStack>
              <VStack><Flex align="center" justify="center" w="49px" h="49px" borderRadius="38px" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.13)" bg="#2AB251"><Text color="white" fontSize="14px" fontWeight="600" >56%</Text></Flex><Text color="#787878" fontSize="14px">SEO </Text></VStack>
              <VStack><Flex align="center" justify="center" w="49px" h="49px" borderRadius="38px" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.13)" bg="#1A85C2"><Text color="white" fontSize="14px" fontWeight="600" >48%</Text></Flex><Text color="#787878" fontSize="14px">New Visitor’s</Text></VStack>
            </Flex>
          </Box>
          <Divider />
          <Box m={4}>
            <HStack py={2}>
              <Text fontSize="18px" fontWeight="500">Recent Activities</Text>
            </HStack>
            {Array.from({length:2}).map((_,i)=>(
              <HStack w="full" spacing={2} flexShrink={0} py={2}>
                <Box minW="48px" h="48px" bg="#F3EAFF" borderRadius="20px"/>
                <Box>
                  <Text color="#616161" fontSize="14px">Your application has accepted in 3 Vacancy</Text>
                  <Text color="#aeaeae" fontSize="14px">21 hours ago</Text>
                </Box>
              </HStack>
            ))}
          </Box>
        </Flex>
        <Circle size="56px" bg="white" boxShadow="0px 12px 24px #0000003f" pos="relative" bottom="-16px" left="calc(50% - 28px)"><Text fontSize="24px" fontWeight="700">↓</Text></Circle>
        </GridItem>
        <GridItem colSpan={3} rowSpan={2} borderRadius="xl" boxShadow="md" bg="white" p={6} >
          <Flex align="center" mb={4}>
            <Box>
              <Text fontSize="20px" fontWeight="500">H4Hungry Chef's</Text>
            </Box>
            <Spacer />
            <HStack spacing={3} alignItems="center">
              <Text fontSize="14px" fontWeight="500" color="#5C5C5C">Application Sent</Text>
              <Switch defaultChecked="true" colorScheme="purple"></Switch>
              <Text fontSize="14px" fontWeight="500" color="#5C5C5C">Interviews</Text>
              <Switch defaultChecked="true" colorScheme="purple"></Switch>
              <Text fontSize="14px" fontWeight="500" color="#5C5C5C">Rejected</Text>
              <Switch colorScheme="purple"></Switch>
              <Select borderRadius="15px" placeholder="This month" w="150px">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </HStack>
          </Flex>
          <Chart options={options} series={series} type="area" height={300} />
        </GridItem>
      </Grid>
      <Box w="full">
        <Flex justify="space-between">
          <Text fontSize="20px" fontWeight="500" lineHeight="30px">Market Place Avenue</Text>
          <Button colorScheme="purple" borderRadius="15px" variant="outline">View more</Button>
        </Flex>
        <HStack spacing={6} p={2} mt={4} overflowX="auto">
          {Array.from({ length: 3 }).map((_, i) => (
            <Box boxShadow="md" borderRadius="xl" bg="white" flexShrink={0} key={i}>
              <Flex m={4} align="center">
                <Box mr={5} boxSize="80px" bg="#D3D3D3" borderRadius="2xl" />
                <Flex direction="column" align="space-between">
                  <Text mb={3} fontSize="20px" fontWeight="500" lineHeight="30px"> New Shop's </Text>
                  <Flex justify="space-between">
                    <Text mr={8} fontSize="15px" color="#797979" fontWeight="500" lineHeight="24px">H4Hungry Shop's</Text>
                    <Button fontSize="15px" fontWeight="600" lineHeight="24px" variant="link" color="#8743DF">+ Add Shop</Button>
                  </Flex>
                </Flex>
              </Flex>
              <Divider mb={3} />
              <Box p={2}>
                <Flex pb={2} justify="space-between" m={2}>
                  <Flex align="center">
                    <SearchIcon mr={2} />
                    <Text fontSize="16px" fontWeight="500" lineHeight="24px" >$14,000 - $25,000</Text>
                  </Flex>
                  <Text fontSize="16px" color="#C2C2C2" lineHeight="24px">/monthly </Text>
                </Flex>
                <Flex pb={2} justify="space-between" m={2}>
                  <Flex align="center">
                    <SearchIcon mr={2} />
                    <Text fontSize="16px" fontWeight="500" lineHeight="24px" >Delhi, India</Text>
                  </Flex>
                  <Text fontSize="16px" color="#C2C2C2" lineHeight="24px">View Maps</Text>
                </Flex>
                <Flex pb={2} justify="space-between" m={2}>
                  <Flex align="center">
                    <SearchIcon mr={2} />
                    <Text fontSize="16px" fontWeight="500" lineHeight="24px" >Subscriptions </Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          ))}
        </HStack>
      </Box>
      <Box w="full">
        <Flex justify="space-between">
          <Text fontSize="20px" fontWeight="500" lineHeight="30px">Shop's</Text>
          <Button colorScheme="purple" borderRadius="15px" variant="outline">View more</Button>
        </Flex>
        <Wrap mt={5} spacing={6}>
          {Array.from({ length: 12 }).map((_, i) => (
            <WrapItem boxSize="180px" boxShadow="md" borderRadius="xl" bg="white" key={i}>
              <Flex w="full" h="full" direction="column" justify="center" align="center" p={4}>
                <Box boxSize="60px" borderRadius="2xl" bg="#D3D3D3" />
                <Spacer />
                <Text fontSize="14px" fontWeight="600" >Herman-Carter</Text>
                <Text fontSize="14px" fontWeight="500" color="#BFBFBF" style={{ marginTop: '0 !important' }}>Pharmacy</Text>
                <Text fontSize="14px" fontWeight="500" color="#8743DF" style={{ marginTop: '0 !important' }}>Vaatika, GGN</Text>
              </Flex>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </VStack>
  )
}
