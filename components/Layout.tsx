'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '@/styles/Globalstyle';
import { ThemeProvider } from '@emotion/react';
import theme from '@/styles/theme';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
        },
      },
    }),
  );

  return (
    <body>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </body>
  );
};

export default Layout;
