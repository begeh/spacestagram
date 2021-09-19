import { getImages } from "./helpers";

test("Successfully get data from NASA API", async () => {
  const response = await getImages();
  expect(response.status).toEqual(200);
});
