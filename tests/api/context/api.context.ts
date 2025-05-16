import { expect, request } from '@playwright/test';
import { APIRequestContext } from '@playwright/test';
import { setAuth, auth as globalAuth } from '../../../auth/auth.store';
import { MyLoginService } from '../service/dummyjson/login.service';
import { DummyJsonUrl } from '../../../enum/dummyjson.enum';
import { variable } from '../../../resources/variables';
import { argParser } from '../../../utilities/environment.helper';

const urlHost:string = argParser(DummyJsonUrl.staging, DummyJsonUrl.dev);

export async function defaultContext():Promise<APIRequestContext> {
  const context = await request.newContext({
    baseURL: urlHost,
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    },
  });

  return context;
}

export async function authContext(): Promise<APIRequestContext> {
  if (globalAuth == undefined) {
    let loginService = new MyLoginService();
    const {data , status} = await loginService.login(
      variable.email, 
      variable.pwd);

    expect(status).toBeTruthy();
    expect(status).toBe(200);
    setAuth(data.accessToken);
  }

  const context = await request.newContext({
    baseURL: urlHost,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${globalAuth}`
    },
  });

  return context;
}