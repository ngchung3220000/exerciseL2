import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Icon,
  IconButton,
} from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addProvinceRequested,
  editProvinceRequested,
} from "app/staffManagement/redux/actions/ProvinceAction";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

export default function ProvinceDialogSubmit(props) {
  const { open, close, rowData, setRowData } = props;
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setRowData({ ...rowData, [e.target.name]: e.target.value });
  };

  const handleOnSumbit = (e) => {
    e.preventDefault();
    rowData.id
      ? dispatch(editProvinceRequested(rowData))
      : dispatch(addProvinceRequested(rowData));
    close();
  };

  return (
    <Dialog maxWidth="xs" fullWidth={true} open={open} onClose={close}>
      <DialogTitle style={{ paddingBottom: "0px" }}>
        <span style={{ color: "#1d6d1e" }}>
          {rowData.id ? "Sửa tỉnh" : "Thêm tỉnh"}
        </span>
        <IconButton
          style={{ position: "absolute", right: "10px", top: "10px" }}
          onClick={close}
        >
          <Icon color="error">close</Icon>
        </IconButton>
      </DialogTitle>
      <ValidatorForm onSubmit={handleOnSumbit}>
        <DialogContent style={{ overflowY: "hidden" }}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Tên tỉnh
                  </span>
                }
                type="text"
                value={rowData.name || ""}
                name="name"
                size="small"
                validators={["required", "matchRegexp:^(?! )[^]+(?<! )$"]}
                errorMessages={[
                  "Đừng để trống nhé",
                  "Đừng để dấu cách ở đầu và cuối dòng nhé",
                ]}
                onChange={handleOnChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Mã tỉnh
                  </span>
                }
                type="text"
                value={rowData.code || ""}
                name="code"
                size="small"
                validators={["required"]}
                errorMessages={["Đừng để trống nhé"]}
                onChange={handleOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Diện tích tỉnh
                  </span>
                }
                type="text"
                value={rowData.area || ""}
                name="area"
                size="small"
                validators={["required", "isNumber"]}
                errorMessages={["Đừng để trống nhé", "Phải là số"]}
                onChange={handleOnChange}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions style={{ alignItem: "center" }}>
          <div className="flex flex-space-between flex-middle mt-10">
            <Button
              variant="contained"
              className="mr-12"
              color="secondary"
              onClick={close}
            >
              Hủy
            </Button>
            <Button
              type="submit"
              variant="contained"
              className="mr-12"
              color="primary"
            >
              {rowData.id ? "Sửa tỉnh" : "Thêm tỉnh"}
            </Button>
          </div>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
