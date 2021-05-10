// @vendors
import React, { FunctionComponent, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import classnames from 'classnames';

import { NAV_TABS, GENERAL_ROUTES } from '../../constants';
import { getActiveTabUrl, getLocalStorage } from '../../utils';

import styles from './Header.module.scss';

interface handleClickParams {
  tabIndex: number,
  linkTo:string
}

interface HeaderProps extends RouteComponentProps {
  activeTab?: number
}

const Header: FunctionComponent<HeaderProps> = props => {
  /**
   * State
   */
  const [activeTab, setActiveTab] = useState(
    props.activeTab ||
      getActiveTabUrl({
        path: props.location?.pathname,
        routes: { ...GENERAL_ROUTES, home: '/home' }
      })
  );

  /**
   * Callbacks
   */
  const handleClick = ({
    tabIndex,
    linkTo
  }: handleClickParams) => {
    setActiveTab(tabIndex);
    const productActiveTab = getLocalStorage('productActiveTab');
    if (productActiveTab && tabIndex === 1) {
      props.history.push(productActiveTab.linkTo);
    } else {
      props.history.push(linkTo);
    }
  };

  return (
    <header>
      <ul className={`md-tabs md-tabs--centered ${styles.nav}`}>
        {NAV_TABS.map(({ title, linkTo }, tabIndex) => (
          <li
            key={tabIndex}
            className={classnames(
              `md-fake-btn md-pointer--hover md-fake-btn--no-outline md-tab ${styles.navItem}`,
              { [styles.navActive]: activeTab === tabIndex }
            )}
            onClick={() =>
              handleClick({ tabIndex, linkTo })
            }
          >
            <div className="md-tab-label">
              {title}
            </div>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default withRouter(Header);
