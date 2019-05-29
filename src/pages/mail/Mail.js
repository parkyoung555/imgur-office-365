import React, { Component } from 'react';
import { SubHeader } from "../../components/sub-header/SubHeader";
import { ActionButton } from 'office-ui-fabric-react';
import './Mail.scss';

export class Mail extends Component {

  render() {
    return(
      <div className='mail-component'>
        <SubHeader>
          {this.props.isMenuCollapsed ? <ActionButton className='new-message' iconProps={{ iconName: 'Add' }} text='New message' onClick={this.props.newPostHandler} /> : void(0)}
          <ActionButton iconProps={{ iconName: 'Read' }} text='Mark as Read' />
          <ActionButton iconProps={{ iconName: 'Undo' }} disabled={true} text='Undo' />
        </SubHeader>
      </div>
    );
  }
}
