import React, { Component } from 'react';
import { IconButton, ActionButton } from 'office-ui-fabric-react';
import './Navigation.scss';

export class Navigation extends Component {

  state = {
    menuCollapsed: false
  };

  constructor(props) {
    super(props);

    this.toggleMenuCollapse = this.toggleMenuCollapse.bind(this);
  }

  render() {
    return (
      <div className={'navigation-component' + (this.state.menuCollapsed ? ' collapsed' : '')}>
        <div className='header layout-row'>
          <IconButton className='toggle-collapse' iconProps={{ iconName: 'GlobalNavButton' }} title='Menu' ariaLabel='Menu'  onClick={this.toggleMenuCollapse}/>
          <ActionButton className='new-message' iconProps={{ iconName: 'Add' }} text='New message' />
        </div>
        <div className='links'>
          Links go here
        </div>
        <div className='footer'>
          <IconButton iconProps={{ iconName: 'Mail' }} title='Mail' ariaLabel='Mail' />
          <IconButton iconProps={{ iconName: 'Calendar' }} title='Calendar' ariaLabel='Calendar' />
          <IconButton iconProps={{ iconName: 'People' }} title='Contacts' ariaLabel='Contacts' />
          <IconButton iconProps={{ iconName: 'CheckboxComposite' }} title='Tasks' ariaLabel='Tasks' />
        </div>
      </div>
    );
  }

  toggleMenuCollapse() {
    this.setState((state, props) => {
      return {
        menuCollapsed: !state.menuCollapsed
      };
    });
  }
}