import { Stack, Typography, Button } from "@mui/material";
import { appStore } from "../Store/appStore";

function Total() {
  const { tipAmount, total, resetButton } = appStore();
  return (
    <Stack
      sx={{
        backgroundColor: "#00474b",
        padding: "20px",
        borderRadius: "18px",
        width: "100%",
        maxWidth: { xs: 300, sm: 420, md: 280 }, // Restrict width for proper centering
        mx: "auto", // Rounded corners yeah
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        marginTop: { xs: "20px", sm: 0 },
      }}
      spacing={{ xs: 8, sm: 15 }}
    >
      <Stack spacing={{ xs: 4, sm: 6 }}>
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Stack sx={{ color: "white" }}>
            <Typography>Tip Amount</Typography>
            <Typography variant="subtitle2" sx={{ opacity: "60%" }}>
              / person
            </Typography>
          </Stack>
          <Typography
            variant="h4"
            sx={{ color: "#2ec7b2", fontWeight: "bold" }}
          >
            ${tipAmount.toFixed(2)}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Stack sx={{ color: "white" }}>
            <Typography>Total</Typography>
            <Typography variant="subtitle2" sx={{ opacity: "60%" }}>
              / person
            </Typography>
          </Stack>
          <Typography
            variant="h4"
            sx={{ color: "#2ec7b2", fontWeight: "bold" }}
          >
            ${total.toFixed(2)}
          </Typography>
        </Stack>
      </Stack>
      <Button
        onClick={resetButton}
        variant="contained"
        sx={{
          color: "#00474b",
          backgroundColor: "#2ec7b2",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#0d686d",
          },
        }}
      >
        Reset
      </Button>
    </Stack>
  );
}

export default Total;
