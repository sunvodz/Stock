import React, { Component } from "react";
import Product from "./product";
import { connect } from "react-redux";
import * as action from "../action/action";
import MaterialTable, { MTableToolbar } from "material-table";
class productLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }

  render() {
    const allproducts = this.props.productsFromStore;
    return (
      <div>
        {allproducts.length !== 0 ? (
          <div>
            <MaterialTable
              title="Manager Product"
              options={{
                pageSize: 10,
                pageSizeOptions: [10, 20, 30]
                }}
              columns={[
                {
                  title: "Image",
                  field: "image",
                  render: (rowData) => (
                    <img src={rowData.image} style={{ width: "90%" }} />
                  ),
                },
                { title: "Name", field: "name" },
                { title: "Deatil", field: "detail" },
                { title: "Price", field: "Price" },
                {
                  title: "",
                  render: (rowData) => (
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-toggle="modal"
                      data-target="#modal-View"
                      onClick={() => {
                        this.setState({
                          item: rowData,
                        });
                      }}
                    >
                      Detail
                    </button>
                  ),
                },
              ]}
              data={allproducts}
            />
          </div>
        ) : (
          <div className="col-12 mx-auto">
            <div className="alert-info text-center pt-5 pb-5">
              ไม่พบข้อมูลสินค้า
            </div>
          </div>
        )}

        {/* View */}
        <div className="modal" tabIndex="-1" role="dialog" id="modal-View">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">View</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Product data={this.state.item} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* View End */}
      </div>
    );
  }
  componentDidMount() {
    this.props.getAllproducts();
  }
}
const mapStateToProps = (state) => {
  return {
    productsFromStore: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllproducts: () => {
      return dispatch(action.getproductLists());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(productLists);
