import React, {useState} from 'react';
import Lamp from './Lamp';
import TurnLights from './TurnLights';
import styled from 'styled-components';

const Room = styled.div`
 position: relative;
 width: 500px;
 height: 500px;
 border: 10px solid black;
 margin: 0 auto;
`;

const LightsSwitch = () => {
    const[isLampOneOn, setIsLampOneOn] = useState(true);
    const[isLampTwoOn, setIsLampTwoOn] = useState(false);

    const handleLightSwitchOne = () => setIsLampOneOn(prev => !prev)
    const handleLightSwitchTwo = () => setIsLampTwoOn(prev => !prev)

    return (
      <Room>
          <Lamp lampOn={isLampOneOn} position='left' />
          <Lamp lampOn={isLampTwoOn} position='right' />
          <TurnLights
              name='one'
              callback={handleLightSwitchOne}
              switchOn={isLampOneOn}
              position='left'
          />
          <TurnLights
              name='two'
              callback={handleLightSwitchTwo}
              switchOn={isLampTwoOn}
              position='right'
          />
      </Room>
    );
}
export default LightsSwitch;
