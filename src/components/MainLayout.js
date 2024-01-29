import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export function MainLayout() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default MainLayout;
