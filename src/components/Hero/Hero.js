import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        Samia's Portfolio
      </SectionTitle>
      <SectionText>
        This is an insight to some of the projects I have worked on.
      </SectionText>
      <Button onClick={() => window.location = 'http://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;