import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack, } from "@mui/icons-material"
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material"
import { useState } from "react";

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
})

export const AddPost = () => {
  const [open, setOpen] = useState(false);

  return (<>
    <Tooltip onClick={() => setOpen(true)}
      title={'Add Post'}
      sx={{

        position: 'fixed',
        bottom: 20,
        left: { xs: 'calc(50%  - 25px)', md: 30 }
      }}>
      <Fab color="primary" aria-label="add">
        <Add />
      </Fab>
    </Tooltip>
    <StyledModal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          width: 400,
          height: 280,
          bgcolor: 'white',
          p: 3,
          borderRadius: 5,
        }}
      // sx={{
      //   position: 'absolute',
      //   top: '50%',
      //   left: '50%',
      //   transform: 'translate(-50%, -50%)',
      //   bgcolor: 'gray',
      //   border: '2px solid #000',
      //   boxShadow: 24,
      //   p: 4,
      //   borderRadius: 5
      // }}
      >
        <Typography id="modal-modal-title" variant="h6" color='gray' textAlign={'center'}>
          Create Post
        </Typography>
        <UserBox>
          <Avatar
            src="https://picsum.photos/seed/picsum/100/100"
            sx={{
              width: 30,
              height: 30
            }} />
          <Typography variant="subtitle2" fontWeight={500} >
            John Doe
          </Typography>
        </UserBox>
        <TextField
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind"
          variant="standard"
          sx={{
            width: '100%'
          }}
        />
        <Stack direction={'row'} gap={1} mt={2} mb={3}>
          <EmojiEmotions color="primary" />
          <Image color="secondary" />
          <VideoCameraBack color="success" />
          <PersonAdd color="error" />
        </Stack>
        <ButtonGroup
          variant="contained"
          aria-labek='outlined primary button group'
          fullWidth
        >
          <Button>Post</Button>
          <Button
            sx={{
              width: '100px'
            }}>
            <DateRange />
          </Button>
        </ButtonGroup>
      </Box>
    </StyledModal>
  </>)
}