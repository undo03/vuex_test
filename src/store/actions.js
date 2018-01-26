import Types from './types';
export default {
  [Types.ADD_COUNT](context,n){
    console.log(context);
    context.commit(Types.ADD_COUNT,n);
  },
  [Types.CHANGE_TITLE](context,newTitle){
    context.commit(Types.CHANGE_TITLE,newTitle);
  },


  [Types.A_ADD_COUNT](content,n){
    content.commit(Types.A_ADD_COUNT,n);
  }
}