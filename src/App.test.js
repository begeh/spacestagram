import { getAPOD } from "./helpers";

test("Successfully get data from NASA API", async () => {
  const response = await getAPOD();
  expect(response.status).toEqual(200);
});
