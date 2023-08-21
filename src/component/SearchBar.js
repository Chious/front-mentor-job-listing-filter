import React, { useState } from "react";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Stack,
  Chip,
  Button,
  Card,
} from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";

import data from "../data.json";

const language = new Set([]);

data.forEach((item) => {
  language.add(...item.languages);
});

const tool = new Set([]);

data.forEach((item) => {
  tool.add(...item.tools);
});
tool.delete(undefined);

const role = new Set([]);
data.forEach((item) => {
  role.add(item.role);
});

const level = new Set([]);
data.forEach((item) => {
  level.add(item.level);
});

console.log(...language);

const names = [...language, ...tool, ...role, ...level];

export default function SearchBar() {
  const [selectedNames, setSelectedNames] = useState([]);

  return (
    <Card sx={{ ml: "10px", mr: "10px" }}>
      <Stack
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormControl sx={{ m: 1, width: 500 }}>
          <InputLabel>Multiple Select</InputLabel>
          <Select
            multiple
            value={selectedNames}
            onChange={(e) => setSelectedNames(e.target.value)}
            input={<OutlinedInput label="Multiple Select" />}
            renderValue={(selected) => (
              <Stack gap={1} direction="row" flexWrap="wrap">
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={() =>
                      setSelectedNames(
                        selectedNames.filter((item) => item !== value)
                      )
                    }
                    deleteIcon={
                      <CancelIcon
                        onMouseDown={(event) => event.stopPropagation()}
                      />
                    }
                    style={{
                      color: "hsl(180, 29%, 50%)",
                      background: "hsl(180, 31%, 95%)",
                      fontSize: "15px",
                      fontWeight: 700,
                      fontFamily: 'League Spartan", sans-serif',
                    }}
                  />
                ))}
              </Stack>
            )}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
                {selectedNames.includes(name) ? (
                  <CheckIcon color="info" />
                ) : null}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          onClick={(event) => {
            event.preventDefault();
            setSelectedNames([]);
          }}
          style={{
            fontSize: "15px",
            fontWeight: 700,
            fontFamily: '"League Spartan", sans-serif',
            color: "hsl(180, 29%, 50%)",
          }}
        >
          Clear
        </Button>
      </Stack>
    </Card>
  );
}
