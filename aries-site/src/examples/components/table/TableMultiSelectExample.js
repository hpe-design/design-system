import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, CheckBox, DataTable, Heading, Menu, Text } from 'grommet';

const data = [
  {
    id: 'OID257383',
    orderName: 'My PVT Cloud Order',
    purchaseOrder: '9701231123323',
    state: 'Created',
    service: 'HPE GreenLake Private Cloud',
    tenant: 'Suncor Energy',
    contact: {
      email: 'melinda@suncor.co',
    },
    orderDate: '04/30/2020',
  },
  {
    id: 'OID789345',
    orderName: 'GEM_1',
    purchaseOrder: '9253856295',
    state: 'Build Prep',
    service: 'HPE Goats as a Service',
    tenant: 'Nestle',
    contact: {
      email: 'wan@nestle.com',
    },
    orderDate: '04/05/2020',
  },
  {
    id: 'OID894567',
    orderName: 'VMaaS for R&D',
    purchaseOrder: '7239456727',
    state: 'Processing',
    service: 'VMaaS for R&D',
    tenant: 'Coke',
    contact: {
      email: 'muhtar@coke.com',
    },
    orderDate: '03/04/2020',
  },
  {
    id: 'OID829374',
    orderName: 'GEM_1',
    purchaseOrder: '1926573453',
    state: 'Factory Express',
    service: 'HPE GreenLake Private Cloud',
    tenant: 'Domain',
    contact: {
      email: 'priyanka@domain.com',
    },
    orderDate: '02/28/2020',
  },
  {
    id: 'OID648379',
    orderName: 'VMaas for R&D',
    purchaseOrder: '2341835675',
    state: 'Provisioning',
    service: 'VMaaS for R&D',
    tenant: 'Nestle',
    contact: {
      email: 'wan@nestle.com',
    },
    orderDate: '02/15/2020',
  },
  {
    id: 'OID192653',
    orderName: 'GEM_1',
    purchaseOrder: '9253578367',
    state: 'In Transit',
    service: 'HPE GreenLake Private Cloud',
    tenant: 'Suncor Energy',
    contact: {
      email: 'melinda@suncor.co',
    },
    orderDate: '01/30/2020',
  },
  {
    id: 'OID524387',
    orderName: 'My MVT Cloud Order',
    purchaseOrder: '2634986755',
    state: 'Cancelled',
    service: 'HPE GreenLake Private Cloud',
    tenant: 'Boeing',
    contact: {
      email: 'susan@boeing.com',
    },
    orderDate: '01/15/2020',
  },
  {
    id: 'OID824567',
    orderName: 'VMaaS for R&D',
    purchaseOrder: '1986476536',
    state: 'Ready to Ship',
    service: 'HPE Goats as a Service',
    tenant: 'Coke',
    contact: {
      email: 'muhtar@coke.com',
    },
    orderDate: '12/29/2019',
  },
  {
    id: 'OID945423',
    orderName: 'My PVT Cloud Order',
    purchaseOrder: '9454285743',
    state: 'Created',
    service: 'HPE GreenLake Private Cloud',
    tenant: 'Domain',
    contact: {
      email: 'priyanka@domain.com',
    },
    orderDate: '12/15/2019',
  },
  {
    id: 'OID253462',
    orderName: 'GEM_1',
    purchaseOrder: '4459253462',
    state: 'Accepted',
    service: 'VMaaS for R&D',
    tenant: 'Suncor Energy',
    contact: {
      email: 'melinda@suncor.co',
    },
    orderDate: '11/01/2019',
  },
  {
    id: 'OID953856',
    orderName: 'DevStageSymR31 (default)',
    purchaseOrder: '2341835675',
    state: 'Processing',
    service: 'VMaaS for R&D',
    tenant: 'Coke',
    contact: {
      email: 'muhtar@coke.com',
    },
    orderDate: '11/01/2019',
  },
  {
    id: 'OID953890',
    orderName: 'DevStageSymR31 (default)',
    purchaseOrder: '475078908',
    state: 'Delivered',
    service: 'Mercury',
    tenant: 'Nestle',
    contact: {
      email: 'wan@nestle.com',
    },
    orderDate: '11/01/2019',
  },
];

