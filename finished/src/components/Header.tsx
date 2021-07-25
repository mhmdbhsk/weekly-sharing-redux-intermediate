import React from 'react';
import { Text, HStack, Stack } from '@chakra-ui/react';
import { Home } from 'assets/icons';

interface HeaderProps {
  title?: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Stack alignItems='center'>
      <HStack alignItems='center' justifyContent='center' minH='64px'>
        <Home />
        <Text fontFamily='heading' fontSize={24}>
          Toko Redux
        </Text>
      </HStack>
      <Text as='h1'>{title}</Text>
    </Stack>
  );
};

export default Header;
