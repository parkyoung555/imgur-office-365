import React, {Component} from 'react';
import './PreviewList.scss';
import {
  Check,
  FocusZone,
  FocusZoneDirection,
  List,
  Persona,
  PersonaSize
} from 'office-ui-fabric-react';

type PreviewListProps = {
  listData: any[]
};

export class PreviewList extends Component<PreviewListProps> {

  constructor(props: any) {
    super(props);

    this.onRenderCell = this.onRenderCell.bind(this);
  }

  render() {

    return (
      <div className='preview-list-component'>
        <FocusZone direction={FocusZoneDirection.vertical}>
          <List items={this.props.listData} onRenderCell={this.onRenderCell}/>
        </FocusZone>
      </div>
    );
  }

  onRenderCell(item: any, index: number | undefined) {
    return (
      <div className='preview-list-item'>
        <div className='icon'>
          <Check />
          <Persona imageInitials={item.account_url ? item.account_url.slice(0,2).toUpperCase() : 'A'} hidePersonaDetails={true} size={PersonaSize.size28} initialsColor={Math.floor(Math.random() * 16) + 1 } />
        </div>
        <div className='details'>
          <h3>
            <span>{item.account_url || 'Anonymous'}</span>
          </h3>
          <div className='title'>
            <span>{item.title}</span>
            <span className='date'>{this.getDateString(item.datetime)}</span>
          </div>
          <p className='description'>
            <span>{item.description || item.title}</span>
          </p>
        </div>
      </div>
    );
  }

  getDateString(timeStamp: number) {
    const date = new Date(new Date().getTime() + timeStamp);

    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }
}