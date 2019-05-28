import React, { Component } from 'react';
import { IconButton, ActionButton, Nav } from 'office-ui-fabric-react';
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
          <Nav
            expandButtonAriaLabel="Expand or collapse"
            groups={[
              {
                name: 'Favorites',
                links: [
                  {
                    key: 'FavoritesSentItems',
                    name: 'Sent Items',
                    icon: 'send'
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
                    icon: 'trash'
                  },
                  {
                    key: 'AddFavorite',
                    name: 'Add favorite',
                    onClick: () => {
                      alert('Oh boy!');
                    }
                  }
                ]
              },
              {
                name: 'Folders',
                links: [
                  {
                    key: 'FoldersInbox',
                    name: 'Inbox',
                    // url: '/mail',
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
                    icon: 'blocked'
                  },
                  {
                    key: 'FoldersDrafts',
                    name: 'Drafts',
                    icon: 'Edit'
                  },
                  {
                    key: 'FoldersSentItems',
                    name: 'Sent Items',
                    icon: 'send'
                  },
                  {
                    key: 'FoldersDeletedItems',
                    name: 'Deleted Items',
                    icon: 'trash'
                  },
                  {
                    key: 'FoldersArchive',
                    name: 'Archive',
                    icon: 'archive'
                  },
                  {
                    key: 'FoldersCiscoJabberChats',
                    name: 'Cisco Jabber Chats',
                  },
                  {
                    key: 'FoldersConversationHistory',
                    name: 'Conversation History',
                  },
                  {
                    key: 'FoldersRSSFeeds',
                    name: 'RSS Feeds',
                  },
                  {
                    key: 'FoldersUnwanted',
                    name: 'Unwanted',
                  },
                  {
                    key: 'NewFolder',
                    name: 'New folder',
                    onClick: () => {
                      alert('Oh boy!');
                    }
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
                    }
                  },
                  {
                    key: 'GroupsDiscoverGroups',
                    name: 'Discover groups',
                    onClick: () => {
                      alert('Oh boy!');
                    }
                  },
                  {
                    key: 'GroupsManageGroups',
                    name: 'Manage groups',
                    onClick: () => {
                      alert('Oh boy!');
                    }
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

  toggleMenuCollapse() {
    this.setState((state, props) => {
      return {
        menuCollapsed: !state.menuCollapsed
      };
    });
  }
}
