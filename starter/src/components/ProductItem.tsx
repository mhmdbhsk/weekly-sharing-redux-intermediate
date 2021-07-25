import React from 'react';
import { Text, Flex, Stack, Button, HStack } from '@chakra-ui/react';
import currencyFormatter from 'utils/currencyFormatter';
import { Favourites } from 'assets/icons';

interface ProductItemProps {
  data: Item;
}

const ProductItem = ({ data }: ProductItemProps) => {
  return (
    <Flex
      w='100%'
      boxShadow='#0000001a 0px 0px 15px 0px'
      borderRadius='8px'
      mb={5}
      p={4}
      alignItems='center'
      justifyContent='space-between'
    >
      <Stack>
        <Text fontFamily='g_semibold'>{data.title}</Text>
        <HStack>
          <Text>{currencyFormatter(data.price)}</Text>
          <Text color='blackAlpha.600'>/{data.unit}</Text>
        </HStack>
      </Stack>
      <HStack>
        <Button>
          <Favourites />
        </Button>
        <Button disabled={data.stock == 0 ? true : false}>Beli</Button>
      </HStack>
    </Flex>
  );
};

export default ProductItem;
