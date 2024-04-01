import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import InvoiceForm from "./InvoiceForm";
import { useState } from "react";
import { useGlobal } from "../context/GlobalContext";

// Interface Invoice {
//     Id: string;
//     Date: string;
//     InvoiceNumber: number;
//     CustomerName: string;
//     BillingAddress: string;
//     ShippingAddress: string;
//     GSTIN: string;
//     Items: InvoiceItem[];
//     BillSundrys: InvoiceBillSundry[];
//                 TotalAmount: number;
//     }
// priyanshu.b@altiushub.com
function InvoiceTable() {

    const {invoices} = useGlobal()

//   const invoices = [
//     {
//       id: 1,
//       date: "29/jan/1996",
//       invoiceNumber: 1,
//       customerName: "Piyush",
//       billingAddress: "Nagpur",
//       gstin: "xyz",
//       totalAmount: 100,
//     },
//   ];

  const [isFormVisible,setIsFormVisible] = useState(false)
  function openFrom() {
    setIsFormVisible(true)
  }
  function closeFrom(){
    setIsFormVisible(false)
  }
  return (
    <>
      {" "}
      <Button onClick={openFrom} >Add Invoice</Button>
      <DataTable value={invoices} tableStyle={{ minWidth: "60rem" }}>
        <Column field="id" header="ID"></Column>
        <Column field="date" header="Date"></Column>
        <Column field="invoiceNumber" header="Invoice Number"></Column>
        <Column field="customerName" header="Customer Name"></Column>
        <Column field="billingAddress" header="Billing Address"></Column>
        <Column field="gstin" header="GSTIN"></Column>
        <Column field="totalAmount" header="TotalAmount"></Column>
      </DataTable>
      {isFormVisible && <InvoiceForm visible={isFormVisible} onHide={closeFrom}/>}
    </>
  );
}

export default InvoiceTable;
