import React from 'react'
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 75px);
  width: 100vw;
`;
const OverlayBar = styled.div`
  position: fixed;
  top: 0;
  z-index: 1201;
  height: 54px;
  width:100vw;
  background-color: rgba(255, 255, 255, 0.6);
`;
const About = (props) => {
  const adapost = props.markers.filter(marker => marker.category === "Centre rezidenţiale de îngrijire şi asistenţă pentru persoanele fără adăpost")
  const markersPerDistricts = adapost.reduce((a,b) => { a[b.jud] = (a[b.jud] || 0) + 1; return a }, [])
  console.log(adapost, markersPerDistricts);
  return (
    <Container>
      <OverlayBar>
        <FlatButton
          label="Inapoi"
          primary={true}
          onTouchTap={props.handleBack}
          style={props.open ? {marginLeft:322,marginTop:8,color:'#333333'} : {marginLeft:64,marginTop:8, color:'#333333'}}
          icon={<NavigationArrowBack color='#333333' />}
        />
      </OverlayBar>

    </Container>
  )
}



export default About
