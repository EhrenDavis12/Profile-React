import { takeLatest, all } from 'redux-saga/effects';
import { SUBMIT_MESSAGE_FORM } from '../constants';
import rootSaga, {
  submitMessageFormStart,
  submitMessageFormSaga,
} from '../saga';

describe('navigationSaga Saga', () => {
  it('should execute the submitMessageFormSaga', () => {
    const generator = submitMessageFormSaga();
    const putDescriptor = generator.next(submitMessageFormStart).value;
    expect(putDescriptor).toEqual(
      takeLatest(SUBMIT_MESSAGE_FORM, submitMessageFormStart),
    );
    expect(putDescriptor).toMatchSnapshot();
  });

  it('should execute the submitMessageFormStart', () => {
    const generator = submitMessageFormStart();
    const putDescriptor = generator.next().value;
    expect(putDescriptor).toMatchSnapshot();
  });

  it('should execute the rootSaga', () => {
    const generator = rootSaga();
    const putDescriptor = generator.next().value;
    expect(putDescriptor).toEqual(all([submitMessageFormSaga()]));
    expect(putDescriptor).toMatchSnapshot();
  });
});
