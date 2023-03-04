/* eslint-disable no-unused-vars */
import { createTheme } from '@mui/material/styles';

const navy = '#14121D';
const darkestGrey = '#28282D';
const midGrey = '#848698';
const lightGrey = '#AFB1C1';
const lighterGrey = '#DEDFE8';
const lightestGrey = '#F4F5F9';
const white = '#FFFFFF';

const theme = createTheme({
  typography: {
    fontFamily: 'Asap',
    fontSize: 16,
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: navy, // navy
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },

  },

  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'none!important',
          },
          textTransform: 'none',
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&.MuiButton-text': {
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: '14px',
            textDecoration: 'underline',
          },
          '&.MuiButton-text:hover': {
            backgroundColor: 'transparent!important',
          },
          '&.MuiButton-outlined:hover': {
            backgroundColor: 'transparent!important',
          },
          '&:hover': {
            backgroundColor: 'none!important',
          },
          textTransform: 'none',
          // '&.MuiButton-contained': {
          //   backgroundColor: '#14121D!important',
          // },
          // '&.MuiButton-disabled': {
          //   backgroundColor: '#AFB1C1!important',
          // },
        },
      },
      defaultProps: {
        disableElevation: true,
        component: 'label',
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '0.5px solid #AFB1C1',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: 'none',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#848698',
        },
      },

    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            // border: '1px solid #AFB1C1',
          },
          '& .MuiInput-underline:after': {
            // border: '1px solid #AFB1C1',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#AFB1C1',
            },
            '&:hover fieldset': {
              border: '1px solid #848698',
            },
            '&.Mui-focused fieldset': {
              border: '1px solid #848698',
            },
          },
          background: '#F4F5F9',
          // fontSize: 18,
          // height: 40,

        },
      },
      defaultProps: {
        size: 'small',
      },

    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent!important',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // '& $notchedOutline': {
          //   borderColor: 'green!important',
          // },
          // '&:hover fieldset': {
          //   borderColor: 'red!important',
          // },
          // '&:.Mui-focused fieldset': {
          //   borderColor: 'red!important',
          // },
          background: '#F4F5F9',
          // fontSize: 18,
          // height: 40,

        },
      },
      defaultProps: {
        inputProps: {
          style: {
            // fontSize: '11.8px',
            // height: '.85rem',
          },
        },
      },
    },
  },

  shadows: Array(25).fill('none'),
});

export default theme;
