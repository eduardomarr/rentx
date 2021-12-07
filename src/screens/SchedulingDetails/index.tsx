import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Acessory from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { ImageSlider } from '../../components/ImageSlider';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import speedSvg from '../../assets/images/speed.svg';
import accelerationSvg from '../../assets/images/acceleration.svg';
import forceSvg from '../../assets/images/force.svg';
import gasolineSvg from '../../assets/images/gasoline.svg';
import exchangeSvg from '../../assets/images/exchange.svg';
import peopleSvg from '../../assets/images/people.svg';

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
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

interface SchedulingDetailsProps {
}

export function SchedulingDetails({ }: SchedulingDetailsProps) {

  const theme = useTheme();

  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('SchedulingComplete');
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ 580 x3 diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ 2900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>

  );
};