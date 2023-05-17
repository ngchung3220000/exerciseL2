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
import {
  SelectValidator,
  TextValidator,
  ValidatorForm,
} from "react-material-ui-form-validator";

import { useDispatch, useSelector } from "react-redux";
import {
  setRowData,
  addEmployeeRequested,
  editEmployeeRequested,
} from "app/staffManagement/redux/actions/EmployeeAction";

import {
  getDistrictsByProvinceIdRequested,
  getProvincesRequested,
} from "app/staffManagement/redux/actions/ProvinceAction";
import { getWardsByDistrictIdRequested } from "app/staffManagement/redux/actions/DistrictAction";
import DialogEmployeeCertificate from "../dialog/DialogEmployeeCertificate";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

export default function EmployeeDialogSubmit(props) {
  const { open, close, rowData, setRowData } = props;
  const dispatch = useDispatch();
  const listEmployee = useSelector((state) => state.employee.listEmployee);
  const listProvince = useSelector((state) => state.province.listProvince);
  const listDistrict = useSelector((state) => state.district.listDistrict);
  const listWard = useSelector((state) => state.ward.listWard);

  const [dialogCertificate, setDialogCertificate] = useState(false);
  const [employeeCertificate, setEmployeeCertificate] = useState({});

  useEffect(() => {
    // API Province
    dispatch(getProvincesRequested());

    // Em có call api huyện xã chỗ onChange nhưng khi ấn nút sửa: value huyện với xã nó không hiện nên em viết thêm đoạn này
    if (rowData?.id) {
      // call API Districts
      dispatch(getDistrictsByProvinceIdRequested(rowData.provinceId));
      // call API Wards
      dispatch(getWardsByDistrictIdRequested(rowData.districtId));
    }
  }, []);

  const handleChangeInput = (e) =>
    setRowData({ ...rowData, [e.target.name]: e.target.value });

  const handleChangeAddress = (name, id) => {
    switch (name) {
      case "provinceId":
        setRowData({
          ...rowData,
          provinceId: id,
          districtId: "",
          wardsId: "",
        });
        // call API Districts
        dispatch(getDistrictsByProvinceIdRequested(id));

        break;
      case "districtId":
        setRowData({ ...rowData, districtId: id });
        // call API Wards
        dispatch(getWardsByDistrictIdRequested(id));
        break;
      default:
        break;
    }
  };

  const validate = () => {
    if (listEmployee.find((employee) => employee.code === rowData.code)) {
      toast.error("Mã nhân viên đã tồn tại");
      return false;
    }
    if (rowData.provinceId === undefined) {
      toast.error("Vui lòng chọn tỉnh");
      return false;
    }
    if (rowData.districtId === "") {
      toast.error("Vui lòng chọn huyện");
      return false;
    }
    if (rowData.wardsId === "") {
      toast.error("Vui lòng chọn xã");
      return false;
    }
    return true;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    rowData?.id
      ? dispatch(editEmployeeRequested(rowData))
      : dispatch(addEmployeeRequested(rowData));

    validate() && close();
  };

  const handleOpenDialogAddCertificate = () => {
    setEmployeeCertificate({
      ...employeeCertificate,
      employeeId: rowData.id,
      provinceId: rowData.provinceId,
    });
    setDialogCertificate(true);
  };

  const handleCloseDialogCertificate = () => {
    setDialogCertificate(false);
    setEmployeeCertificate({});
  };

  return (
    <Dialog maxWidth="md" fullWidth={true} open={open} onClose={close}>
      <DialogTitle style={{ paddingBottom: "0px" }}>
        <span style={{ color: "#1d6d1e" }}>
          {rowData.id ? "Sửa nhân viên" : "Thêm nhân viên"}
        </span>
        <IconButton
          style={{ position: "absolute", right: "10px", top: "10px" }}
          onClick={close}
        >
          <Icon color="error">close</Icon>
        </IconButton>
      </DialogTitle>
      <ValidatorForm onSubmit={handleOnSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                variant="outlined"
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Tên
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
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                variant="outlined"
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Mã
                  </span>
                }
                type="text"
                value={rowData.code || ""}
                name="code"
                size="small"
                validators={["required", "matchRegexp:^\\S{6,10}$"]}
                errorMessages={[
                  "Đừng để trống nhé",
                  "Mã sai định dạng nè (phải không dấu 'cách' và độ dài 6-10 ký tự nhé)",
                ]}
                onChange={handleChangeInput}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                variant="outlined"
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Tuổi
                  </span>
                }
                type="text"
                value={rowData.age || ""}
                name="age"
                size="small"
                validators={[
                  "required",
                  "isNumber",
                  "minNumber:1",
                  "maxNumber:150",
                ]}
                errorMessages={[
                  "Đừng để trống nhé",
                  "Chỉ nhận số thôi nè",
                  "Tuổi phải lớn hơn không nhé",
                  "Trên 150 tuổi thì hơi quá nha",
                ]}
                onChange={handleChangeInput}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                variant="outlined"
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Email
                  </span>
                }
                type="text"
                value={rowData.email || ""}
                name="email"
                size="small"
                validators={["required", "isEmail"]}
                errorMessages={[
                  "Đừng để trống nhé",
                  "Email sai định dạng nè!!!",
                ]}
                onChange={handleChangeInput}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                variant="outlined"
                className="w-100"
                label={
                  <span className="font">
                    <span style={{ color: "red" }}> * </span>
                    Số điện thoại
                  </span>
                }
                type="text"
                value={rowData.phone || ""}
                name="phone"
                size="small"
                validators={["required", "matchRegexp:^\\d{11}$"]}
                errorMessages={[
                  "Đừng để trống nhé",
                  "Số điện thoại phải đủ 11 số nhé",
                ]}
                onChange={handleChangeInput}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <FormControl
                fullWidth
                variant="outlined"
                size="small"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel>
                  <span style={{ color: "red" }}> * </span>
                  {<span className="font">Tỉnh</span>}
                </InputLabel>
                <Select
                  value={rowData.provinceId || ""}
                  name="provinceId"
                  onChange={(e) =>
                    handleChangeAddress("provinceId", e.target.value)
                  }
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

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <FormControl
                fullWidth
                variant="outlined"
                size="small"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel>
                  <span style={{ color: "red" }}> * </span>
                  {<span className="font">Huyện</span>}
                </InputLabel>
                <Select
                  value={rowData.districtId || ""}
                  name="districtId"
                  onChange={(e) =>
                    handleChangeAddress("districtId", e.target.value)
                  }
                >
                  {listDistrict &&
                    listDistrict.map((item) => {
                      return (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <FormControl
                fullWidth
                variant="outlined"
                size="small"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel>
                  <span style={{ color: "red" }}> * </span>
                  {<span className="font">Xã</span>}
                </InputLabel>
                <Select
                  value={rowData.wardsId || ""}
                  name="wardsId"
                  onChange={handleChangeInput}
                >
                  {listWard &&
                    listWard.map((item) => {
                      return (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <div className="flex flex-space-between flex-middle mt-10">
            {rowData.id && (
              <Button
                variant="contained"
                className="mr-12"
                color="primary"
                onClick={handleOpenDialogAddCertificate}
              >
                Thêm văn bằng
              </Button>
            )}

            <Button
              variant="contained"
              className="mr-12"
              color="secondary"
              onClick={() => close()}
            >
              Hủy
            </Button>

            <Button
              type="submit"
              variant="contained"
              className="mr-12"
              color="primary"
            >
              {rowData.id ? "Sửa nhân viên" : "Thêm nhân viên"}
            </Button>
          </div>
        </DialogActions>
      </ValidatorForm>

      {dialogCertificate && (
        <DialogEmployeeCertificate
          open={dialogCertificate}
          handleClose={handleCloseDialogCertificate}
          employeeCertificate={employeeCertificate}
          setEmployeeCertificate={setEmployeeCertificate}
        />
      )}
    </Dialog>
  );
}
