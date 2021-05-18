import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import {
  Box,
  Card,
  CardBody,
  Grid,
  Heading,
  ResponsiveContext,
  Text,
} from 'grommet';

import { FilterControls, FilterContext } from '../../FilterControls';
import { users } from './mockData';

const StyledCard = styled(Card)`
  will-change: transform;
  transition: all 0.15s ease-in-out;
  :focus,
  :hover {
    transform: scale(1.01, 1.01);
  }
`;

export const FilteringCards2 = () => {
  const filterContext = useContext(FilterContext)();

  return (
    <>
      <Heading level={2} margin={{ bottom: 'small', top: 'none' }}>
        Users
      </Heading>
      <FilterContext.Provider value={{ ...filterContext, data: users }}>
        {/* FilterControls provides filtering mechanisms to affect our 
        result set, in this case, Users. */}
        <FilterControls />
        <Users />
      </FilterContext.Provider>
    </>
  );
};

const Users = () => {
  const size = useContext(ResponsiveContext);
  const {
    data,
    filteredResults,
    setFilteredResults,
    setFilterAttributes,
    filters,
    filtersLayer,
    getFilteredResults,
    searchValue,
  } = useContext(FilterContext);

  /* keep filteredResults up to date as parent data set may change */
  useEffect(() => {
    // if there are no filters applied, filteredResults should be
    // the entire result set
    if (
      filteredResults.length === 0 &&
      Object.keys(filters).length === 0 &&
      searchValue.length === 0
    )
      setFilteredResults(data);
    // If data set changes, reapply filters. However, if the filters layer is
    // open, don't automatically apply; instead, let user use the layer controls
    // to set filtered results
    else if (!filtersLayer) {
      const nextResults = getFilteredResults(data, filters, searchValue);
      if (JSON.stringify(nextResults) !== JSON.stringify(filteredResults))
        setFilteredResults(nextResults);
    }
  }, [
    data,
    filteredResults,
    setFilteredResults,
    filters,
    filtersLayer,
    getFilteredResults,
    searchValue,
  ]);

  /* Configure which attributes should be made available for the user 
     to filter upon */
  useEffect(() => {
    const attributes = [
      {
        property: 'location',
        header: 'Location',
        filterType: 'checkboxgroup',
      },
      {
        property: 'hoursAvailable',
        header: 'Hours',
        filterType: 'checkboxgroup',
      },
      { property: 'name', header: 'Name', filterType: 'checkboxgroup' },
      { property: 'role', header: 'Role', filterType: 'checkboxgroup' },
      { property: 'status', header: 'Status', filterType: 'checkboxgroup' },
    ];

    setFilterAttributes(attributes);
  }, [data, setFilterAttributes]);

  return (
    <Box overflow="auto" pad={{ bottom: 'medium' }} fill>
      <Grid
        columns={size !== 'small' ? 'small' : { count: 2, size: 'auto' }}
        gap={size !== 'small' ? 'medium' : 'small'}
        margin={{ top: 'small' }}
      >
        {filteredResults.map((datum, index) => (
          <StyledCard
            background="background"
            elevation="medium"
            key={index}
            onClick={() => {
              // eslint-disable-next-line no-alert
              alert(`
                Typically a click would route to a view with 
                greater detail behind this summary information.
              `);
            }}
          >
            <CardBody gap="xsmall" justify="between">
              <Box flex={false}>
                <Box align="center" direction="row" gap="xsmall">
                  <Box
                    background={
                      datum.status === 'Online' ? 'brand' : 'text-weak'
                    }
                    pad="xsmall"
                    round
                  />
                  <Text color="text-strong">{datum.status}</Text>
                </Box>
                <Text color="text-strong" size="large" weight="bold">
                  {datum.name}
                </Text>
                <Text color="text-strong">{datum.location}</Text>
              </Box>
              <Box>
                <Text size="small">Role</Text>
                <Text color="text-strong">{datum.role}</Text>
              </Box>
            </CardBody>
          </StyledCard>
        ))}
      </Grid>
    </Box>
  );
};
