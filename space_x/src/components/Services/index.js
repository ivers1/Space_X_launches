import React from 'react';
import Icon1 from '../../images/33944890310.png';
import Icon2 from '../../images/33944890310.png';
import Icon3 from '../../images/33944890310.png';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src= { Icon1 }/>
                <ServicesH2>Reduce Expencrs</ServicesH2>
                <ServicesP>kasjdgai ljasjgaijgj piashdgpaio</ServicesP>
            
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src= { Icon2 }/>
                <ServicesH2>Reduce Expencrs</ServicesH2>
                <ServicesP>kasjdgai ljasjgaijgj piashdgpaio</ServicesP>
            
            </ServicesCard>
        <ServicesCard>
                <ServicesIcon src= { Icon3 }/>
                <ServicesH2>Reduce Expencrs</ServicesH2>
                <ServicesP>kasjdgai ljasjgaijgj piashdgpaio</ServicesP> 
            </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;