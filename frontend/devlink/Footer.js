"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({
  as: _Component = _Builtin.Section,
  text = "Terms & Conditions",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "efi-ftr-01")}
        id={_utils.cx(
          _styles,
          "w-node-_7ea76457-9f5e-c317-789a-277b0beff861-f77272a8"
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "efi-ftr-01-container")}
          tag="div"
        >
          <_Builtin.Grid
            className={_utils.cx(_styles, "efi-ftr-01-grid")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "efi-ftr-01-footer-column")}
              id={_utils.cx(
                _styles,
                "w-node-_7ea76457-9f5e-c317-789a-277b0beff864-f77272a8"
              )}
              tag="div"
            >
              <_Builtin.Link
                button={false}
                block="inline"
                options={{
                  href: "/",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-34")}
                  loading="lazy"
                  width="144"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68ebcbbb8cd07e2287321b01_es-big-logo-2.png"
                />
              </_Builtin.Link>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "efi-paragraph-2")}
              >
                {
                  "We turn digital advertising into your most predictable revenue channel. Through programmatic precision and NYC street-level dominance, we deliver ROAS you can bank on."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "efi-ftr-01-footer-column")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "efi-footer-title")}
                tag="div"
              >
                {"Services"}
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "efi-footer-links")}
                button={false}
                block=""
                options={{
                  href: "/services",
                }}
              >
                {"Email Marketing"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "efi-footer-links")}
                button={false}
                block=""
                options={{
                  href: "/services",
                }}
              >
                {"Campaigns"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "efi-ftr-01-footer-column")}
              id={_utils.cx(
                _styles,
                "w-node-_7ea76457-9f5e-c317-789a-277b0beff874-f77272a8"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "efi-footer-title")}
                tag="div"
              >
                {"About"}
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "efi-footer-links")}
                button={false}
                block=""
                options={{
                  href: "/our-story",
                }}
              >
                {"About"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "efi-footer-links")}
                button={false}
                block=""
                options={{
                  href: "/services",
                }}
              >
                {"Services"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "efi-footer-links")}
                button={false}
                block=""
                options={{
                  href: "/contact",
                }}
              >
                {"Contact"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "efi-ftr-01-footer-column")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "efi-footer-title")}
                tag="div"
              >
                {"Follow Us"}
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "efi-footer-links")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Facebook"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "efi-footer-links")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Instagram"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "efi-footer-links")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Twitter"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "efi-footer-links")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Pinterest"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Grid>
          <_Builtin.Block
            className={_utils.cx(_styles, "efi-ftr-01-footer-bottom")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "efi-ftr-01-footer-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "efi-text-rights")}
                tag="div"
              >
                {"Copyright © 2025 EchoShift. All rights reserved."}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "efi-ftr-01-footer-wrapper")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "efi-secondary-link-dark")}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {text}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "efi-secondary-link-dark")}
                button={false}
                block=""
                options={{
                  href: "/privacy-policy",
                }}
              >
                {"Privacy Policy"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
