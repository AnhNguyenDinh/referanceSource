import { memo } from 'react';
import { enableScreens } from 'react-native-screens';

import { AppContainer } from './src';

enableScreens();

export const App = memo(() => {
  return <AppContainer />;
});
