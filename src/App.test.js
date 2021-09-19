import { getImages } from "./helpers";

describe(`Get images from NASA API`, () => {
  test("Successfully get image data", async () => {
    const response = await getImages();
    expect(response.status).toEqual(200);
  });

  test("An array of 7 items is received", async () => {
    const response = await getImages();
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toEqual(7);
  });

  test("Retrieve image data with correct fields to be displayed", async () => {
    const response = await getImages();
    const image = response.data[0];
    expect(image.title).toBeDefined();
    expect(image.date).toBeDefined();
    expect(image.hdurl).toBeDefined();
    expect(image.explanation).toBeDefined();
  });
});
