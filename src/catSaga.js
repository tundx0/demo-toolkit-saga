import  {call, put, takeEvery} from 'redux-saga/effects'

// call allows to call APIs/URLs
// Allows to call Actions
// takeEvery watch an action/function and trigger function whenver action is being called

function* catSaga() {
  yield takeEvery('cats/getCatsFetch')
}

