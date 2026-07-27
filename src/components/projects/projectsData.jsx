export const projectsData = [

  {
    id: "time-capsule",
    title: "Time Capsule",
    badge: "Featured Project",
    category: "Digital Memory Vault",
    year: "2026",

    description:
      "A secure full-stack web application that allows users to preserve digital memories and schedule them to be unlocked on a future date. Built with React, NestJS, and MongoDB, featuring secure authentication, cloud storage, automated email notifications, and scheduled unlock functionality.",

    summary:
      "Time Capsule is a digital memory vault where users can securely store messages and media for future delivery. The platform combines modern full-stack architecture with scheduled background processes to create a reliable and meaningful user experience.",

    image: "/images/TimeCapsule.png",

    tags: [
      "React",
      "NestJS",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "Cloudinary",
      "JWT",
      "Stripe",
      "Resend",
    ],

    techStack: [
      "React",
      "NestJS",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "Cloudinary",
      "JWT Authentication",
      "Stripe",
      "Resend",
    ],

    githubUrl: "https://github.com/ayeshatehreem77/time-capsule",
    liveUrl: "https://timecapsule-frontend-56v2.vercel.app/",
    featured: true,

    media: {
      desktop: [
        {
          url: "/images/TimeCapsule.png",
          caption: "Dashboard displaying user capsules, unlock schedules, and account overview.",
        },
      ],
      mobile: [
        {
          url: "/images/TCMobile.png",
          caption: "Responsive mobile interface optimized for managing digital capsules.",
        },
      ],
    },

    overview:
      "Time Capsule is a full-stack web application designed to help users securely preserve digital memories for the future. Users can create private capsules containing messages, images, or files, choose a future unlock date, and receive automated email notifications when the capsule becomes available.",

    problem:
      "Traditional cloud storage platforms allow users to store files, but they don't provide a meaningful way to schedule personal memories or messages for future access. Managing secure delivery and time-based availability requires custom backend logic.",

    solution:
      "Built a modular MERN-based application using React, NestJS, and MongoDB. Implemented secure JWT authentication, Cloudinary media storage, scheduled background jobs for automatic capsule unlocking, Stripe payment integration, and email notifications through Resend.",

    features: [
      {
        title: "Future Unlock Scheduling",
        desc: "Users choose a future date when their digital capsule becomes accessible.",
        icon: "clock",
      },
      {
        title: "Secure Authentication",
        desc: "JWT authentication with protected routes and role-based access.",
        icon: "shield",
      },
      {
        title: "Cloud File Storage",
        desc: "Images and files are securely stored and delivered using Cloudinary.",
        icon: "cloud",
      },
      {
        title: "Email Notifications",
        desc: "Automatic email reminders are sent when a capsule reaches its unlock date.",
        icon: "mail",
      },
      {
        title: "Subscription Support",
        desc: "Integrated Stripe for premium plans and future platform scalability.",
        icon: "credit-card",
      },
      {
        title: "Admin Dashboard",
        desc: "Manage users, capsules, and platform activity through a dedicated admin panel.",
        icon: "layout-dashboard",
      },
    ],

    architecture: [
      {
        title: "Frontend",
        desc: "Built with React, Tailwind CSS, and reusable UI components for a responsive user experience.",
        icon: "monitor",
      },
      {
        title: "Backend",
        desc: "NestJS modular architecture with authentication, scheduling, validation, and REST APIs.",
        icon: "server",
      },
      {
        title: "Database",
        desc: "MongoDB with Mongoose schemas for users, capsules, subscriptions, and notifications.",
        icon: "database",
      },
      {
        title: "Cloud Services",
        desc: "Cloudinary for media storage, Resend for transactional emails, and Stripe for payments.",
        icon: "cloud",
      },
    ],

    challenges: [
      {
        challenge:
          "Ensuring capsules remain inaccessible until the selected unlock date.",
        solution:
          "Implemented scheduled background tasks and backend date validation so capsules are automatically unlocked only when the specified date is reached.",
      },
      {
        challenge:
          "Managing uploaded media efficiently.",
        solution:
          "Integrated Cloudinary for secure media storage and optimized asset delivery while storing metadata in MongoDB.",
      },
      {
        challenge:
          "Providing timely user notifications.",
        solution:
          "Integrated Resend to automatically notify users via email whenever a capsule becomes available.",
      },
    ],

    results: [
      "Built a production-style full-stack application using the MERN ecosystem.",
      "Implemented secure authentication and protected API routes.",
      "Automated time-based capsule unlocking with scheduled background jobs.",
      "Integrated cloud media storage and transactional email services.",
      "Designed a responsive and scalable architecture for future enhancements.",
    ],
  },
  {
    id: 'zarmina',
    title: 'Zarmina',
    category: 'Luxury E-Commerce & Editorial Engine',
    year: '2025',
    description:
      'Modern full-stack clothing e-commerce platform built with React, NestJS, and MongoDB, featuring secure authentication, product management, responsive design, and a scalable REST API architecture.',
    image:
      '/images/Zarmina.png',
    tags: ['React', 'NestJs', 'MongoDB', 'Bootstrap CSS', 'Redux Toolkit', 'Stripe', 'Cloudinary'],
    githubUrl: 'https://github.com/ayeshatehreem77/zarminafrontend',
    // liveUrl: 'https://zarmina-demo.example.com',
    featured: false,
  },
];