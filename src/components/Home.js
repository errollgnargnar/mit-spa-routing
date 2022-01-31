import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card'

export default function Home() {

    const APItoken = `Y99T2CMZZBPI9Q3DPSR6M6IS8WHV7W454Y`;
    let validatorUrl = `https://api.bscscan.com/api?module=stats&action=validators&apikey=${APItoken}`;

    const [data, setData] = useState([]);        
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function getData() {
            const response = await fetch(validatorUrl);
            const json     = await response.json();
            setData(json.result);
            setLoaded(true);
        }
        getData();
    },[])

    console.log('loaded:', loaded, 'data:', data);

    const dataMap = data.map((ob, i) => (
        <Card border="primary" style={{ width: '18rem' }} key={i}>
        <Card.Header>BSC Top Validator #{i+1}</Card.Header>
        <Card.Body>
          <Card.Title>Address: {ob.validatorAddress}</Card.Title>
          <Card.Text>
            Voting Power Proportion: {ob.validatorVotingPowerProportion}
          </Card.Text>
        </Card.Body>
        </Card>
    ))

    return (
        <div>
            {loaded && dataMap}
        </div>
    )
}