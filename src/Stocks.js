import Stock1 from './Stock1';
import { ChakraProvider } from '@chakra-ui/react';
import { SimpleGrid, Flex } from '@chakra-ui/react';


function Stocks(){



  const stocks = [
    {
      stock_ticker: 'RY',
      name: 'Royal Bank of Canada'
    },
    {
      stock_ticker: 'BNS',
      name: 'The Bank of Nova Scotia'
    },
    {
      stock_ticker: 'XQQ',
      name: 'iShares NASDAQ 100 Index ETF'
    },
    {
      stock_ticker: 'SU',
      name: 'Suncor Energy Inc.'
    },
    {
      stock_ticker: 'TD',
      name: 'The Toronto-Dominion Bank'
    },
    {
      stock_ticker: 'NTR',
      name: 'Nutrien Ltd.'
    },
    {
      stock_ticker: 'T',
      name: 'TELUS Corporation'
    },
    {
      stock_ticker: 'SHOP',
      name: 'Shopify Inc.'
    },
    {
      stock_ticker: 'ENB',
      name: 'Enbridge Inc.'
    }
  ]

    return(
      <ChakraProvider>
        <Flex w='100%' alignItems='center' justifyContent='center'>
          <SimpleGrid 
            minChildWidth='350px'
            w='100%'
            justifyItems='center'
            >
              {stocks.map((stock, index) => {
                  return (
                      <Stock1 src={require('./Pictures/' + stock.stock_ticker + '.png')} stock_ticker = {stock.stock_ticker} name = {stock.name} key={index}/>
                    );
                  })}
          </SimpleGrid>
        </Flex>
      </ChakraProvider>

    )
}

export default Stocks;