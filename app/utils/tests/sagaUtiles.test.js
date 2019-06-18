import { put, call, select } from 'redux-saga/effects';
import { createSelector } from 'reselect';
// import fetch from 'isomorphic-fetch';

import {
  fetchJson,
  postJson,
  fetchApi,
  postApi,
  fetchApiMiddleMan,
  fetchStateWithMethodSave,
  postStateApi,
} from '../sagaUtiles';

const successAction = data => data;
const failureAction = data => data;
const path = 'URL Path';
const errorResponse = new Error('Some error');

/* function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    }),
  );
} */

describe('fetching methods group', () => {
  describe('fetchJson', () => {
    /* beforeAll(() => {
      // fetch.setValue(`{data: ${path}}`);
      fetch.setValue({ data: path });
    });
    it('should execute the fetchApi', async () => {
      debugger;
      const gen = fetchJson({ data: path });
      // const putDescriptor = generator.next(path).value;
      // const results = await fetchJson(path);
      // const { results } = await gen.next();
      debugger;
      const { value } = await gen.next();
      debugger;

      expect(value).toEqual(path);
      debugger;
    }); */
    /* it('should execute the fetchApi', async () => {
      fetch = mockFetch({ data: path }); // or window.fetch
    }); */
  });

  /* describe('fetchApi', () => {
    let generator;
    beforeEach(() => {
      generator = fetchApi(path, successAction, failureAction);
    });

    it('should execute the fetchApi', () => {
      const putDescriptor = generator.next().value;
      expect(putDescriptor).toEqual(call(fetchJson, `//${path}`));
    });

    it('should return from fetchApi with faileure', () => {
      let putDescriptor = generator.next().value;
      putDescriptor = generator.next({
        data: null,
        err: { message: 'Not data found' },
      }).value;
      expect(putDescriptor).toEqual(put(failureAction('Not data found')));
    });

    it('should return from fetchApi with success', () => {
      const data = { data1: 'hello' };
      let putDescriptor = generator.next().value;
      putDescriptor = generator.next({
        data,
        err: { message: 'not an error' },
      }).value;
      expect(putDescriptor).toEqual(put(successAction(data)));
    });

    it('should throw error from fetchApi', () => {
      let putDescriptor = generator.next().value;
      putDescriptor = generator.throw(errorResponse).value;
      expect(putDescriptor).toEqual(put(failureAction('Some error')));
    });
  });

  describe('fetchApiMiddleMan', () => {
    let generator;
    let middleWareFunction;
    beforeEach(() => {
      middleWareFunction = jest.fn();
      generator = fetchApiMiddleMan(
        path,
        middleWareFunction,
        successAction,
        failureAction,
      );
    });

    it('should call middleWareFunction', () => {
      const data = { data1: 'hello' };
      let putDescriptor = generator.next().value;
      putDescriptor = generator.next({
        data,
        err: null,
      }).value;
      expect(putDescriptor).toEqual(call(middleWareFunction, data));
    });

    it('should return from fetchApiMiddleMan with failure', () => {
      let putDescriptor = generator.next().value;
      putDescriptor = generator.next({
        data: null,
        err: { message: 'Not data found' },
      }).value;
      putDescriptor = generator.next().value;
      expect(putDescriptor).toEqual(put(failureAction('Not data found')));
    });

    it('should return from fetchApiMiddleMan with success', () => {
      const data = { data1: 'hello' };
      let putDescriptor = generator.next().value;
      putDescriptor = generator.next({
        data,
        err: null,
      }).value;
      putDescriptor = generator.next(data).value;
      expect(putDescriptor).toEqual(put(successAction(data)));
    });

    it('should throw error from fetchApiMiddleMan', () => {
      let putDescriptor = generator.next().value;
      putDescriptor = generator.throw(errorResponse).value;
      expect(putDescriptor).toEqual(put(failureAction('Some error')));
    });
  });

  describe('fetchStateWithMethodSave', () => {
    let generator;
    let makeSelectPropFromState;
    let middleWareFunction;
    let additionalPrams;
    const selectedProp = [{ id2: '3' }, { id2: '1' }];

    beforeEach(() => {
      makeSelectPropFromState = () =>
        createSelector(state => state, subState => subState.toJS());
      middleWareFunction = jest.fn();
      additionalPrams = 'foo';
      generator = fetchStateWithMethodSave(
        makeSelectPropFromState,
        middleWareFunction,
        additionalPrams,
        successAction,
        failureAction,
      );
    });

    it('should call fetchStateWithMethodSave return success', () => {
      let putDescriptor = generator.next().value;
      expect(JSON.stringify(putDescriptor)).toEqual(
        JSON.stringify(select(makeSelectPropFromState())),
      );

      putDescriptor = generator.next(selectedProp).value;
      expect(putDescriptor).toEqual(
        call(middleWareFunction, selectedProp, additionalPrams),
      );

      putDescriptor = generator.next(selectedProp).value;
      expect(putDescriptor).toEqual(put(successAction(selectedProp)));
    });

    it('should throw error from fetchStateWithMethodSave', () => {
      let putDescriptor = generator.next().value;
      putDescriptor = generator.throw(errorResponse).value;
      expect(putDescriptor).toEqual(put(failureAction('Some error')));
    });
  }); */
});

