"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" key="home">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses/All" domain="All" key="all-courses">All Courses
            </HoveredLink>
            <HoveredLink href="/courses/Basic-Music-Theory" domain="Basic Music Theory" key="basic-music-theory">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses/Advanced-Composition" domain="Advanced Composition" key="advanced-composition">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses/Songwriting" domain="Songwriting" key="songwriting">Songwriting</HoveredLink>
            <HoveredLink href="/courses/Music-Production" domain="Music Production" key="music-production">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/contact" key="contact">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
        {/* <Link href="/sign-in" key="sign-in">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Sign In"
          ></MenuItem>
        </Link> */}
      </Menu>
    </div>
  );
}

export default Navbar;
