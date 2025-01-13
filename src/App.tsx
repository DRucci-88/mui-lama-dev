import { Feed } from "./component/Feed";
import { Sidebar } from "./component/Sidebar";
import { Rightbar } from "./component/Rightbar";
import { Box, createTheme, Divider, Stack, ThemeProvider, } from "@mui/material";
import { Navbar } from "./component/Navbar";
import { AddPost } from "./component/AddPost";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const changeTheme = (mode: 'light' | 'dark') => {
    setMode(mode);
  }

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction={'row'} spacing={2} alignItems={'flex-start'} justifyContent={'space-between'}
          divider={<Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />}>
          <Sidebar mode={mode} changeTheme={changeTheme} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  )
}

export default App;
