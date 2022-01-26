import React from "react";
import "./style/Search.css";

export default function Search() {
  return (
    <form id="city-form">
      <div className="row">
        <div className="col-3">
          <label className="cityLabel">
            <strong>✈ Change City:</strong>
          </label>
        </div>
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            id="city-search-input"
            placeholder="e.g. Sydney"
          />
        </div>
        <div className="col-1">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div id="location-button" className="col-3">
          <button type="button" className="btn btn-info">
            Current Location
          </button>
        </div>
      </div>
    </form>
  );
}
