import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import clipboardCopy from 'clipboard-copy';

const Container = styled.div`

  align-items: center;
  justify-items: center;
  p {
    font-size: 14px;
    margin: 0;
    color: #f2f2f2;
    position: absolute;
    pointer-events: none;
    margin-top: 50px;
  }
`;
const Share = styled.button`
  background-color: transparent ;
  border: none;
  padding: 5px;
  margin-left: 5px;
  margin-top: 11px;
  color: #AABAC1;
  font-size: 24px;
  & :hover, :active  {
    color: #D62D51;
  }
`;

export default function ShareButton({ type, id }) {
  const [click, setClick] = useState(false);
  return (
    <Container>
      {click && <p>Link copied!</p>}
      <Share
        type="button"
        onClick={ () => {
          clipboardCopy(
            `http://localhost:3000/${type}s/${id}`,
          );
          setClick(!click);
        } }
      >
        <i className="fi fi-ss-share" />
      </Share>
    </Container>
  );
}
ShareButton.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
