import React, { Component } from 'react';
import { connect } from 'react-redux';

class BillingForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return(
      <div className="container pageMargin card">
        <h1 className="boldBlueText text-center">Billing form</h1>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label>Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="mb-3">
            <label>Address</label>
            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="mb-3">
            <label>Address 2 <span className="text-muted">(Optional)</span></label>
            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
          </div>

          <div className="row">
            <div className="col-md-5 mb-3">
              <label>Country</label>
              <select className="custom-select d-block w-100" id="country" required>
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label>State</label>
              <select className="custom-select d-block w-100" id="state" required>
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label>Zip</label>
              <input type="text" className="form-control" id="zip" placeholder="" required/>
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>
          <hr className="mb-4"/>
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="same-address"/>
            <label className="custom-control-label">Shipping address is the same as my billing address</label>
          </div>
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="save-info"/>
            <label className="custom-control-label">Save this information for next time</label>
          </div>
          <hr className="mb-4"/>

          <h4 className="mb-3">Payment</h4>

          <div className="d-block my-3">
            <div className="custom-control custom-radio">
              <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required/>
              <label className="custom-control-label">Credit card</label>
            </div>
            <div className="custom-control custom-radio">
              <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required/>
              <label className="custom-control-label">Debit card</label>
            </div>
            <div className="custom-control custom-radio">
              <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required/>
              <label className="custom-control-label">Paypal</label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Name on card</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required/>
              <small className="text-muted">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label>Credit card number</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required/>
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label>Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label>CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>
          <button className="btn btn-primary blue btn-block" type="submit">Continue to checkout</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    user: state.user.currentUser
  }
}

export default connect(mapStateToProps)(BillingForm);
