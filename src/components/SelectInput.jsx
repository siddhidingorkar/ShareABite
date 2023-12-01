import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ mt: 3, mr: 5, minWidth: 275 }} size="small">
      <InputLabel id="demo-select-small-label">Gender</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Male</MenuItem>
        <MenuItem value={20}>Female</MenuItem>
        <MenuItem value={30}>Don't Specify</MenuItem>
      </Select>
    </FormControl>
  );
}
