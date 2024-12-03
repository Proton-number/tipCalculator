import { Paper, Stack } from "@mui/material";
import Bills from "./Bills";
import Total from "./Total";

function Container() {
  return (
    <Paper
      sx={{
        p: { xs: 1.5, sm: 4 },
        borderRadius: "18px",
        maxWidth: { sm: 700 },
      }}
      elevation={10}
    >
      <Stack
        direction={{ md: "row" }}
        spacing={{ sm: 2, lg: 4 }}
        sx={{ alignItems: "center" }}
      >
        <Bills />
        <Total />
      </Stack>
    </Paper>
  );
}

export default Container;
