import React from "react";
import { BrowserRouter } from "react-router-dom";
import TopNav from "./top-nav/top-nav.component";

export default function Root(props: RootProps) {
  return (
    <BrowserRouter basename="/amrs-backup/spa">
      <TopNav />
    </BrowserRouter>
  );
}

type RootProps = {};
