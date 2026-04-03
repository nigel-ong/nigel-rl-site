// Project data
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  badgeText: string;
  badgeColor: string;
  links: {
    demo?: string;
    github?: string;
    video?: string;
    info?: string;
  };
}

export const projects: Project[] = [
  {
    id: "memorizz",
    title: "Memo Rizz",
    description: "A memo-taking web app developed during BCIT in a group of five. Interactive and deployed on Render.com. App instance may take time to spin up. Note: Account data is temporary.",
    tags: ["JavaScript", "Node.js", "Express", "BCrypt"],
    imageUrl: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=350",
    badgeText: "Web App",
    badgeColor: "primary",
    links: {
      demo: "https://memorizz-z18i.onrender.com/",
      github: "https://github.com/nigel-ong"
    }
  },
  {
    id: "poseit",
    title: "Pose IT",
    description: "An interactive XR app for the BCIT Tech Collider Wall. Players mimic avatar poses and receive a percentage-based score.",
    tags: ["XR", "JavaScript", "HTML", "ReachXR"],
    imageUrl: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=350",
    badgeText: "XR Application",
    badgeColor: "secondary",
    links: {
      video: "-vS5hrA8dEI",
      info: "https://reachxr.com/"
    }
  }
];

// Skills data
export interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
  color: "primary" | "secondary" | "accent";
}

export const skills: SkillCategory[] = [
  {
    category: "Operating Systems",
    icon: "computer",
    items: ["macOS", "Windows", "Linux", "iOS"],
    color: "primary"
  },
  {
    category: "DevOps",
    icon: "server",
    items: ["SSH", "AWS", "Azure", "Docker"],
    color: "secondary"
  },
  {
    category: "Admin Tools",
    icon: "admin",
    items: ["Google Admin", "Mosyle", "Active Directory", "MDM Solutions"],
    color: "primary"
  },
  {
    category: "Applications",
    icon: "apps",
    items: ["MS Office", "Google Workspace", "Meraki", "VoIP Systems"],
    color: "secondary"
  },
  {
    category: "ITSM & Ticketing",
    icon: "customer-service",
    items: ["SharePoint", "Documentation Workflows", "Asset Management", "Lifecycle Management"],
    color: "primary"
  },
  {
    category: "Programming Languages",
    icon: "code",
    items: ["JavaScript", "Python", "HTML/CSS", "SQL"],
    color: "secondary"
  }
];

// Contact information
export interface ContactInfo {
  type: string;
  value: string;
  link: string;
  icon: string;
  display?: string;
}

export const contactInfo: ContactInfo[] = [
  {
    type: "Email",
    value: "nigel.ong00@gmail.com",
    link: "mailto:nigel.ong00@gmail.com",
    icon: "mail",
    display: "nigel.ong00@gmail.com"
  },
  {
    type: "LinkedIn",
    value: "linkedin.com/in/niong",
    link: "https://linkedin.com/in/niong",
    icon: "linkedin",
    display: "linkedin.com/in/niong"
  },
  {
    type: "GitHub",
    value: "github.com/nigel-ong",
    link: "https://github.com/nigel-ong",
    icon: "github",
    display: "github.com/nigel-ong"
  }
];
