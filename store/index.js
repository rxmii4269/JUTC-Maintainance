
export const state = () => ({
  authenticated: sessionStorage.getItem('authenticated'),
  users: "",
  mechanicTasks: "",
  electricianTasks:"",
  currentUser:sessionStorage.getItem('username'),
  statuses: ['To Do','Doing','Done']
});

export const getters = {
  loggedInUser: (state) =>(username)=> {
    return state.users.find(user=>user.username === username);
  },
};

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setAuthenticated(state,authenticated){
    state.authenticated = authenticated;
  },
  setMechanicTasks(state,tasks){
    state.mechanicTasks = tasks;
  },
  setCurrentUser(state,user){
    state.currentUser = user;
  }
};

export const actions = {
  login({ getters, commit }, user) {
    if(this.state.users.some(person=>person.username === user.username)){
      sessionStorage.setItem('authenticated',true);
      sessionStorage.setItem('username',user.username);
      commit('setCurrentUser',sessionStorage.getItem('username'));
      commit('setAuthenticated',sessionStorage.getItem('authenticated'));
    }else{
      commit('setAuthenticated',sessionStorage.setItem('authenticated',false))
    }
   
  },
};


