
import { ChakraProvider } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import BasicFinancials from './BasicFinancials';
function Stock1(props){

  return(
    <>
    <ChakraProvider>
        <Flex
            w='350px'
            padding='10px' 
            margin= '10px'
            borderRadius='30px'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            fontFamily='Inter'
            >
            <Text
                color='white'
                as='b'
                fontSize='20pt'
                textAlign='center'
                >{props.stock_ticker}.TO</Text>
                    
            <Text
                color = 'gray'
                fontSize='10pt'
                textAlign='center'
            >{props.name}</Text>

            <Image
                src = {props.src}
                alt='chart'
                boxSize='350px'
                //objectFit = 'cover'
                margin='15px 10px 0px 10px'
                
            />
            <BasicFinancials ticker = {props.stock_ticker}></BasicFinancials>
        </Flex>
    </ChakraProvider>
    </>
  )
}

  


export default Stock1;




