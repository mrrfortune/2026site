"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="efi-nav-05">
      <div className="efi-nav-05-inner">
        {/* BRAND / LOGO SECTION */}
        <Link href="/" className="efi-brand">
          <img
            className="image-33"
            loading="lazy"
            width="56"
            height="56"
            alt="Logo Icon"
            src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68ebc95fb164de93cce6e42f_e_mobile.png"
          />
          <img
            className="image-32"
            loading="lazy"
            width="144"
            height="auto"
            alt="Logo Text"
            src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68ebcbbb8cd07e2287321b01_es-big-logo-2.png"
          />
          <h5 className="efi-h5-2">elements_efi</h5>
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="efi-nav-05-nav-menu" role="navigation">
          <Link href="/our-story" className="efi-nav-link light center">
            About
          </Link>
          <Link href="/services" className="efi-nav-link light center">
            Services
          </Link>
          <Link href="/" className="efi-nav-link light center">
            Case Studies
          </Link>
          <Link href="/contact" className="efi-nav-link light center contact">
            Contact Us
          </Link>
        </div>

        {/* BUTTON SECTION */}
        <div className="efi-nav-05-button-block">
          <Link href="/contact" className="efi-cta-menu-button padding-right">
            <span>Contact us</span>
            <svg
              className="svg-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="path"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.25 3.75L19.5 3.75C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5V15.75C20.25 16.1642 19.9142 16.5 19.5 16.5C19.0858 16.5 18.75 16.1642 18.75 15.75V6.31066L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L17.6893 5.25L8.25 5.25C7.83579 5.25 7.5 4.91421 7.5 4.5C7.5 4.08579 7.83579 3.75 8.25 3.75Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          
          {/* MOBILE MENU BUTTON */}
          <div className="efi-button-menu">
            <div className="efi-icon-burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}