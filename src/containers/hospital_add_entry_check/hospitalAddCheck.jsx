import React from "react";
import "./hospitalAddCheckStyling.scss";
import { Link, withRouter } from "react-router-dom";
import { Requests } from "../index.js";
import PatientCreator from "../../ethereum/patient";
import web3 from "../../ethereum/web3";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';


class PatientGrant extends React.Component {

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
      this.setState({ visible: true });
  }

  hide() {
      this.setState({ visible: false });
  }

  render() {
    const {
      patientShareRecord,
      text1,
      text2,
      overlapGroup2,
      inputType,
      inputPlaceholder,
      view,
    } = this.props;

    return (
      <div class="container-center-horizontal">
        <form
          className="patient-grant screen"
          style={{ backgroundImage: `url(${patientShareRecord})` }}
          name="form1"
          action="form1"
          method="post"
        >
          <div className="text-1-patient-grant poppins-medium-white-20px">{text1}</div>
          <div className="group-52">
            <div className="text-2-patient-grant poppins-normal-baby-powder-18px">{text2}</div>
            <div className="overlap-group2-patient-grant" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <input
                className="enter-ethereum-address-grant"
                name="2212"
                placeholder={inputPlaceholder}
                type={inputType}
                required
              />
            </div>
          </div>
      
          <div className="group-54">
            <div className="overlap-group-patient-grant">
              <a onClick={this.show.bind(this)}>
                <div className="rectangle-94">
                <div className="view-patient-grant">{view}</div>
                </div>
              </a>

              <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                  <div className="text-1-rodal">You don’t have permission to add a record</div>
                  <a >
                    <div className="rectangle-94-rodal">
                      <div className="view-rodal">Request Permission</div>
                    </div>
                  </a>
              </Rodal>
          </div>
        </div> 
        </form>
      </div>
    );
  }
}

export default withRouter(PatientGrant);