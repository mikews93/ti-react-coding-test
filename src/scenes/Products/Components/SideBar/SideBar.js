import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Avatar from 'react-md/lib/Avatars/Avatar';
import Subheader from 'react-md/lib/Subheaders/Subheader';
import FontIcon from 'react-md/lib/FontIcons/FontIcon';
import Divider from 'react-md/lib/Dividers/Divider';
import { CATEGORIES, PRODUCTS_ROUTES } from '../../../../constants';
import classnames from 'classnames';
import './SideBar.scss';
import { getActiveTabUrl } from '../../../../utils';

export const handleClick = ({
  itemIndex,
  linkTo,
  props: { history },
  setActiveItem,
  name
}) => {
  setActiveItem(itemIndex);
  history.push({ pathname: linkTo, state: { name } });
};

const SideBar = props => {
  const [activeItem, setActiveItem] = useState(
    props.activeItem ||
      getActiveTabUrl({
        path: props.location.pathname,
        routes: { ...PRODUCTS_ROUTES, all: 'all' }
      })
  );
  const showDividerAtPosition = [1];
  return (
    <div className="sidebar">
      <List className="sidebar__list md-paper--1">
        <Subheader primaryText="Categories" />
        {CATEGORIES.map(({ linkTo, icon, name }, itemIndex) => (
          <span key={itemIndex}>
            <ListItem
              onClick={() =>
                handleClick({ itemIndex, linkTo, props, setActiveItem, name })
              }
              leftAvatar={<Avatar icon={<FontIcon>{icon}</FontIcon>} />}
              primaryText={name}
              className={classnames('list__item', {
                'active--item': activeItem === itemIndex
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
