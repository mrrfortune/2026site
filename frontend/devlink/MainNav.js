"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MainNav.module.css";

export function MainNav({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "navbar-no-shadow-container-2")}
        tag="div"
        config={{
          animation: "default",
          collapse: "medium",
          docHeight: false,
          duration: 400,
          easing: "ease",
          easing2: "ease",
          noScroll: false,
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-regular-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navbar-wrapper-2")}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(_styles, "brandlogo")}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a332512aaee_placeholder-1.svg"
              />
            </_Builtin.NavbarBrand>
            <_Builtin.NavbarMenu
              className={_utils.cx(_styles, "nav-menu-wrapper-2")}
              tag="nav"
              role="navigation"
            >
              <_Builtin.List
                className={_utils.cx(_styles, "nav-menu-4")}
                tag="ul"
                unstyled={true}
              >
                <_Builtin.ListItem>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "nav-link-3")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"About"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "nav-link-3")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Work"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem>
                  <_Builtin.DropdownWrapper
                    className={_utils.cx(_styles, "nav-dropdown-2")}
                    tag="div"
                    delay={0}
                    hover={false}
                  >
                    <_Builtin.DropdownToggle
                      className={_utils.cx(_styles, "nav-dropdown-toggle-2")}
                      tag="div"
                    >
                      <_Builtin.Icon
                        className={_utils.cx(_styles, "nav-dropdown-icon-2")}
                        widget={{
                          type: "icon",
                          icon: "dropdown-toggle",
                        }}
                      />
                      <_Builtin.Block tag="div">{"Services"}</_Builtin.Block>
                    </_Builtin.DropdownToggle>
                    <_Builtin.DropdownList
                      className={_utils.cx(
                        _styles,
                        "nav-dropdown-list-2",
                        "shadow-three",
                        "mobile-shadow-hide"
                      )}
                      tag="nav"
                    >
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nav-dropdown-link-2")}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Resource Link 1"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nav-dropdown-link-2")}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Resource Link 2"}
                      </_Builtin.DropdownLink>
                      <_Builtin.DropdownLink
                        className={_utils.cx(_styles, "nav-dropdown-link-2")}
                        options={{
                          href: "#",
                        }}
                      >
                        {"Resource Link 3"}
                      </_Builtin.DropdownLink>
                    </_Builtin.DropdownList>
                  </_Builtin.DropdownWrapper>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  className={_utils.cx(_styles, "mobile-margin-top-11")}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "nav-button-wrapper-2")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-4")}
                      tag="div"
                    >
                      {"1.646.620.4438 "}
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button-primary-2")}
                      button={true}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Get Started"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.NavbarMenu>
            <_Builtin.NavbarButton
              className={_utils.cx(_styles, "menu-button-3")}
              tag="div"
            >
              <_Builtin.Icon
                className={_utils.cx(_styles, "icon-2")}
                widget={{
                  type: "icon",
                  icon: "nav-menu",
                }}
              />
            </_Builtin.NavbarButton>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
