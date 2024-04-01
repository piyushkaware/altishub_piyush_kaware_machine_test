import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";

import { InputText } from "primereact/inputtext";
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

function InvoiceForm({ visible, onHide }) {
  const { dispatch, invoices } = useGlobal();
  const [item, setItem] = useState({ name: "", quantity: 0, price: 0 });
  const [invoice, setInvoice] = useState({
    id:0,
    date:"",
    invoiceNumber:0,
    customerName: "",
    billingAddress: "",
    shippingAddress: "",
    gstin: "",
    items: [],
    billSundry: [],
    totalAmount: 0,
  });
  function handleItem() {
    if (item.name && item.quantity) {
    
      setInvoice((currState) => ({
        ...currState,
        items: [...currState.items, { ...item }], totalAmount : currState.totalAmount + (item.price*item.quantity),
        id : invoices.length+1,invoiceNumber : invoices.length+1, date : (new Date).toLocaleString()
      }));

      setItem({ name: "", quantity: "", price: "" });
    }
  }

  function addInvoice() {
    dispatch({ type: "addInvoice", payload: invoice });
    onHide();
  }
  return (
    <Dialog
      header="Invoice Form"
      visible={visible}
      onHide={() => onHide()}
      style={{ width: "75vw" }}
      breakpoints={{ "960px": "75vw", "641px": "100vw" }}
    >
      <div className="grid">
        <div className="col-4">
          <div className="flex flex-column">
            <p>Customer Name</p>
            <InputText
              value={invoice.customerName}
              onChange={(e) =>
                setInvoice((curr) => ({
                  ...curr,
                  customerName: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className="col-4">
          <div className="flex flex-column">
            <p>Billing Address</p>
            <InputText
              value={invoice.billingAddress}
              onChange={(e) =>
                setInvoice((curr) => ({
                  ...curr,
                  billingAddress: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className="col-4">
          <div className="flex flex-column">
            <p>Shipping Address</p>
            <InputText
              value={invoice.shippingAddress}
              onChange={(e) =>
                setInvoice((curr) => ({
                  ...curr,
                  shippingAddress: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className="col-4">
          <div className="flex flex-column">
            <p>GSTIN</p>
            <InputText
              value={invoice.gstin}
              onChange={(e) =>
                setInvoice((curr) => ({ ...curr, gstin: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="col-12">
          <div className="flex">
            <InputText
              placeholder="Add Item Name"
              value={item.name}
              onChange={(e) =>
                setItem((curr) => ({ ...curr, name: e.target.value }))
              }
            />
            <InputText
              placeholder="Price"
              value={item.price}
              keyfilter="int"
              onChange={(e) =>
                setItem((curr) => ({ ...curr, price: e.target.value }))
              }
            />
            <InputText
              placeholder="Add Item Quantity"
              value={item.quantity}
              keyfilter="int"
              onChange={(e) =>
                setItem((curr) => ({ ...curr, quantity: e.target.value }))
              }
            />
            <Button onClick={handleItem}>Add Item</Button>
          </div>
        </div>

        <div className="col-12">
          <h5>Items</h5>
          <DataTable value={invoice.items} tableStyle={{ minWidth: "30rem" }}>
            <Column field="name" header="Item Name"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="price" header="Price"></Column>
          </DataTable>
        </div>

        <div>
          <Button onClick={addInvoice}>Add Invoice</Button>
        </div>
      </div>
    </Dialog>
  );
}
export default InvoiceForm;
