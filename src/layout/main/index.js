import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Header, Subscribe } from '../../components';


const Main = ({ children, ...rest }) => {
  const { REACT_APP_NAME } = process.env;
  return (
    <Container>
      <Header title={REACT_APP_NAME} />
      {React.Children.map(children, child => React.cloneElement(child, rest))}
      <Subscribe />
    </Container>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
