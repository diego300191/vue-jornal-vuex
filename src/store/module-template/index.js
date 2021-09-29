import state from "./state";
import * as acctions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

const myCustomModule = {
  namespaced: true,
  acctions,
  getters,
  mutations,
  state,
};

export default myCustomModule;
