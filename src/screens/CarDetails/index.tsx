import React from 'react';
import Acessory from '../../components/Acessory';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/images/speed.svg';
import accelerationSvg from '../../assets/images/acceleration.svg';
import forceSvg from '../../assets/images/force.svg';
import gasolineSvg from '../../assets/images/gasoline.svg';
import exchangeSvg from '../../assets/images/exchange.svg';
import peopleSvg from '../../assets/images/people.svg';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer
} from './styles';

export function CarDetails() {

  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('Scheduling');
  };


  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={['https://cdn.wheel-size.com/automobile/body/audi-a5-2019-2022-1612424966.694053.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>lamborguini</Brand>
            <Name>hrricane</Name>
          </Description>

          <Rent>
            <Period>ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>

        </Details>

        <Acessories>
          <Acessory name="380km/h" icon={speedSvg} />
          <Acessory name="3.2s" icon={accelerationSvg} />
          <Acessory name="800 HP" icon={forceSvg} />
          <Acessory name="Gasolina" icon={gasolineSvg} />
          <Acessory name="Auto" icon={exchangeSvg} />
          <Acessory name="2 pessoas" icon={peopleSvg} />
        </Acessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo
          carro para quem gosta de acelerar.
        </About>

      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
      </Footer>


    </Container>
  );
};