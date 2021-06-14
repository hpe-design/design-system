import { Box, Meter } from 'grommet';

export const MeterExample = () => (
  <Box gap="large">
    <Meter type="bar" value={30} />
    <Meter type="circle" size="small" value={70} />
  </Box>
);
