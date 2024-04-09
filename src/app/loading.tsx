import { CircularProgress, Container, Stack } from "@mui/material";

export default function Loading() {
  return (
    <Container>
      <Stack alignItems="center" marginTop="200px">
        <CircularProgress />
      </Stack>
    </Container>
  );
}
