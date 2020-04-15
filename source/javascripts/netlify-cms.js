import CMS from 'netlify-cms'


class Header extends React.Component {
  static propTypes = {
    user: ImmutablePropTypes.map.isRequired,
    collections: ImmutablePropTypes.orderedMap.isRequired,
    onCreateEntryClick: PropTypes.func.isRequired,
    onLogoutClick: PropTypes.func.isRequired,
    openMediaLibrary: PropTypes.func.isRequired,
    hasWorkflow: PropTypes.bool.isRequired,
    displayUrl: PropTypes.string,
    isTestRepo: PropTypes.bool,
    t: PropTypes.func.isRequired,
  };

  handleCreatePostClick = collectionName => {
    const { onCreateEntryClick } = this.props;
    if (onCreateEntryClick) {
      onCreateEntryClick(collectionName);
    }
  };

  render() {
    const {
      user,
      collections,
      onLogoutClick,
      openMediaLibrary,
      hasWorkflow,
      displayUrl,
      isTestRepo,
      t,
      showMediaButton,
    } = this.props;

    const createableCollections = collections
      .filter(collection => collection.get('create'))
      .toList();

    return (
      <AppHeader>
        <AppHeaderContent>
          <nav>
            <AppHeaderNavList>
              <li>
                <AppHeaderNavLink
                  to="/"
                  activeClassName="header-link-active"
                  isActive={(match, location) => location.pathname.startsWith('/collections/')}
                >
                  <Icon type="page" />
                  {t('app.header.content')}
                </AppHeaderNavLink>
              </li>
              {hasWorkflow && (
                <li>
                  <AppHeaderNavLink to="/workflow" activeClassName="header-link-active">
                    <Icon type="workflow" />
                    {t('app.header.workflow')}
                  </AppHeaderNavLink>
                </li>
              )}
              {showMediaButton && (
                <li>
                  <AppHeaderButton onClick={openMediaLibrary}>
                    <Icon type="media-alt" />
                    {t('app.header.media')}
                  </AppHeaderButton>
                </li>
              )}
              <li>
                <AppHeaderNavLink
                  to="https://analytics.google.com/analytics/web/?authuser=0#/report-home/a100723444w229134551p215942090"
                  activeClassName="header-link-active"
                  isActive=false
                >
                  <Icon type="chevron" />
                  Analytics
                </AppHeaderNavLink>
              </li>
            </AppHeaderNavList>
          </nav>
          <AppHeaderActions>
            {createableCollections.size > 0 && (
              <Dropdown
                renderButton={() => (
                  <AppHeaderQuickNewButton> {t('app.header.quickAdd')}</AppHeaderQuickNewButton>
                )}
                dropdownTopOverlap="30px"
                dropdownWidth="160px"
                dropdownPosition="left"
              >
                {createableCollections.map(collection => (
                  <DropdownItem
                    key={collection.get('name')}
                    label={collection.get('label_singular') || collection.get('label')}
                    onClick={() => this.handleCreatePostClick(collection.get('name'))}
                  />
                ))}
              </Dropdown>
            )}
            <SettingsDropdown
              displayUrl={displayUrl}
              isTestRepo={isTestRepo}
              imageUrl={user.get('avatar_url')}
              onLogoutClick={onLogoutClick}
            />
          </AppHeaderActions>
        </AppHeaderContent>
      </AppHeader>
    );
  }
}
