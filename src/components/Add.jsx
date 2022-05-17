import {
  Add as AddIcon,
  DateRange,
  Delete,
  EmojiEmotions,
  Image,
  PersonAdd,
  PersonAddAlt,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Button,
  Fab,
  IconButton,
  Tooltip,
  Modal,
  Box,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  marginBottom: "10px",
  //   [theme.breakpoints.up("sm")]: {
  //     display: "none",
  //   },
}));
const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={e => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 15,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Button>Open modal</Button>
      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color="text.primary"
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="grey" textAlign="center">
            Create Post{" "}
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} src="../../public/ak.jpg" />
            <Typography variant="span">Ashish</Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            sx={{ width: "100%" }}
            multiline
            rows={3}
            placeholder="What's in your mind ? "
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
