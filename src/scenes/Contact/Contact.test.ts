import Contact from './Contact';
import { makeWrapper } from '../../setupTests';

describe('Contact', () => {
  const { wrapper } = makeWrapper({ ReactChild: Contact });
  it('should render without crashing ', () => {
    expect(wrapper).toBeCalled();
  });

  it('should an h1 tag', () => {
    const H1 = wrapper.find('h1');
    expect(H1).toBeCalled();
  });
});
