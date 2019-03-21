import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Layout from '../../layout';
import { H2 } from '../../components';

const About = ({ id }) => {
  const [pageData, setData] = useState({
    title: {
      rendered: '',
    },
    content: {
      rendered: '',
    },
    date: '',
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}pages/${id}`)
      .then(({ data }) => setData(data))
      .catch((e) => {
        console.log('log error w/ rocketlog', e);
      });
  }, []);
  const { title, content } = pageData;
  return (
    <Layout>
      <H2 dangerouslySetInnerHTML={{ __html: title.rendered }} />
      <p dangerouslySetInnerHTML={{ __html: content.rendered }} />
    </Layout>
  );
};

About.propTypes = {
  id: PropTypes.number.isRequired,
};

export default About;
