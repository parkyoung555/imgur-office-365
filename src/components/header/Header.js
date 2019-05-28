import React, { Component } from 'react';
import { IconButton } from 'office-ui-fabric-react';
import { Persona, PersonaPresence, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
// import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { FontSizes } from '@uifabric/fluent-theme/lib/fluent/FluentType';
import './Header.scss';

export class Header extends Component {

  render() {
    return (
      <div className='header-component'>
        <div className='header-row'>
          <IconButton iconProps={{ iconName: 'WaffleOffice365' }} title="Applications" ariaLabel="Applications" className='applications' />
          {/*<h1>Office 365</h1>*/}
          {/*<hr />*/}
          <h1 style={{ fontSize: FontSizes.size16 }}>Outlook</h1>
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
}