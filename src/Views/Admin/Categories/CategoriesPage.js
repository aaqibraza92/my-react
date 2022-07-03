import React, { useEffect, useState } from "react";
import GContainer from "../../../Components/GComponents/GContainer";
import { Ballot, FactCheck, PlaylistRemove } from "@mui/icons-material";
import GCard from "../../../Components/GComponents/GCard";
import DataTable from "../../../Components/DataTable/DataTable";
import Overview from "../Comman/Overview";
import FormModal from "../../../Components/FormModal/FormModal";
import AddCategoriesPage from "./AddCategoriesPage";
import LoadingModal from "../../../Components/LoadingModal/LoadingModal";
import HTTP from "../../../Helpers/Api/Api";
import API from "../../../Helpers/Constants/Constants";
import AlertModal02 from "../../../Components/AlertModal02/AlertModal02";
import EditCategoryPage from "./EditCategoryPage";
// import GDataTable from "../../../Components/GComponents/GDataTable/GDataTable";

export default function CategoriesPage() {
  // States
  const [data, setData] = useState([]);
  // const [data2, setData2] = useState([]);

  // const columns = [
  //   { name: "Reference", key: (row) => row._id, sortable: "_id" },
  //   {
  //     name: "Category",
  //     key: (row) => row.category_name,
  //     sortable: "category_name",
  //   },
  //   {
  //     name: "Status",
  //     key: (row) => (row.active ? "Active" : "Deactive"),
  //   },
  // ];

  // OnLoad
  useEffect(() => {
    loadData().then((res) => {
      //setData2(res);
      setData(res);
    });
  }, []);

  const refreshData = () => {
    loadData().then((res) => {
      //setData2(res);
      setData(res);
    });
  };

  const loadData = async () => {
    LoadingModal.show("Please wait...");
    let fdata = [];
    try {
      await HTTP.get(API.getAllCategories, false).then((res) => {
        if (res && res.status && res.status.toString() === "200") {
          if (res.data && res.data.length > 0) {
            const rdata = res.data;
            rdata.forEach((element) => {
              fdata.push([
                element._id,
                element.name,
                element.active ? "Active" : "Deactive",
              ]);
            });
            LoadingModal.hide();
            return fdata;
          }
        }
      });
    } catch (e) {
      console.log("error", e);
      LoadingModal.hide();
    }
    LoadingModal.hide();
    return fdata;
  };
  const searchClick = (data) => {};
  const addClick = () => {
    FormModal.show(
      <AddCategoriesPage />,
      "Add Category",
      refreshData,
      "md",
      "Cancel"
    );
    loadData().then((res) => {
      setData(res);
    });
  };
  const clearClick = () => {};
  const goClick = () => {};
  const editClick = (id) => {
    FormModal.show(
      <EditCategoryPage id={id} callback={refreshData} />,
      "Update Category",
      () => {},
      "xs",
      "",
      false,
      false
    );
  };
  const deleteClick = (id) => {
    AlertModal02.show(
      "Sure to remove it?",
      "Confirm ?",
      () => {
        HTTP.delete(API.del_category + "" + id, false).then((res) => {
          if (res && res.status && res.status.toString() === "200") {
            AlertModal02.show("Removed Successfully.", "Removed!", refreshData);
          }
        });
      },
      "md",
      "Yes"
    );
  };
  return (
    <>
      <Overview
        title={"Categories Overview"}
        first_icon={<Ballot />}
        first_title={"Categories"}
        first_subtitle={"214"}
        first_tooltip="Number of categories in records."
        second_icon={<FactCheck />}
        second_title={"Active Categories"}
        second_subtitle={"45"}
        second_tooltip="Categories used by service providers."
        third_icon={<FactCheck />}
        third_title={"Mostly Searched"}
        third_subtitle={"Cleaning"}
        third_tooltip="Mostly searched by customer."
        fourth_icon={<PlaylistRemove />}
        fourth_title={"Inactive Categories"}
        fourth_subtitle={"18"}
        fourth_tooltip="Inactive or blocked categories."
      />
      <GContainer className="p-3">
        <span className="container-title">Manage Categories</span>
        <GCard direction="column" className="p-2">
          <DataTable
            headings={["Category", "Status"]}
            headerComponent={<></>}
            actions={true}
            data={data}
            addButtonText="Add Category"
            enableView={true}
            onSearchClick={searchClick}
            onClearClick={clearClick}
            onGoClick={goClick}
            onEditClick={editClick}
            onDeleteClick={deleteClick}
            onAddClick={addClick}
            showIdColumn={false}
          />
        </GCard>
        {/* <GCard direction="column" className="p-2">
          <GDataTable columns={columns} data={data2} />
        </GCard> */}
      </GContainer>
    </>
  );
}
