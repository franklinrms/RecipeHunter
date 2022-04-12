import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Cards from './Cards';

const Container = styled.div`
  display: flex;
  width: 45%;
`;
export default function BootstrapCarousel({ items, type }) {
  const items1 = [];
  const items2 = [];

  const history = useHistory();

  const reditectTo = (index) => {
    history.push(`/${type === 'Meal' ? 'food' : 'drink'}s/${items2[index][`id${type}`]}`);
  };

  items.forEach((item, index) => {
    if (index % 2 === 0) {
      item.indexObj = index;
      items1.push(item);
    } else {
      item.indexObj = index;
      items2.push(item);
    }
  });

  return (
    <Carousel>
      {items1.map((item, index) => (
        <Carousel.Item
          key={ item[`str${type}`] }
          style={ { width: '100vh' } }
        >
          <Container>
            <Cards
              key={ item[`str${type}`] }
              name={ item[`str${type}`] }
              thumb={ item[`str${type}Thumb`] }
              clickCard={ () => reditectTo(index) }
            />
            <Cards
              key={ items2[index][`str${type}`] }
              name={ items2[index][`str${type}`] }
              thumb={ items2[index][`str${type}Thumb`] }
              clickCard={ () => reditectTo(index) }
            />
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

BootstrapCarousel.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  type: PropTypes.string.isRequired,
};
