import React from 'react';
import Container from 'components/Container';
import Navbar from 'components/Navbar';
import Header from 'components/Header';

interface CartProps {}

const Cart = (props: CartProps) => {
  return (
    <div>
      <Container>
        <Header title='Keranjang' />
        <Navbar />
      </Container>
    </div>
  );
};

export default Cart;
