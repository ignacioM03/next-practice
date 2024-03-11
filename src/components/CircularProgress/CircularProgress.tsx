import React from "react";
import {CircularProgress} from "@nextui-org/react";

export default function App() {
  return (
    <CircularProgress
      label="Speed"
      size="lg"
      value={70}
      color="success"
      formatOptions={{ style: "unit", unit: "kilometer" }}
      showValueLabel={true}
    />
  );
}
