import React, { Component } from 'react';
import { SubHeader } from "../../components/sub-header/SubHeader";
import { PreviewList } from '../../components/preview-list/PreviewList';
import { ActionButton } from 'office-ui-fabric-react';
import axios from 'axios';
import './Mail.scss';

type MailComponentProps = {
  isMenuCollapsed: boolean;
  newPostHandler: () => void;
  listData?: any[];
};

export class Mail extends Component<MailComponentProps> {

  state = {
    listData: []
  };

  componentDidMount(): void {
    axios.get('https://api.imgur.com/3/gallery/random/viral/1/day', {
      headers: {
        Authorization: 'Client-ID e9149c7dc7ae6a5'
      }
    }).then(result => {
      console.log(result.data.data);
      this.setState((state, props) => {
        return {
          listData: result.data.data
        };
      })
    });
  }

  render() {
    return(
      <div className='mail-component'>
        <SubHeader>
          {this.props.isMenuCollapsed ? <ActionButton className='new-message' iconProps={{ iconName: 'Add' }} text='New message' onClick={this.props.newPostHandler} /> : void(0)}
          <ActionButton iconProps={{ iconName: 'Read' }} text='Mark as Read' />
          <ActionButton iconProps={{ iconName: 'Undo' }} disabled={true} text='Undo' />
        </SubHeader>
        <div className='layout-row'>
          <PreviewList listData={this.state.listData} />
        </div>
      </div>
    );
  }
}
