import React, { useEffect, useState } from "react";
import styles from "./admin.module.css";

const AdminDashboard = () => {
  useEffect(() => {
    // script10.src = "/js/styleSwitcher.js";
    // script10.async = false;
    // document.body.appendChild(script10);
  }, []);
  return (
    <>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-xxl-6 col-sm-12">
              <div className="row">
                <div className="col-xl-6 col-xxl-6 col-sm-6">
                  <div className="widget-stat card">
                    <div className="card-body">
                      <h4 className="card-title">Total Students</h4>
                      <h3>3280</h3>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar progress-animated bg-primary"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <small>80% Increase in 20 Days</small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-6 col-sm-6">
                  <div className="widget-stat card">
                    <div className="card-body">
                      <h4 className="card-title">New Students</h4>
                      <h3>245</h3>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar progress-animated bg-warning"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                      <small>50% Increase in 25 Days</small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-6 col-sm-6">
                  <div className="widget-stat card">
                    <div className="card-body">
                      <h4 className="card-title">Total Course</h4>
                      <h3>28</h3>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar progress-animated bg-red"
                          style={{ width: "76%" }}
                        ></div>
                      </div>
                      <small>76% Increase in 20 Days</small>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-6 col-sm-6">
                  <div className="widget-stat card">
                    <div className="card-body">
                      <h4 className="card-title">Fees Collection</h4>
                      <h3>25160$</h3>
                      <div className="progress mb-2">
                        <div
                          className="progress-bar progress-animated bg-success"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                      <small>30% Increase in 30 Days</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-xxl-6 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Income/Expense Report</h3>
                </div>
                <div className="card-body">
                  <div id="morris_bar_2" className="morris_chart_height"></div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-xxl-4 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Professors List</h4>
                </div>
                <div className="card-body">
                  <div className="media mb-3 align-items-center border-bottom pb-3">
                    <img
                      className="mr-3 rounded-circle"
                      alt="image"
                      width="50"
                      src="/images/profile/education/pic1.jpg"
                    />
                    <div className="media-body">
                      <h5 className="mb-0 text-pale-sky">
                        Theodore Handle{" "}
                        <small className="text-muted">( B.Com )</small>
                      </h5>
                      <small className="text-primary mb-0">Available</small>
                    </div>
                  </div>
                  <div className="media mb-3 align-items-center border-bottom pb-3">
                    <img
                      className="mr-3 rounded-circle"
                      alt="image"
                      width="50"
                      src="/images/profile/education/pic2.jpg"
                    />
                    <div className="media-body">
                      <h5 className="mb-0 text-pale-sky">
                        Bess Willis{" "}
                        <small className="text-muted">( M.Com )</small>
                      </h5>
                      <small className="text-danger mb-0">Not Available</small>
                    </div>
                  </div>
                  <div className="media mb-3 align-items-center border-bottom pb-3">
                    <img
                      className="mr-3 rounded-circle"
                      alt="image"
                      width="50"
                      src="/images/profile/education/pic3.jpg"
                    />
                    <div className="media-body">
                      <h5 className="mb-0 text-pale-sky">
                        James Jones{" "}
                        <small className="text-muted">( M.Tach )</small>
                      </h5>
                      <small className="text-primary mb-0">Available</small>
                    </div>
                  </div>
                  <div className="media mb-3 align-items-center border-bottom pb-3">
                    <img
                      className="mr-3 rounded-circle"
                      alt="image"
                      width="50"
                      src="/images/profile/education/pic4.jpg"
                    />
                    <div className="media-body">
                      <h5 className="mb-0 text-pale-sky">
                        Smith Watson{" "}
                        <small className="text-muted">( B.Tach )</small>
                      </h5>
                      <small className="text-danger mb-0">Not Available</small>
                    </div>
                  </div>
                  <div className="media mb-2 align-items-center border-bottom pb-3">
                    <img
                      className="mr-3 rounded-circle"
                      alt="image"
                      width="50"
                      src="/images/profile/education/pic5.jpg"
                    />
                    <div className="media-body">
                      <h5 className="mb-0 text-pale-sky">
                        Morese Sharpe{" "}
                        <small className="text-muted">( B.A, M.A )</small>
                      </h5>
                      <small className="text-primary mb-0">Available</small>
                    </div>
                  </div>
                  <div className="text-center pt-3">
                    <a
                      href="#!"
                      className="btn btn-primary btn-rounded btn px-5 btn-lg"
                    >
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 col-xxl-8 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Student List</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive recentOrderTable">
                    <table className="table verticle-middle table-responsive-md">
                      <thead>
                        <tr>
                          <th scope="col">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkAll"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkAll"
                              ></label>
                            </div>
                          </th>
                          <th scope="col">Student Name</th>
                          <th scope="col">Assigned Coach</th>
                          <th scope="col">Date</th>
                          <th scope="col">Time</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox2"
                              ></label>
                            </div>
                          </td>
                          <td>Angelica Ramos</td>
                          <td>Ashton Cox</td>
                          <td>12 August 2020</td>
                          <td>10:15</td>
                          <td>
                            <div className="dropdown custom-dropdown mb-0">
                              <div data-toggle="dropdown">
                                <i className="fa fa-ellipsis-v"></i>
                              </div>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#!">
                                  Accept
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Details
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Cancel
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox3"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox3"
                              ></label>
                            </div>
                          </td>
                          <td>Bradley Greer</td>
                          <td>Brenden Wagner</td>
                          <td>11 July 2020</td>
                          <td>10:00</td>
                          <td>
                            <div className="dropdown custom-dropdown mb-0">
                              <div data-toggle="dropdown">
                                <i className="fa fa-ellipsis-v"></i>
                              </div>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#!">
                                  Accept
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Details
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Cancel
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox4"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox4"
                              ></label>
                            </div>
                          </td>
                          <td>Cedric Kelly</td>
                          <td>Brielle Williamson</td>
                          <td>10 May 2020</td>
                          <td>09:45</td>
                          <td>
                            <div className="dropdown custom-dropdown mb-0">
                              <div data-toggle="dropdown">
                                <i className="fa fa-ellipsis-v"></i>
                              </div>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#!">
                                  Accept
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Details
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Cancel
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox5"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox5"
                              ></label>
                            </div>
                          </td>
                          <td>Caesar Vance</td>
                          <td>Herrod Chandler</td>
                          <td>09 April 2020</td>
                          <td>09:30</td>
                          <td>
                            <div className="dropdown custom-dropdown mb-0">
                              <div data-toggle="dropdown">
                                <i className="fa fa-ellipsis-v"></i>
                              </div>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#!">
                                  Accept
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Details
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Cancel
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox6"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox6"
                              ></label>
                            </div>
                          </td>
                          <td>Rhona Davidson</td>
                          <td>Sonya Frost</td>
                          <td>08 March 2020</td>
                          <td>09:15</td>
                          <td>
                            <div className="dropdown custom-dropdown mb-0">
                              <div data-toggle="dropdown">
                                <i className="fa fa-ellipsis-v"></i>
                              </div>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#!">
                                  Accept
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Details
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Cancel
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="checkbox7"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="checkbox7"
                              ></label>
                            </div>
                          </td>
                          <td>Bradley Greer</td>
                          <td>Brenden Wagner</td>
                          <td>11 July 2020</td>
                          <td>10:00</td>
                          <td>
                            <div className="dropdown custom-dropdown mb-0">
                              <div data-toggle="dropdown">
                                <i className="fa fa-ellipsis-v"></i>
                              </div>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="#!">
                                  Accept
                                </a>
                                <a className="dropdown-item" href="#!">
                                  Details
                                </a>
                                <a
                                  className="dropdown-item text-danger"
                                  href="#!"
                                >
                                  Cancel
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-xxl-4 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Gold medal</h4>
                  <small className="text-success">
                    <i className="fa fa-caret-up"></i> 20% High then last mont
                  </small>
                </div>
                <div className="card-body pb-0">
                  <div className="row mt-2">
                    <div className="col">
                      <h6 className="font-weight-normal">Overall Growth</h6>
                      <strong>82.24%</strong>
                    </div>
                    <div className="col">
                      <h6 className="font-weight-normal">Montly</h6>
                      <strong>12.24 %</strong>
                    </div>
                    <div className="col">
                      <h6 className="font-weight-normal">Day</h6>
                      <strong>42.24%</strong>
                    </div>
                  </div>
                </div>
                <div className="chart-wrapper">
                  <span className="peity-line" data-width="100%">
                    6,5,8,4,3,8,4,3,6,5,9,5,8,3,4,8,9,8,5,7
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Silver medal</h4>
                  <small className="text-success">
                    <i className="fa fa-caret-up"></i> 20% High then last mont
                  </small>
                </div>
                <div className="card-body pb-0">
                  <div className="row mt-2">
                    <div className="col">
                      <h6 className="font-weight-normal">Overall Growth</h6>
                      <strong>82.24%</strong>
                    </div>
                    <div className="col">
                      <h6 className="font-weight-normal">Montly</h6>
                      <strong>12.24 %</strong>
                    </div>
                    <div className="col">
                      <h6 className="font-weight-normal">Day</h6>
                      <strong>42.24%</strong>
                    </div>
                  </div>
                </div>
                <div className="chart-wrapper">
                  <span className="peity-line-2" data-width="100%">
                    9,3,7,8,6,7,3,3,7,4,6,8,3,4,7,3,4,7,8,5
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-xxl-4 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Bronze medal</h4>
                  <small className="text-success">
                    <i className="fa fa-caret-up"></i> 20% High then last mont
                  </small>
                </div>
                <div className="card-body pb-0">
                  <div className="row mt-2">
                    <div className="col">
                      <h6 className="font-weight-normal">Overall Growth</h6>
                      <strong>82.24%</strong>
                    </div>
                    <div className="col">
                      <h6 className="font-weight-normal">Montly</h6>
                      <strong>12.24 %</strong>
                    </div>
                    <div className="col">
                      <h6 className="font-weight-normal">Day</h6>
                      <strong>42.24%</strong>
                    </div>
                  </div>
                </div>
                <div className="chart-wrapper">
                  <span className="peity-line-3" data-width="100%">
                    3,8,3,7,8,6,3,4,7,3,7,9,6,3,7,6,7,3,4,2
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-xxl-12 col-md-12">
              <div className="card profile-tab">
                <div className="card-header">
                  <h4 className="card-title">Salary Status</h4>
                </div>
                <div className="card-body custom-tab-1">
                  <ul className="nav nav-tabs mb-3">
                    <li className="nav-item">
                      <a
                        href="#my-posts"
                        data-toggle="tab"
                        className="nav-link pb-2 active show"
                      >
                        Professors
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#about-me"
                        data-toggle="tab"
                        className="nav-link pb-2"
                      >
                        Librarian
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#profile-settings"
                        data-toggle="tab"
                        className="nav-link pb-2"
                      >
                        Other
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div id="my-posts" className="tab-pane fade active show">
                      <div className="table-responsive">
                        <table className="table table-responsive-md">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Status</th>
                              <th scope="col">Date</th>
                              <th scope="col">Ammount</th>
                              <th scope="col">Transaction ID</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic1.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Angelica Ramos</td>
                              <td>
                                <span className="badge badge-rounded badge-success">
                                  Paid
                                </span>
                              </td>
                              <td>12 August 2020</td>
                              <td>$100</td>
                              <td>#42317</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic2.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Bradley Greer</td>
                              <td>
                                <span className="badge badge-rounded badge-danger">
                                  Unpaid
                                </span>
                              </td>
                              <td>11 July 2020</td>
                              <td>$200</td>
                              <td>#54682</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic3.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Cedric Kelly</td>
                              <td>
                                <span className="badge badge-rounded badge-warning">
                                  Pending
                                </span>
                              </td>
                              <td>10 May 2020</td>
                              <td>$400</td>
                              <td>#57894</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic4.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Caesar Vance</td>
                              <td>
                                <span className="badge badge-rounded badge-danger">
                                  Unpaid
                                </span>
                              </td>
                              <td>09 April 2020</td>
                              <td>$300</td>
                              <td>#57864</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic5.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Rhona Davidson</td>
                              <td>
                                <span className="badge badge-rounded badge-warning">
                                  Pending
                                </span>
                              </td>
                              <td>08 March 2020</td>
                              <td>$500</td>
                              <td>#56387</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div id="about-me" className="tab-pane fade">
                      <div className="table-responsive">
                        <table className="table table-responsive-md">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Status</th>
                              <th scope="col">Date</th>
                              <th scope="col">Ammount</th>
                              <th scope="col">Transaction ID</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic6.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Angelica Ramos</td>
                              <td>
                                <span className="badge badge-rounded badge-success">
                                  Paid
                                </span>
                              </td>
                              <td>12 August 2020</td>
                              <td>$100</td>
                              <td>#42317</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic7.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Bradley Greer</td>
                              <td>
                                <span className="badge badge-rounded badge-danger">
                                  Unpaid
                                </span>
                              </td>
                              <td>11 July 2020</td>
                              <td>$200</td>
                              <td>#54682</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic8.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Cedric Kelly</td>
                              <td>
                                <span className="badge badge-rounded badge-warning">
                                  Pending
                                </span>
                              </td>
                              <td>10 May 2020</td>
                              <td>$400</td>
                              <td>#57894</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic10.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Caesar Vance</td>
                              <td>
                                <span className="badge badge-rounded badge-danger">
                                  Unpaid
                                </span>
                              </td>
                              <td>09 April 2020</td>
                              <td>$300</td>
                              <td>#57864</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic9.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Rhona Davidson</td>
                              <td>
                                <span className="badge badge-rounded badge-warning">
                                  Pending
                                </span>
                              </td>
                              <td>08 March 2020</td>
                              <td>$500</td>
                              <td>#56387</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div id="profile-settings" className="tab-pane fade">
                      <div className="table-responsive">
                        <table className="table table-responsive-md">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Name</th>
                              <th scope="col">Status</th>
                              <th scope="col">Date</th>
                              <th scope="col">Ammount</th>
                              <th scope="col">Transaction ID</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic5.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Angelica Ramos</td>
                              <td>
                                <span className="badge badge-rounded badge-success">
                                  Paid
                                </span>
                              </td>
                              <td>12 August 2020</td>
                              <td>$100</td>
                              <td>#42317</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic8.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Bradley Greer</td>
                              <td>
                                <span className="badge badge-rounded badge-danger">
                                  Unpaid
                                </span>
                              </td>
                              <td>11 July 2020</td>
                              <td>$200</td>
                              <td>#54682</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic6.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Cedric Kelly</td>
                              <td>
                                <span className="badge badge-rounded badge-warning">
                                  Pending
                                </span>
                              </td>
                              <td>10 May 2020</td>
                              <td>$400</td>
                              <td>#57894</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic2.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Caesar Vance</td>
                              <td>
                                <span className="badge badge-rounded badge-danger">
                                  Unpaid
                                </span>
                              </td>
                              <td>09 April 2020</td>
                              <td>$300</td>
                              <td>#57864</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/images/profile/education/pic7.jpg"
                                  className="rounded-circle"
                                  width="35"
                                  alt=""
                                />
                              </td>
                              <td>Rhona Davidson</td>
                              <td>
                                <span className="badge badge-rounded badge-warning">
                                  Pending
                                </span>
                              </td>
                              <td>08 March 2020</td>
                              <td>$500</td>
                              <td>#56387</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        async
      /> */}
      {/* <script src="/vendor/global/global.min.js" async /> */}
      {/* <script
        src="/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"
        async
      /> */}

      {/* <script src="/vendor/raphael/raphael.min.js" async />
      <script src="/vendor/morris/morris.min.js" async /> */}
      {/* <script src="/js/dashboard/dashboard-2.js" defer />
      <script src="/vendor/svganimation/vivus.min.js" defer />
      <script src="/vendor/svganimation/svg.animation.js" defer />
      <script src="/js/styleSwitcher.js" defer />  */}
    </>
  );
};

export default AdminDashboard;
