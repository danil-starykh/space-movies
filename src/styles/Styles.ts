import { createTheme } from "@mui/material/styles";

export const Colors ={
  primary: '#66FCF1',
  secondary: '#202833',
  success: '#66FCF1',
  info: '#66FCF1',
  danger: '#66FCF1',
  warning: '#66FCF1',
  muted: '#45A29F',
  light: '#EAEAEA',
  body_bg: '#0B0C10',
  card_bg_color: '#293341',
  card_icon_color: '#3D8F8C',
  rating_color: '#F5BF18'
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
      dark: Colors.muted,
    },
    secondary: {
      main: Colors.secondary,
    },
    text: {
      primary: Colors.light
    }
  },
  typography: { 
    fontFamily: 'Roboto',
  }
});

export default theme;