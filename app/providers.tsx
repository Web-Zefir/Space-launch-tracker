'use client'

import { ApolloProvider } from '@apollo/client';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Provider as ReduxProvider } from 'react-redux';
import client from '@lib/apollo/client';
import store from '@lib/redux/store';
import theme from '@lib/theme/theme';
import type { ReactNode } from 'react';

const Providers = ({ children }: { children: ReactNode }) => (
  <ReduxProvider store={store}>
    <ApolloProvider client={client}>
      <MantineProvider theme={theme}>
        <Notifications position="top-right" />
        {children}
      </MantineProvider>
    </ApolloProvider>
  </ReduxProvider>
);

export default Providers;
