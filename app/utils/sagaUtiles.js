import { call, put } from 'redux-saga/effects';

export async function fetchJson(url) {
  let resp;
  try {
    const data = await fetch(url);
    resp = { data: await data.json() };
  } catch (e) {
    resp = { err: e.message };
  }
  return resp;
}

export function* fetchApi(path, successAction, failureAction) {
  try {
    const { data, err } = yield call(fetchJson, `//${path}`);
    if (data) yield put(successAction(data));
    else yield put(failureAction(...err.message));
  } catch (e) {
    yield put(failureAction(...e.message));
  }
}