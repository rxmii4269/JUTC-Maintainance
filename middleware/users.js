import users from '@/data/users.json';

export default function ({ store }) {
  store.commit('setUsers', users);
}
