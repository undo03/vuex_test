import Types from './types';

export default {
  [Types.ADD_COUNT](state,n){
    state.count += n;
  },
  [Types.CHANGE_TITLE](state,newTitle){
    state.title = newTitle
  },
  // [Types.A_ADD_COUNT](state,n){
  //   console.log(state); // 这里的state 是全局的state 
  //   state.count += n;
  // }
}