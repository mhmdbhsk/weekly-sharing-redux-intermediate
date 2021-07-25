import React from 'react';
import { Box, Grid, GridItem, Icon, Text, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/dist/client/router';
import { Home, Favourites, Cart } from 'assets/icons';

interface NavigationBarProps {}

const menu = [
  {
    id: 1,
    route: '/',
    title: 'Beranda',
    icon: Home,
  },
  {
    id: 2,
    route: '/favourites',
    title: 'Favorit',
    icon: Favourites,
  },
  {
    id: 3,
    route: '/cart',
    title: 'Keranjang',
    icon: Cart,
  },
];

const NavigationBar = ({}: NavigationBarProps) => {
  const { pathname, push } = useRouter();
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setValue(0);
        break;
      case '/favourites':
        setValue(1);
        break;
      case '/cart':
        setValue(2);
      default:
        break;
    }
  }, [pathname]);

  return (
    <Box
      maxH='70px'
      bottom={0}
      position='fixed'
      maxW={768}
      w='100%'
      h='100%'
      bg='white'
      display='flex'
      alignItems='center'
      borderTopLeftRadius={15}
      borderTopRightRadius={15}
      boxShadow='#0000001a 0px 0px 15px 0px'
    >
      <Grid templateColumns='repeat(3, 1fr)' h='100%' w='100%'>
        {menu.map((item, index) => (
          <GridItem
            key={index}
            onClick={() => push(item.route)}
            h='100%'
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='center'
            cursor='pointer'
            _hover={{ bg: 'blackAlpha.50' }}
            color={value === index ? 'green.400' : 'black'}
            transition='.3s all'
            borderTopLeftRadius={index === 0 ? '15px' : 0}
            borderTopRightRadius={index === menu.length - 1 ? '15px' : 0}
          >
            <Icon as={item.icon} w={6} h={6} />
            <Text fontSize='xs' mt={1} fontFamily='g_semibold'>
              {item.title}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default NavigationBar;
