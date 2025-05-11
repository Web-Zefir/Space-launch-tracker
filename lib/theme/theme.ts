import { createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    space: [
      '#0A0A0A',
      '#1A1A2E',
      '#16213E',
      '#0F3460',
      '#533483',
      '#6C63FF',
      '#5D53E6',
      '#4E43CC',
      '#3F33B3',
      '#302399'
    ] as const, 
  },
  primaryColor: 'space',
  defaultRadius: 'md' as const
});

export default theme;
