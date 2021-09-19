import { getNASAImageData } from "./helpers";

test("Successfully get data from NASA API", async () => {
  const response = await getNASAImageData();
  expect(response.status).toEqual(200);
});
