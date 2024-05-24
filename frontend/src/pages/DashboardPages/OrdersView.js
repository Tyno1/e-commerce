import React, { useContext, useEffect, useMemo, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { useTable } from "react-table";
import { useNavigate } from "react-router-dom";

const OrdersView = () => {
  const navigate = useNavigate();
  const { orders, loading, error } = useContext(OrderContext);
  const data = useMemo(() => {
    if (!Array.isArray(orders)) {
      console.error("Orders is not an array:", orders);
      return [];
    }
    return orders;
  }, [orders]);
  const columns = useMemo(
    () => [
      {
        Header: "Order ID",
        accessor: "_id",
      },
      {
        Header: "Order List",
        accessor: "products",
        Cell: ({ value }) => (
          <ul className="flex max-w-36">
            {value.map((product, index) => (
              <li key={index} className="truncate">
                {product.drugId.name} x ({product.quantity})
              </li>
            ))}
          </ul>
        ),
      },
      {
        Header: "Order Status",
        accessor: "order_status",
      },
      {
        Header: "Payment Status",
        accessor: "payment_status",
      },
      {
        Header: "Order Date",
        accessor: "createdAt",
        Cell: ({ value }) => {
          const date = new Date(value);
          return date.toLocaleDateString();
        },
      },
      {
        Header: "Total",
        accessor: "total",
      },
      {
        Header: "Action",
        Cell: (row) => {
          return (
            <div className="flex gap-4">
              <button
                onClick={() => navigate(`/dashboard/orders/`)}
                className="bg-teal-900 text-white rounded-lg px-4 py-2"
              >
                View Order
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  // useEffect(() => {
  //   getOrderByUserId();
  // }, []);
  return (
    <div>
      {loading && <div>...loading</div>}
      {error && <div>{error.message}</div>}
      {orders && (
        <table className="rounded-lg w-full text-left h-20" {...getTableProps}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className="p-5 dark:bg-teal-900 dark:text-white text-teal-900 bg-slate-200" {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  onClick={() => {
                    navigate(`/dashboard/orders/${row.original._id}`);
                  }}
                  className="dark:hover:bg-teal-700 hover:bg-slate-100 cursor-pointer"
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="border-b dark:text-white text-teal-900 border-teal-900 p-5 "
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrdersView;
