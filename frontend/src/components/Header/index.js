import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import Notification from '~/components/Notifications';
import logo from '~/assets/logo-purple.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard"> Dashboard</Link>
        </nav>

        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>Jonathas Harb</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="adorable-io"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}