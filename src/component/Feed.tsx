import { Box } from "@mui/material"
import { Post } from "./Post"

export const Feed = () => {

  const a = [0, 1, 2, 3, 4];

  return (<Box
    // bgcolor={'lightslategray'}
    sx={{
      flex: 4,
      padding: 2
    }}>

    {a.map(() => {
      return <Post />
    })}

  </Box>)
}