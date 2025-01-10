import { Box } from "@mui/material"

export const Rightbar = () => {
  return (<Box bgcolor={'lightgreen'} sx={{
    flex: 2,
    padding: 2,
    display: { xs: 'none', sm: 'block' }
  }}>
    Feed
  </Box>)
}