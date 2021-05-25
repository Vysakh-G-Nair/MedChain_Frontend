import React from "react";
import "./loginAsStyling.scss";
import { Link, withRouter } from "react-router-dom";
import user_img from "./user.png";
import hospital_img from "./hospital.png";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

class LoginAs extends React.Component {
  state = {
    errorMessage: "",
    loading: false,
    visible: false,
    noMetavisible: false,
  };

  componentDidMount() {
    if (typeof window.web3 === 'undefined') {
      // console.log("No meta");
      this.setState({ noMetavisible: true });
    }
  }

  loginPatient = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();

      const patientInstance = await factory.methods.loginPatient().call({
        from: accounts[0],
      });

      this.props.history.push({
        pathname: "/patient",
        state: patientInstance,
      });
    } catch (error) {
      const er = error.message;
      console.log(er);
      this.setState({
        errorMessage: er.slice(er.indexOf("N"), er.indexOf("nt") + 2),
        visible: true,
      });
      console.log(error.message);
    }
    this.setState({ loading: false });
  };

  loginDoctor = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();

      const doctorInstance = await factory.methods.loginDoctor().call({
        from: accounts[0],
      });

      this.props.history.push({
        pathname: "/hospital",
        state: doctorInstance,
      });
    } catch (error) {
      this.setState({
        errorMessage: error.message.slice(20, 44),
        visible: true,
      });
      console.log(error.message);
    }
    this.setState({ loading: false });
  };

  loginExtUser = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();

      const extUserInstance = await factory.methods.loginExtUser().call({
        from: accounts[0],
      });

      this.props.history.push({
        pathname: "/external",
        state: extUserInstance,
      });
    } catch (error) {
      const er = error.message;
      this.setState({
        errorMessage: error.message.slice(20, 51),
        visible: true,
      });
      console.log(error.message);
    }
    this.setState({ loading: false });
  };

  render() {
    const { register, registerAs, patient, place, externaluser } = this.props;

    return (
      <div className="container-center-horizontal">
        <form
          className="register screen"
          style={{ backgroundImage: `url(${register})` }}
          name="form2"
          action="form2"
          method="post"
        >
          <div className="overlap-group-register">
            <div className="register-as poppins-medium-white-20px">
              {registerAs}
            </div>
            <a onClick={this.loginPatient}>
              <div className="group-61-register">
                <div className="overlap-group2-register">
                  <img className="user-1-register" src={user_img} alt="" />
                  <div className="patient-register poppins-semi-bold-amethyst-20px">
                    {patient}
                  </div>
                </div>
              </div>
            </a>
            <a onClick={this.loginDoctor}>
              <div className="group-62-register">
                <div className="overlap-group1-register">
                  <img
                    className="hospital-2-register"
                    src={hospital_img}
                    alt=""
                  />
                  <div className="place-register poppins-semi-bold-amethyst-20px">
                    {place}
                  </div>
                </div>
              </div>
            </a>
            <a onClick={this.loginExtUser}>
              <div className="group-61-register">
                <div className="overlap-group2-register">
                  <img className="user-1-register" src={user_img} alt="" />
                  <div className="patient-register poppins-semi-bold-amethyst-20px">
                    {externaluser}
                  </div>
                </div>
              </div>
            </a>
            <Rodal
              visible={this.state.visible}
              onClose={() => this.setState({ visible: false })}
            >
              <div className="text-1-rodal">{this.state.errorMessage}</div>
              <Link to="/register">
                <div className="rectangle-94-rodal">
                  <div className="view-rodal">Go to Register Page</div>
                </div>
              </Link>
            </Rodal>
            <Rodal
              visible={this.state.noMetavisible}
              onClose={() => this.props.history.push("/")}
            >
              <div className="text-1-rodal">Web3 not found! MetaMask may not be installed or configured correctly!</div>
              <a href="https://metamask.io/" target="_blank">
                <div className="rectangle-94-rodal">
                  <div className="view-rodal">Go to MetaMask site</div>
                </div>
              </a>
            </Rodal>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginAs);
