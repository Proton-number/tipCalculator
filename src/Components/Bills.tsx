import {
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Box,
  Grid,
  Button,
} from "@mui/material";
import { appStore } from "../Store/appStore";
import { useEffect } from "react";

function Bills() {
  const tips: string[] = ["5%", "10%", "15%", "25%", "50%", "Custom"]; // Specifying the type which array of strings

  const {
    bill,
    setBill,
    people,
    setPeople,
    calculateTip,
    tipPercentage,
    setTipPercentage,
    clicked,
    setClicked,
  } = appStore();

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBill(value === "" ? 0 : Number(value));
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPeople(value === "" ? 0 : Number(value));
  };

  useEffect(() => {
    calculateTip();
  }, [bill, people, tipPercentage]);

  const handleTipClick = (tip: string, index: number) => {
    setClicked(index);
    setTipPercentage(tip === "Custom" ? 0 : parseInt(tip.replace("%", "")));
  };

  return (
    <Stack sx={{ width: "100%", maxWidth: 540 }} spacing={2}>
      <Stack>
        <Typography sx={{ fontWeight: "bold", color: "#00474b" }}>
          Bill
        </Typography>
        <TextField
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Box component="img" alt="dollar" src="/icon-dollar.svg" />
                </InputAdornment>
              ),
            },
          }}
          placeholder="0"
          value={bill === 0 ? "" : bill}
          onChange={handleBillChange}
        />
      </Stack>
      <Stack>
        <Typography sx={{ fontWeight: "bold", color: "#00474b" }}>
          Select Tip %
        </Typography>
        <Grid container spacing={2}>
          {tips.map((tip, index) => (
            <Grid item xs={6} sm={2} lg={6} key={index}>
              <Button
                sx={{
                  backgroundColor:
                    index === clicked
                      ? "#26c2ad"
                      : index === 5
                      ? "#f3f8fb"
                      : "#00474b",
                  color: index === 5 ? "#00474b" : "white",
                  display: "flex",
                  justifyContent: "center",
                  width: "50%",
                  padding: "5px",
                  cursor: "pointer",
                }}
                onClick={() => handleTipClick(tip, index)}
              >
                <Typography sx={{ fontWeight: "bold" }}>{tip}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Stack>
        <Typography sx={{ fontWeight: "bold", color: "#00474b" }}>
          Number of People
        </Typography>
        <TextField
          placeholder="0"
          value={people === 0 ? "" : people}
          onChange={handlePeopleChange}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Box component="img" alt="dollar" src="/icon-person.svg" />
                </InputAdornment>
              ),
            },
          }}
        />
      </Stack>
    </Stack>
  );
}

export default Bills;
