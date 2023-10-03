import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import { useState } from 'react'

import App from '../components/App';

const HomePage = ({songs}) => {
  return <App songs={songs} />;
};

export const getServerSideProps = async () => {
  // Fetch songs data from the server-side route or database
  const response = await fetch('http://127.0.0.1:8000:3000/api/getSongs');
  const songs = await response.json();

  return {
    props: {
      songs,
    },
  };
};

export default HomePage;

