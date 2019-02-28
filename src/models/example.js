import * as example from '../services/example';

export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({dispatch, history}) {
      // 如果路径为'/example'，触发dispatch，调用reducers中的load方法
      return history.listen(({pathname}) => {
        if (pathname === '/example') {
          dispatch({type: 'load'});
        }
      });
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {
      console.log("fetch");
      // 异步调用services/example.js中的query方法
      const result = yield call(example.query, 2000);
      // 再触发dispatch，调用reducers中的save方法
      yield put({type: 'save', payload: result});
    },
  },

  reducers: {
    save(state, action) {
      console.log(action);
      console.log(state);
      return {...state, ...action.payload};
    },
    load(state, action) {
      console.log(action);
      return {data: "11111"};
    }
  },

};
