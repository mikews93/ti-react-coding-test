import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { NAV_TABS, GENERAL_ROUTES } from '../../constants';
import classnames from 'classnames';
import './Header.scss';
import { getActiveTabUrl } from '../../utils';

export const handleClick = ({
  tabIndex,
  linkTo,
  props: { history },
  setActiveTab
}) => {
  setActiveTab(tabIndex);
  history.push(linkTo);
};

const Header = props => {
  const [activeTab, setActiveTab] = useState(
    props.activeTab ||
      getActiveTabUrl({ path: props.location.pathname, routes: GENERAL_ROUTES })
  );
  return (
    <header>
      <ul className="md-tabs md-tabs--centered nav">
        {NAV_TABS.map(({ title, linkTo }, tabIndex) => (
          <li
            key={tabIndex}
            className={classnames(
              'md-fake-btn md-pointer--hover md-fake-btn--no-outline md-tab nav__item',
              { 'nav--active': activeTab === tabIndex }
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
            <div className="md-tab-label" bis_skin_checked="1">
              {title}
            </div>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default withRouter(Header);
