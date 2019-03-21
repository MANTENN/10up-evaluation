import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../layout';
import { Post } from '../../components';

const Home = () => {
  const [blogPosts, setBlogData] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}posts`).then(({ data }) => setBlogData(data)).catch((e) => {
      console.log('same with other console logs...', e);
    });
  }, []);
  return (
    <Layout>
      <>
        {blogPosts.map(({ id, ...rest }) => <Post key={id} {...rest} id={id} />)}
      </>
    </Layout>
  );
};

export default Home;
