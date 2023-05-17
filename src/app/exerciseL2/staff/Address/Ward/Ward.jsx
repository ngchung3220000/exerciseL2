import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Button, Grid, Icon, IconButton } from "@material-ui/core";
import { Breadcrumb } from "egret";
import WardDialogSubmit from "./WardDialogSubmit";
import DialogDelete from "../../dialog/DialogDelete";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteWardRequested,
  getWardsRequested,
} from "app/exerciseL2/redux/actions/WardAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function Ward() {
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState({});
  const [dialogSubmit, setDialogSubmit] = useState(false);
  const [dialogDelete, setDialogDelete] = useState(false);
  const [idWard, setIdWard] = useState("");
  const listWard = useSelector((state) => state.ward.listWard);

  useEffect(() => {
    dispatch(getWardsRequested());
  }, []);

  const handleOpenDialogDelete = (id) => {
    setIdWard(id);
    setDialogDelete(true);
  };

  const handleEditDistrict = (rowData) => {
    setRowData(rowData);
    setDialogSubmit(true);
  };

  const handleDeleteWard = () => {
    dispatch(deleteWardRequested(idWard));
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
              onClick={() => handleEditDistrict(rowData)}
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
    { title: "Tên xã", field: "name" },
    { title: "Mã xã", field: "code" },
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[{ name: "Quản lý", path: "/" }, { name: "Xã" }]}
        />
      </div>

      <Grid container spacing={2} justify="space-between">
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
                Thêm xã
              </Button>
            }
            data={listWard}
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
            <WardDialogSubmit
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
              handleDelete={handleDeleteWard}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Ward;
