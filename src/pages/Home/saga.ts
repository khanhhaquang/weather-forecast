import { put, takeLatest } from 'redux-saga/effects';
import { weatherApi } from 'api';
import axios from 'axios';

function* fetchWeatherSaga(action: { type: string; city: string }) {
  try {
    const cancelSource = axios.CancelToken.source;
    const data = yield call(
      weatherApi.get,
      `/location/search/?query=${action.city}`,
      {
        cancelToken: cancelSource.token,
      },
    );
    yield put({ type: 'weather/success', data });
  } catch (error) {
    yield put({ type: 'weather/error', data: error });
  }
}

function* watch() {
  yield takeLatest('weather/fetch', fetchWeatherSaga);
}

export default watch;
