import React from 'react';
//import styles from './OrderForm.scss';
import { Row, Col } from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption.js';
import pricing from '../../../data/pricing.json';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary.js';

class OrderForm extends React.Component {
  static propTypes = {
    cost: PropTypes.string,
    options: PropTypes.object,
    setOrderOption: PropTypes.func,
  }
  render() {
    const { cost, options, setOrderOption } = this.props;
    return (
      <Row>
        {pricing.map(option =>
          <Col md={4} key={option.id}>
            <OrderOption {...option}
              currentValue={options[option.id]}
              setOrderOption={setOrderOption}
            />
          </Col>)}
        <Col xs={12}>
          <OrderSummary cost={cost} options={options} />
        </Col>
      </Row>
    );
  }
}

export default OrderForm;