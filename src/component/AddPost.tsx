import { Add, } from "@mui/icons-material"
import { Fab, Tooltip } from "@mui/material"

export const AddPost = () => {
  return (<>
    <Tooltip
      title={'Add Post'}
      sx={{

        position: 'fixed',
        bottom: 20,
        left: { xs: 'calc(50%  - 25px)', md: 30 }
      }}>
      <Fab color="primary" aria-label="add">
        <Add />
      </Fab>
      {/* <IconButton>
        <Delete />
      </IconButton> */}
    </Tooltip>
  </>)
}