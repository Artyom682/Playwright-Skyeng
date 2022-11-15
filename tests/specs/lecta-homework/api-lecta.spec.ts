import { request } from "@playwright/test";

export async function createHomework(): Promise<string> {
  const context = await request.newContext({
    baseURL: "https://backend-hw.lecta.ru",
  });

  const response = await context.post("/api/v1/task/create", {
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjY3MjQ3MDcsImV4cCI6MTY2OTMxNjcwNywicm9sZXMiOlsiUk9MRV9FRFVfU0tZU01BUlRfVEVBQ0hFUl9VU0FHRSJdLCJ1c2VySWQiOjM5NDM0ODA0LCJlbWFpbCI6ImRsdmtqZGxmdmpkbGZAbWFpbC5ydSIsIm5hbWUiOiJ0ZWFjaGVyIiwic3VybmFtZSI6InRlc3Rvdml5MTIzIiwiaWRlbnRpdHkiOiJob3hpa2FndXRlIn0.XYQd497Ekyq09WUuwj-3pwLoTxZlO_pC7AYNjzMWwaFtNCfCnDz5VwuOTrE8PJw6agh-gfchAP1G-vllCW4jWaL9sZ3FBN2WY7oIwRQN4Rv1RIkN6sMq8bNP0qxNEIi_i0elo6Hxlv2YS6ATvKo9p5VJzbv2VFRxrcedfFFTUU066NAn3Yjqf10ETKpjdOFOpWPmmbLKlvtctkS4nCMz2ipKPdbvZKWKXdKOM_MYJxzgREx2Y1XdqpLX1Z0Se-J5NsZO9juh10tBn-ctEQRsANfqYdyGN-Ph6pJXNoQuLJf7M3MfWUMWL1C04o-Yh48maF14ca_MTQDbj5spybgIYl3wm38Y4F5GB2rVGX9vGVoMHsHcrCKM_hk9765MmXVrbrUhu30WIm0bA2d80GIBenyS8M29-dTY5AsT_rY8rLWmJyrRPmeHlXRKII78Wbh4qvyROgKEWfLQr4i59pvbdi_1azP41vea1xGJSLLikdE5aR-fMjwHFA0prd27j9oct7Mo7fXPLmpR_FUKR9zUr80DUItuLORgcU0TTTLWH5i1I2C_zfzpSFvo-nthNgcGGMMBFvSvqcup2ZCTl5erO5NDsR4v9O49Rx8BofY7PVzqCI54ERC4bGVwu7kWhrw72ZufARw5XsxDYYBJIk_x9yKd1OozJB_Y3Eqy5esTO0A`,
      "Content-Type": "application/json",
    },
    data: {
      stepUuids: ["52c93cf4-8498-4e47-931c-2fade41aaacc"],
      workbookId: 940,
      meta: {
        subject: {
          id: 17,
        },
      },
    },
  });

  return JSON.parse(await response.text()).hash;
}
