import React, { useEffect, useState } from 'react'
import styled from "styled-components";

const StyledTime = styled.div`
  font-size: 2em;
  color: white;
  font-weight: bold;
  font-family: sans;
`;

function Clock() {
    const [datetime, setDateTime] = useState(Date.now());
    useEffect(()=>{
        const timer = setInterval(()=>{
            setDateTime(Date.now())
        },1000);

        return ()=>{
            clearInterval(timer);
        }
    },[]);


    const date = new Date(datetime);
    const time = date.toLocaleString('en-US', { hour12: true }).split(",").pop();
    const dateString = date.toDateString();
    return (
        <div style={{fontFamily:"sans"}}>
            <StyledTime>{time}</StyledTime>
            <StyledTime>{dateString}</StyledTime>
        </div>
    )
}

export default Clock
