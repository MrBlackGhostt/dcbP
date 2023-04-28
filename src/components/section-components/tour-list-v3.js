import React, { Component } from "react";
import ImageLazyLoad from "../section-components/ImageLazyLoad";
import { Link } from "react-router-dom";
import parse from "html-react-parser";


class TourListV3 extends Component {
  renderContent() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return this.props.data.map((singleContent) => {
      const {
        imagewebp,
        imagejpeg,
        alt,
        location,
        duration,
        name,
        link,
        price,
      } = singleContent;
      return (
        <div className="col-lg-4 col-sm-6">
          <div className="single-destinations-list style-two">
            <Link to={link}>
              <div className="thumb">
                <ImageLazyLoad
                  imagejpeg={imagejpeg}
                  imagewebp={imagewebp}
                  alt={alt}
                />
              </div>
            
              <div className="details">
                <p className="location">
                  <img
                    src={
                      "https://delhibycycle.s3.ap-south-1.amazonaws.com/1.png"
                    }
                    alt="map"
                  />
                  {location}
                </p>
                <h4 className="title">
                  <Link to={link}>{name}</Link>
                </h4>
                <p className="content">{duration}</p>
                <div className="tp-price-meta">
                  <h2>INR {price}</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      );
    });
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="tour-list-area pd-top-120 viaje-go-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-12">
              <div className="tp-tour-list-search-area">
                <div className="row">
                  <div className="col-xl-3 col-sm-6">
                    <label className="single-input-wrap">
                      <i className="fa fa-calendar-minus-o" />
                      <input
                        type="text"
                        className="departing-date"
                        placeholder="Departing"
                      />
                    </label>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <label className="single-input-wrap tour-list-search-icon">
                      <i className="la la-arrow-up" />
                      <input type="text" placeholder="Price Low to High" />
                    </label>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <label className="single-input-wrap tour-list-search-icon">
                      <i className="la la-arrow-down" />
                      <input type="text" placeholder="Price High to Low" />
                    </label>
                  </div>
                  <div className="col-xl-3 col-sm-6">
                    <label className="single-input-wrap">
                      <i className="fa fa-paper-plane" />
                      <input type="text" placeholder="Name (A - Z)" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                {this.renderContent()}
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 order-lg-1">
              <div className="sidebar-area sidebar-area-inner-page">
                <div className="widget tour-list-widget">
                  <div className="widget-tour-list-search">
                    <form className="search-form">
                      <div className="form-group">
                        <input type="text" placeholder="Search" />
                      </div>
                      <button className="submit-btn" type="submit">
                        <i className="ti-search" />
                      </button>
                    </form>
                  </div>
                  <div className="widget-tour-list-meta">
                    {/* <div className="single-widget-search-input-title">
                      <i className="fa fa-dot-circle-o" /> Location
                    </div> */}
                    {/* <div className="single-widget-search-input">
                      <input type="text" placeholder="Tour List Destination" />
                    </div> */}
                    <div className="single-widget-search-input-title">
                      <i className="fa fa-plus-circle" /> Location
                    </div>
                    <div className="single-widget-search-input">
                      <select className="select w-100 custom-select">
                        <option value={1}>Old Delhi</option>
                        <option value={2}>New Delhi</option>
                        <option value={3}>Agra</option>
                        <option value={4}>Rajasthan</option>
                        <option value={5}>Goa</option>
                      </select>
                    </div>
                    {/* <div className="single-widget-search-input">
                      <input type="text" placeholder="Tour List Destination" />
                    </div> */}
                    <div className="single-widget-search-input-title">
                      <i className="fa fa-plus-circle" /> Travel Type
                    </div>
                    <div className="single-widget-search-input">
                      <select className="select w-100 custom-select">
                        <option value={1}>Day Cycle Tour</option>
                        <option value={2}>Walking Tour</option>
                        <option value={3}>Cycling Holidays</option>
                      </select>
                    </div>

                    <div className="single-widget-search-input-title">
                      <i className="fa fa-usd" /> Price Filter
                    </div>
                    <div className="widget-product-sorting">
                      <div className="slider-product-sorting" />
                      <div className="product-range-detail">
                        <label htmlFor="amount">Price: </label>
                        <input type="text" id="amount" readOnly />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TourListV3;
