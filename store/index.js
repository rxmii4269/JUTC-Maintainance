
export const state = () => ({
  authenticated: sessionStorage.getItem('authenticated'),
  users: ""
});

export const getters = {
  isLoggedIn: () => {
    return "hi";
  },
  loggedInUser: (state) =>(username)=> {
    return state.users.find(user=>user.username === username && user.password === password);
  },
};

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setAuthenticated(state,authenticated){
    state.authenticated = authenticated;
  }
};

export const actions = {
  login({ getters, commit }, user) {
    if(this.state.users.some(person=>person.username === user.username)){
      getters.loggedInUser(user.username);
      sessionStorage.setItem('authenticated',true);
      commit('setAuthenticated',sessionStorage.getItem('authenticated'));
    }else{
      throw new Error;
    }
   
  },
};


