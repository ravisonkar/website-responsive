import React from 'react';
import { IsaveUser } from '../classes/IsaveUser';
type EventHandler = (user: IsaveUser) => void;

interface SessionState {
  user: IsaveUser;
  saveUserHandler: EventHandler;
}

const state: SessionState = {
  user: {} as IsaveUser,
  saveUserHandler: (user: IsaveUser) => {
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
      user: {} as IsaveUser,
      saveUserHandler: (user: IsaveUser) => {
        const { picture }: any = user;
        const { data }: any = picture;
        this.setState({ user: data });
        console.log(this.state.user);
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
