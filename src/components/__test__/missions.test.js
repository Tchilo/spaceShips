import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../Missions';
import store from '../../redux/configureStore';

const MissionsMock = () => (
  <Provider store={store}>
    <Missions />
  </Provider>
);

describe('Mission component', () => {
  it('Should render a table:', () => {
    render(<MissionsMock />);
  });
});
