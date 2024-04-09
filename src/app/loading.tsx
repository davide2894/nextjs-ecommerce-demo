import { CircularProgress, Container, Stack } from "@mui/material";

function Looading() {
  return (
    <>
      <Container>
        <Stack alignItems="center" marginTop="200px">
          <CircularProgress />
        </Stack>
      </Container>
    </>
  );
}

export default Looading;
