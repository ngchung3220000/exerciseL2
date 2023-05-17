import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Button, Grid, Icon, IconButton } from "@material-ui/core";
import { Breadcrumb } from "egret";
import ProvinceDialogSubmit from "./ProvinceDialogSubmit";
import DialogDelete from "../../dialog/DialogDelete";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteProvinceRequested,
  getProvincesRequested,
} from "app/exerciseL2/redux/actions/ProvinceAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function Province() {
  const dispatch = useDispatch();
  const listProvince = useSelector((state) => state.province.listProvince);
  const [rowData, setRowData] = useState({});
  const [dialogSubmit, setDialogSubmit] = useState(false);
  const [dialogDelete, setDialogDelete] = useState(false);
  const [idProvince, setIdProvince] = useState("");

  useEffect(() => {
    dispatch(getProvincesRequested());
  }, []);

  const handleOpenDialogDelete = (id) => {
    setDialogDelete(true);
    setIdProvince(id);
  };

  const handleEditProvince = (rowData) => {
    setRowData(rowData);
    setDialogSubmit(true);
  };

  const handleDeleteProvince = () => {
    dispatch(deleteProvinceRequested(idProvince));
    setDialogDelete(false);
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
              onClick={() => handleEditProvince(rowData)}
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
    { title: "Tên Tỉnh", field: "name" },
    { title: "Mã Tỉnh", field: "code" },
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[{ name: "Quản lý", path: "/" }, { name: "Tỉnh" }]}
        />
      </div>

      <Grid container>
        <Grid item xs={12}>
          <MaterialTable
            title={
              <Button
                className="align-bottom mr-16 mb-16"
                variant="contained"
                color="primary"
                style={{ top: "5px" }}
                onClick={() => setDialogSubmit(true)}
              >
                Thêm tỉnh
              </Button>
            }
            data={listProvince}
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
            <ProvinceDialogSubmit
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
              handleDelete={handleDeleteProvince}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Province;
