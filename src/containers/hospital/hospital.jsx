import React from 'react';
import './hospitalStyling.scss';
import { Link, withRouter } from "react-router-dom";
import add_record_img from './add_record.png';
import view_record_img from './view_record.png';
import { Details } from '../index.js' ;

const detailsData = {
  overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60891db35bdecf992a20f15c/releases/609cab0d2e5b4db0132e7a2a/img/rectangle-51@2x.svg",
  spanText: "Name:",
  spanText2: <> Vysakh G Nair<br /></>,
  spanText3: "Age: ",
  spanText4: <>21 years<br /></>,
  spanText5: "Gender: ",
  spanText6: <>M<br /></>,
  spanText7: "Blood group: ",
  spanText8: "AB+",
};

class Hospital extends React.Component {
  render() {  
    const { hospital, viewRecord, addRecord } = this.props;

    return (
      <div class="container-center-horizontal">
        <form
          className="hospital screen"
          style={{ backgroundImage: `url(${hospital})` }}
          name="form2"
          action="form2"
          method="post"
        >
          <div className="details-comp"> <Details {...detailsData} /> </div>
          <div className="overlap-group-hospital">
            <div className="flex-row-hospital">
              <Link to="/hospitalview">
                <div className="view-record-group smart-layers-pointers">
                  <div className="overlap-group2-hospital">
                    <img className="view-3" src={view_record_img} alt=""/>
                    <div className="view-record poppins-medium-amethyst-16px">{viewRecord}</div>
                  </div>
                </div>
              </Link>
              <Link to="/hospitaladd">
                <div className="add-record-group smart-layers-pointers">
                  <div className="overlap-group1-hospital">
                    <img className="edit-5" src={add_record_img} alt=""/>
                    <div className="add-record poppins-medium-amethyst-16px">{addRecord}</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Hospital);