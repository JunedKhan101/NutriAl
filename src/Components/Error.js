import React from "react";

function Error() {
    return (
        <div className="card">
          <div className="card-header">
            Error
          </div>
          <div className="card-body text-center">
            <h3 className="card-title">An Error Occurred</h3>
            <div className="cart-content text-left m-auto">
              Sorry I cannot understand what you mean here are couple of things you can try:<br />
              1. Always add a quantity eg. 1 Apple<br />
              2. Try to add a unit or measure eg. 1 cup coffee or 1 dozen bananas<br />
            </div>
          </div>
        </div>
    );
}
export default Error;