// @vendors
import React, { FunctionComponent, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Avatar from 'react-md/lib/Avatars/Avatar';
import Subheader from 'react-md/lib/Subheaders/Subheader';
import FontIcon from 'react-md/lib/FontIcons/FontIcon';
import Divider from 'react-md/lib/Dividers/Divider';
import classnames from 'classnames';

import { CATEGORIES, PRODUCTS_ROUTES } from '../../../../constants';
import { getActiveTabUrl } from '../../../../utils';

import styles from './SideBar.module.scss';

interface handleClickParams {
  itemIndex: number,
  linkTo:string,
  name: string
}

interface SideBarProps extends RouteComponentProps {
  activeItem?: number
}

const SideBar: FunctionComponent<SideBarProps> = props => {
  /**
   * State
   */
  const [activeItem, setActiveItem] = useState(
    props.activeItem ||
      getActiveTabUrl({
        path: props.location.pathname,
        routes: { ...PRODUCTS_ROUTES, all: 'all' }
      })
  );

  /**
   * Callbacks
   */
  const handleClick = ({
    itemIndex,
    linkTo,
    name
  }: handleClickParams) => {
    setActiveItem(itemIndex);
    props.history.push({ pathname: linkTo, state: { name } });
  };


  const showDividerAtPosition = [1];

  return (
    <div className={styles.sidebar}>
      <List className={`${styles.sidebarList} md-paper--1`}>
        <Subheader primaryText="Categories" />
        {CATEGORIES.map(({ linkTo, icon, name }, itemIndex) => (
          <span key={itemIndex}>
            <ListItem
              onClick={() =>
                handleClick({ itemIndex, linkTo, name })
              }
              leftAvatar={<Avatar icon={<FontIcon>{icon}</FontIcon>} />}
              primaryText={name}
              className={classnames('list__item', {
                [styles.activeItem]: activeItem === itemIndex
              })}
            />
            {showDividerAtPosition.find(d => d - 1 === itemIndex) && (
              <Divider />
            )}
          </span>
        ))}
      </List>
    </div>
  );
};

export default withRouter(SideBar);
