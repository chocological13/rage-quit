"use client";
import React from "react";
import MenuBtn from "./menu-btn";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import SideMenu from "@/components/navbar/side-menu";
import { useState } from "react";

const SideBtn: React.FC = () => {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <div className="my-auto block p-3 md:hidden">
          <MenuBtn />
        </div>
      </Button>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        <SideMenu toggleDrawer={toggleDrawer(false)} />
      </Drawer>
    </>
  );
};

export default SideBtn;
