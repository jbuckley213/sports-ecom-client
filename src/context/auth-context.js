import React from "react";
import authService from "./../lib/auth-service";

const { Consumer, Provider } = React.createContext();

class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: true,
    user: null,
    signupFailed: false,
    loginFailed: false,
  };

  componentDidMount() {
    authService
      .me()
      .then((user) =>
        this.setState({ isLoggedIn: true, user: user, isLoading: false })
      )
      .catch((err) =>
        this.setState({ isLoggedIn: false, user: null, isLoading: false })
      );
  }

  signup = (email, password) => {
    authService
      .signup(email, password)
      .then((user) =>
        this.setState({ isLoggedIn: true, user, signupFailed: false })
      )
      .catch((err) => {
        console.log(err);
        this.setState({ isLoggedIn: false, user: null, signupFailed: true });
      });
  };

  login = (email, password) => {
    authService
      .login(email, password)
      .then((user) => {
        console.log(user);
        this.setState({ isLoggedIn: true, user, loginFailed: false });
      })
      .catch((err) => {
        this.setState({ isLoggedIn: false, user: null, loginFailed: true });
      });
  };

  googleLogin = (googleData) => {
    authService
      .googleLogin(googleData)
      .then((user) => {
        console.log(user);
        this.setState({ isLoggedIn: true, user });
      })
      .catch((err) => {
        this.setState({ isLoggedIn: false, user: null });
      });
  };

  logout = () => {
    authService
      .logout()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
      .catch((err) => console.log(err));
  };

  render() {
    const {
      isLoggedIn,
      isLoading,
      user,
      loginFailed,
      signupFailed,
    } = this.state;
    const { signup, login, logout, googleLogin } = this;

    if (isLoading) return <p>Loading</p>;

    return (
      <Provider
        value={{
          isLoggedIn,
          isLoading,
          user,
          loginFailed,
          signupFailed,
          signup,
          login,
          logout,
          googleLogin,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

// HOC that converts regular component into a Consumer
const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            const {
              isLoggedIn,
              isLoading,
              user,
              loginFailed,
              signupFailed,
              signup,
              login,
              logout,
              googleLogin,
            } = value;

            return (
              <WrappedComponent
                {...this.props}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                user={user}
                loginFailed={loginFailed}
                signupFailed={signupFailed}
                signup={signup}
                login={login}
                logout={logout}
                googleLogin={googleLogin}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

export { AuthProvider, withAuth };
