import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header } from './styled';
import Wrap from './../../Wrap';

const Categories = styled.p`
  font-size: 18px;
  font-weight: lighter;
`;
const Category = styled(Link)`
  font-size: 16px;
  color: #636363;
  margin-left: 8px;
`;
const Places = styled.div`
  margin-bottom: 16px;
`;
const Place = styled(Link)`
  display: block;
  font-size: 14px;
  color: #636363;
  font-weight: lighter;
  margin-bottom: 2px;
`;
export default () => (
  <Wrap className="col-xs">
    <Header>Explore other options in and around Armenia</Header>
    <Categories>
      More places to stay in Armenia:
      <Category to="#">Apartments</Category> ·
      <Category to="#">Houses</Category> ·
      <Category to="#">Bed & Breakfasts</Category> ·
      <Category to="#">Lofts</Category> ·
      <Category to="#">Villas</Category>
    </Categories>
    <div className="row">
      <Places className="col-xs-12 col-sm-4">
        <Place to="#">Cartagena Vacation Rentals</Place>
        <Place to="#">Bucaramanga</Place>
        <Place to="#">Manuel Antonio</Place>
        <Place to="#">Cartagena De Indias (Distrito Turistico Y Cultural)</Place>
        <Place to="#">Quito</Place>
        <Place to="#">Santander de Quilichao</Place>
      </Places>
      <Places className="col-xs-12 col-sm-4">
        <Place to="#">San Andrés Vacation Rentals</Place>
        <Place to="#">Bogota</Place>
        <Place to="#">Santa Marta (Distrito Turistico Cultural E</Place>
        <Place to="#">Historico)</Place>
        <Place to="#">Rionegro</Place>
        <Place to="#">Anapoima</Place>
        <Place to="#">Puerto Rico</Place>
      </Places>
      <Places className="col-xs-12 col-sm-4">
        <Place to="#">Willemstad Vacation Rentals</Place>
        <Place to="#">Cali</Place>
        <Place to="#">Chia</Place>
        <Place to="#">Ibague</Place>
        <Place to="#">Medellin</Place>
        <Place to="#">Tabio</Place>
      </Places>
    </div>
  </Wrap>
);
