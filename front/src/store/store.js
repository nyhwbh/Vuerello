import { createStore } from "vuex";
import vuerello from "./modules/vuerello"

export default createStore({
    modules : {
        vuerello : vuerello
    }
})

console.log(vuerello.state);
console.log(vuerello.state.todoData[0].listCards);
console.log("store");