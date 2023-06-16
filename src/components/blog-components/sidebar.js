//Blo{{pathname:""}}

import React, { Component } from "react"
import { Link } from "react-router-dom"

class Sidebar extends Component {
  render() {
    const styles = {
      background: "#9499a6",
      padding: "0 6px 0 7px",
      height: "25px",
      lineHeight: "25px",
      color: "#ffffff",
      fontSize: "14px",
      borderRadius: "2px",
      margin: "0 4px",
      transition: "all 0.5s ease",
      display: "inline",
    }

    // Usage:
    ;<span style={styles}>Text</span>

    let anchor = "#"
    let imagealt = "image"
    let publicUrl = process.env.PUBLIC_URL + "/"
    return (
      <div className='col-lg-4'>
        <aside className='sidebar-area sidebar-area-4'>
          <div className='widget widget_search bg-none pd-none'>
            <form className='search-form'>
              <div className='form-group'>
                <input type='text' placeholder='Search' />
              </div>
              <button className='submit-btn' type='submit'>
                <i className='ti-search' />
              </button>
            </form>
          </div>
          <div className='widget widget_categories'>
            <h2 className='widget-title'>Category</h2>
            <ul>
              <li>
                <Link
                  to={{
                    pathname:
                      "/blogs/things-to-do-in-delhi/things-to-do-after-delhi-by-cycle",
                  }}
                >
                  Delhi Cycle Tours
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/blogs/cycle-tours/delhi-first-cycle-tour-team",
                  }}
                >
                  Cycling Holidays
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname:
                      "/blogs/golden-triangle-tour/beyond-the-golden-triangle-of-india",
                  }}
                >
                  Destinations India
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/blogs/tour-guide/female-tour-guide-in-india",
                  }}
                >
                  Tour Leader Stories
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname:
                      "/blogs/cycle-tours/delhi-first-ever-treasure-hunt-delhi-by-cycle",
                  }}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname:
                      "/blogs/things-to-do/things-to-do-after-delhi-by-cycle",
                  }}
                >
                  Explore Delhi
                </Link>
              </li>
            </ul>
          </div>

          <div className='widget widget_tag_cloud'>
            <h2 className='widget-title'>Tags</h2>
            <div className='tagcloud'>
              <button
                onClick={() => this.props.handleClickTags("India")}
                style={styles}
              >
                India
              </button>
              <Link to={{ pathname: "/tours/cycle-tours-in-delhi" }}>
                Cycle Tours
              </Link>
              <Link
                to={{ pathname: "/tours/cycle-tours/raj-tour-delhi-by-cycle" }}
              >
                Bike Tour
              </Link>
              <Link to={{ pathname: "/tours/bicycle-touring" }}>
                Cycling Holidays
              </Link>
              <Link to={{ pathname: "/" }}>Delhi By Cycle</Link>
              <Link to={{ pathname: "/tours" }}>Tours</Link>
              <Link to={{ pathname: "/about" }}>Reviews</Link>
              <Link
                to={{
                  pathname:
                    "/tours/bicycle-touring/jim-corbett-villages-delhi-by-cycle",
                }}
              >
                Nature
              </Link>
              <Link
                to={{
                  pathname: "/tours/walking-tours/mehrauli-tour-delhi-by-cycle",
                }}
              >
                Culture
              </Link>
              <Link
                to={{
                  pathname:
                    "/tours/bicycle-touring/krishna-trails-taj-mahal-delhi-by-cycle",
                }}
              >
                Spiritual
              </Link>
            </div>
          </div>
          {/* <div className="widget_ads">
            <Link to="/tour-details">
              <img
                className="w-100"
                src={publicUrl + "assets/img/others/01.png"}
                alt="img"
              />
            </Link>
          </div> */}
        </aside>
      </div>
    )
  }
}

export default Sidebar
