import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import LogoSvg from '../../assets/images/logo_background_gray.svg';
import DoneSvg from '../../assets/images/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles';

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function SchedulingComplete() {
  const { width } = useWindowDimensions();

  // const navigation = useNavigation();
  // const route = useRoute();
  // const { title, message, nextScreenRoute } = route.params as Params;

  // function handleConfirm() {
  //   navigation.navigate(nextScreenRoute);
  // }

  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}