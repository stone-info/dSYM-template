import Vue          from 'vue';
import Vuex         from 'vuex';
import createLogger from 'vuex/dist/logger';
import axios        from 'axios';
import Mock         from 'mockjs';

const Random = Mock.Random;

Vue.use(Vuex);

const types = {
  SET_AUTHENTICATED: 'SET_AUTHENTICATED',
  SET_USER         : 'SET_USER',

};

const state = {
  isAuthenticated: false,
  user           : {},
};

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  user           : state => state.user,
};

const mutations = {
  [types.SET_AUTHENTICATED] (state, isAuthenticated) {
    state.isAuthenticated = !!isAuthenticated;
  },

  [types.SET_USER] (state, user) {
    state.user = !!user ? user : {};
  },
};
const actions   = {

  setAuthenticated (context, isAuthenticated) {
    let { commit, dispatch, getters, rootGetters, rootState, state } = context;
    commit(types.SET_AUTHENTICATED, isAuthenticated);
  },
  setUser (context, user) {
    let { commit, dispatch, getters, rootGetters, rootState, state } = context;
    commit(types.SET_USER, user);
  },
  clearCurrentState (context, payload) {
    let { commit, dispatch, getters, rootGetters, rootState, state } = context;
    commit(types.SET_AUTHENTICATED, false);
    commit(types.SET_USER, null);

  },
};

let store = new Vuex.Store({
  modules: {},
  state,
  mutations,
  actions,
  getters,
  plugins: [
    createLogger({
      collapsed: false, // 自动展开记录的 mutation
      filter (mutation, stateBefore, stateAfter) {
        // 若 mutation 需要被记录，就让它返回 true 即可
        // 顺便，`mutation` 是个 { type, payload } 对象
        // 打印与不打印的区别...
        // return mutation.type === "increment"
        return true;
      },
      transformer (state) {
        // 在开始记录之前转换状态
        // 例如，只返回指定的子树
        return 'state = ' + JSON.stringify(state, null, 2);
      },
      mutationTransformer (mutation) {
        // mutation 按照 { type, payload } 格式记录
        // 我们可以按任意方式格式化
        return 'sync method : ' + JSON.stringify(mutation, null, 2);
      },
      logger   : console, // 自定义 console 实现，默认为 `console`
    }),
  ],
});

export default store;
