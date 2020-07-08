import { Beacon, Server, Switch, Technology } from 'grommet-icons';

export const data = [
  {
    displayName: 'Michael Walsh',
    alias: 'Mikey',
    emailAddress: 'michael.walsh@hpe.com',
    icon: size => <Beacon size={size} />,
    location: 'Astoria',
    deviceName: 'P1-K-24',
    ipAddress: '66.168.13.8',
    imageUrl:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80',
    type: 'Access Point',
  },
  {
    displayName: 'Chester Copperpot',
    alias: undefined,
    emailAddress: 'chester.copperpot@hpe.com',
    icon: size => <Beacon size={size} />,
    location: 'Fort Collins',
    deviceName: 'P2-L-18',
    ipAddress: '66.168.13.4',
    imageUrl:
      'https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
    type: 'Access Point',
  },
  {
    displayName: 'Mamma Fratelli',
    alias: undefined,
    emailAddress: 'mamma.fratelli@hpe.com',
    icon: size => <Beacon size={size} />,
    location: 'Fort Collins',
    deviceName: '6U-T-12',
    ipAddress: '192.168.15.100',
    imageUrl:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80',
    type: 'Access Point',
  },
  {
    displayName: 'Brandon Walsh',
    alias: 'Brand',
    emailAddress: 'brandon.walsh@hpe.com',
    icon: size => <Beacon size={size} />,
    location: 'Fort Collins',
    deviceName: '6U-T-13',
    ipAddress: '192.168.15.101',
    imageUrl:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80',
    type: 'Access Point',
  },
  {
    displayName: 'Andrea Carmichael',
    alias: 'Andy',
    emailAddress: 'andrea.carmichael@hpe.com',
    icon: size => <Beacon size={size} />,
    location: 'Fort Collins',
    deviceName: '6U-T-14',
    ipAddress: '192.168.15.105',
    imageUrl:
      'https://images.unsplash.com/photo-1456049616707-070399496327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
    type: 'Access Point',
  },
  {
    displayName: 'Richard Wang',
    alias: 'Data',
    emailAddress: 'richard.wang@hpe.com',
    icon: size => <Server size={size} />,
    location: 'Fort Collins',
    deviceName: '6L-RS-T3',
    ipAddress: '192.168.13.7',
    imageUrl:
      'https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
    type: 'Server',
  },
  {
    displayName: 'Troy Perkins',
    alias: 'Troy',
    emailAddress: 'troy.perkins@hpe.com',
    icon: size => <Technology size={size} />,
    location: 'Fort Collins',
    deviceName: '4L-D2-C3',
    ipAddress: '66.171.153.8',
    imageUrl:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80',
    type: 'Router',
  },
  {
    displayName: 'Lawrence Cohen',
    alias: 'Chunk',
    emailAddress: 'lawrence.cohen@hpe.com',
    icon: size => <Technology size={size} />,
    location: 'Fort Collins',
    deviceName: '4L-D2-C3',
    ipAddress: '192.168.1.1',
    imageUrl:
      'https://images.unsplash.com/photo-1456049616707-070399496327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
    type: 'Router',
  },
  {
    displayName: 'Clark Devereaux',
    alias: 'Mouth',
    emailAddress: 'clark.devereaux@hpe.com',
    icon: size => <Switch size={size} />,
    location: 'Fort Collins',
    deviceName: '4L-S2-T57',
    ipAddress: '192.168.15.46',
    imageUrl:
      'https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
    type: 'Switch',
  },
  {
    displayName: 'Stephanie Steinbrenner',
    alias: 'Stef',
    emailAddress: 'stephanie.steinbrenner@hpe.com',
    icon: size => <Switch size={size} />,
    location: 'Fort Collins',
    deviceName: '4L-S2-D32',
    ipAddress: '192.168.15.24',
    imageUrl:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80',
    type: 'Switch',
  },
];
