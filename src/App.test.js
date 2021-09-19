import { getPicOfTheDay } from "./helpers";

test("Successfully get data from NASA API", async () => {
  const response = await getPicOfTheDay();
  expect(response.status).toEqual(200);
});
