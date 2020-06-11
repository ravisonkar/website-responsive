import React from 'react';
import { IUser } from '../classes/IUser';
type EventHandler = (user: IUser) => void;

interface SessionState {
  user: IUser;
  saveUserHandler: EventHandler;
}

const state: SessionState = {
  user: {} as IUser,
  saveUserHandler: (user: IUser) => {
    console.log(user);
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
      user: {} as IUser,
      saveUserHandler: (user: IUser) => {
        this.setState({ user });
        console.log(user);
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
