import Types from './types';
export default {
  state: {
    count: 10
  },
  // actions: {
  //   [Types.A_ADD_COUNT](content,n){
  //     content.commit(Types.A_ADD_COUNT,n);
  //   }
  // },
  mutations: {
    [Types.A_ADD_COUNT](state,n){
      console.log(state); // 这里的state 是模块中的state 
      state.count += n;
    }
  },
  getters: {
    A_addedCount(state){
      console.log(state);// 这里的state 是模块中的state 
      return state.count + 99;
    }
  }
}