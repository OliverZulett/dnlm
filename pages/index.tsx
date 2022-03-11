import Navbar from '../components/navbar/navbar';
import Hero from '../components/hero/hero';
import { Fragment } from 'react';
import GridSection from '../components/grid-section/grid-section';
import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <Fragment>
      <Navbar/>
      <Hero/>
      <GridSection
        title="BEST MOVIES"
      />
      <GridSection
        title="BEST MOVIES"
      />
      <Footer/>
    </Fragment>
  )
}
