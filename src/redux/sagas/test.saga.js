import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getTest() {
  console.log('getTEST');
}

function* testSaga() {
  yield takeLatest('GET_TEST', getTest)
}

export default testSaga;