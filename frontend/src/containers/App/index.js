import Background from '../../components/Background';
import CategoriesContainer from '../../containers/CategoriesContainer';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListingSectionContainer from '../../containers/ListingSectionContainer';
import React from 'react';
import Ribbon from '../../components/Ribbon';
import TopRestaurantContainer from '../../containers/TopRestaurantContainer';

const App = () => {
  return (
    <React.Fragment>
      <Ribbon />
      <Header />
      <Background />
      <TopRestaurantContainer />
      <CategoriesContainer />
      <ListingSectionContainer />
      <Footer />
    </React.Fragment>
  );
};

export default App;
