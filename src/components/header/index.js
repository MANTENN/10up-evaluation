import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
  text-align:center;
  padding: 1em 0; 
`;

const Header = ({ title }) => <H1>{title}</H1>;

Header.propTypes = {
  title: PropTypes.objectOf(PropTypes.shape({
    rendered: PropTypes.string,
  })),
};
Header.defaultProps = {
  title: {
    rendered: '',
  },
};

export default Header;
