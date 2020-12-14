import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import TypesTable from "../../redux/table-demo";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../../styles/components/table.scss";

function AddDataPopup(props) {
  const [valueTable, setvalueTable] = useState({});

  const { open, handleClose, data, dataEdit, tableAddRequest } = props;

  const handleAddData = useCallback(() => {
    tableAddRequest(valueTable);
    handleClose();
  }, [valueTable]);

  const getValue = useCallback(
    name => e => {
      setvalueTable({ ...valueTable, [name]: e.target.value });
    },
    [valueTable]
  );
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className="title-popup-add">
          Add data
        </DialogTitle>
        <DialogContent className="input-list">
          {data.map(item => {
            return (
              <TextField
                key={item}
                margin="dense"
                id={item}
                label={item}
                type=""
                fullWidth
                className="input-add-data"
                variant="outlined"
                defaultValue={dataEdit[item] || ""}
                onChange={getValue(item)}
              />
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="cancel-btn">
            Cancel
          </Button>
          <Button onClick={handleAddData} className="add-btn">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    addData: state.data
  };
};

const mapDispatchToProps = dispatch => ({
  tableAddRequest: data => dispatch(TypesTable.tableAddRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddDataPopup));
