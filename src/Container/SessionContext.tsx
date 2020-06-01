import React from 'react';
import IUser from '../classes/IUser';
type EventHandler = (user: IUser) => void;

interface SessionState {
  user_name: string;
  password: string;
  saveUserHandler: EventHandler;
}

const state: SessionState = {
  user_name: '',
  password: '',
  saveUserHandler: (user: IUser) => {
    console.log('k');
  },
};
interface ISessionProps {
  children?: React.ReactNode;
}
const SessionContext = React.createContext<SessionState>(state);
class Session extends React.Component<ISessionProps, SessionState> {
  constructor(props: any) {
    super(props);
    this.state = {
      user_name: '',
      password: '',
      saveUserHandler: (user: IUser) => {
        this.setState({
          user_name: user.user_name,
          password: user.password,
        });
        console.log(this.state.user_name);
      },
    };
  }
  render() {
    return (
      <div>
        <SessionContext.Provider value={this.state}>
          {this.props.children}
        </SessionContext.Provider>
      </div>
    );
  }
}

export const SessionConsumer = SessionContext.Consumer;
export const SessionProvider = Session;
