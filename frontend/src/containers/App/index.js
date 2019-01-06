import React from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import PromotedRestaurant from '../../components/PromotedRestaurant';
import Footer from '../../components/Footer';
import CategoriesContainer from '../../containers/CategoriesContainer';
import ListingSectionContainer from '../../containers/ListingSectionContainer';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Background />
      <PromotedRestaurant />
      <CategoriesContainer />
      <ListingSectionContainer />
      <Footer />
    </React.Fragment>
  );
};

export default App;
