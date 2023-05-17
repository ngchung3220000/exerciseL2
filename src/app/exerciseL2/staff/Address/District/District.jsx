import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Button, Grid, Icon, IconButton } from "@material-ui/core";
import { Breadcrumb } from "egret";
import { toast } from "react-toastify";
import DistrictDialogSubmit from "./DistrictDialogSubmit";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import DialogDelete from "../../dialog/DialogDelete";
import {
  deleteDistrictRequested,
  getDistrictsRequested,
} from "app/exerciseL2/redux/actions/DistrictAction";

toast.configure({
  autoClose: 2000,
  draggable: false,
  limit: 3,
});

function District() {
  const dispatch = useDispatch();
  const listDistrict = useSelector((state) => state.district.listDistrict);
  const [rowData, setRowData] = useState({});
  const [dialogSubmit, setDialogSubmit] = useState(false);
  const [dialogDelete, setDialogDelete] = useState(false);
  const [idDistrict, setIdDistrict] = useState("");

  useEffect(() => {
    dispatch(getDistrictsRequested());
  }, []);

  const handleOpenDialogDelete = (id) => {
    setIdDistrict(id);
    setDialogDelete(true);
  };

  const handleEditDistrict = (rowData) => {
    setDialogSubmit(true);
    setRowData(rowData);
  };

  const handleDeleteDistrict = () => {
    dispatch(deleteDistrictRequested(idDistrict));
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
    { title: "Tên Huyện", field: "name" },
    { title: "Mã Huyện", field: "code" },
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[{ name: "Quản lý", path: "/" }, { name: "Huyện" }]}
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
                Thêm huyện
              </Button>
            }
            data={listDistrict}
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
            <DistrictDialogSubmit
              open={dialogSubmit}
              setDialogSubmit={setDialogSubmit}
              close={handleClose}
              rowData={rowData}
              setRowData={setRowData}
            />
          )}

          {dialogDelete && (
            <DialogDelete
              dialogDelete={dialogDelete}
              setDialogDelete={setDialogDelete}
              handleDelete={handleDeleteDistrict}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default District;
