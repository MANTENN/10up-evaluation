import React, { useState } from "react";
import PropTypes from "prop-types";
import { Collapse } from "reactstrap";
import styled from "styled-components";
import Moment from "react-moment";
import { H2 as baseH2 } from "../index.js";

const MetaData = styled.div`
  color: ${({ theme }) => theme.gray};
  display: flex;
  flex-flow: row wrap;
  padding: 1em 0;
`;
const Container = styled.a`
    display: block;
    padding: 1em;
    border-top: 1px solid ${({ theme }) => theme.lightGray};
    cursor: pointer;
    &:last-child {
        border-bottom 1px solid ${({ theme }) => theme.lightGray};
    }
`;

const H2 = styled(baseH2)`
  margin-bottom: 0;
  position: relative;
  padding-left: 1.5rem;
  &.open:before {
    transform: rotate(90deg);
  }
  &:before {
    content: "";
    position: absolute;
    top: 0.3rem;
    left: 0;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;

    border-left: 18px solid ${({ theme }) => theme.orange};
    transition: transform 0.15s ease;
  }
`;

const Post = ({ title, excerpt, date }) => {
  const [isOpen, toggleState] = useState(false);
  const toggleAccordion = () => toggleState(!isOpen);
  return (
    <Container onClick={toggleAccordion}>
      <H2
        className={isOpen && "open"}
        dangerouslySetInnerHTML={{ __html: title.rendered }}
      />
      <Collapse isOpen={isOpen}>
        <MetaData>
          <Moment format="MMMM D, Y">{date}</Moment>
        </MetaData>
        <p dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
      </Collapse>
    </Container>
  );
};

const renderedShape = PropTypes.shape({
  rendered: PropTypes.string
});

Post.propTypes = {
  title: PropTypes.objectOf(renderedShape).isRequired,
  content: PropTypes.objectOf(renderedShape).isRequired,
  date: PropTypes.string
};
Post.defaultProps = {
  date: ""
};

export default Post;
