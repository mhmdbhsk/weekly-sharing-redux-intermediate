import React from 'react';
import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from '@chakra-ui/react';

interface ContainerProps extends ChakraContainerProps {}

const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <ChakraContainer
      maxW='container.md'
      position='relative'
      minH='100vh'
      height='100%'
      padding={0}
      {...rest}
    >
      {children}
    </ChakraContainer>
  );
};

export default Container;
