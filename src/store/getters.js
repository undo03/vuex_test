import Types from './types';

export default {
  addedCount(state){
    console.log(state);
    return state.count + 100;
  },
  // A_addedCount(state){
  //   console.log(state);
  //   return state.count + 99;
  // }
}