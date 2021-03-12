import React from 'react';
import { Box, defaultProps } from 'grommet';

export const HeaderFooterPreview = () => (
    <Box fill>
      <Box
        height={defaultProps.theme.global.edgeSize.medium}
        // remove dashed border in prod, for demo purposes only
        border={{ color: 'border', style: 'dashed' }}
      />
      <Box
        // remove dashed border in prod, for demo purposes only
        border={{ color: 'border', style: 'dashed' }}
        flex
      />
      <Box
        height={defaultProps.theme.global.edgeSize.medium}
        // remove dashed border in prod, for demo purposes only
        border={{ color: 'border', style: 'dashed' }}
      />
    </Box>
  );