/* describe('Posting methods group', () => {
  describe('postApi', () => {
    let generator;
    const body = { body: 'winning!' };

    beforeEach(() => {
      generator = postApi(path, body, successAction, failureAction);
    });

    it('should return from postApi with success', () => {
      const data = { data1: 'hello' };

      let putDescriptor = generator.next().value;
      expect(putDescriptor).toEqual(call(postJson, `//${path}`, body));

      putDescriptor = generator.next({
        data,
        err: null,
      }).value;
      expect(putDescriptor).toEqual(put(successAction(data)));
    });

    it('should return from postApi with failure ', () => {
      let putDescriptor = generator.next().value;
      putDescriptor = generator.next({
        data: null,
        err: { message: 'Not data found' },
      }).value;
      expect(putDescriptor).toEqual(put(failureAction('Not data found')));
    });

    it('should throw error from postApi', () => {
      let putDescriptor = generator.next().value;
      putDescriptor = generator.throw(errorResponse).value;
      expect(putDescriptor).toEqual(put(failureAction('Some error')));
    });
  });

  describe('postStateApi', () => {
    let generator;
    let makeSelectPropFromState;
    const body = [{ id2: '3' }, { id2: '1' }];

    beforeEach(() => {
      makeSelectPropFromState = () =>
        createSelector(state => state, subState => subState.toJS());
      generator = postStateApi(
        path,
        makeSelectPropFromState,
        successAction,
        failureAction,
      );
    });

    it('should call fetchStateWithMethodSave return success', () => {
      let putDescriptor = generator.next().value;
      expect(JSON.stringify(putDescriptor)).toEqual(
        JSON.stringify(select(makeSelectPropFromState())),
      );

      putDescriptor = generator.next(body).value;
      expect(putDescriptor).toEqual(call(postJson, `//${path}`, body));

      putDescriptor = generator.next({
        data: body,
        err: null,
      }).value;
      expect(putDescriptor).toEqual(put(successAction(body)));
    });

    it('should call fetchStateWithMethodSave return failure', () => {
      let putDescriptor = generator.next().value;
      expect(JSON.stringify(putDescriptor)).toEqual(
        JSON.stringify(select(makeSelectPropFromState())),
      );

      putDescriptor = generator.next(body).value;
      expect(putDescriptor).toEqual(call(postJson, `//${path}`, body));

      putDescriptor = generator.next({
        data: null,
        err: { message: 'Not data found' },
      }).value;
      expect(putDescriptor).toEqual(put(failureAction('Not data found')));
    });

    it('should throw error from fetchStateWithMethodSave', () => {
      let putDescriptor = generator.next().value;
      putDescriptor = generator.throw(errorResponse).value;
      expect(putDescriptor).toEqual(put(failureAction('Some error')));
    });
  });
});
 */
