import React from 'react';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { Calendar } from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';

import ArrowSvg from '../../assets/images/arrow.svg';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';

interface SchedulingProps {
}

export function Scheduling({ }: SchedulingProps) {

  const theme = useTheme();

  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails');
  };


  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <BackButton
          onPress={() => { }}
          color={theme.colors.shape}
        />
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>

    </Container>
  );
};