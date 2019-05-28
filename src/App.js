import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Customizer } from 'office-ui-fabric-react';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Header } from './components/header/Header';
import { Navigation } from './components/navigation/Navigation';
import { Mail } from './pages/mail/Mail';
import { initializeIcons } from '@uifabric/icons';
import { loadTheme } from 'office-ui-fabric-react';
import './App.scss';

loadTheme({
  palette: {
    themePrimary: '#0078d7',
    themeLighterAlt: '#f3f9fd',
    themeLighter: '#d1e7f8',
    themeLight: '#aad2f3',
    themeTertiary: '#5ca8e7',
    themeSecondary: '#1a84db',
    themeDarkAlt: '#006ac1',
    themeDark: '#005aa3',
    themeDarker: '#004278',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333333',
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#ffffff',
  }
});

initializeIcons();

function App() {
  return (
    <Customizer {...FluentCustomizations}>
      <Router className='layout-column'>
        <Header />
        <div className='layout-row flex-auto'>
          <Navigation />
          <Route path='/' exact render={() => (
            <Redirect to='/mail' />
          )} />
          <Route path='/mail' exact component={Mail}/>
        </div>
      </Router>
    </Customizer>
  );
}

export default App;
