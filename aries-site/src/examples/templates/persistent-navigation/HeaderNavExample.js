import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Grid,
  Header,
  Heading,
  List,
  Menu,
  Nav,
  ResponsiveContext,
  Stack,
  Text,
} from 'grommet';
import {
  Clock,
  Location,
  Hpe,
  Menu as MenuIcon,
  Projects,
  Splits,
  StatusInfoSmall,
} from 'grommet-icons';

const pages = [
  {
    name: 'Focus',
    icon: <StatusInfoSmall />,
    content: 'panes',
  },
  {
    name: 'Services',
    icon: <Projects />,
    content: 'cards',
  },
  {
    name: 'Glances',
    icon: <Clock />,
    content: 'cards',
  },
  {
    name: 'Flows',
    icon: <Splits />,
    content: 'list',
  },
  {
    name: 'Locations',
    icon: <Location />,
    content: 'list',
  },
];

export const HeaderNavExample = ({ mobile }) => {
  const [activeItem, setActiveItem] = React.useState(1);

  return (
    <ResponsiveContext.Provider value={mobile && 'small'}>
      <ResponsiveContext.Consumer>
        {size => (
          <AppContainer activeItem={activeItem}>
            <Header fill="horizontal" pad="medium">
              <AppIdentity name={pages[activeItem].name} />
              <Box direction="row" gap="medium">
                <MainNavigation
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                />
                {size !== 'small' && (
                  <Stack anchor="bottom-right">
                    <Avatar background="blue!">DS</Avatar>
                    <Box
                      background="status-ok"
                      pad={{ horizontal: 'xsmall' }}
                      height="12px"
                      width="12px"
                      round
                    />
                  </Stack>
                )}
              </Box>
            </Header>
            <PageContent
              gridArea="pageContent"
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </AppContainer>
        )}
      </ResponsiveContext.Consumer>
    </ResponsiveContext.Provider>
  );
};

HeaderNavExample.propTypes = {
  mobile: PropTypes.bool,
};

const AppContainer = ({ ...rest }) => {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box
      background="background-back"
      height={size === 'small' ? { max: 'large' } : undefined}
      width={size === 'small' ? 'medium' : '100%'}
      overflow="auto"
      {...rest}
    />
  );
};

const MainNavigation = ({ activeItem, setActiveItem }) => {
  const size = React.useContext(ResponsiveContext);

  return size !== 'small' ? (
    <Nav direction="row" gap="xsmall">
      <NavItems activeItem={activeItem} setActiveItem={setActiveItem} />
    </Nav>
  ) : (
    <Menu
      icon={<MenuIcon />}
      dropAlign={{ top: 'bottom', right: 'right' }}
      hoverIndicator
      items={pages.map((item, index) => ({
        label: item.name,
        onClick: () => setActiveItem(index),
      }))}
    />
  );
};

MainNavigation.propTypes = {
  activeItem: PropTypes.number,
  setActiveItem: PropTypes.func,
};

const NavItems = ({ activeItem, setActiveItem }) => {
  return (
    pages &&
    pages.map((item, index) => (
      <SimpleButton
        key={item.name}
        name={item.name}
        active={index === activeItem}
        onClick={() => setActiveItem(index)}
        round="xsmall"
      />
    ))
  );
};

export const SimpleButton = ({ active, name, ...rest }) => {
  const [hover, setHover] = React.useState();

  return (
    <Button
      onMouseOver={() => setHover(true)}
      onFocus={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onBlur={() => setHover(false)}
      {...rest}
    >
      <Box
        pad={{ horizontal: 'small', vertical: 'xsmall' }}
        round="xxsmall"
        background={active || hover ? 'active-background' : undefined}
      >
        <Text weight="bold" margin="none">
          {name}
        </Text>
      </Box>
    </Button>
  );
};

SimpleButton.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
};

SimpleButton.defaultProps = {
  active: false,
};

const PageContent = ({ activeItem }) => {
  const { content, name } = pages[activeItem];
  const items = new Array(9).fill(); // Mock data

  return (
    pages && (
      <Box pad={{ horizontal: 'medium', bottom: 'large' }} flex="grow">
        <Heading level={2} margin={{ vertical: 'small' }}>
          {name}
        </Heading>
        {content && content === 'cards' && <GridLayout items={items} />}
        {content && content === 'list' && <ListLayout items={items} />}
        {content && content === 'panes' && <PanesLayout items={items} />}
      </Box>
    )
  );
};

PageContent.propTypes = {
  activeItem: PropTypes.number,
};

const AppIdentity = ({ name }) => (
  <Button>
    <Box direction="row" align="center" gap="small">
      <Hpe color="brand" />
      <Box direction="row" gap="xsmall">
        <Text weight="bold">HPE</Text>
        <Text>{name}</Text>
      </Box>
    </Box>
  </Button>
);

AppIdentity.propTypes = {
  name: PropTypes.string,
};

const GridLayout = ({ items }) => {
  return (
    <Grid columns={{ count: 'fit', size: 'small' }} rows="small" gap="medium">
      {items.map((item, index) => (
        <Box key={index} background="background-front" fill round="small" />
      ))}
    </Grid>
  );
};

GridLayout.propTypes = {
  items: PropTypes.array,
};

const ListLayout = ({ items }) => (
  <List data={items} border={{ size: '0' }} pad={{ vertical: 'xsmall' }}>
    {(datum, index) => (
      <Box
        key={index}
        background="background-front"
        height="xxsmall"
        round="xsmall"
      />
    )}
  </List>
);
ListLayout.propTypes = {
  items: PropTypes.array,
};

const PanesLayout = ({ items }) => {
  return items.map((item, index) => (
    <Box
      key={index}
      background="background-front"
      height="medium"
      margin={{ vertical: 'small' }}
      round="xsmall"
    />
  ));
};

PanesLayout.propTypes = {
  items: PropTypes.array,
};
