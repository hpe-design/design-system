import React from 'react';
import { Box, Spinner, Text } from 'grommet';

export const SpinnerExample = () => (
  <Box align="center" direction="row" gap="small" pad="small">
    <Spinner message="Loading" />
    <Text>Loading...</Text>
  </Box>
);
