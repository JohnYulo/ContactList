import React, { FC } from 'react';
import { Container } from 'react-bootstrap';

const Header: FC = () => {
  return (
    <header>
      <Container className="d-flex justify-content-center">
        <h2>Klaveness Shore Services, Inc.<br />Contact List</h2>
        <h2></h2>
      </Container>
    </header>
  );
};

export default Header;
