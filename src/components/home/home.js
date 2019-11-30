import React from 'react'
import styled from 'styled-components'

import HomeNav from './homeNav'
import HomeInfo from './homeInfo'
import ProfileLinks from '../common/profileLinks'

const Div = styled.div`
      display:flex;       
      width:100%;      
      flex-direction:column;               
      align-items:center;         
      background-color:#60a677;
      background:linear-gradient(to bottom,#60a677,#226051,#226051,#60a677);
`      
const InfoDiv = styled.div`
      display:flex;
      justify-content:center;
      align-items:center;
      width:45%;            
`

function Home(){
    return(
        <Div style={{height:window.innerHeight}}>               
            <HomeNav/>                        
            <InfoDiv style={{height:window.innerHeight*.8}}>
                <HomeInfo/>
            </InfoDiv>
            <ProfileLinks iconSize={22} width="320px"/>
        </Div>
    )
}

export default Home;