'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

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
        <RecoilRoot>{children}</RecoilRoot>
      </QueryClientProvider>
    </body>
  );
};

export default Layout;
