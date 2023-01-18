import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';

const Content = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: `https://www.scorebat.com/video-api/v3/feed/?token=NTEzMDhfMTY3MzkxMzA4Ml84YTJmNTY3NWE4NjY5NWU3ZTlhZDhiNzNkMGYzYjM5N2QzMTg1ZDFh`
        }).then(res => {
            console.log(res.data);
            setData(res.data.response)
        }).catch(e => console.log(e));
    }, []);
    return (
    <div >
        <div id='card'>
    {data.map((item) => (
        <Card style={{ width: '18rem' ,backgroundColor:'grey'}} key={item.title} >
            <Card.Img variant="top" src={item.thumbnail} alt="ops" />
            <Card.Body style={{opacity: "0.5"}}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.competition}
                </Card.Text>
                <Button style={{backgroundColor:'#CD9D2B'}} onClick={()=> window.open(item.matchviewUrl)} >Go View</Button>
            </Card.Body>
        </Card>
    ))}</div>
</div>
)
}

export default Content