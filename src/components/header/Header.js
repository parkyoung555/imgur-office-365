import React, { Component } from 'react';
import { IconButton } from 'office-ui-fabric-react';
import { Persona, PersonaPresence, PersonaSize, IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import {
  CompactPeoplePicker,
  IBasePickerSuggestionsProps,
  IBasePicker,
  ListPeoplePicker,
  NormalPeoplePicker,
  ValidationState
} from 'office-ui-fabric-react/lib/Pickers';
// import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';
import axios from 'axios';
import './Header.scss';

export class Header extends Component {

  contacts = [];

  constructor(props) {
    super(props);

    this.onFilterChanged = this.onFilterChanged.bind(this);
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=100&seed=lololol&inc=name,gender,email, phone, cell, picture&noinfo').then(results => {
      this.contacts = this._processContactData(results.data.results);
      console.log(this.contacts);
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

  onFilterChanged(filterText, currentPersonas, limitResults) {
    const filteredContacts = this.contacts.filter(contact => (
      contact.text.toLowerCase().indexOf(filterText.toLowerCase()) > -1
    ));

    return filteredContacts;
  }

  getTextFromItem(persona) {
    return persona.text;
  }

  _processContactData(data) {
    const res = [];

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
