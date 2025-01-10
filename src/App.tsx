import { Feed } from "./component/Feed";
import { Sidebar } from "./component/Sidebar";
import { Rightbar } from "./component/Rightbar";
import { Box, Divider, Stack, } from "@mui/material";
import { Navbar } from "./component/Navbar";

function App() {

  return (<>
    <Box >
      <Navbar />
      <Stack direction={'row'} spacing={2} alignItems={'flex-start'} justifyContent={'space-between'}
        divider={<Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>

    </Box>
  </>
  )
}

export default App;
