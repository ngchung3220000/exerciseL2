import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  Icon,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
import { getProvincesRequested } from "app/exerciseL2/redux/actions/ProvinceAction";
import {
  addDistrictRequested,
  editDistrictRequested,
} from "app/exerciseL2/redux/actions/DistrictAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

export default function DistrictDialogSubmit(props) {
  const { open, close, rowData, setRowData } = props;
  const dispatch = useDispatch();
  const listProvince = useSelector((state) => state.province.listProvince);

  useEffect(() => {
    dispatch(getProvincesRequested());
  }, []);

  const handleOnChange = (e) => {
    setRowData({ ...rowData, [e.target.name]: e.target.value });
  };

  const handleOnChangeProvince = (e) => {
    setRowData({
      ...rowData,
      provinceDto: { ...rowData.provinceDto, id: e.target.value },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    rowData.id
      ? dispatch(editDistrictRequested(rowData))
      : dispatch(addDistrictRequested(rowData));
    rowData.provinceDto ? close() : toast.error("Tỉnh không được để trống");
  };

  return (
    <Dialog maxWidth="xs" fullWidth={true} open={open} onClose={close}>
      <DialogTitle style={{ paddingBottom: "0px" }}>
        <span style={{ color: "#1d6d1e" }}>
          {rowData.id ? "Sửa Huyện" : "Thêm Huyện"}
        </span>
        <IconButton
          style={{ position: "absolute", right: "10px", top: "10px" }}
          onClick={close}
        >
          <Icon color="error">close</Icon>
        </IconButton>
      </DialogTitle>
      <ValidatorForm onSubmit={handleOnSubmit}>
        <DialogContent style={{ overflow: "hidden" }}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12}>
              <FormControl
                fullWidth
                variant="outlined"
                size="small"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel>
                  <span style={{ color: "red" }}> * </span>
                  {<span className="font">Tên tỉnh</span>}
                </InputLabel>
                <Select
                  value={rowData.provinceDto?.id || ""}
                  name="provinceDto"
                  onChange={handleOnChangeProvince}
                >
                  {listProvince &&
                    listProvince.map((item) => {
                      return (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Tên huyện
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
                    Mã huyện
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
                    Diện tích huyện
                  </span>
                }
                type="text"
                value={rowData.area || ""}
                name="area"
                size="small"
                validators={["required", "isNumber"]}
                errorMessages={["Đừng để trống nhé", "Là số nhé"]}
                onChange={handleOnChange}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
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
              {rowData.id ? "Sửa huyện" : "Thêm huyện"}
            </Button>
          </div>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
