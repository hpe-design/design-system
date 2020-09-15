import React from 'react';
import { Box, DataTable, Heading, ResponsiveContext, Text } from 'grommet';

const data = [
  {
    id: 0,
    application: 'General Purpose VMs',
    requests: 742,
    delivered: 623,
  },
  {
    id: 1,
    application: 'Containers',
    requests: 23,
    delivered: 12,
  },
  {
    id: 2,
    application: 'ML Ops',
    requests: 42,
    delivered: 32,
  },
  {
    id: 3,
    application: 'Private Cloud VMs',
    requests: 654,
    delivered: 516,
  },
  {
    id: 4,
    application: 'Storage Optimized Compute',
    requests: 298,
    delivered: 290,
  },
  {
    id: 5,
    application: 'Hyperconverged VMs',
    requests: 1074,
    delivered: 1052,
  },
  {
    id: 6,
    application: 'Mission Critical Storage',
    requests: 322,
    delivered: 273,
  },
  {
    id: 7,
    application: 'Data Protection',
    requests: 742,
    delivered: 623,
  },
  {
    id: 8,
    application: 'Composable Compute',
    requests: 33,
    delivered: 22,
  },
  {
    id: 9,
    application: 'General Compute',
    requests: 52,
    delivered: 32,
  },
  {
    id: 10,
    application: 'Business Critical Storage',
    requests: 694,
    delivered: 616,
  },
  {
    id: 12,
    application: 'Enterprise-Ready VMs',
    requests: 1074,
    delivered: 752,
  },
];

const enhancedData = data.map(datum => {
  const adjustedDatum = { ...datum };
  adjustedDatum.attachment = datum.delivered / datum.requests;
  return adjustedDatum;
});

const columns = [
  {
    property: 'requests',
    header: 'Requests',
    render: datum => `${datum.requests.toLocaleString()}`,
    align: 'end',
    aggregate: 'sum',
    footer: { aggregate: true },
  },
  {
    property: 'delivered',
    header: 'Delivered',
    render: datum => `${datum.delivered.toLocaleString()}`,
    align: 'end',
    aggregate: 'sum',
    footer: { aggregate: true },
  },
  {
    property: 'attachment',
    header: (
      <>
        Attachement&nbsp;
        <Text color="text" weight="normal">
          %
        </Text>
      </>
    ),
    render: datum => `${(datum.attachment * 100).toFixed([1])}`,
    align: 'end',
    aggregate: 'avg',
    footer: { aggregate: true },
  },
];

export const TableSummaryExample = () => {
  const size = React.useContext(ResponsiveContext);

  return (
    <>
      <Heading level={3} margin={{ bottom: 'small', top: 'none' }}>
        Service Adoption
      </Heading>
      <Box align="start" height="medium" overflow="auto">
        <DataTable
          data={enhancedData}
          columns={[
            {
              primary: true,
              property: 'application',
              header: 'Service',
              pin: size === 'small',
            },
            ...columns,
          ]}
          background={{
            pinned: 'background-front',
            header: 'background-front',
            footer: 'background-front',
          }}
          pin
        />
      </Box>
    </>
  );
};
