import { createTheme } from "@mui/material";

const COLORS = {
  BLACK: "black",
  WILD_SAND: "#f5f5f5",
  LIGHT_GRAY: "lightgray",
};

const theme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "sm",
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          background: COLORS.BLACK,
          marginTop: "20px",
          "&:hover": {
            backgroundColor: COLORS.WILD_SAND,
            color: COLORS.BLACK,
          },
          "&:disabled": {
            color: COLORS.LIGHT_GRAY,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          maxWidth: 300,
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: 250,
          objectFit: "contain",
          borderRadius: "12px",
          padding: "14px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          minHeight: "50px",
          height: "200px",
          marginTop: "10px",
          padding: "20px",
          borderTop: "1px solid lightgray",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          display: "block",
          color: COLORS.BLACK,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: COLORS.BLACK,
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: COLORS.BLACK,
        },
      },
    },
  },
});

export default theme;
