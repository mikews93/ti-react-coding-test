import App from './App';
import { makeWrapper } from '../../setupTests';
import Header from '../Header';

describe('App', () => {
  const { wrapper } = makeWrapper({ ReactChild: App });

  it('should render without crashing', () => {
    expect(wrapper).to.be.present();
  });
  it('should render the Header', () => {
    expect(wrapper.find(Header)).to.be.present();
  });
});
