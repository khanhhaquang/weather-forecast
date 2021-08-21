import { put, call, takeLatest } from 'redux-saga/effects';
import { weatherApi } from 'api';
import { AxiosResponse } from 'axios';
import { SagaIterator } from 'redux-saga';
import { CityData } from './types';

function* fetchWeatherSaga(action: { type: string; city: string }): SagaIterator<void> {
  try {
    const locationData: AxiosResponse = yield call(
      weatherApi.get,
      `/location/search/?query=${action.city}`,
    );
    const cityData: CityData = locationData.data[0];

    if (cityData) {
      const weatherData: AxiosResponse = yield call(weatherApi.get, `/location/${cityData.woeid}/`);
      yield put({ type: 'weather/success', data: weatherData.data.consolidated_weather });
      return;
    }

    yield put({
      type: 'weather/error',
      data: {
        message: 'Not found',
      },
    });
  } catch (error) {
    yield put({ type: 'weather/error', data: error });
  }
}

function* watch() {
  yield takeLatest('weather/request', fetchWeatherSaga);
}

export default watch;
