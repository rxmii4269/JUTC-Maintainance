/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  authenticated: process.browser ? sessionStorage.getItem("authenticated") : "",
  users: "",
  mechanicTasks: "",
  electricianTasks: "",
  custodianTasks: "",
  currentUser: process.browser ? sessionStorage.getItem("username") : "",
  statuses: ["To Do", "Doing", "Done"],
});

export const getters = {
  loggedInUser: (state) => (username) =>
    state.users.find((user) => user.username === username),
  getTaskMembers: (state) => (assignee) => {
    return state.users.find((user) => user.username === assignee);
  },
  mechanicsTodo: function (state) {
    return state.mechanicTasks.filter(function (u) {
      if (u.status == "To Do") {
        return u;
      }
    });
  },
  mechanicsDoing: function (state) {
    return state.mechanicTasks.filter(function (u) {
      if (u.status == "Doing") {
        return u;
      }
    });
  },
  mechanicsDone: function (state) {
    return state.mechanicTasks.filter(function (u) {
      if (u.status == "Done") {
        return u;
      }
    });
  },
  electricianTodo: function (state) {
    return state.electricianTasks.filter(function (u) {
      if (u.status == "To Do") {
        return u;
      }
    });
  },
  electricianDoing: function (state) {
    return state.electricianTasks.filter(function (u) {
      if (u.status == "Doing") {
        return u;
      }
    });
  },
  electricianDone: function (state) {
    return state.electricianTasks.filter(function (u) {
      if (u.status == "Done") {
        return u;
      }
    });
  },
  custodianTodo: function (state) {
    return state.custodianTasks.filter(function (u) {
      if (u.status == "To Do") {
        return u;
      }
    });
  },
  custodianDoing: function (state) {
    return state.custodianTasks.filter(function (u) {
      if (u.status == "Doing") {
        return u;
      }
    });
  },
  custodianDone: function (state) {
    return state.custodianTasks.filter(function (u) {
      if (u.status == "Done") {
        return u;
      }
    });
  },
  mechanicTasks: (state) => {
    return state.mechanicTasks;
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
  addTodoTask(state, task) {
    let val = state.mechanicTasks;
    val.push(task);
    state.mechanicTasks = val;
  },
  updateMechanicsTodo(state, task) {
    task.forEach((element) => {
      if (state.mechanicTasks.includes(element)) {
        let index = state.mechanicTasks.indexOf(element);
        state.mechanicTasks[index].status = "To Do";
      }
    });
  },
  updateMechanicsDoing(state, task) {
    task.forEach((element) => {
      if (state.mechanicTasks.includes(element)) {
        let index = state.mechanicTasks.indexOf(element);
        state.mechanicTasks[index].status = "Doing";
      }
    });
  },
  updateMechanicsDone(state, task) {
    task.forEach((element) => {
      if (state.mechanicTasks.includes(element)) {
        let index = state.mechanicTasks.indexOf(element);
        state.mechanicTasks[index].status = "Done";
      }
    });
  },
  updateElectricianTodo(state, task) {
    task.forEach((element) => {
      if (state.electricianTasks.includes(element)) {
        let index = state.electricianTasks.indexOf(element);
        state.electricianTasks[index].status = "To Do";
      }
    });
  },
  updateElectricianDoing(state, task) {
    task.forEach((element) => {
      if (state.electricianTasks.includes(element)) {
        let index = state.electricianTasks.indexOf(element);
        state.electricianTasks[index].status = "Doing";
      }
    });
  },
  updateElectricianDone(state, task) {
    task.forEach((element) => {
      if (state.electricianTasks.includes(element)) {
        let index = state.electricianTasks.indexOf(element);
        state.electricianTasks[index].status = "Done";
      }
    });
  },
  updateCustodianTodo(state, task) {
    task.forEach((element) => {
      if (state.custodianTasks.includes(element)) {
        let index = state.custodianTasks.indexOf(element);
        state.custodianTasks[index].status = "To Do";
      }
    });
  },
  updateCustodianDoing(state, task) {
    task.forEach((element) => {
      if (state.custodianTasks.includes(element)) {
        let index = state.custodianTasks.indexOf(element);
        state.custodianTasks[index].status = "Doing";
      }
    });
  },
  updateCustodianDone(state, task) {
    task.forEach((element) => {
      if (state.custodianTasks.includes(element)) {
        let index = state.custodianTasks.indexOf(element);
        state.custodianTasks[index].status = "Done";
      }
    });
  },
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
  addTodoTask({ commit }, task) {
    commit("addTodoTask", task);
  },
};
