import { getImages } from "./helpers";

test("Successfully get data from NASA API", async () => {
  const response = await getImages();
  expect(response.status).toEqual(200);
});

test("Retrieve an array of 7 items from NASA API", async () => {
  const response = await getImages();
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.length).toEqual(7);
});

test("Retrieve an array of 7 images from NASA API", async () => {
  const response = await getImages();
  const image = response.data[0];
  expect(image.title).toBeDefined();
  expect(image.date).toBeDefined();
  expect(image.hdurl).toBeDefined();
  expect(image.explanation).toBeDefined();
});
