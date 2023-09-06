import React, { Component } from "react";

import Hero from "parts/Hero";
import Header from "parts/Header";
import GuestFavorite from "parts/GuestFavorite";
import landingPage from "json/landingPage.json";
import Categories from 'parts/Categories'

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refGuestFavorite = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero
          refGuestFavorite={this.refGuestFavorite}
          data={landingPage.hero}
        />
        <GuestFavorite
          refGuestFavorite={this.refGuestFavorite}
          data={landingPage.guestFavorite}
        />
        <Categories data={landingPage.categories} />
      </>
    );
  }
}
