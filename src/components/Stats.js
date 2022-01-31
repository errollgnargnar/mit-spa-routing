import React, {useState, useEffect} from "react";
import Accordion from 'react-bootstrap/Accordion';

export default function Stats() {

    const APItoken = `Y99T2CMZZBPI9Q3DPSR6M6IS8WHV7W454Y`;
    let bnbPriceUrl = `https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=${APItoken}`;

    const [data, setData] = useState(null);        
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function getData() {
            const response = await fetch(bnbPriceUrl);
            const json     = await response.json();
            console.log(json)
            setData(json.result);
            setLoaded(true);
        }
        getData();
    },[])

    console.log('loaded:', loaded, 'data:', data);

    return (
        <div>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>BNB/BTC</Accordion.Header>
                <Accordion.Body>
                {loaded && data.ethbtc}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>BNB/USD</Accordion.Header>
                <Accordion.Body>
                {loaded && `$${data.ethusd}`}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    )
}