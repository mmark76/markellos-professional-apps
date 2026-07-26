# Markellos Professional Apps

Bilingual professional portfolio for selected digital solutions and anonymised case studies by Markellos Markides.

Planned public address: `https://professional.markellosecosystem.com`

## Purpose

This repository contains the public portfolio website only. It does **not** contain the source code, operational data, credentials, internal documents or deployment details of the private professional applications described by the case studies.

## Included case studies

- Health & Safety Management Application
- Electronic Treasury Workflow
- Monthly Service Roster Tool
- Network & Telecommunications Technician Certification

All project descriptions are intentionally generalised and use demonstration-oriented wording. Public projects may link to their separate published applications.

## Technology

- React
- TypeScript
- Vite
- Plain CSS with responsive and accessible components
- Greek and English content without an external i18n dependency

## Local development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run typecheck
npm run build
```

## Deployment

The production build is generated in `dist/`. The intended deployment target is a static host connected to `professional.markellosecosystem.com`.

## Content safeguards

Before publication, review [`docs/CONTENT_POLICY.md`](docs/CONTENT_POLICY.md). Screenshots and examples must use fabricated data and must not disclose internal systems, personal information or security-sensitive configuration.
