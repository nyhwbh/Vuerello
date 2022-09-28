import todoDatas from '../../data/todoData'

const storage = {
    fetch() {
        const arr = [];
        arr.push( todoDatas )
        return arr;
    }
};

const state = {
    todoData: storage.fetch()
};

const getters = {
    storedTodoDatas(state) {
        return state.todoData
    }
}

const mutations = {
     addOneItem(state, todoItem){
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    
     removeOneItem(state, payload){
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index,1);
    },
    
     toggleOneItem(state, payload){
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        // localstorage에 대이터 갱신
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    
     clearAllItem(state){
        localStorage.clear();
        state.todoItems = [];
    }
}

export default {
    state,
    getters,
    mutations
}