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
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiMenu: {

      styleOverrides: {
        root: {

          '& .MuiPaper-root': {
            // backgroundColor: '#F4F5F9',
            // border: 'black',
            border: '0.5px solid #AFB1C1',

          },
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
            border: '1px solid #AFB1C1',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#AFB1C1',
            },
            '&:hover fieldset': {
              border: '1px solid #AFB1C1',
            },
            '&.Mui-focused fieldset': {
              border: '1px solid #AFB1C1',
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // '& $notchedOutline': {
          //   borderColor: 'green',
          // },
          // '&:hover fieldset': {
          //   borderColor: 'red!important',
          // },
          // '&:focused fieldset': {
          //   borderColor: 'purple!important',
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
