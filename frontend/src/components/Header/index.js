import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo.png';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="gympoint" />
          <NavLink to="/orders" activeStyle={{ color: '#444444' }}>
            ENCOMENDAS
          </NavLink>
          <NavLink to="/deliverers" activeStyle={{ color: '#444444' }}>
            ENTREGADORES
          </NavLink>
          <NavLink to="/addressees" activeStyle={{ color: '#444444' }}>
            DESTINATÁRIOS
          </NavLink>
          <NavLink to="/orderIssues" activeStyle={{ color: '#444444' }}>
            PROBLEMAS
          </NavLink>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile && profile.name}</strong>
              <button type="button" id="logout" onClick={handleSignOut}>
                Sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
