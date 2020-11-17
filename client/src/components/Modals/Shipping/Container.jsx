import React from 'react';
import styled from 'styled-components';
import ShippingContent from './Content.jsx'

const ShippingContainer = (props) => {
  const ShippingContainer = styled.div`
    display: none;/*Hidden by default*/
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.5); /* Black w/ opacity */
  `


  return (
    <ShippingContainer className='shippingContainer'>
      <ShippingContent />
    </ShippingContainer>
  )
}

export default ShippingContainer;