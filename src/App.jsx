import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Box, Flex, useDisclosure } from "@chakra-ui/react"

import Dashboard from './screens/Dashboard';
import ChefOnBoarding from './screens/ChefOnboarding';
import Profile from './screens/Profile';
import AddItems from './screens/AddItems';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Router>
      <Flex direction="row" minH="100vh">
        <Sidebar mini={isOpen} />
        <Box minH="full" w={`calc(100% - ${isOpen ? 72 : 240}px)`}>
          <Header onToggle={onToggle} />
          <Box bg="gray.50" borderRadius="3xl" minH="90%" p={8} w="full">
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/chefonboarding' component={ChefOnBoarding} />
              <Route exact path='/additems' component={AddItems} />
              <Route exact path='/profile' component={Profile} />
            </Switch>
          </Box>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;