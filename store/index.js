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
  updateTask(state, task) {
    console.log(task.taskInfo);
    if (task.tab === "Mechanics") {
      state.mechanicTasks.forEach((element, index) => {
        if (element.id === task.taskInfo.id) {
          state.mechanicTasks[index].status = task.taskInfo.status;
          state.mechanicTasks[index].duedate = task.taskInfo.dueDate;
          state.mechanicTasks[index].updated = task.taskInfo.updated;
        }
      });
    } else if (task.tab === "Electronics") {
      state.electricianTasks.forEach((element, index) => {
        if (element.id === task.taskInfo.id) {
          state.electricianTasks[index].status = task.taskInfo.status;
          state.electricianTasks[index].duedate = task.taskInfo.dueDate;
          state.electricianTasks[index].updated = task.taskInfo.updated;
        }
      });
    } else {
      state.custodianTasks.forEach((element, index) => {
        if (element.id === task.taskInfo.id) {
          console.log('it does');
          state.custodianTasks[index].status = task.taskInfo.status;
          state.custodianTasks[index].duedate = task.taskInfo.dueDate;
          state.custodianTasks[index].updated = task.taskInfo.updated;
        }
      });
    }
  },
  updateMechanicsTodo(state, task) {
    task.forEach((element) => {
      if (state.mechanicTasks.includes(element)) {
        let index = state.mechanicTasks.indexOf(element);
        let currentDate = new Date();
        state.mechanicTasks[index].status = "To Do";
        state.mechanicTasks[index].updated = `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`;
      }
    });
  },
  updateMechanicsDoing(state, task) {
    task.forEach((element) => {
      if (state.mechanicTasks.includes(element)) {
        let index = state.mechanicTasks.indexOf(element);
        let currentDate = new Date();
        state.mechanicTasks[index].status = "Doing";
        state.mechanicTasks[index].updated = `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`;
      }
    });
  },
  updateMechanicsDone(state, task) {
    task.forEach((element) => {
      if (state.mechanicTasks.includes(element)) {
        let index = state.mechanicTasks.indexOf(element);
        let currentDate = new Date();
        state.mechanicTasks[index].status = "Done";
        state.mechanicTasks[index].updated = `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`;
      }
    });
  },
  updateElectricianTodo(state, task) {
    task.forEach((element) => {
      if (state.electricianTasks.includes(element)) {
        let index = state.electricianTasks.indexOf(element);
        let currentDate = new Date();
        state.electricianTasks[index].status = "To Do";
        state.electricianTasks[index].updated = `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`;
      }
    });
  },
  updateElectricianDoing(state, task) {
    task.forEach((element) => {
      if (state.electricianTasks.includes(element)) {
        let currentDate = new Date();
        let index = state.electricianTasks.indexOf(element);
        state.electricianTasks[index].status = "Doing";
        state.electricianTasks[index].updated = `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`;
      }
    });
  },
  updateElectricianDone(state, task) {
    task.forEach((element) => {
      if (state.electricianTasks.includes(element)) {
        let currentDate = new Date();
        let index = state.electricianTasks.indexOf(element);
        state.electricianTasks[index].status = "Done";
        state.electricianTasks[index].updated = `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`;
      }
    });
  },
  updateCustodianTodo(state, task) {
    task.forEach((element) => {
      if (state.custodianTasks.includes(element)) {
        let currentDate = new Date();
        let index = state.custodianTasks.indexOf(element);
        state.custodianTasks[index].status = "To Do";
        state.custodianTasks[index].updated = `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`;
      }
    });
  },
  updateCustodianDoing(state, task) {
    task.forEach((element) => {
      if (state.custodianTasks.includes(element)) {
        let currentDate = new Date();
        let index = state.custodianTasks.indexOf(element);
        state.custodianTasks[index].status = "Doing";
        state.custodianTasks[index].updated = `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`;
      }
    });
  },
  updateCustodianDone(state, task) {
    task.forEach((element) => {
      if (state.custodianTasks.includes(element)) {
        let index = state.custodianTasks.indexOf(element);
        let currentDate = new Date();
        state.custodianTasks[index].status = "Done";
        state.custodianTasks[index].updated = `${currentDate.getFullYear()}-${
          currentDate.getMonth() + 1
        }-${currentDate.getDate()}`;
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
  updateTask({ commit }, task) {
    commit("updateTask", task);
  },
};