const onClickHandler = record => {
  // eslint-disable-next-line no-alert
  alert(`
    Record was clicked:
    { 
        id: ${record.id},
        orderName: ${record.orderName}
        state: ${record.state}
        orderDate: ${record.orderDate}
    }
    
    You can use onClick() to navigate to a record's detail
    page, open a panel or modal to edit the record, or perform 
    other actions as you see fit.
  `);
};

const columns = [
  {
    primary: true,
    property: 'id',
    header: 'Id',
  },
  {
    property: 'orderName',
    header: 'Order Name',
    render: datum => (
      <Button alignSelf="start" onClick={() => onClickHandler(datum)} plain>
        <Text truncate weight="bold">
          {datum.orderName}
        </Text>
      </Button>
    ),
  },
  {
    property: 'purchaseOrder',
    header: 'P.O. #',
    render: datum => <Text truncate>{datum.purchaseOrder}</Text>,
    size: 'xsmall',
  },
  {
    property: 'state',
    header: 'State',
    render: datum => <Text truncate>{datum.state}</Text>,
  },
  {
    property: 'service',
    header: 'Service',
    render: datum => <Text truncate>{datum.service}</Text>,
    size: 'xsmall',
  },
  {
    property: 'tenant',
    header: 'Tenant',
    render: datum => <Text truncate>{datum.tenant}</Text>,
  },
  {
    property: 'contact.email',
    header: 'Contact',
  },
  {
    property: 'orderDate',
    header: 'Order Date',
    render: datum =>
      datum.orderDate && new Date(datum.orderDate).toLocaleDateString(),
    align: 'end',
  },
];

export const TableMultiSelectExample = () => {
  const [checked, setChecked] = React.useState([]);

  const onCheck = (event, value) => {
    if (event.target.checked) {
      setChecked([...checked, value]);
    } else {
      setChecked(checked.filter(item => item !== value));
    }
  };

  const onCheckAll = event =>
    setChecked(event.target.checked ? data.map(datum => datum.id) : []);

  return (
    <>
      <Heading level={3} margin="none">
        Manage Orders
      </Heading>
      <TableControls selected={checked} />
      <Box overflow="auto">
        <DataTable
          data={data}
          primaryKey="id"
          columns={[
            {
              property: 'checkbox',
              render: datum => (
                <CheckBox
                  key={datum.id}
                  checked={checked.indexOf(datum.id) !== -1}
                  onChange={e => onCheck(e, datum.id)}
                />
              ),
              header: (
                <CheckBox
                  checked={checked.length === data.length}
                  indeterminate={
                    checked.length > 0 && checked.length < data.length
                  }
                  onChange={onCheckAll}
                />
              ),
              sortable: false,
            },
            ...columns,
          ]}
        />
      </Box>
    </>
  );
};

const TableControls = ({ selected }) => {
  const demoActionHandler = records => {
    // eslint-disable-next-line no-alert
    alert(
      `
      Handler called to perform an action
      against these records:
      [${records}]
      `,
    );
  };

  return (
    <Box
      direction="row"
      fill="horizontal"
      justify="end"
      pad={{ vertical: 'small' }}
    >
      <Menu
        label="Actions"
        items={[
          {
            label: 'Apply Batch Update',
            onClick: () => {
              demoActionHandler(selected);
            },
          },
          {
            label: 'Update Order Status',
            onClick: () => {
              demoActionHandler(selected);
            },
          },
          {
            label: 'Export',
            onClick: () => {
              demoActionHandler(selected);
            },
          },
        ]}
      />
    </Box>
  );
};

TableControls.propTypes = {
  selected: PropTypes.array,
};
