import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface CarDetailsProps {
  children: ReactNode;
}

function CarDetails({ children }: CarDetailsProps) {
  return (
    <Container>
      <Text>CarDetails</Text>
      {children}
    </Container>
  );
};

export default CarDetails;
