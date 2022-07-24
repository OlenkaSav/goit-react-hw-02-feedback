import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <TitleStyled>{title}</TitleStyled>
      {children}
    </SectionStyled>
  );
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};

const SectionStyled = styled.section`
  padding: 20px;
  text-align: center;
`;
const TitleStyled = styled.h2`
  font-size: 40px;
  text-shadow: 5px 5px 3px #5793eb;
`;
export default Section;
