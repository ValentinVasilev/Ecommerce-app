import { InputBase, Paper } from "@mui/material";
import React from "react";

const Search = () => {
  return (
    <div>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
      >

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Paper>
    </div>
  )
}

export default Search;