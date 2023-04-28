import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

class BlogList extends Component {
  renderContent() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return this.props.data.map((singleData) => {
      const {
        imagejpeg,
        imagewebp,
        date,
        title,
        link,
        shortDescription,
        category,
      } = singleData;
      return (
        <div className="col-lg-6 col-md-6">
          <div className="single-blog">
            <Link to={link}>
              <div className="thumb">
                <picture>
                  <source srcSet={imagewebp} type="image/webp" />
                  <source srcSet={imagejpeg} type="image/jpeg" />
                  <img src={imagejpeg} alt="blog" />
                </picture>

                <Link className="tag" to={link}>
                  {category}
                </Link>
              </div>
              <div className="single-blog-details">
                <p className="date">{date}</p>
                <h4 className="title">
                  <Link to="/blog-details">{title}</Link>
                </h4>
                <p className="content">{shortDescription}</p>
                <Link className="btn-read-more" to={link}>
                  <span>
                    Read More
                    <i className="la la-arrow-right" />
                  </span>
                </Link>
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
      <div className="blog-area pd-top-120 viaje-go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row justify-content-center">
                {this.renderContent()}
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default BlogList;
