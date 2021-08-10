import { usersAPI } from "../api/usersAPI";

const SET_USER = 'SET_USER';
const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";

const initialState = {
  user: {
    id: 0,
    username: ''
  },
  isAuth: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.user
      }
    }
    case LOGIN_SUCCESSFUL: {
      return {
        ...state,
        isAuth: action.isAuth
      }
    }
    default: {
      return state;
    }
  }
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const setIsAuth = (isAuth) => {
  return {
    type: LOGIN_SUCCESSFUL,
    isAuth,
  };
};

export const registerUser = (username, password) => async () => {
  await usersAPI.registerAccount(username, password);
};

export const loginUser = (username, password) => async (dispatch) => {
  await usersAPI.loginAccount(username, password).then((data) => {
    if(data.id) {
      dispatch(setIsAuth(true));
    }
  })
  await dispatch(getUser());
}

export const getUser = () => async (dispatch) => {
  const user = await usersAPI.getMe();
  if(user.id) {
    dispatch(setIsAuth(true))
  }
  dispatch(setUser(user));
}

export const logout = () => async (dispatch) => {
  await usersAPI.logout().then((res) => res)
    .catch((err) => console.log(err))
  await dispatch(setIsAuth(false));
  await dispatch(setUser({
    username: null,
    id: null
  }))
}

export default userReducer;
