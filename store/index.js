/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  authenticated: sessionStorage.getItem("authenticated"),
  users: "",
  mechanicTasks: "",
  electricianTasks: "",
  custodianTasks: "",
  currentUser: sessionStorage.getItem("username"),
  statuses: ["To Do", "Doing", "Done"],
});

export const getters = {
  loggedInUser: (state) => (username) =>
    state.users.find((user) => user.username === username),
  getTaskMembers: (state) => (assignee) => {
    return state.users.find((user) => user.username === assignee)
  },
};

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setAuthenticated(state, authenticated) {
    state.authenticated = authenticated;
  },
  setMechanicTasks(state, tasks) {
    state.mechanicTasks = tasks;
  },
  setElectricianTasks(state, tasks) {
    state.electricianTasks = tasks;
  },
  setCustodianTasks(state, tasks) {
    state.custodianTasks = tasks;
  },
  setCurrentUser(state, user) {
    state.currentUser = user;
  },
  addTodoTask(state,task){

  }
};

export const actions = {
  login({ commit }, user) {
    if (this.state.users.some((person) => person.username === user.username)) {
      sessionStorage.setItem("authenticated", true);
      sessionStorage.setItem("username", user.username);
      commit("setCurrentUser", sessionStorage.getItem("username"));
      commit("setAuthenticated", sessionStorage.getItem("authenticated"));
    } else {
      commit(
        "setAuthenticated",
        sessionStorage.setItem("authenticated", false)
      );
    }
  },
};
