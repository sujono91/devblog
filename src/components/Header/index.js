import React from 'react';
import userConfig from '../../../config';
import styled from 'styled-components';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import H2 from '../H2';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

const LI = styled.li`
  text-align: left;
`;

function Header({ config }) {
  const { author, description, social } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <H1><Link to="/">{author}</Link></H1>
        <H2>{description}</H2>
        <div style={{fontSize: '15px'}}>
          <ul>
            <LI>Tarot Reading: Love, Money, Career, Education, Health, Family, and Personality</LI>
            <LI>Feng Shui</LI>
            <LI>Face Reading</LI>
            <LI>Numerology</LI>
            <LI>Four Pillars Calculation (Ba Zi)</LI>
            <LI>Amulets, Gemstones, & Crystal</LI>
          </ul>
        </div>
        <H2>Address</H2>
        <P>Tiong Bahru Rd</P>
        <H2>Phone No</H2>
        <P>+6592375659</P>
        {social &&
          <Social
            facebook={social.facebook}
            linkedin={social.linkedin}
          />
        }
      </Wrapper>
    </Container> 
  );
}

export default Header;