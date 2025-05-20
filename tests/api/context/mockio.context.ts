import { APIRequestContext, request } from "playwright";
import { argParser } from "../../../utilities/environment.helper";
import { MockIoUrl } from "../../../enum/mockio.enum";

const urlHost:string = argParser(MockIoUrl.staging, MockIoUrl.dev);

export async function mockioContext():Promise<APIRequestContext> {
    const context = await request.newContext({
        baseURL: urlHost,
        extraHTTPHeaders: {
          'Content-Type': 'application/json'
        },
      });
    
      return context;
}