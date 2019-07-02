import Home from './Home';
import { makeWrapper } from '../../setupTests';

describe('Home', () => {
  const { wrapper } = makeWrapper({ ReactChild: Home });
  it('should render without crashing ', () => {
    expect(wrapper).to.be.present();
  });

  it('should an h1 tag', () => {
    const H1 = wrapper.find('h1');
    expect(H1).to.be.present();
  });
});
