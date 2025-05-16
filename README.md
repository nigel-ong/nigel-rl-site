# Nigel Ong's Personal Website

A modern, responsive personal website for showcasing Nigel's technical experience, IT support background, and portfolio of projects.

## Table of Contents

- [About](#about)
- [Journey](#journey)
- [Projects](#projects)
- [Skills](#skills)
- [Contact](#contact)
- [Features](#features)
  - [Light/Dark Mode](#lightdark-mode)
  - [Navbar & Branding](#navbar--branding)
- [Updating Content](#updating-content)
- [Local Setup](#local-setup)
- [GitHub Pages Deployment](#github-pages-deployment)

## Overview

This website serves as Nigel Ong's professional portfolio, highlighting his IT support experience, technical skills, and projects. The site features a clean, modern design with both dark and light themes, a responsive layout, and smooth animations.

## Features

### Light/Dark Mode

The website features a fully implemented light and dark mode toggle that remembers user preferences via localStorage. All UI elements have proper color contrast in both modes.

To modify the theme colors:
- Edit the CSS variables in `client/src/index.css`
- The current theme palette uses:
  - Primary highlight: `#B7D3E9` (light blue)
  - Secondary highlight: `#F1D2E7` (light pink)
  - Dark mode background: Dark grey/black
  - Light mode background: `#f2efe5`

### Navbar & Branding

The navigation includes:
- The logo "NigelOng" with "Nigel" in the primary color
- Navigation links to each section
- GitHub and LinkedIn icons
- Dark/Light mode toggle
- Mobile responsive hamburger menu

## Updating Content

### Content Structure

The website data is stored in `client/src/lib/data.ts`, making it easy to update without changing the components.

### Adding/Updating Projects

To add a new project:
1. Open `client/src/lib/data.ts`
2. Add a new entry to the `projects` array following the existing format:

```typescript
{
  id: "unique-id",
  title: "Project Title",
  description: "Project description...",
  tags: ["Tag1", "Tag2"],
  imageUrl: "image-url-or-path",
  badgeText: "Web App",
  badgeColor: "primary", // or "secondary", "accent"
  links: {
    demo: "https://demo-link.com", // optional
    github: "https://github.com/link", // optional
    video: "youtube-video-id", // optional
    info: "https://info-link.com" // optional
  }
}
