"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="efi-ftr-01">
        <div className="efi-ftr-01-container">
          <div className="efi-ftr-01-grid">
            
            {/* COLUMN 1: BRAND & MISSION */}
            <div className="efi-ftr-01-footer-column">
              <Link href="/" className="inline-block">
                <img
                  className="image-34"
                  loading="lazy"
                  width="144"
                  height="auto"
                  alt="EchoShift Logo"
                  src="https://cdn.prod.website-files.com/6452e5657f8ece304d5d812a/68ebcbbb8cd07e2287321b01_es-big-logo-2.png"
                />
              </Link>
              <p className="efi-paragraph-2">
                We turn digital advertising into your most predictable revenue channel. 
                Through programmatic precision and NYC street-level dominance, 
                we deliver ROAS you can bank on.
              </p>
            </div>

            {/* COLUMN 2: SERVICES */}
            <div className="efi-ftr-01-footer-column">
              <div className="efi-footer-title">Services</div>
              <Link href="/services" className="efi-footer-links">Email Marketing</Link>
              <Link href="/services" className="efi-footer-links">Campaigns</Link>
            </div>

            {/* COLUMN 3: QUICK LINKS */}
            <div className="efi-ftr-01-footer-column">
              <div className="efi-footer-title">About</div>
              <Link href="/our-story" className="efi-footer-links">About</Link>
              <Link href="/services" className="efi-footer-links">Services</Link>
              <Link href="/contact" className="efi-footer-links">Contact</Link>
            </div>

            {/* COLUMN 4: SOCIAL */}
            <div className="efi-ftr-01-footer-column">
              <div className="efi-footer-title">Follow Us</div>
              <a href="#" className="efi-footer-links">Facebook</a>
              <a href="#" className="efi-footer-links">Instagram</a>
              <a href="#" className="efi-footer-links">Twitter</a>
              <a href="#" className="efi-footer-links">Pinterest</a>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="efi-ftr-01-footer-bottom">
            <div className="efi-ftr-01-footer-wrapper">
              <div className="efi-text-rights">
                Copyright © 2025 EchoShift. All rights reserved.
              </div>
            </div>
            <div className="efi-ftr-01-footer-wrapper">
              <Link href="#" className="efi-secondary-link-dark">Terms & Conditions</Link>
              <Link href="/privacy-policy" className="efi-secondary-link-dark">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}