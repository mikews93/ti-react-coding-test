import React from 'react';
import chai, { expect } from 'chai';
import enzyme, { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
global.expect = expect;

const makeWrapper = ({ props, ReactChild, withRouter }) => {
  let wrapper = withRouter
    ? shallow(<ReactChild.WrappedComponent {...props} />)
    : shallow(<ReactChild {...props} />);
  return { wrapper, props };
};

export { makeWrapper };
