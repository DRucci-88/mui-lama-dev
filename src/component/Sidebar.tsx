import { Box } from "@mui/material"

export const Sidebar = () => {
  return (<Box sx={{
    backgroundColor: 'skyblue',
    flex: 1,
    padding: 2,
    display: { xs: 'none', sm: 'block' }
  }}>
    Sidebar
  </Box>)
}