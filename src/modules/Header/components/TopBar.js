import React, { Component } from 'react';

class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <i className="fa fa-envelope"></i>
              hoaikhaqn1996@gmail.com
                    </div>
            <div className="col-sm-6">
              <i className="fa fa-phone-alt"></i>
              (+84) 86 554 7870
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;