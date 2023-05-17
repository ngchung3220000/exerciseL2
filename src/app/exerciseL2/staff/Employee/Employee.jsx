import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";
import { Button, Grid, Icon, IconButton } from "@material-ui/core";
import { Breadcrumb } from "egret";
import { toast } from "react-toastify";
import EmployeeDialogSubmit from "./EmployeeDialogSubmit";
import DialogDelete from "../dialog/DialogDelete";
import {
  deleteEmployeeRequested,
  getEmployeesRequested,
} from "../../redux/actions/EmployeeAction";
import "react-toastify/dist/ReactToastify.css";

import { getCertificatesRequested } from "app/exerciseL2/redux/actions/CertificateAction";
import { getEmployeeCertificatesRequested } from "app/exerciseL2/redux/actions/EmployeeCertificateAction";
import { getEmployees2 } from "app/exerciseL2/api/EmployeeServices";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function Employee() {
  const dispatch = useDispatch();
  const listEmployee = useSelector((state) => state.employee.listEmployee);
  const [rowData, setRowData] = useState({});
  const [dialogSubmit, setDialogSubmit] = useState(false);
  const [dialogDelete, setDialogDelete] = useState(false);
  const [idEmployee, setIdEmployee] = useState();

  const listCertificate = useSelector(
    (state) => state.certificate.listCertificate
  );

  const listEmployeeCertificate = useSelector(
    (state) => state.employeeCertificate.listEmployeeCertificate
  );

  useEffect(() => {
    // Get all employees
    dispatch(getEmployeesRequested());
  }, []);

  useEffect(() => {
    // Get all certificates
    dispatch(getCertificatesRequested());
  }, []);

  useEffect(() => {
    // Get all employee-certificates
    dispatch(getEmployeeCertificatesRequested());
  }, []);

  const handleOpenDialogDelete = (id) => {
    setIdEmployee(id);
    setDialogDelete(true);
  };

  const handleDeleteEmployee = () => {
    dispatch(deleteEmployeeRequested(idEmployee));
    setDialogDelete(false);
  };

  const handleEditEmployee = (rowData) => {
    setRowData(rowData);
    setDialogSubmit(true);
  };

  const handleClose = () => {
    setDialogSubmit(false);
    setRowData({});
  };

  const columns = [
    {
      title: "Thao tác",
      field: "action",
      render: (rowData) => {
        return (
          <div className="none_wrap">
            <IconButton
              size="small"
              onClick={() => handleEditEmployee(rowData)}
            >
              <Icon color="primary">edit</Icon>
            </IconButton>

            <IconButton
              size="small"
              onClick={() => handleOpenDialogDelete(rowData.id)}
            >
              <Icon style={{ color: "red", margin: "0px 0px 0px 10px" }}>
                delete
              </Icon>
            </IconButton>
          </div>
        );
      },
    },
    {
      title: "Tên",
      field: "name",
    },
    {
      title: "Văn bằng",
      field: "certificate",
      render: (rowData) => {
        const employeeCertificate =
          listEmployeeCertificate &&
          listEmployeeCertificate.find(
            (certificate) => certificate.employeeId === rowData.id
          );
        return (
          employeeCertificate?.certificateId &&
          listCertificate.map((certificate) => {
            if (certificate.id === employeeCertificate?.certificateId) {
              return certificate.name;
            }
          })
        );
      },
    },
    { title: "Mã", field: "code" },
    { title: "Tuổi", field: "age", width: "10%" },
    { title: "Email", field: "email", width: "100px" },
    { title: "Số điện thoại", field: "phone" },
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Quản lý", path: "/" },
            { name: "Nhân viên" },
          ]}
        />
      </div>

      <Grid container spacing={2} justify="space-between">
        <Grid item xs={12}>
          <MaterialTable
            title={
              <>
                <Button
                  className="align-bottom mr-16 mb-16"
                  variant="contained"
                  color="primary"
                  style={{ top: "5px" }}
                  onClick={() => setDialogSubmit(true)}
                >
                  Thêm nhân viên
                </Button>
              </>
            }
            data={listEmployee}
            columns={columns}
            options={{
              pageSize: 10,
              exportButton: true,
              exportAllData: true,
              headerStyle: {
                backgroundColor: "#358600",
                color: "#FFF",
              },
            }}
          />

          {dialogSubmit && (
            <EmployeeDialogSubmit
              open={dialogSubmit}
              close={handleClose}
              rowData={rowData}
              setRowData={setRowData}
            />
          )}

          {dialogDelete && (
            <DialogDelete
              dialogDelete={dialogDelete}
              setDialogDelete={setDialogDelete}
              handleDelete={handleDeleteEmployee}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Employee;
