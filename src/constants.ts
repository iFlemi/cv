export interface experienceDatum {
    company: string
    jobTitle: string
    location: string
    tenure: string
    skills: string[]
    achievements: string[]
}

export const cvExperience: experienceDatum[] = [
    {
        company: "Smartest Energy Ltd.",
        jobTitle: "Software Engineer",
        location: "London",
        tenure: "June 2025 - Present",
        skills: [ "React (Typescript), C#, NodeJS, Azure Dev Ops (ServiceBus/Function App/Web App/Fabric), MSSQL, Grafana"],
        achievements: [
            "Built a service supporting the company’s move to Market-wide Half-Hourly Settlement (MHHS), the industry-wide shift to half-hourly meter readings. Joined the four-year programme in its final two months before launch.",
            "Implemented a Grafana dashboard and robust logging for the MHHS service, enabling the team to diagnose production and launch issues within minutes and ship fixes through CI/CD in under an hour.",
            "Built the UI for a customer-facing reporting tool in React and TypeScript on a Microsoft Fabric data source, delivered well ahead of the project deadline.",
            "Exploring controlled and careful agentic AI implementation techniques, using a user-need-driven, agile approach to design rather than unstructured \"vibe coding\"."
        ]
    },
    {
        company: "Fauve Ltd.",
        jobTitle: "Software Engineer",
        location: "Auckland",
        tenure: "March 2024 - May 2025",
        skills: [ "Typescript, NodeJS, AWS: Lambda, DynamoDB, EventBridge, CloudWatch"],
        achievements: [
            "Developed Jurisdiction and Timezone API to enable accurate pricing and scheduling across different global regions, solving complex multi-timezone business logic for rating services",
            "Implemented flexible REST API for managing country, region, and timezone resources (to lcc-3166 / IANA standards)  with robust event handling",
            "Supported custom temporal expression DSL for precisely defining time-related events",
            "Enabled real-time electricity market pricing across New Zealand and Australia by creating a scalable data integration service",
            "Implemented a dead-letter service for failed events, ensuring data integrity and providing robust error recovery mechanisms in a distributed system architecture"
        ]
    },
    {
        company: "Kernel Wealth",
        jobTitle: "Software Engineer",
        location: "Auckland",
        tenure: "April 2023 - Jan 2024",
        skills: ["C#", "F#", "PostgreSQL", "AWS: Lambda", "CodePipeline", "DynamoDB", "Git", "Aurora", "Cognito", "CloudFormation", "WAF", "SNS", "SQS", "EventBridge"],
        achievements: [
           "Enabled reliable multi-system updates for annual account confirmations, eliminating manual reconciliation and reducing operational risk.",
           "Resolved a longstanding issue by enabling the creation and control of child accounts from a parent account, overcoming authentication challenges posed by a 3rd-party system. Additionally, leveraged this to facilitate account impersonation for Customer Service Representatives.",
           "Provided comprehensive account activity tracking, supporting compliance and internal audit requirements",
           "Improved team's code quality and maintainability by shifting to functional programming patterns"
        ]
    },
    {
        company: "Visa Inc.",
        jobTitle: "Senior Developer",
        location: "Auckland",
        tenure: "August 2021 - January 2023",
        skills: ["JS", "React", "Github Actions", "Microservices", "MSSQL", "C#", "CouchDB"],
        achievements: [
            "Part of a team of 4 devs converting old Angular frontend to a new React one to a hard deadline.",
            "Increased software reliability by establishing rigorous unit testing.",
            "Lead initiative to standardise code-quality across teams.",
            "Simplified system architecture by decoupling microservices, enabling more agile and responsive software development",
            "2nd highest score in division (of around 150 devs) for the annual code security assessment."
        ]
    },
    {
        company: "Coretex",
        jobTitle: "Software Engineer",
        location: "Auckland",
        tenure: "July 2020 - March 2021",
        skills: ["C#", "JS", "ASP MVC", "MSSQL", "Git", "Azure Cloud", "jQuery", "React", "XSLT", "Azure DevOps CI/CD", "Docker"],
        achievements: [
            "Created new features from UI mockups in a complex enterprise code-base.",
            "Worked with teams across Engineering to facilitate the fortnightly release of minor versions.",
            "Reduced time-to-market for new features through direct stakeholder collaboration.",
            "Engaged in all aspects of feature development, from planning to support.",
            "Enabled faster, more reliable software releases by introducing first CI/CD microservice in our vertical, reducing deployment complexity."
        ]
    },
    {
        company: "Starshipit",
        jobTitle: "Developer",
        location: "Auckland",
        tenure: "March 2019 - October 2019",
        skills: ["C#", ".NET Core", "ASP MVC", "SQL", "HTML5/CSS", "Bootstrap", "Windows Forms", "Azure Cloud", "Swagger", "iText"],
        achievements: [
            "Expanded international shipping capabilities by integrating multiple courier services, directly supporting business growth.",
            "Standardized development practices to improve team efficiency and code consistency.",
            "Maintained rapid feature delivery while managing legacy system constraints."
        ]
    },
    {
        company: "Heron Technology",
        jobTitle: "Developer",
        location: "Auckland",
        tenure: "November 2015 - March 2019",
        skills: ["C#", ".NET Core", "ASP MVC", "SQL", "JavaScript", "Node.js", "JQuery", "HTML5/CSS", "Bootstrap 3/4", "AWS (AppStream, DynamoDB, VPC, API Gateway, EC2, EMR, SQS, Lambda, Alexa, Cloudwatch)", "Google Assistant", "SignalR", "Windows Forms", "SSL VPN", "Windows Server", "DNS", "Git"],
        achievements: [
            "Lead design of custom software from scratch, creating/adapting specifications with clients.",
            "Saved ≈70% of a client’s monthly AWS bill (≈$5000 ➝ ≈$1500) through AWS service restructure.",
            "Created scaling GPS fleet tracking and reporting systems",
            "Created a voice-control system for Google Home/Alexa for spa pool controllers."
        ]
    },
    {
        company: "Out There Business Solutions",
        jobTitle: "Android Developer",
        location: "Auckland",
        tenure: "April 2015 - November 2015",
        skills: ["Java", "Android", "MongoDB", "Node.js", "HTML", "CSS", "Git"],
        achievements: [
            "Created a custom Android App from design to release to fulfil a requirement for a key client.",
            "Integrated with the existing Node.js web portal running MongoDB."
        ]
    }
];
