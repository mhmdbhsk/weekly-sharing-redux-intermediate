import React from 'react';
import Container from 'components/Container';
import Navbar from 'components/Navbar';
import Header from 'components/Header';

interface FavouritesProps {}

const Favourites = (props: FavouritesProps) => {
  return (
    <div>
      <Container>
        <Header title='Wishlist' />
        <Navbar />
      </Container>
    </div>
  );
};

export default Favourites;
