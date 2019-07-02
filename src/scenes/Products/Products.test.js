import Products from './Products';
import { makeWrapper } from '../../setupTests';

describe('Products', () => {
  const { wrapper } = makeWrapper({ ReactChild: Products });
  it('should render without crashing ', () => {
    expect(wrapper).to.be.present();
  });
});
