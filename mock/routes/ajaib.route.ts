import { Page, Route, APIRequestContext } from "playwright";

export async function mockAjaibLoginRoute(page: Page, request: APIRequestContext, mockData: object): Promise<void> {
    await page.route('**/api/v7/login/', async (route: Route) => {
      const originalRequest = route.request();
      let json = mockData;
  
      const modifiedResponse = await request.fetch(originalRequest.url(), {
        method: originalRequest.method(),
        headers: {
          ...originalRequest.headers(),
          'content-type': 'application/json',
        },
        data: json,
      });
  
      await route.fulfill({
        status: modifiedResponse.status(),
        headers: modifiedResponse.headers(),
        body: await modifiedResponse.body(),
      });
    });
  }