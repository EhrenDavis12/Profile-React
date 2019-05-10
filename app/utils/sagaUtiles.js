import { call, put, select } from 'redux-saga/effects';

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

export async function postJson(url, body) {
  let resp;
  try {
    const data = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
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

export function* postApi(path, body, successAction, failureAction) {
  try {
    const { data, err } = yield call(postJson, `//${path}`, body);
    if (data) yield put(successAction(data));
    else yield put(failureAction(...err.message));
  } catch (e) {
    yield put(failureAction(...e.message));
  }
}

export function* fetchApiMiddleMan(
  path,
  middleWareFunction,
  successAction,
  failureAction,
) {
  try {
    // eslint-disable-next-line prefer-const
    let { data, err } = yield call(fetchJson, `//${path}`);
    if (middleWareFunction) data = yield call(middleWareFunction, data);
    if (data) {
      yield put(successAction(data));
    } else yield put(failureAction(...err.message));
  } catch (e) {
    yield put(failureAction(...e.message));
  }
}

export function* fetchStateWithMethodSave(
  makeSelectPropFromState,
  middleWareFunction,
  additionalPrams,
  successAction,
  failureAction,
) {
  try {
    const selectedProp = yield select(makeSelectPropFromState());
    const storedProp = yield call(
      middleWareFunction,
      selectedProp,
      additionalPrams,
    );
    if (storedProp) {
      yield put(successAction(storedProp));
    }
  } catch (e) {
    yield put(failureAction(...e.message));
  }
}

export function* postStateApi(
  path,
  makeSelectPropFromState,
  successAction,
  failureAction,
) {
  try {
    const body = yield select(makeSelectPropFromState());
    const { data, err } = yield call(postJson, `//${path}`, body);
    if (data) yield put(successAction(data));
    else yield put(failureAction(...err.message));
  } catch (e) {
    yield put(failureAction(...e.message));
  }
}
