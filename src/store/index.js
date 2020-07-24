import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[
        {
          title: "todo item a",
          completed: false
        },
        {
          title: "todo item b",
          completed: false
        },
    ],
    count: 3,
    gArray: [
      { id: 1, text: 'aaaa', done: true },
      { id: 2, text: 'bbbb', done: false }
    ],
    flagValue: 1,
  },
  getters:{
    doneGArray: state => {
      return state.gArray.filter(gArray => gArray.done);
    },
    //can able to find espacific getter array length
    doneTodosCount: (state, getters) => {
      return getters.doneGArray.length;
    },
    //find id using method
    getTodoById: (state) => (id) =>{
      return state.gArray.find(gArray => gArray.id === id)
    }
  },
  mutations: {
    NEW_TODO(state, todoItem){
      state.todos.push({
        title: todoItem,
        completed: false
      })
    },
    increment: state => state.count++,
    decrement: state => state.count--,
    changeFlagValue(state){
      state.flagValue++
    }
  },
  actions: {
    addNewTodo({commit}, todoItem){
      commit('NEW_TODO',todoItem);
    }
  },
  modules: {

  }
});
//console.log(this.store.getters.doneTodos);
// this.store.commit('increment');
// console.log(this.store.state.count());

