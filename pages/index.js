import { token } from "../util/token";
import Login from "../components/Login";
import App from "../components/App";

export default class Index extends React.Component {
  render() {
    return token ? <App /> : <Login baseUrl={this.props.baseUrl} />;
  }
}
