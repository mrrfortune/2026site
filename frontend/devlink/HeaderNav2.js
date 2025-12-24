"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeaderNav2.module.css";

export function HeaderNav2({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "efi-nav-05")}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: true,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "efi-nav-05-inner")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "efi-brand")}
          options={{
            href: "/",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-33")}
            loading="lazy"
            width="56"
            height="56"
            alt=""
            src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68ebc95fb164de93cce6e42f_e_mobile.png"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "image-32")}
            loading="lazy"
            width="144"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68ebcbbb8cd07e2287321b01_es-big-logo-2.png"
          />
          <_Builtin.Heading className={_utils.cx(_styles, "efi-h5-2")} tag="h5">
            {"elements_efi"}
          </_Builtin.Heading>
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "efi-nav-05-nav-menu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "efi-nav-link", "light", "center")}
            options={{
              href: "/our-story",
            }}
          >
            {"About"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "efi-nav-link", "light", "center")}
            options={{
              href: "/services",
            }}
          >
            {"Services"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "efi-nav-link", "light", "center")}
            options={{
              href: "/",
            }}
          >
            {"Case Studies"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(
              _styles,
              "efi-nav-link",
              "light",
              "center",
              "contact"
            )}
            options={{
              href: "/contact",
            }}
          >
            {"Contact Us"}
          </_Builtin.NavbarLink>
        </_Builtin.NavbarMenu>
        <_Builtin.Block
          className={_utils.cx(_styles, "efi-nav-05-button-block")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "efi-cta-menu-button",
              "padding-right"
            )}
            button={true}
            block=""
            options={{
              href: "/contact",
            }}
          >
            {"Contact us"}
            <_Builtin.DOM
              className={_utils.cx(_styles, "svg-icon")}
              tag="svg"
              slot=""
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <_Builtin.DOM
                className={_utils.cx(_styles, "path")}
                tag="path"
                slot=""
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z"
                fill="currentColor"
              />
            </_Builtin.DOM>
          </_Builtin.Link>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "efi-button-menu")}
            tag="div"
          >
            <_Builtin.Icon
              className={_utils.cx(_styles, "efi-icon")}
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
