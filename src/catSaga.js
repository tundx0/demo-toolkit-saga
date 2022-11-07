import  {call, put, takeEvery} from 'redux-saga/effects'
import {getCatsSuccess} from './catState'
// call allows to call APIs/URLs
// Allows to call Actions
// takeEvery watch an action/function and trigger function whenver action is being called

function* workGetCatsFetch() {
  const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'))
  // using yield because we need to wait for each call to finish before starting the next as an async operation
  const formattedCats = yield cats.json();
  const formattedCatsShortened = formattedCats.slice(0, 10)
  yield put(getCatsSuccess(formattedCatsShortened))
}

function* catSaga() {
  yield takeEvery('cats/getCatsFetch', workGetCatsFetch)
}

export default catSaga

