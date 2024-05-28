import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { leaderboardData as ldata } from "../constants/index";

const Table = () => {
  const data = useMemo(() => ldata, []);

  const columns = [
    {
      header: "Rank",
      accessorKey: "Rank",
    },
    {
      header: "Name",
      accessorKey: "Name",
    },
    {
      header: "Calmar Ratio",
      accessorKey: "Calmar Ratio",
    },
    {
      header: "Overall Profit",
      accessorKey: "Overall Profit",
    },
    {
      header: "Avg. Daily Profit",
      accessorKey: "Daily Profit",
    },
    {
      header: "Win %Day",
      accessorKey: "Win %Day",
    },
    {
      header: "Price (Rs)",
      accessorKey: "Price (Rs)",
    },
    {
      header: "Action",
      accessorKey: "Action",
    },
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
      <table className="w-full text-center h-[500px]">
        <thead className="border border-t-0 bg-indigo-600 text-white h-[50px]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.Rank} className="">
              {headerGroup.headers.map((header) => (
                <th key={header.Rank} className="mx-4 px-4">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="border ">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.Rank}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.Rank} className="mx-4 px-4 border-b">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    
  );
};

export default Table;
