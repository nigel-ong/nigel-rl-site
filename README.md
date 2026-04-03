# Nigel Ong's Personal Website

A modern, responsive personal website for showcasing Nigel's technical experience, IT support background, and portfolio of projects. Built with React, Vite, and TailwindCSS.

## 📋 Table of Contents

- [Features Overview](#features-overview)
- [How to Update Each Section](#how-to-update-each-section)
  - [Updating the About Section](#updating-the-about-section)
  - [Adding a New Job or Education Entry](#adding-a-new-job-or-education-entry)
  - [Adding or Updating Projects](#adding-or-updating-projects)
  - [Updating Technical Skills](#updating-technical-skills)
  - [Updating Contact Information](#updating-contact-information)
  - [Updating Images](#updating-images)
- [How to Customize Colors](#how-to-customize-colors)
- [How the Site Works (Explained Simply)](#how-the-site-works-explained-simply)
- [Deployment Guide](#deployment-guide)

## 🌟 Features Overview

This website includes:

- Modern, responsive design that works on all devices
- Light and dark mode toggle that remembers user preference
- Smooth scroll animations and transition effects
- Interactive cursor spotlight effect
- Project cards with hover animations
- Clickable organization links with auto-fetched favicons
- Video modal for project demos
- Optimized for accessibility and performance

## 🔧 How to Update Each Section

### Updating the About Section

The "About" section content is directly in the `HeroSection.tsx` component:

1. Open `client/src/components/HeroSection.tsx`
2. Find the paragraph text inside the `<p>` tags in the `prose` section
3. Edit the text to update your personal information
4. To change your profile image:
   - Add a new image to `client/src/assets/`
   - Update the `src` attribute in the `<img>` tag

### Adding a New Job or Education Entry

The "Journey" section items are in the `JourneySection.tsx` component:

1. Open `client/src/components/JourneySection.tsx`
2. To add a new job:
   - Copy one of the existing `<motion.div className="timeline-item">` blocks
   - Paste it before or after existing entries (order matters - top entries appear first)
   - Update the details:
     - Job title in the `<h3>` tag
     - Organization name in the link tag
     - Update the organization URL
     - Update the dates
     - Update the bullet points in the `<ul>` list

For example:
```jsx
<motion.div
  className="timeline-item mt-16"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
>
  <div className="timeline-dot"></div>
  <div className="md:grid md:grid-cols-[200px_1fr] gap-8 md:pl-16">
    <div className="mb-4 md:mb-0 flex flex-col">
      <h3 className="text-xl font-semibold">YOUR NEW JOB TITLE</h3>
      <div className="flex items-center gap-2 mt-1">
        <a 
          href="https://company-website.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary font-medium hover:underline"
        >
          Company Name
        </a>
      </div>
      <p className="text-sm text-muted-foreground mt-1">MONTH YEAR - MONTH YEAR</p>
    </div>
    <motion.div 
      className="p-6 bg-primary/5 rounded-lg"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <ul className="space-y-2 list-disc ml-5 text-sm md:text-base">
        <li>First accomplishment or responsibility</li>
        <li>Second accomplishment or responsibility</li>
        <!-- Add more bullet points as needed -->
      </ul>
    </motion.div>
  </div>
</motion.div>
```

3. Also add the website to the favicon fetching in the useEffect hook at the top of the component if you want to display the organization's logo.

### Adding or Updating Projects

Projects are defined in the data file:

1. Open `client/src/lib/data.ts`
2. Find the `projects` array
3. To add a new project, add a new object to the array using this format:

```typescript
{
  id: "unique-project-id", // Used internally (no spaces)
  title: "Project Name",
  description: "Brief description of your project",
  tags: ["Technology1", "Technology2", "Technology3"],
  imageUrl: "https://url-to-your-project-image.jpg", // Or use a local image in assets
  badgeText: "Type of Project", // e.g., "Web App", "Mobile App", etc.
  badgeColor: "primary", // Use "primary", "secondary", or "accent"
  links: {
    demo: "https://demo-link.com", // Optional: Link to live demo
    github: "https://github.com/your-repo", // Optional: Link to GitHub repo
    video: "youtube-video-id", // Optional: YouTube video ID for demos
    info: "https://additional-info.com" // Optional: Link to more information
  }
}
```

4. To update existing projects, just modify the information in the existing objects.

### Updating Technical Skills

Skills are also defined in the data file:

1. Open `client/src/lib/data.ts`
2. Find the `skills` array
3. Each object represents a skill category:

```typescript
{
  category: "Category Name", // e.g., "Frontend", "Backend", etc.
  icon: "Icon component or string", // IconName from react-icons
  items: ["Skill1", "Skill2", "Skill3"], // List of skills in this category
  color: "primary" // Use "primary", "secondary", or "accent"
}
```

4. To add/remove skills, modify the `items` array
5. To add a new category, add a new object following the same format

### Updating Contact Information

Contact information is in the data file:

1. Open `client/src/lib/data.ts`
2. Find the `contactInfo` array
3. Each object represents a contact method:

```typescript
{
  type: "Email", // Type of contact (e.g., "Email", "GitHub", "LinkedIn")
  value: "your@email.com", // The actual contact information
  link: "mailto:your@email.com", // The URL or action when clicked
  icon: <IconComponent />, // Icon component from react-icons
  display: "your@email.com" // Optional: Custom display text
}
```

### Updating Images

To add or update images:

1. Place new images in the `client/src/assets/` folder
2. Reference them in components using:
   - Direct imports: `import myImage from '@/assets/image.jpg'`
   - Or with path: `src="/src/assets/image.jpg"`

## 🎨 How to Customize Colors & Visual Effects

The site uses TailwindCSS with custom colors. To update the color scheme:

1. Open `client/src/index.css`
2. Find the `:root` and `.dark` sections
3. Modify the CSS variables:
   - Light mode primary: `--primary: 221 71% 57%` (HSL values for #567ACE)
   - Dark mode primary: `--primary: 203 53% 81%` (HSL values for #B7D3E9)
   - Secondary color: `--secondary: 328 63% 90%` (HSL values for #F1D2E7)

For example, to change the primary color in light mode:
```css
:root {
  /* other variables */
  --primary: 210 100% 50%; /* Change to your desired HSL values */
}
```

### 🔧 Customizing Visual Effects

#### Mouse Cursor Spotlight
The site features a subtle cursor spotlight effect that follows your mouse cursor:

1. To adjust size and intensity:
   ```css
   .cursor-spotlight {
     width: 120px; /* Adjust size here (larger = bigger spotlight) */
     height: 120px; /* Keep equal to width for a circular shape */
     /* ... other properties ... */
   }
   ```

2. To change colors and opacity:
   ```css
   .dark .cursor-spotlight {
     background: radial-gradient(
       circle, 
       rgba(183, 211, 233, 0.15) 0%, /* Primary color - increase last value for stronger effect */
       rgba(241, 210, 231, 0.08) 50%, /* Secondary color */
       rgba(0, 0, 0, 0) 100% /* Transparent edge */
     );
   }
   ```

3. To disable the effect completely, comment out or remove the `CursorSpotlight` component in `App.tsx`

#### Profile Photo Hover Animation
The profile photo has a subtle scale and glow effect on hover:

1. To adjust the animation timing and scale:
   ```jsx
   <motion.div 
     whileHover={{ 
       scale: 1.03, // Adjust scale factor here (1.03 = 3% larger)
       boxShadow: "0 0 20px rgba(183, 211, 233, 0.5)" // Adjust glow intensity 
     }}
     transition={{ 
       type: "spring", 
       stiffness: 300, // Higher = faster animation
       damping: 15 // Lower = more bouncy
     }}
   >
   ```

#### Skills Cards Shine Effect
The skills cards have a diagonal shine/shimmer effect on hover:

1. To adjust the animation speed:
   ```css
   .skill-card:hover::before {
     animation: shine 1.5s ease; /* Change 1.5s to desired duration */
   }
   ```

2. To change the angle of the shine effect:
   ```css
   .skill-card::before {
     /* ... other properties ... */
     background: linear-gradient(
       120deg, /* Change this angle (120deg) to adjust the diagonal direction */
       transparent 0%,
       rgba(255, 255, 255, 0) 30%,
       rgba(255, 255, 255, 0.2) 50%, /* Increase 0.2 for stronger shine */
       rgba(255, 255, 255, 0) 70%,
       transparent 100%
     );
   }
   ```

#### Dark Mode Hover Effects
In dark mode, hoverable elements have a subtle glow using the secondary brand color:

1. To adjust the glow intensity or color:
   ```css
   .dark .hoverable-card:hover,
   .dark .timeline-item:hover .hoverable-content,
   .dark .skill-card:hover {
     box-shadow: 0 0 15px rgba(241, 210, 231, 0.25); /* Last value (0.25) controls opacity */
     /* ... other properties ... */
   }
   ```

## ⚙️ How the Site Works (Explained Simply)

This website uses these main technologies:
- **React**: Makes the site interactive
- **Vite**: Makes the site load fast
- **TailwindCSS**: Makes the styling easy
- **Framer Motion**: Makes the animations smooth

Here's how the files connect:

1. **The Structure**:
   - `/client`: Contains everything you see on the screen
     - `/src/components`: Individual pieces of the website (like building blocks)
     - `/src/assets`: Images and other files
     - `/src/lib`: Helper files and data
     - `/src/hooks`: Special functions that add features
   - `/server`: Handles behind-the-scenes stuff (not used much on this site)
   - `/shared`: Files shared between client and server

2. **How It Works**:
   - `App.tsx` is like the main container that holds everything
   - Each section (Hero, Journey, Skills, Projects, Contact) is a separate component
   - When you edit `data.ts`, it automatically updates what you see on the website
   - The animations use Framer Motion, which makes things move smoothly
   - The dark/light mode uses a special "hook" to remember your preference

3. **The Magic Parts**:
   - When you click a navigation link, it smoothly scrolls to that section
   - The cursor spotlight follows your mouse around
   - Project cards grow slightly when you hover over them
   - The timeline dots connect together to show your journey
   - The site remembers if you prefer dark or light mode

## 📦 Deployment Guide

This site can be easily deployed to GitHub Pages:

1. Create a GitHub repository for your website
2. Push your code to the repository
3. Enable GitHub Pages in the repository settings
4. Set the source branch to `main` and the folder to `/root`
5. Your site will be available at `https://username.github.io/repository-name/`

For more detailed deployment instructions, check out the GitHub Pages documentation.
