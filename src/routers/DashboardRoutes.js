import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import { HeroScreen } from '../components/heroes/index';
import { CustomNavbar } from '../components/ui/CustomNavbar';
import { Container } from 'react-bootstrap';
import SearchScreen from '../components/search/SearchScreen';

const DashboardRoutes = () => {
  return (
    <>
      <CustomNavbar />
      <Container className='mt-2'>
        <Switch>
          <Route exact path='/marvel' component={MarvelScreen} />
          <Route exact path='/hero/:heroId' component={HeroScreen} />
          <Route exact path='/dc' component={DcScreen} />
          <Route exact path='/search' component={SearchScreen} />

          <Redirect to='/marvel' />
        </Switch>
      </Container>
    </>
  );
};

export default DashboardRoutes;
