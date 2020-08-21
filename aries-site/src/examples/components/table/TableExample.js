import React from 'react';
import { DataTable, Text } from 'grommet';

const data = [
  {
    id: '1',
    poolName: 'Asup-array01-lvs (default)',
    groupName: 'Asup',
    arrays: 'asup-array01-lvs',
    size: '204.2 TiB',
    pinnable: '0.0 B',
    pinned: '0.0 B',
    savings: [
      { unit: 'TiB', value: 12.0 },
      { unit: 'xGHz', value: 333.2 },
    ],
  },
  {
    id: '2',
    poolName: 'Dev-K8-Sym-R5-3 (default)',
    groupName: 'Dev',
    arrays: 'harm-stage-array01',
    size: '204.2 TiB',
    pinnable: '0.0 B',
    pinned: '0.0 B',
    savings: [
      { unit: 'TiB', value: 8.0 },
      { unit: 'xGHz', value: 333.2 },
    ],
  },
  {
    id: '3',
    poolName: 'Dev36-erray01 ( default)',
    groupName: 'Dev',
    arrays: 'harm-stage-array02',
    size: '173.4 TiB',
    pinnable: '0.0 B',
    pinned: '0.0 B',
    savings: [
      { unit: 'TiB', value: 8.0 },
      { unit: 'xGHz', value: 3955.2 },
    ],
  },
  {
    id: '4',
    poolName: 'asup-array1 (default)',
    groupName: 'Asup',
    arrays: 'harm-stage-array04',
    size: '173.4 TiB',
    pinnable: '0.0 B',
    pinned: '0.0 B',
    savings: [
      { unit: 'TiB', value: 110.6 },
      { unit: 'xGHz', value: 3.9 },
    ],
  },
  {
    id: '5',
    poolName: 'Dev-K8-Sym-R5-3 (default)',
    groupName: 'Dev',
    arrays: 'Harm-cs-stage-R4-5',
    size: '153.7 TiB',
    pinnable: '2.9 TiB',
    pinned: '0.0 B',
    savings: [
      { unit: 'TiB', value: 128.5 },
      { unit: 'xGHz', value: 333.2 },
    ],
  },
  {
    id: '6',
    poolName: 'asup-array2 (default)',
    groupName: 'Asup',
    arrays: 'ds-array02',
    size: '173.4 TiB',
    pinnable: '1.1 TiB',
    pinned: '0.0 B',
    savings: [
      { unit: 'TiB', value: 8.0 },
      { unit: 'xGHz', value: 3955.2 },
    ],
  },
  {
    id: '7',
    poolName: 'Dev36-varray02 (default)',
    groupName: 'Dev',
    arrays: 'ds-array01',
    size: '92.0 TiB',
    pinnable: '1.3 TiB',
    pinned: '0.0 B',
    savings: [
      { unit: 'TiB', value: 8.0 },
      { unit: 'xGHz', value: 333.2 },
    ],
  },
  {
    id: '8',
    poolName: 'DevHarmCs2R39',
    groupName: 'Dev',
    arrays: 'harm-stage-array03',
    size: '7.2 TiB',
    pinnable: '2.9 TiB',
    pinned: '0.0 B',
    savings: [
      { unit: 'TiB', value: 8.0 },
      { unit: 'xGHz', value: 333.2 },
    ],
  },
  {
    id: '9',
    poolName: 'DevStageSymR31 (default)',
    groupName: 'Dev',
    arrays: 'rtp-array198',
    size: '173.4 TiB',
    pinnable: '3.0 TiB',
    pinned: '0.0 B',
    savings: [
      { unit: 'TiB', value: 8.0 },
      { unit: 'xGHz', value: 333.2 },
    ],
  },
];

const columns = [
  {
    property: 'poolName',
    header: 'Pool Name',
    render: datum => <Text truncate>{datum.poolName}</Text>,
  },
  {
    property: 'groupName',
    header: 'Group Name',
  },
  {
    property: 'arrays',
    header: 'Arrays',
    sortable: false,
  },
  {
    property: 'size',
    header: 'Size',
    align: 'end',
    sortable: false,
  },
  {
    property: 'pinnable',
    header: 'Pinnable',
    align: 'end',
    sortable: false,
  },
  {
    property: 'pinned',
    header: 'Pinned',
    align: 'end',
    sortable: false,
  },
  {
    property: 'savings.value',
    header: 'Savings',
    render: datum => (
      <Text>
        {datum.savings[0] &&
          `${datum.savings[0].value} ${datum.savings[0].unit}`}
        {datum.savings[0] && datum.savings[1] && ' | '}
        {datum.savings[1] &&
          `${datum.savings[1].value} ${datum.savings[1].unit}`}
      </Text>
    ),
    align: 'end',
  },
];

const handleClickRow = obj => {
  // eslint-disable-next-line no-alert
  alert(`
  Record was clicked:
  { 
      id: ${obj.id},
      poolName: ${obj.poolName}
  }
  
  You can use onClickRow() to navigate to a record's detail
  page, open a panel or modal to edit the record, or perform 
  other actions as you see fit.
  `);
};

export const TableExample = () => (
  <DataTable
    data={data}
    columns={columns}
    primaryKey="id"
    onClickRow={({ datum }) => handleClickRow(datum)}
    sortable
  />
);
