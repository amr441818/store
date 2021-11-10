import React from "react";
import "../css/productdetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faAccessibleIcon,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useParams } from "react-router-dom";
// import { fontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ALLGALLARY(props) {
  const { allpro } = props;
  const { pid } = useParams();
  // console.log(para);
  console.log(pid);
  console.log(allpro);
  return (
    <React.Fragment>
      {
        (allpro.length = 0 ? (
          <div className="cont">
            <div className="spinner-border center text-danger" role="status">
              <span className="spin center sr-only"></span>
            </div>
          </div>
        ) : (
          <div className="product container">
            <div className="row">
              <div className="product_details">
                <div className="row">
                  <div className="image col-md-12 col-lg-4">
                    <img className="img-fluid" src={allpro[pid]?.src} alt="" />
                  </div>
                  <div className="details col-md-12 col-lg-8">
                    <h4 className="name">{allpro[pid]?.name}</h4>
                    <hr />
                    <div className="price alert alert-primary text-center">
                      <span>$</span> {allpro[pid]?.price}
                    </div>
                    <div className="d-grid gap-2">
                      <button type="button" className="add btn btn-warning">
                        اضافة الي السلة
                        <i className="fas fa-cart-plus"></i>
                      </button>
                    </div>
                    <div className="share alert-info">
                      <h6>مشاركة هذا المنتج</h6>
                      <ul>
                        <li>
                          <Link to="" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} />
                          </Link>
                        </li>
                        <li>
                          <Link to="" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                          </Link>
                        </li>
                        <li>
                          <Link to="" target="_blank">
                            <FontAwesomeIcon icon={faAccessibleIcon} />
                          </Link>
                        </li>
                        <li>
                          <Link to="" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description">
                <h3>مواصفات المنتج</h3>
                <hr />
                <ul>
                  <li className="name">{allpro[pid]?.discription}</li>
                </ul>
              </div>
            </div>
          </div>
        ))
      }
    </React.Fragment>
  );
}
export default ALLGALLARY;
