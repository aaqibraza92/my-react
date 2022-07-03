import React from "react";
import CustomerAccountAside from "../CustomerAccountAside/CustomerAccountAside";
import { Col, Container, Row } from "reactstrap";
import GAlign from "../../../Components/GComponents/GAlign";
import GDataTable from "../../../Components/GComponents/GDataTable";
import Select from "react-select";

const CustomerTransactions = () => {
  return (
    <>
      <section className="pt60 pb60">
        <Container>
          <Row>
            <Col lg={5} md={5} xl={4}>
              <CustomerAccountAside />
            </Col>
            <Col lg={7} md={7} xl={8}>
              <div className="pb6 borBottom">
                <GAlign align="between">
                  <h3 className="fBold">Transactions</h3>
                  <Select
                    className="themeSelect "
                    classNamePrefix="themeSelect"
                    // options={countryListData}
                    // value={country}
                    // onChange={(e) => {
                    //   setcountry(e);
                    //   console.log(e);
                    // }}
                  />
                </GAlign>
              </div>
              <TransactionsTable />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CustomerTransactions;

const TransactionsTable = () => {
  return (
    <>
      <GDataTable>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Service</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#250234564</td>
            <td>Referral Bonus</td>
            <td>$120</td>
            <td>April 26, 2021 9:30 am</td>
            <td>Credit</td>
          </tr>
        </tbody>
      </GDataTable>
    </>
  );
};
