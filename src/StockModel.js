
import React from 'react'
import Stocks from './Stocks'
import Logos from './Logos'
import './App.css';
import { ChakraProvider, Flex} from '@chakra-ui/react'
import {Image} from '@chakra-ui/react' 



function StockModel() {
  return (
    <>
      <ChakraProvider>
        <Flex 
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          backgroundColor='black'
          minW='375px'
          >
          <Image margin = '40px' src = {require('./Pictures/title.png')}/>
          <Stocks /> 
          <Logos />
        </Flex>
      </ChakraProvider>
    </>
    
  );
}
export default StockModel;
