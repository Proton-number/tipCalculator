import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Container from "./Components/Container";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: " 'Space Mono', monospace",
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: "12px", // Globally apply border radius to all TextFields
            backgroundColor: "#f3f8fb",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            textAlign: "right", // Text alignment for the input element
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={3}>
        <Stack sx={{ alignItems: "center" }}>
          <Box component="img" src="/logo.svg" alt="logo-img" />
        </Stack>
        <Container />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
