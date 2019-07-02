import Clients from './Clients';
import { makeWrapper } from '../../setupTests';

describe('Clients', () => {
  const { wrapper } = makeWrapper({ ReactChild: Clients });
  it('should render without crashing ', () => {
    expect(wrapper).to.be.present();
  });

  it('should an h1 tag', () => {
    const H1 = wrapper.find('h1');
    expect(H1).to.be.present();
  });
});
