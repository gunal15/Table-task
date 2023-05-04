import React, { useState, useEffect } from "react";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { data } from "./Mydata";


function Screen({ value }) {
  const [customers, setCustomers] = useState(null);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    class: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "name.student": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "name.parent": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    teachername: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    number: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    feesbalance: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    totalfees: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  });
  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  

  useEffect(() => {
    setCustomers(data);
    setLoading(false);
  }, []);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  const refresh = () => {
    window.location.reload();
  };

  const header = renderHeader();

  const footer = (
    <div className="flex justify-content-start">
      <Button
        icon="pi pi-refresh"
        label="Refresh"
        severity="primary"
        onClick={refresh}
      />
    </div>
  );

  return (
    <div className="card">
      {value === "Screen1" ? (
        <DataTable
          value={customers}
          paginator
          rows={5}
          dataKey="id"
          filters={filters}
          filterDisplay="row"
          loading={loading}
          globalFilterFields={[
            "id",
            "class",
            "name.student",
            "name.parent",
            "teachername",
            "number",
            "fees",
            "feesbalance",
          ]}
          header={header}
          emptyMessage="No Data found."
        >
          <Column
            field="id"
            header="Id"
            filter
            filterPlaceholder="Search id"
            style={{ minWidth: "12rem" }}
          />
          <Column
            field="class"
            header="Class"
            filter
            filterPlaceholder="Search Class"
            style={{ minWidth: "13rem" }}
          />
          <Column
            field="name.student"
            header="Students Name"
            filter
            filterPlaceholder="Search Student"
            style={{ minWidth: "12rem" }}
          />
          <Column
            field="name.parent"
            header="Parents Name"
            filter
            filterPlaceholder="Search Parent"
            style={{ minWidth: "12rem" }}
          />
          <Column
            field="number"
            header="Mobile Number"
            filter
            filterPlaceholder="Search Number"
            style={{ minWidth: "12rem" }}
          />
          <Column
            field="teachername"
            header="Teachers Name"
            filter
            filterPlaceholder="Search Teacher"
            style={{ minWidth: "12rem" }}
          />
        </DataTable>
      ) : (
        <DataTable
          value={customers}
          footer={footer}
          paginator
          rows={5}
          sortMode="multiple" tableStyle={{ minWidth: '50rem' }}
          dataKey="id"
          filters={filters}
          filterDisplay="row"
          loading={loading}
          emptyMessage="No Data found."
        >
          <Column
            field="id"
            header="Id"
            filter
            filterPlaceholder="Search id"
            style={{ minWidth: "12rem" }}
            sortable
          />
          <Column
            field="name.student"
            header="Students Name"
            filter
            filterPlaceholder="Search Student Name"
            style={{ minWidth: "12rem" }}
            sortable
          />
          <Column
            field="totalmark"
            header="Total Mark"
            style={{ minWidth: "12rem" }}
          />
          <Column
            field="markobtained"
            header="Mark Obtained"
            filter
            filterPlaceholder="Search Mark obtained"
            style={{ minWidth: "12rem" }}
            sortable
          />
        </DataTable>
      )}
    </div>
  );
}

export default Screen;
