"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Mainhome.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-150":{"id":"e-150","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-151"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".efi-form-button","originalId":"621526cd8fa1a93d2e3c677b|b957b072-64b0-3316-eb99-5c528fa37402","appliesTo":"CLASS"},"targets":[{"selector":".efi-form-button","originalId":"621526cd8fa1a93d2e3c677b|b957b072-64b0-3316-eb99-5c528fa37402","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1631579692851},"e-151":{"id":"e-151","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-150"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".efi-form-button","originalId":"621526cd8fa1a93d2e3c677b|b957b072-64b0-3316-eb99-5c528fa37402","appliesTo":"CLASS"},"targets":[{"selector":".efi-form-button","originalId":"621526cd8fa1a93d2e3c677b|b957b072-64b0-3316-eb99-5c528fa37402","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1631579692851}},"actionLists":{"a-15":{"id":"a-15","title":"Button Hover Move In","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":true,"id":"621526cd8fa1a93d2e3c677b|b957b072-64b0-3316-eb99-5c528fa37402"},"yValue":-4,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1631579701168},"a-16":{"id":"a-16","title":"Button Hover Move Out","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":true,"id":"621526cd8fa1a93d2e3c677b|b957b072-64b0-3316-eb99-5c528fa37402"},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1631579701168}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Mainhome({ as: _Component = _Builtin.BlockContainer }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "main")}
      grid={{
        type: "container",
      }}
      tag="main"
    >
      <_Builtin.Section
        className={_utils.cx(_styles, "hero-heading-left")}
        id={_utils.cx(
          _styles,
          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b682331-6b682330"
        )}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "hero-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "hero-split")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "h1display")}
              tag="h1"
            >
              {"Shift your reach,"}
              <br />
              {"amplify your impact"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "subheadpara")}>
              {
                "Cut through the noise with campaigns designed to reach, engage, and convert. We work alongside you to craft digital strategies that move audiences and grow your business."
              }
            </_Builtin.Paragraph>
            <_Builtin.Link
              className={_utils.cx(_styles, "btnprimary")}
              button={true}
              block=""
              options={{
                href: "/contact",
              }}
            >
              {"let's Get Started!"}
              <_Builtin.DOM
                className={_utils.cx(_styles, "svg-icon")}
                tag="svg"
                slot=""
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <_Builtin.DOM
                  tag="path"
                  slot=""
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z"
                  fill="currentColor"
                />
              </_Builtin.DOM>
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "hero-split")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "shadow-two")}
              loading="lazy"
              width="960"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/6903fa27114c827e6e8f67e6_hero_main.png"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "container-13")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "clients-title")}
            tag="h2"
          >
            {"Clients"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "clients-wrapper")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "clients-image")}
              loading="lazy"
              width="80"
              height="auto"
              alt="Arise Health logo"
              src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e76f0ded26b2388eaf9936_jj.svg"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "clients-image")}
              loading="lazy"
              width="80"
              height="auto"
              alt="The Paak logo"
              src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e76f6c6d151044c26e3ece_kpmg.svg"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "clients-image")}
              loading="lazy"
              width="213"
              height="auto"
              alt="OE logo"
              src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e25f01c0dfd162420b53b8_omnicom-media-group-1.svg"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "clients-image")}
              loading="lazy"
              width="150"
              height="auto"
              alt="2020INC logo"
              src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e25fb5fc9ee3be3c10e900_the-wall-street-journal-1.svg"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "clients-image")}
              loading="lazy"
              width="78"
              height="auto"
              alt="Ephicient logo"
              src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e260562154bcc02648c828_bmw-logo.svg"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "clients-image")}
              loading="lazy"
              width="78"
              height="auto"
              alt="Ephicient logo"
              src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e76fad4003c8d8a16bcf7a_saks-fifth-avenue-1.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "logos-title-large")}
        id={_utils.cx(
          _styles,
          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68234a-6b682330"
        )}
        grid={{
          type: "section",
        }}
        tag="section"
      />
      <_Builtin.Section
        className={_utils.cx(_styles, "features-list")}
        id={_utils.cx(
          _styles,
          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68234b-6b682330"
        )}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "container-12")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "h2headings", "innerpage")}
            id={_utils.cx(
              _styles,
              "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68234d-6b682330"
            )}
            tag="h2"
          >
            {"What We Do"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "features-wrapper-two")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "features-left")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "h3desktop1")}
                tag="h3"
              >
                {"Top Solutions"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "features-paragraph")}
              >
                {
                  "We help brands cut through the noise with precision-driven campaigns across every channel. From programmatic display and video to search, geofencing, and email marketing, our solutions connect you with the right audience at the right moment—online, on mobile, and on streaming platforms."
                }
              </_Builtin.Paragraph>
              <_Builtin.Link
                className={_utils.cx(_styles, "text-link-arrow")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "learnmorelink")}
                  tag="div"
                >
                  {"Learn more"}
                </_Builtin.Block>
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "arrow-embed")}
                  value="%3Csvg%20width%3D%2217%22%20height%3D%2217%22%20viewbox%3D%220%200%2017%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.13%208.5L6.87296%204.24291L5.87067%205.24379L9.129%208.5L5.87067%2011.7555L6.87225%2012.7571L11.13%208.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.NotSupported _atom="DynamoWrapper" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "section-4")}
        id={_utils.cx(
          _styles,
          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b682369-6b682330"
        )}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-17")}
          id={_utils.cx(
            _styles,
            "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68236a-6b682330"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "solutionsleft")}
            id={_utils.cx(
              _styles,
              "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68236b-6b682330"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "h3desktop1")}
              id={_utils.cx(
                _styles,
                "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68236c-6b682330"
              )}
              tag="h3"
            >
              {"Ad Solutions"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "paragraph-20")}
              id={_utils.cx(
                _styles,
                "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68236e-6b682330"
              )}
            >
              {
                "From social and streaming ads to SEO, web development, and advanced targeting, we deliver integrated marketing solutions that reach audiences wherever they are."
              }
              <br />
            </_Builtin.Paragraph>
            <_Builtin.Link
              className={_utils.cx(_styles, "link-block-4")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "learnmorelink")}
                tag="div"
              >
                {"Learn more"}
                <br />
              </_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "arrow-embed")}
                value="%3Csvg%20width%3D%2217%22%20height%3D%2217%22%20viewbox%3D%220%200%2017%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.13%208.5L6.87296%204.24291L5.87067%205.24379L9.129%208.5L5.87067%2011.7555L6.87225%2012.7571L11.13%208.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "efi-ft-08")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "efi-ft-08-container")}
              tag="div"
            >
              <_Builtin.Grid
                className={_utils.cx(_styles, "efi-ft-08-cell")}
                tag="div"
              >
                <_Builtin.NotSupported _atom="DynamoWrapper" />
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "section-6")}
        id={_utils.cx(
          _styles,
          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6823b1-6b682330"
        )}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-17")}
          id={_utils.cx(
            _styles,
            "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6823b2-6b682330"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "solutionsleft")}
            id={_utils.cx(
              _styles,
              "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6823b3-6b682330"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "h3desktop1")}
              id={_utils.cx(
                _styles,
                "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6823b4-6b682330"
              )}
              tag="h3"
            >
              {"LinkNYC"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "paragraph-20")}
              id={_utils.cx(
                _styles,
                "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6823b6-6b682330"
              )}
            >
              {
                "From social and streaming ads to SEO, web development, and advanced targeting, we deliver integrated marketing solutions that reach audiences wherever they are."
              }
              <br />
            </_Builtin.Paragraph>
            <_Builtin.Link
              className={_utils.cx(_styles, "link-block-4")}
              button={false}
              block="inline"
              options={{
                href: "/contact",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "learnmorelink")}
                tag="div"
              >
                {"Learn more"}
                <br />
              </_Builtin.Block>
              <_Builtin.HtmlEmbed
                className={_utils.cx(_styles, "arrow-embed")}
                value="%3Csvg%20width%3D%2217%22%20height%3D%2217%22%20viewbox%3D%220%200%2017%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.13%208.5L6.87296%204.24291L5.87067%205.24379L9.129%208.5L5.87067%2011.7555L6.87225%2012.7571L11.13%208.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "efi-ft-07")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "efi-ft-07-container")}
              tag="div"
            >
              <_Builtin.TabsWrapper
                className={_utils.cx(_styles, "efi-ft-07-tabs")}
                current="Tab 3"
                easing="ease"
                fadeIn={300}
                fadeOut={100}
              >
                <_Builtin.TabsMenu
                  className={_utils.cx(_styles, "efi-ft-07-tabs-menu")}
                  tag="div"
                >
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "ft-07-tab-link")}
                    data-w-tab="Tab 1"
                    block="inline"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "ft-07-tab-text-block")}
                      tag="div"
                    >
                      {"Kiosk"}
                    </_Builtin.Block>
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "ft-07-tab-link")}
                    data-w-tab="Tab 2"
                    block="inline"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "ft-07-tab-text-block")}
                      tag="div"
                    >
                      {"Citibike"}
                    </_Builtin.Block>
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "ft-07-tab-link")}
                    data-w-tab="Tab 3"
                    block="inline"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "ft-07-tab-text-block")}
                      tag="div"
                    >
                      {"Digital Taxi Tops"}
                    </_Builtin.Block>
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "ft-07-tab-link")}
                    data-w-tab="Tab 4"
                    block="inline"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "ft-07-tab-text-block")}
                      tag="div"
                    >
                      {"Street Banners"}
                    </_Builtin.Block>
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "ft-07-tab-link")}
                    data-w-tab="Tab 5"
                    block="inline"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "ft-07-tab-text-block")}
                      tag="div"
                    >
                      {"Transit and Rail Media"}
                    </_Builtin.Block>
                  </_Builtin.TabsLink>
                </_Builtin.TabsMenu>
                <_Builtin.TabsContent
                  className={_utils.cx(_styles, "efi-ft-07-tabs-content")}
                  tag="div"
                >
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "efi-tab-pane")}
                    tag="div"
                    data-w-tab="Tab 1"
                  >
                    <_Builtin.Grid
                      className={_utils.cx(_styles, "efi-ft-07-grid")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-07-grid-wrapper")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6823d4-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "efi-h2")}
                          tag="h4"
                        >
                          {"LinkNYC Kiosk Advertising"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                      <_Builtin.NotSupported _atom="DynamoWrapper" />
                    </_Builtin.Grid>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "efi-ft-07-image")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "contentimages")}
                        width="4000"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e268587097dfb59878b32e_linknyckiosk.png"
                      />
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "efi-tab-pane")}
                    tag="div"
                    data-w-tab="Tab 2"
                  >
                    <_Builtin.Grid
                      className={_utils.cx(_styles, "efi-ft-07-grid")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-07-grid-wrapper")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6823e2-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "efi-h2")}
                          tag="h4"
                        >
                          {"Citi Bike Station Advertising"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                      <_Builtin.NotSupported _atom="DynamoWrapper" />
                    </_Builtin.Grid>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "efi-ft-07-image")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "contentimages")}
                        width="4000"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e268fcb47a24d221e9f854_citibike.png"
                      />
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "efi-tab-pane")}
                    tag="div"
                    data-w-tab="Tab 3"
                  >
                    <_Builtin.Grid
                      className={_utils.cx(_styles, "efi-ft-07-grid")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-07-grid-wrapper")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6823f0-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "efi-h2")}
                          tag="h4"
                        >
                          {"Digital Taxi Tops"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-07-grid-wrapper")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6823f3-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.NotSupported _atom="DynamoWrapper" />
                      </_Builtin.Block>
                    </_Builtin.Grid>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "efi-ft-07-image")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "contentimages")}
                        width="4000"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e269662a3959987f5425f1_taxitops.png"
                      />
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "efi-tab-pane")}
                    tag="div"
                    data-w-tab="Tab 4"
                  >
                    <_Builtin.Grid
                      className={_utils.cx(_styles, "efi-ft-07-grid")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-07-grid-wrapper")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6823ff-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "efi-h2")}
                          tag="h3"
                        >
                          {"Street Banners"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-07-grid-wrapper")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b682402-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.NotSupported _atom="DynamoWrapper" />
                      </_Builtin.Block>
                    </_Builtin.Grid>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "efi-ft-07-image")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "contentimages")}
                        width="4000"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e269dce4ab49dc0304416c_streetbanners.png"
                      />
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "efi-tab-pane")}
                    tag="div"
                    data-w-tab="Tab 5"
                  >
                    <_Builtin.Grid
                      className={_utils.cx(_styles, "efi-ft-07-grid")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-07-grid-wrapper")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68240e-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "efi-h2")}
                          tag="h4"
                        >
                          {"TRANSIT & RAIL MEDIA"}
                        </_Builtin.Heading>
                      </_Builtin.Block>
                      <_Builtin.NotSupported _atom="DynamoWrapper" />
                    </_Builtin.Grid>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "efi-ft-07-image")}
                      tag="div"
                    >
                      <_Builtin.Image
                        className={_utils.cx(_styles, "contentimages")}
                        width="4000"
                        height="auto"
                        loading="lazy"
                        alt=""
                        src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e37d77b8c19c27b9b08da0_digitalscreens.png"
                      />
                    </_Builtin.Block>
                  </_Builtin.TabsPane>
                </_Builtin.TabsContent>
              </_Builtin.TabsWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-20")}
          tag="div"
        >
          <_Builtin.NotSupported _atom="DynamoWrapper" />
          <_Builtin.Block className={_utils.cx(_styles, "efi-ft-10")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "efi-ft-10-container")}
              tag="div"
            >
              <_Builtin.Grid
                className={_utils.cx(_styles, "efi-ft-10-grid")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "efi-ft-10-grid-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b682428-6b682330"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "efi-h2")}
                    tag="h2"
                  >
                    {"Features and Specifications"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "efi-ft-10-grid-wrapper")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68242b-6b682330"
                  )}
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "efi-paragraph")}
                  >
                    {
                      "The use of cutting-edge materials and manufacturing processes in the design and production of Elements_Efi has resulted in a product that is both durable and sustainable, reducing the environmental impact of its use."
                    }
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Grid>
              <_Builtin.TabsWrapper
                className={_utils.cx(_styles, "efi-ft-10-tabs")}
                current="Tab 2"
                easing="ease"
                fadeIn={300}
                fadeOut={100}
              >
                <_Builtin.TabsMenu
                  className={_utils.cx(_styles, "efi-ft-10-tabs-menu")}
                  tag="div"
                >
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "ft-10-tab-link")}
                    data-w-tab="Tab 1"
                    block="inline"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "ft-10-text-block")}
                      tag="div"
                    >
                      {"Feature One"}
                    </_Builtin.Block>
                  </_Builtin.TabsLink>
                  <_Builtin.TabsLink
                    className={_utils.cx(_styles, "ft-10-tab-link")}
                    data-w-tab="Tab 2"
                    block="inline"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "ft-10-text-block")}
                      tag="div"
                    >
                      {"Feature Two"}
                    </_Builtin.Block>
                  </_Builtin.TabsLink>
                </_Builtin.TabsMenu>
                <_Builtin.TabsContent
                  className={_utils.cx(_styles, "efi-ft-10-tabs-content")}
                  tag="div"
                >
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "efi-tab-pane")}
                    tag="div"
                    data-w-tab="Tab 1"
                  >
                    <_Builtin.Grid
                      className={_utils.cx(_styles, "efi-ft-10-features-grid")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-10-feature")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b682439-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "efi-h5")}
                          tag="h5"
                        >
                          {"The most brutalist and efficient library"}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "efi-arrow-icon")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "image-27")}
                            width="4000"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e11e550798b9f0ec342c1f_77b101237e155b21f3ac4fbe17aa1016_View%20Project.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-10-feature")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68243e-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "efi-h5")}
                          tag="h5"
                        >
                          {"A Webflow library infused with the brutalist way"}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "efi-arrow-icon")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "image-27")}
                            width="4000"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e11e550798b9f0ec342c1f_77b101237e155b21f3ac4fbe17aa1016_View%20Project.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-10-feature")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b682443-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "efi-h5")}
                          tag="h5"
                        >
                          {"Just drag, drop and make your first MRR faster"}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "efi-arrow-icon")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "image-27")}
                            width="4000"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e11e550798b9f0ec342c1f_77b101237e155b21f3ac4fbe17aa1016_View%20Project.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-10-feature")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b682448-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "efi-h5")}
                          tag="h5"
                        >
                          {"Assets for Webflow builders."}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "efi-arrow-icon")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "image-27")}
                            width="4000"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e11e550798b9f0ec342c1f_77b101237e155b21f3ac4fbe17aa1016_View%20Project.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Grid>
                  </_Builtin.TabsPane>
                  <_Builtin.TabsPane
                    className={_utils.cx(_styles, "efi-tab-pane")}
                    tag="div"
                    data-w-tab="Tab 2"
                  >
                    <_Builtin.Grid
                      className={_utils.cx(_styles, "efi-ft-10-features-grid")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-10-feature")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68244f-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "efi-h5")}
                          tag="h5"
                        >
                          {"A Webflow library infused with the brutalist way"}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "efi-arrow-icon")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "image-27")}
                            width="4000"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e11e550798b9f0ec342c1f_77b101237e155b21f3ac4fbe17aa1016_View%20Project.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-10-feature")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b682454-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "efi-h5")}
                          tag="h5"
                        >
                          {"Just drag, drop and make your first MRR faster"}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "efi-arrow-icon")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "image-27")}
                            width="4000"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e11e550798b9f0ec342c1f_77b101237e155b21f3ac4fbe17aa1016_View%20Project.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-10-feature")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b682459-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "efi-h5")}
                          tag="h5"
                        >
                          {"Assets for Webflow builders."}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "efi-arrow-icon")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "image-27")}
                            width="4000"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e11e550798b9f0ec342c1f_77b101237e155b21f3ac4fbe17aa1016_View%20Project.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "efi-ft-10-feature")}
                        id={_utils.cx(
                          _styles,
                          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68245e-6b682330"
                        )}
                        tag="div"
                      >
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "efi-h5")}
                          tag="h5"
                        >
                          {"The most brutalist and efficient library"}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "efi-arrow-icon")}
                          tag="div"
                        >
                          <_Builtin.Image
                            className={_utils.cx(_styles, "image-27")}
                            width="4000"
                            height="auto"
                            loading="lazy"
                            alt=""
                            src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e11e550798b9f0ec342c1f_77b101237e155b21f3ac4fbe17aa1016_View%20Project.svg"
                          />
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Grid>
                  </_Builtin.TabsPane>
                </_Builtin.TabsContent>
              </_Builtin.TabsWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-20")}
          tag="div"
        >
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "section-7")}
        id={_utils.cx(
          _styles,
          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68246e-6b682330"
        )}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.Block className={_utils.cx(_styles, "efi-ft-04")} tag="div">
          <_Builtin.Heading
            className={_utils.cx(_styles, "h2headings", "innerpage")}
            id={_utils.cx(
              _styles,
              "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b682470-6b682330"
            )}
            tag="h2"
          >
            {"Case Studies"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "efi-ft-04-container")}
            tag="div"
          >
            <_Builtin.NotSupported _atom="DynamoWrapper" />
            <_Builtin.Grid
              className={_utils.cx(_styles, "efi-ft-04-grid-wrapper")}
              tag="div"
            >
              <_Builtin.Grid
                className={_utils.cx(_styles, "efi-ft-04-grid-cell")}
                id={_utils.cx(
                  _styles,
                  "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b682484-6b682330"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "efi-ft-04-left-cell")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b682485-6b682330"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "efi-h3")}
                    tag="h3"
                  >
                    {"A Webflow library infused with the brutalist way."}
                  </_Builtin.Heading>
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "efi-paragraph")}
                  >
                    {
                      "The sleek and modern design of Elements_Efi was created with the intent of attracting and engaging customers who value both form and function in their technological products."
                    }
                  </_Builtin.Paragraph>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "link-block-4")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "learnmorelink")}
                      tag="div"
                    >
                      {"Learn more"}
                      <br />
                    </_Builtin.Block>
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "arrow-embed")}
                      value="%3Csvg%20width%3D%2217%22%20height%3D%2217%22%20viewbox%3D%220%200%2017%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.13%208.5L6.87296%204.24291L5.87067%205.24379L9.129%208.5L5.87067%2011.7555L6.87225%2012.7571L11.13%208.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "efi-ft-04-right-cell")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68248f-6b682330"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-27")}
                    loading="lazy"
                    width="4000"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e11f17162cf992200643e0_81de9a46b345993d50fca76969d5d24a_a5.jpg"
                  />
                </_Builtin.Block>
              </_Builtin.Grid>
              <_Builtin.Grid
                className={_utils.cx(_styles, "efi-ft-04-grid-cell")}
                id={_utils.cx(
                  _styles,
                  "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b682491-6b682330"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "efi-ft-04-left-cell")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b682492-6b682330"
                  )}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "efi-h3")}
                    tag="h3"
                  >
                    {"Just drag, drop and make your first MRR faster."}
                  </_Builtin.Heading>
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "efi-paragraph")}
                  >
                    {
                      "The incorporation of state-of-the-art technology in Elements_Efi has allowed for a level of precision and accuracy that was previously unattainable, making it an invaluable tool for professionals and hobbyists alike."
                    }
                  </_Builtin.Paragraph>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "link-block-4")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "learnmorelink")}
                      tag="div"
                    >
                      {"Learn more"}
                      <br />
                    </_Builtin.Block>
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "arrow-embed")}
                      value="%3Csvg%20width%3D%2217%22%20height%3D%2217%22%20viewbox%3D%220%200%2017%2017%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.13%208.5L6.87296%204.24291L5.87067%205.24379L9.129%208.5L5.87067%2011.7555L6.87225%2012.7571L11.13%208.5Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "efi-ft-04-right-cell")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68249c-6b682330"
                  )}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-27")}
                    loading="lazy"
                    width="4000"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68e11f17162cf992200643e9_e2b8357bb878cc148a969b716928ebf3_a4.jpg"
                  />
                </_Builtin.Block>
              </_Builtin.Grid>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "waves---section-medium")}
        id={_utils.cx(
          _styles,
          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b68249e-6b682330"
        )}
        grid={{
          type: "section",
        }}
        tag="div"
      >
        <_Builtin.Container
          className={_utils.cx(_styles, "waves---main-container")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "waves---center-heading")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "h2headings")}
              tag="h2"
            >
              {"Meet Our Experts"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "waves---paragraph-big")}
              tag="div"
            >
              {"Get to know the people who make it happen."}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Grid
            className={_utils.cx(_styles, "waves-grid-team-3")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "waves-tile-team-3")}
              id={_utils.cx(
                _styles,
                "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6824a6-6b682330"
              )}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "waves-image-team-3")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/69028ee41961de7bb15f34f3_rshme.png"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "waves-name-wrap-team-3")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "waves---heading-3-no-margins")}
                  tag="div"
                >
                  {"Robert S. Harris"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "waves---paragraph-big")}
                  tag="div"
                >
                  {"Digital Project Lead"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "waves---paragraph-regular")}
                tag="div"
              >
                {
                  "Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Phasellus ullamcorper."
                }
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "waves-socials-wrap-team-4")}
                tag="div"
              >
                <_Builtin.Link
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "waves-icon-24")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/6902734783ab41e66f1f822e_da3626b2e150392af3bf8bebee56513d_dribbble.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "waves-icon-24")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/6902734783ab41e66f1f822d_9593a0f3662034141032c0088088d181_telegram.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "waves-icon-24")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/6902734783ab41e66f1f822c_9f81d8f9f163905a6672ced45c4e0fc7_instagram.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "waves-icon-24")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/6902734783ab41e66f1f822b_32545209a974dc868900b9d3e3540f98_youtube.svg"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "waves-tile-team-3")}
              id={_utils.cx(
                _styles,
                "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6824b8-6b682330"
              )}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "waves-image-team-3")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/69027457b82f973cdb9fd4cf_IMG_2541.JPEG"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "waves-name-wrap-team-3")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "waves---heading-3-no-margins")}
                  tag="div"
                >
                  {"Jasmine Metivier"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "waves---paragraph-big")}
                  tag="div"
                >
                  {"Creative Director"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "waves---paragraph-regular")}
                tag="div"
              >
                {
                  "Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Phasellus ullamcorper."
                }
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "waves-socials-wrap-team-4")}
                tag="div"
              >
                <_Builtin.Link
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "waves-icon-24")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/6902734783ab41e66f1f822e_da3626b2e150392af3bf8bebee56513d_dribbble.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "waves-icon-24")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/6902734783ab41e66f1f822d_9593a0f3662034141032c0088088d181_telegram.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "waves-icon-24")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/6902734783ab41e66f1f822c_9f81d8f9f163905a6672ced45c4e0fc7_instagram.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "waves-icon-24")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/6902734783ab41e66f1f822b_32545209a974dc868900b9d3e3540f98_youtube.svg"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Grid>
        </_Builtin.Container>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "emailsection")}
        id={_utils.cx(
          _styles,
          "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6824ca-6b682330"
        )}
        grid={{
          type: "section",
        }}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "efi-frm-05")} tag="div">
          <_Builtin.Heading
            className={_utils.cx(_styles, "h2headings", "innerpage")}
            tag="h2"
          >
            {"contact us"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "efi-frm-05-container")}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(_styles, "efi-frm-05-grid")}
              tag="div"
            >
              <_Builtin.FormWrapper
                className={_utils.cx(_styles, "efi-frm-05-form-block")}
                id={_utils.cx(
                  _styles,
                  "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6824d0-6b682330"
                )}
              >
                <_Builtin.FormForm
                  className={_utils.cx(_styles, "efi-frm-05-form")}
                  name="email-form-2"
                  data-name="Email Form 2"
                  method="get"
                  id="email-form-2"
                >
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "input-2")}
                    autoFocus={false}
                    maxLength={256}
                    name="Name-3"
                    data-name="Name 3"
                    placeholder="Name"
                    type="text"
                    disabled={false}
                    required={true}
                    id="Name-3"
                  />
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "input-2")}
                    autoFocus={false}
                    maxLength={256}
                    name="Email-7"
                    data-name="Email 7"
                    placeholder="Email"
                    type="email"
                    disabled={false}
                    required={true}
                    id="Email-7"
                  />
                  <_Builtin.FormTextarea
                    className={_utils.cx(_styles, "input-2")}
                    placeholder="Message"
                    maxLength={5000}
                    name="field-3"
                    data-name="Field 3"
                    required={false}
                    autoFocus={false}
                    id="field-3"
                  />
                  <_Builtin.FormButton
                    className={_utils.cx(_styles, "efi-form-button")}
                    type="submit"
                    value="Send"
                    data-wait="Please wait..."
                  />
                </_Builtin.FormForm>
                <_Builtin.FormSuccessMessage>
                  <_Builtin.Block tag="div">
                    {"Thank you! Your submission has been received!"}
                  </_Builtin.Block>
                </_Builtin.FormSuccessMessage>
                <_Builtin.FormErrorMessage>
                  <_Builtin.Block tag="div">
                    {"Oops! Something went wrong while submitting the form."}
                  </_Builtin.Block>
                </_Builtin.FormErrorMessage>
              </_Builtin.FormWrapper>
              <_Builtin.Block
                className={_utils.cx(_styles, "efi-frm-05-image-wrapper")}
                id={_utils.cx(
                  _styles,
                  "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6824dc-6b682330"
                )}
                tag="div"
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-27")}
                  loading="lazy"
                  width="3000"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68ea8c438509c42121d0eb63_contactImage.png"
                />
              </_Builtin.Block>
            </_Builtin.Grid>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.VFlex
          className={_utils.cx(_styles, "contentcard")}
          id={_utils.cx(
            _styles,
            "w-node-_3a33e9cf-1c0c-e105-beaa-82e06b6824de-6b682330"
          )}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "black-text")}
            tag="h3"
          >
            {"Start the Conversation"}
          </_Builtin.Heading>
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-2")}>
            {
              "Let’s talk about your goals and explore how EchoShift can help amplify your brand and shift your results."
            }
          </_Builtin.Paragraph>
          <_Builtin.FormWrapper className={_utils.cx(_styles, "form-block")}>
            <_Builtin.FormForm
              className={_utils.cx(_styles, "form-2")}
              name="email-form"
              data-name="Email Form"
              method="get"
              id="email-form"
            >
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "input")}
                autoFocus={false}
                maxLength={256}
                name="email-2"
                data-name="Email 2"
                placeholder="Enter your email"
                type="text"
                disabled={false}
                required={true}
                id="email-2"
              />
              <_Builtin.FormButton
                className={_utils.cx(_styles, "button", "form-button")}
                type="submit"
                value="Submit"
                data-wait="Please wait..."
              />
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage>
              <_Builtin.Block tag="div">
                {"Thank you! Your submission has been received!"}
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage>
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
        </_Builtin.VFlex>
      </_Builtin.Section>
    </_Component>
  );
}
