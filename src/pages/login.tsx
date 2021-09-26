// @flow
import * as React from "react";
type Props = {};
type State = {};
export class Login extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <div id="container">
          <form>
            <label>Email</label>
            <input type="email" placeholder="Email" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <input type="submit" value="Log in" />
          </form>
        </div>
      </div>
    );
  }
}
