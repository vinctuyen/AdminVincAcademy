import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import Layout from "../components/layout";
import AuthsActions from "../redux/auth-redux";
import TypesTable from "../redux/table-demo";
import Head from "next/head";
import EnhancedTable from "../components/Table";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static async getInitialProps({ store, req }) {
    // store.dispatch(RecordActions.getRecordDetailRequest({ id: 1 }, req ? req.cookies : null))
    // return { isServer }
  }

  componentDidMount() {
    this.props.getTableData("table");
  }

  render() {
    const { rows, headRows } = this.props.data;
    return (
      <Layout {...this.props}>
        <Head>
          <title>{"post"}</title>
        </Head>
        <EnhancedTable
          data={rows}
          header={headRows}
        />
      </Layout>
    );
  }
}

Dashboard.propTypes = {
  history: PropTypes.object,
  login: PropTypes.func,
  processing: PropTypes.bool,
  data: PropTypes.object,
  error: PropTypes.object,
  shows: PropTypes.array
};

const mapStateToProps = state => {
  return {
    // processing: state.auths.processing,
    // data: state.auths.data,
    // error: state.auths.error,
    data: state.dashboard.data
    // rows:state.dashboard.data.data.rows || [],
    // headRows: state.dashboard.data.data.headRows || []
  };
};

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(AuthsActions.loginRequest(data)),
  getTableData: table => dispatch(TypesTable.tableRequest(table)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
