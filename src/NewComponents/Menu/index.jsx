import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <>
      <div className="dlabnav">
        <div className="dlabnav-scroll">
          <ul className="metismenu" id="menu">
            <li className="nav-label first">Main Menu</li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-home"></i>
                <span className="nav-text">Dashboard</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="index.html">Dashboard 1</a>
                </li>
                <li>
                  <a href="index-2.html">Dashboard 2</a>
                </li>
                <li>
                  <a href="index-3.html">Dashboard 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="ai-icon"
                href="event-management.html"
                aria-expanded="false"
              >
                <i className="la la-calendar"></i>
                <span className="nav-text">Event Management</span>
              </a>
            </li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-user"></i>
                <span className="nav-text">Professors</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="all-professors.html">All Professor</a>
                </li>
                <li>
                  <a href="add-professor.html">Add Professor</a>
                </li>
                <li>
                  <a href="edit-professor.html">Edit Professor</a>
                </li>
                <li>
                  <a href="professor-profile.html">Professor Profile</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-users"></i>
                <span className="nav-text">Students</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="all-students.html">All Students</a>
                </li>
                <li>
                  <Link href="/admin/add-student">
                    <a>Add Students</a>
                  </Link>
                </li>
                <li>
                  <a href="edit-student.html">Edit Students</a>
                </li>
                <li>
                  <a href="about-student.html">About Students</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-graduation-cap"></i>
                <span className="nav-text">Courses</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="all-courses.html">All Courses</a>
                </li>
                <li>
                  <a href="add-courses.html">Add Courses</a>
                </li>
                <li>
                  <a href="edit-courses.html">Edit Courses</a>
                </li>
                <li>
                  <a href="about-courses.html">About Courses</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-book"></i>
                <span className="nav-text">Library</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="all-library.html">All Library</a>
                </li>
                <li>
                  <a href="add-library.html">Add Library</a>
                </li>
                <li>
                  <a href="edit-library.html">Edit Library</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-building"></i>
                <span className="nav-text">Departments</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="all-departments.html">All Departments</a>
                </li>
                <li>
                  <a href="add-departments.html">Add Departments</a>
                </li>
                <li>
                  <a href="edit-departments.html">Edit Departments</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-users"></i>
                <span className="nav-text">Staff</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="all-staff.html">All Staff</a>
                </li>
                <li>
                  <a href="add-staff.html">Add Staff</a>
                </li>
                <li>
                  <a href="edit-staff.html">Edit Staff</a>
                </li>
                <li>
                  <a href="staff-profile.html">Staff Profile</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-gift"></i>
                <span className="nav-text">Holiday</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="all-holiday.html">All Holiday</a>
                </li>
                <li>
                  <a href="add-holiday.html">Add Holiday</a>
                </li>
                <li>
                  <a href="edit-holiday.html">Edit Holiday</a>
                </li>
                <li>
                  <a href="holiday-calendar.html">Holiday Calendar</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-dollar"></i>
                <span className="nav-text">Fees</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="fees-collection.html">Fees Collection</a>
                </li>
                <li>
                  <a href="add-fees.html">Add Fees</a>
                </li>
                <li>
                  <a href="fees-receipt.html">Fees Receipt</a>
                </li>
              </ul>
            </li>
            <li className="nav-label">Apps</li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-users"></i>
                <span className="nav-text">Apps</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="app-profile.html">Profile</a>
                </li>
                <li>
                  <a className="has-arrow" href="#!" aria-expanded="false">
                    Email
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <a href="email-compose.html">Compose</a>
                    </li>
                    <li>
                      <a href="email-inbox.html">Inbox</a>
                    </li>
                    <li>
                      <a href="email-read.html">Read</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="app-calender.html">Calendar</a>
                </li>
                <li>
                  <a className="has-arrow" href="#!" aria-expanded="false">
                    Shop
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <a href="ecom-product-grid.html">Product Grid</a>
                    </li>
                    <li>
                      <a href="ecom-product-list.html">Product List</a>
                    </li>
                    <li>
                      <a href="ecom-product-detail.html">Product Details</a>
                    </li>
                    <li>
                      <a href="ecom-product-order.html">Order</a>
                    </li>
                    <li>
                      <a href="ecom-checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="ecom-invoice.html">Invoice</a>
                    </li>
                    <li>
                      <a href="ecom-customers.html">Customers</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow ai-icon" href="#!" aria-expanded="false">
                <i className="la la-signal"></i>
                <span className="nav-text">Charts</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="chart-flot.html">Flot</a>
                </li>
                <li>
                  <a href="chart-morris.html">Morris</a>
                </li>
                <li>
                  <a href="chart-chartjs.html">Chartjs</a>
                </li>
                <li>
                  <a href="chart-chartist.html">Chartist</a>
                </li>
                <li>
                  <a href="chart-sparkline.html">Sparkline</a>
                </li>
                <li>
                  <a href="chart-peity.html">Peity</a>
                </li>
              </ul>
            </li>
            <li className="nav-label">Components</li>
            <li className="mega-menu mega-menu-xl">
              <a className="has-arrow ai-icon" href="#!" aria-expanded="false">
                <i className="la la-globe"></i>
                <span className="nav-text">Bootstrap</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="ui-accordion.html">Accordion</a>
                </li>
                <li>
                  <a href="ui-alert.html">Alert</a>
                </li>
                <li>
                  <a href="ui-badge.html">Badge</a>
                </li>
                <li>
                  <a href="ui-button.html">Button</a>
                </li>
                <li>
                  <a href="ui-modal.html">Modal</a>
                </li>
                <li>
                  <a href="ui-button-group.html">Button Group</a>
                </li>
                <li>
                  <a href="ui-list-group.html">List Group</a>
                </li>
                <li>
                  <a href="ui-media-object.html">Media Object</a>
                </li>
                <li>
                  <a href="ui-card.html">Cards</a>
                </li>
                <li>
                  <a href="ui-carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="ui-dropdown.html">Dropdown</a>
                </li>
                <li>
                  <a href="ui-popover.html">Popover</a>
                </li>
                <li>
                  <a href="ui-progressbar.html">Progressbar</a>
                </li>
                <li>
                  <a href="ui-tab.html">Tab</a>
                </li>
                <li>
                  <a href="ui-typography.html">Typography</a>
                </li>
                <li>
                  <a href="ui-pagination.html">Pagination</a>
                </li>
                <li>
                  <a href="ui-grid.html">Grid</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-plus-square-o"></i>
                <span className="nav-text">Plugins</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="uc-select2.html">Select 2</a>
                </li>
                <li>
                  <a href="uc-nestable.html">Nestedable</a>
                </li>
                <li>
                  <a href="uc-noui-slider.html">Noui Slider</a>
                </li>
                <li>
                  <a href="uc-sweetalert.html">Sweet Alert</a>
                </li>
                <li>
                  <a href="uc-toastr.html">Toastr</a>
                </li>
                <li>
                  <a href="map-jqvmap.html">Jqv Map</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="widget-basic.html" aria-expanded="false">
                <i className="la la-desktop"></i>
                <span className="nav-text">Widget</span>
              </a>
            </li>
            <li className="nav-label">Forms</li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-file-text"></i>
                <span className="nav-text">Forms</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="form-element.html">Form Elements</a>
                </li>
                <li>
                  <a href="form-wizard.html">Wizard</a>
                </li>
                <li>
                  <a href="form-editor-summernote.html">Summernote</a>
                </li>
                <li>
                  <a href="form-pickers.html">Pickers</a>
                </li>
                <li>
                  <a href="form-validation-jquery.html">Jquery Validate</a>
                </li>
              </ul>
            </li>
            <li className="nav-label">Table</li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-table"></i>
                <span className="nav-text">Table</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="table-bootstrap-basic.html">Bootstrap</a>
                </li>
                <li>
                  <a href="table-datatable-basic.html">Datatable</a>
                </li>
              </ul>
            </li>
            <li className="nav-label">Extra</li>
            <li>
              <a className="has-arrow" href="#!" aria-expanded="false">
                <i className="la la-th-list"></i>
                <span className="nav-text">Pages</span>
              </a>
              <ul aria-expanded="false">
                <li>
                  <a href="page-register.html">Register</a>
                </li>
                <li>
                  <a href="page-login.html">Login</a>
                </li>
                <li>
                  <a className="has-arrow" href="#!" aria-expanded="false">
                    Error
                  </a>
                  <ul aria-expanded="false">
                    <li>
                      <a href="page-error-400.html">Error 400</a>
                    </li>
                    <li>
                      <a href="page-error-403.html">Error 403</a>
                    </li>
                    <li>
                      <a href="page-error-404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="page-error-500.html">Error 500</a>
                    </li>
                    <li>
                      <a href="page-error-503.html">Error 503</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="page-lock-screen.html">Lock Screen</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
