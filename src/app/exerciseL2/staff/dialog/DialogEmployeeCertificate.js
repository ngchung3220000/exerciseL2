import "date-fns";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Icon,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
import { addEmployeeCertificateRequested } from "app/exerciseL2/redux/actions/EmployeeCertificateAction";
import { getProvincesRequested } from "app/exerciseL2/redux/actions/ProvinceAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getEmployeeCertificateById } from "app/exerciseL2/api/CertificateServices";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

export default function DialogEmployeeCertificate(props) {
  const { open, handleClose, employeeCertificate, setEmployeeCertificate } =
    props;
  const dispatch = useDispatch();
  const listEmployee = useSelector((state) => state.employee.listEmployee);
  const listProvince = useSelector((state) => state.province.listProvince);
  const listCertificate = useSelector(
    (state) => state.certificate.listCertificate
  );

  useEffect(() => {
    // API Province
    dispatch(getProvincesRequested());
  }, []);

  const convertDateToString = (str) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  const handleDateChange = (name, date) => {
    switch (name) {
      case "effectiveDate":
        setEmployeeCertificate({
          ...employeeCertificate,
          effectiveDate: convertDateToString(date),
        });
        break;
      case "expirationDate":
        setEmployeeCertificate({
          ...employeeCertificate,
          expirationDate: convertDateToString(date),
        });
      default:
        break;
    }
  };

  const validate = () => {
    if (employeeCertificate.certificateId === undefined) {
      toast.error("Văn bằng không được để trống");
      return false;
    }

    if (employeeCertificate.effectiveDate === undefined) {
      toast.error("Ngày cấp không được để trống");
      return false;
    }

    if (employeeCertificate.expirationDate === undefined) {
      toast.error("Ngày hết hạn không được để trống");
      return false;
    }

    if (
      employeeCertificate.effectiveDate === employeeCertificate.expirationDate
    ) {
      toast.error("Ngày kết thúc phải sau ngày bắt đầu có hiệu lực");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployeeCertificateRequested(employeeCertificate));
    validate() && handleClose();
  };

  const handleChange = (e) => {
    setEmployeeCertificate({
      ...employeeCertificate,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog maxWidth="md" fullWidth={true} open={open} onClose={handleClose}>
      <DialogTitle style={{ paddingBottom: "0px" }}>
        <span style={{ color: "#1d6d1e" }}>Thêm văn bằng</span>
        <IconButton
          style={{ position: "absolute", right: "10px", top: "10px" }}
          onClick={handleClose}
        >
          <Icon color="error">close</Icon>
        </IconButton>
      </DialogTitle>
      <ValidatorForm onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={6}>
              <FormControl
                fullWidth
                variant="outlined"
                size="small"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel>
                  <span style={{ color: "red" }}> * </span>
                  {<span className="font">Nhân viên</span>}
                </InputLabel>
                <Select
                  value={employeeCertificate.employeeId || ""}
                  name="employeeId"
                  onChange={handleChange}
                >
                  {listEmployee &&
                    listEmployee.map((item) => {
                      return (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl
                fullWidth
                variant="outlined"
                size="small"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel>
                  <span style={{ color: "red" }}> * </span>
                  {<span className="font">Văn bằng</span>}
                </InputLabel>
                <Select
                  value={employeeCertificate.certificateId || ""}
                  name="certificateId"
                  onChange={handleChange}
                >
                  {listCertificate &&
                    listCertificate.map((item) => {
                      return (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  inputVariant="outlined"
                  className="w-100"
                  size="small"
                  disableToolbar
                  format="dd/MM/yyyy"
                  label="Ngày cấp"
                  name="effectiveDate"
                  value={employeeCertificate.effectiveDate || null}
                  onChange={(e) => handleDateChange("effectiveDate", e)}
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid item xs={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  inputVariant="outlined"
                  className="w-100"
                  size="small"
                  disableToolbar
                  format="dd/MM/yyyy"
                  label="Ngày hết hạn"
                  name="expirationDate"
                  value={employeeCertificate.expirationDate || null}
                  onChange={(e) => handleDateChange("expirationDate", e)}
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid item xs={6}>
              <FormControl
                fullWidth
                variant="outlined"
                size="small"
                sx={{ m: 1, minWidth: 120 }}
              >
                <InputLabel>
                  <span style={{ color: "red" }}> * </span>
                  {<span className="font">Nơi cấp (Tỉnh)</span>}
                </InputLabel>
                <Select
                  value={employeeCertificate?.provinceId || ""}
                  name="provinceId"
                  onChange={handleChange}
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
          </Grid>
        </DialogContent>

        <DialogActions>
          <div className="flex flex-space-between flex-middle mt-10">
            <Button
              variant="contained"
              className="mr-12"
              color="secondary"
              onClick={handleClose}
            >
              Hủy
            </Button>
            <Button
              type="submit"
              variant="contained"
              className="mr-12"
              color="primary"
            >
              Thêm văn bằng
            </Button>
          </div>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
