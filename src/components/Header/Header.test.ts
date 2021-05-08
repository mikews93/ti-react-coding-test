import Header from './Header';
import { makeWrapper } from '../../setupTests';

describe('Header', () => {
  const { wrapper } = makeWrapper({ ReactChild: Header });
  it('should render without crashing ', () => {
    expect(wrapper).to.be.present();
  });
});
