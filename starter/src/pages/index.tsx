import React from 'react';
import Container from 'components/Container';
import Navbar from 'components/Navbar';
import Header from 'components/Header';
import { Box } from '@chakra-ui/react';
import ProductItem from 'components/ProductItem';

interface HomeProps {
  data: Data;
}

const Home = ({ data = [] }: HomeProps) => {
  return (
    <div>
      <Container>
        <Header />
        <Box p={5}>
          {data.map((datum) => (
            <ProductItem data={datum} key={datum.id} />
          ))}
        </Box>
        <Navbar />
      </Container>
    </div>
  );
};

export default Home;

export async function getServerSideProps(ctx) {
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data } };
}
