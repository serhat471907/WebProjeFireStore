import { getAuth, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';

// State'in türlerini tanımlayın
export interface RootState {
  user: { email: string; uid: string } | null;
}

export const state = (): RootState => ({
  user: null,
});

export const mutations = {
  setUser(state: RootState, user: { email: string; uid: string } | null) {
    state.user = user;
  },
};

export const actions = {
  initAuth({ commit }: { commit: (mutation: string, payload: any) => void }) {
    const auth = getAuth(); // Firebase Auth örneğini burada alın
    onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        commit('setUser', { email: user.email || '', uid: user.uid });
      } else {
        commit('setUser', null);
      }
    });
  },
};
