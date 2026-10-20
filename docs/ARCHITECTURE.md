# Architecture

## Overview

The portfolio is a static single-page application built with React, TypeScript and Vite. It has no application backend, database or authentication. On the exact HTTPS production hostname, it loads the Markellos Ecosystem cookie-less analytics collector.

```text
Browser
  -> static HTML shell
  -> React application
       -> bilingual content module
       -> semantic sections and case-study components
       -> responsive CSS
       -> production-only aggregate analytics loader
```

## Design goals

- keep the public attack surface small;
- make all visible content reviewable in one repository;
- support Greek and English without duplicating page structure;
- preserve semantic HTML and keyboard accessibility;
- allow static deployment on common hosting platforms;
- prevent private application code or data from becoming a build dependency.

## Content model

`src/content.ts` owns the Greek and English text. Each language follows the same typed structure for navigation, profile, expertise, case studies, working approach, confidentiality and contact.

Private repositories are not imported, linked or queried at runtime. Case-study content is manually curated for public release.

## UI structure

`src/App.tsx` renders:

- sticky site header and language control;
- hero section;
- professional profile and facts;
- expertise cards;
- expandable case-study details;
- working-approach steps;
- confidentiality notice;
- contact section and footer.

## Styling

`src/styles.css` provides:

- responsive layouts;
- visible keyboard focus;
- reduced-motion support;
- high-contrast primary actions;
- system-font fallbacks;
- no runtime CSS framework dependency.

## Security and privacy

The application is static and does not collect application or contact-form data. On `https://professional.markellosecosystem.com` only, the analytics loader requests the central collector. It uses no analytics cookies and is limited to aggregate page views by UTC hour, domain and country for administrator understanding. It does not send visitor identifiers, paths, referrers, device details or events, and it does not receive case-study or other portfolio content as analytics data.

Any future contact form, cookies or third-party embeds require a separate privacy and security review before implementation. Any analytics change must preserve the documented aggregate-only boundary or receive the same review.

Production hosting should provide:

- HTTPS;
- appropriate security headers;
- immutable caching for fingerprinted assets;
- a restrictive Content Security Policy compatible with the generated build;
- no directory listing;
- controlled DNS changes for the professional subdomain.

## Deployment boundary

Only the generated `dist/` assets are deployed. Private application repositories, internal documents and operational data remain separate and are never required for the portfolio build.
