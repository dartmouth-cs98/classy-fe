import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Asap',
    fontSize: 16,
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#14121D', // navy
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },

  },

  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },

  shadows: ['none'],
});

export default theme;
