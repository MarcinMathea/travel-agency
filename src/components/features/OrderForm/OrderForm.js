import React from 'react';
//import styles from './OrderForm.scss';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary.js';

class OrderForm extends React.Component {
  static propTypes = {
    cost: PropTypes.string,
    options: PropTypes.object,
  }
  render() {
    const { cost, options } = this.props;
    return (
      <Row>
        <Col xs={12}>
          <OrderSummary cost={cost} options={options} />
        </Col>
      </Row>
    );
  }
}

export default OrderForm;