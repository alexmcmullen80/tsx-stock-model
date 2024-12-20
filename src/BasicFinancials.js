
import { ChakraProvider } from '@chakra-ui/react';
import {useState, useEffect} from 'react';
import { Text } from '@chakra-ui/react';



function BasicFinancials(props){

    const [peRatio, setpeRatio] = useState([]);
    const [psRatio, setpsRatio] = useState([]);
    const [mktCap, setmktCap] = useState([]);
    const [divYield, setdivYield] = useState([]);
    const [beta, setBeta] = useState([]);
    const [eps, setEPS] = useState([]);


  useEffect(() => {
    async function getBasicFinancials() { //fetch from finnhub API

        var tick = props.ticker;
        const apikey = "cq06ur1r01qkg1be72r0cq06ur1r01qkg1be72rg"
        if(tick === 'XQQ'){
            tick = 'NDAQ';
        }
        //process.env.REACT_APP_API_KEY
        const api_call = "https://finnhub.io/api/v1/stock/metric?symbol=" + tick + "&metric=all&token=" + apikey + "";
        const response = await fetch(api_call);
        const data = await response.json();
        console.log(data);
        if(data["metric"]["peTTM"] == null){
            setpeRatio("-");
        }else{
            setpeRatio(data["metric"]["peTTM"].toFixed(2));
        }
        if(data["metric"]["psTTM"] == null){
            setpsRatio("-");
        }else{
            setpsRatio(data["metric"]["psTTM"].toFixed(2));
        }
        if(data["metric"]["marketCapitalization"] == null){
            setmktCap("-");
        }else{
            setmktCap(data["metric"]["marketCapitalization"].toFixed(0));
        }
        if(data["metric"]["dividendYieldIndicatedAnnual"] == null){
            setdivYield("-");
        }else{
            setdivYield(data["metric"]["dividendYieldIndicatedAnnual"].toFixed(2) + '%');
        }
        if(data["metric"]["beta"] == null){
            setBeta("-");
        }else{
            setBeta(data["metric"]["beta"].toFixed(2));
        }
        if(data["metric"]["epsTTM"] == null){
            setEPS("-");
        }else{
            setEPS(data["metric"]["epsTTM"].toFixed(2));
        }
    }
    getBasicFinancials();
    
  }, [props.ticker]);
  return(
    <ChakraProvider>
            <table width = '80%' style = {{marginLeft: '37px'}}>
                <tbody>
                    <tr>
                        <td><Text color = 'gray' fontSize='10pt' textAlign='left'>P/E</Text></td>
                        <td width = '1%' style = {{paddingRight: '10px'}}><Text color = 'gray' fontSize='10pt' textAlign='right'>{peRatio}</Text></td>
                        <td style = {{paddingLeft: '10px', borderLeft: '1px solid gray'}}><Text color = 'gray' fontSize='10pt' textAlign='left'>Yield</Text></td>
                        <td><Text color = 'gray' fontSize='10pt' textAlign='right'>{divYield}</Text></td>
                    </tr>
                    <tr>
                        <td><Text color = 'gray' fontSize='10pt' textAlign='left'>P/S</Text></td>
                        <td style = {{paddingRight: '10px'}}><Text color = 'gray' fontSize='10pt' textAlign='right'>{psRatio}</Text></td>
                        <td style = {{paddingLeft: '10px', borderLeft: '1px solid gray'}}><Text color = 'gray' fontSize='10pt' textAlign='left'>Beta</Text></td>
                        <td><Text color = 'gray' fontSize='10pt' textAlign='right'>{beta}</Text></td>
                    </tr>
                    <tr>
                        <td><Text color = 'gray' fontSize='10pt' textAlign='left'>Mkt Cap</Text></td>
                        <td style = {{paddingRight: '10px'}}><Text color = 'gray' fontSize='10pt' textAlign='right'>{mktCap}M</Text></td>
                        <td style = {{paddingLeft: '10px', borderLeft: '1px solid gray'}}><Text color = 'gray' fontSize='10pt' textAlign='left'>EPS</Text></td>
                        <td><Text color = 'gray' fontSize='10pt' textAlign='right'>{eps}</Text></td>
                    </tr>
                </tbody>
            </table>
    </ChakraProvider>
  )
}

export default BasicFinancials;
