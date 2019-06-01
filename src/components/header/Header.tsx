import React, { Component } from 'react';
import {IconButton, IPersonaProps} from 'office-ui-fabric-react';
import { Persona, PersonaPresence, PersonaSize, NormalPeoplePicker } from 'office-ui-fabric-react';
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';
import axios from 'axios';
import './Header.scss';

export class Header extends Component {

  contacts: IPersonaProps[] = [];
  state = {
    searchInputFocus: false
  };

  constructor(props: any) {
    super(props);

    this.onFilterChanged = this.onFilterChanged.bind(this);
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=100&seed=lololol&inc=name,gender,email, phone, cell, picture&noinfo').then(results => {
      this.contacts = this.processContactData(results.data.results);
    });
  }

  render() {
    return (
      <div className='header-component'>
        <div className='header-row'>
          <IconButton iconProps={{ iconName: 'WaffleOffice365' }} title="Applications" ariaLabel="Applications" className='applications' />
          {/*<h1>Office 365</h1>*/}
          {/*<hr />*/}
          <h1 style={{ fontSize: FontSizes.size16 }}>Outlook</h1>
          <NormalPeoplePicker
            onResolveSuggestions={this.onFilterChanged}
            getTextFromItem={this.getTextFromItem}
            inputProps={{
              placeholder: 'Search',
              onFocus: () => { this.setSearchInputFocus(true); },
              onBlur: () => { this.setSearchInputFocus(false); },
            }}
          />
          <span className='flex-auto' />
          {/*<IconButton iconProps={{ iconName: 'SkypeForBusinessLogo' }} title='Skype' ariaLabel='Skype' />*/}
          {/*<IconButton iconProps={{ iconName: 'Ringer' }} title='Notifications' ariaLabel='Notifications' />*/}
          <IconButton iconProps={{ iconName: 'Settings' }} title='Settings' ariaLabel='Settings' />
          <IconButton iconProps={{ iconName: 'Help' }} title='Help' ariaLabel='Help' />
          <IconButton>
            <Persona imageInitials='YP' presence={PersonaPresence.online} hidePersonaDetails={true} size={PersonaSize.size32} />
          </IconButton>
        </div>
      </div>
    );
  }

  setSearchInputFocus(isFocused: boolean) {
    this.setState((state, props) => {
      return {
        searchInputFocus: isFocused
      };
    })
  }

  onFilterChanged(filterText: string, currentPersonas?: IPersonaProps[], limitResults?: number) {
    if (filterText) {
      return this.contacts.filter(contact => (
        (currentPersonas ? currentPersonas.findIndex(currentPersona => (currentPersona.secondaryText === contact.secondaryText)) < 0 : true) &&
          contact.text!.toLowerCase().indexOf(filterText.toLowerCase()) > -1
      ));
    } else {
      return [];
    }
  }

  getTextFromItem(persona: IPersonaProps, currentValue?: string) {
    return persona.text as string;
  }

  private processContactData(data: any[]): IPersonaProps[] {
    const res: IPersonaProps[] = [];

    data.forEach(contact => {
      res.push({
        text: contact.name.first.charAt(0).toUpperCase() + contact.name.first.slice(1) + ' ' +
          contact.name.last.charAt(0).toUpperCase() + contact.name.last.slice(1),
        imageInitials: (contact.name.first[0] + contact.name.last[0]).toUpperCase(),
        imageUrl: contact.picture.thumbnail,
        secondaryText: contact.email,
        presence: PersonaPresence.online
      });
    });

    return res;
  }
}
