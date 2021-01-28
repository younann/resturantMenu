import React from 'react';
import styled from 'styled-components';

const Mydiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  place-items: inherit;
`;

export default function Categories(props) {
  const filterItems = props.filterItems;

  return (
    <Mydiv>
      <h4
        style={{ marginRight: 30, marginBottom: 40 }}
        onClick={() => {
          filterItems('all');
        }}
      >
        All
      </h4>
      <h4
        style={{ marginRight: 30, marginBottom: 40 }}
        onClick={() => {
          filterItems('breakfast');
        }}
      >
        breakfast
      </h4>
      <h4
        style={{ marginRight: 30 }}
        onClick={() => {
          filterItems('lunch');
        }}
      >
        lunch
      </h4>
      <h4
        style={{ marginRight: 10 }}
        onClick={() => {
          filterItems('shakes');
        }}
      >
        shakes
      </h4>
    </Mydiv>
  );
}
