// @vendors
import React, { Dispatch, FunctionComponent, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import classnames from 'classnames';

import { NAV_TABS, GENERAL_ROUTES } from '../../constants';
import { getActiveTabUrl } from '../../utils';

import styles from './Header.module.scss';

interface handleClickParams {
  tabIndex: number,
  linkTo:string,
  props: { history?: any },
  setActiveTab: Dispatch<any>
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
        path: props.location.pathname,
        routes: { ...GENERAL_ROUTES, home: '/home' }
      })
  );

  /**
   * Callbacks
   */
  const handleClick = ({
    tabIndex,
    linkTo,
    props: { history },
    setActiveTab
  }: handleClickParams) => {
    setActiveTab(tabIndex);
    history.push(linkTo);
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
              handleClick({
                tabIndex,
                linkTo,
                props,
                setActiveTab
              })
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
