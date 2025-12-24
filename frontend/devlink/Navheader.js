"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navheader.module.css";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navheader({
  as: _Component = _Builtin.Block,
  variant = "Base",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Base: "",
    Pages: "w-variant-71071683-d0d3-f31e-5e3e-54b1d3489036",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "header",
        "div-block-14",
        _activeStyleVariant
      )}
      data-w-id="e44d8add-d837-ad4e-abe3-aa87bda9267d"
      tag="div"
    />
  );
}
