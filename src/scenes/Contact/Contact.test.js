import Contact from './Contact';
import { makeWrapper } from '../../setupTests';

describe('Contact', () => {
  const { wrapper } = makeWrapper({ ReactChild: Contact });
  it('should render without crashing ', () => {
    expect(wrapper).to.be.present();
  });

  it('should an h1 tag', () => {
    const H1 = wrapper.find('h1');
    expect(H1).to.be.present();
  });
});
