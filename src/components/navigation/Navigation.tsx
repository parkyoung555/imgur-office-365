import React, {Component} from 'react';
import { SubHeader } from "../sub-header/SubHeader";
import { IconButton, ActionButton, Nav } from 'office-ui-fabric-react';
import './Navigation.scss';

type NavigationComponentProps = {
  isMenuCollapsed: boolean
  toggleMenuCollapse: () => void
  newPostHandler: () => void
};

export class Navigation extends Component<NavigationComponentProps> {

  render() {
    return (
      <div className={'navigation-component' + (this.props.isMenuCollapsed ? ' collapsed' : '')}>
        <SubHeader>
          <IconButton className='toggle-collapse' iconProps={{ iconName: 'GlobalNavButton' }} title='Menu' ariaLabel='Menu'  onClick={this.props.toggleMenuCollapse}/>
          <ActionButton className='new-message' iconProps={{ iconName: 'Add' }} text='New message' onClick={this.props.newPostHandler} />
        </SubHeader>
        <div className='links'>
          <Nav
            expandButtonAriaLabel="Expand or collapse"
            groups={[
              {
                name: 'Favorites',
                links: [
                  {
                    key: 'FavoritesSentItems',
                    name: 'Sent Items',
                    icon: 'send',
                    url: ''
                  },
                  {
                    key: 'FavoritesInbox',
                    name: 'Inbox',
                    url: '/mail',
                    icon: 'inbox'
                  },
                  {
                    key: 'FavoritesDeletedItems',
                    name: 'Deleted Items',
                    icon: 'trash',
                    url: ''
                  },
                  {
                    key: 'AddFavorite',
                    name: 'Add favorite',
                    onClick: () => {
                      alert('Oh boy!');
                    },
                    url: ''
                  }
                ]
              },
              {
                name: 'Folders',
                links: [
                  {
                    key: 'FoldersInbox',
                    name: 'Inbox',
                    url: '',
                    // icon: 'inbox',
                    links: [
                      {
                        key: 'FoldersInboxEvents',
                        name: 'Events',
                        url: '/mail/folders/events'
                      },
                      {
                        key: 'FoldersInboxVersionControl',
                        name: 'Version Control',
                        url: '/mail/folders/version-control'
                      },
                      {
                        key: 'FoldersInboxAds',
                        name: 'Ads',
                        url: '/mail/folders/ads'
                      }
                    ]
                  },
                  {
                    key: 'FoldersJunkEmail',
                    name: 'Junk Email',
                    icon: 'blocked',
                    url: ''
                  },
                  {
                    key: 'FoldersDrafts',
                    name: 'Drafts',
                    icon: 'Edit',
                    url: ''
                  },
                  {
                    key: 'FoldersSentItems',
                    name: 'Sent Items',
                    icon: 'send',
                    url: ''
                  },
                  {
                    key: 'FoldersDeletedItems',
                    name: 'Deleted Items',
                    icon: 'trash',
                    url: ''
                  },
                  {
                    key: 'FoldersArchive',
                    name: 'Archive',
                    icon: 'archive',
                    url: ''
                  },
                  {
                    key: 'FoldersCiscoJabberChats',
                    name: 'Cisco Jabber Chats',
                    url: ''
                  },
                  {
                    key: 'FoldersConversationHistory',
                    name: 'Conversation History',
                    url: ''
                  },
                  {
                    key: 'FoldersRSSFeeds',
                    name: 'RSS Feeds',
                    url: ''
                  },
                  {
                    key: 'FoldersUnwanted',
                    name: 'Unwanted',
                    url: ''
                  },
                  {
                    key: 'NewFolder',
                    name: 'New folder',
                    onClick: () => {
                      alert('Oh boy!');
                    },
                    url: ''
                  }
                ]
              },
              {
                name: 'Groups',
                links: [
                  {
                    key: 'GroupsNewGroup',
                    name: 'New group',
                    onClick: () => {
                      alert('Oh boy!');
                    },
                    url: ''
                  },
                  {
                    key: 'GroupsDiscoverGroups',
                    name: 'Discover groups',
                    onClick: () => {
                      alert('Oh boy!');
                    },
                    url: ''
                  },
                  {
                    key: 'GroupsManageGroups',
                    name: 'Manage groups',
                    onClick: () => {
                      alert('Oh boy!');
                    },
                    url: ''
                  }
                ]
              }
            ]}
          />
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
}
