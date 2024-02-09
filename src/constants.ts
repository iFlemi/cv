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
        company: "Kernel Wealth",
        jobTitle: "Software Engineer",
        location: "Auckland",
        tenure: "April 2023 - Present",
        skills: ["C#", "F#", "PostgreSQL", "AWS: Lambda", "CodePipeline", "DynamoDB", "Git", "Aurora", "Cognito", "CloudFormation", "WAF", "SNS", "SQS", "EventBridge"],
        achievements: [
            "Created an Annual Confirmation feature, ensuring reliable chained updates to DynamoDB tables, a PostgreSQL table, and multiple highly-coupled 3rd party endpoints.",
            "Resolved a longstanding issue by enabling the creation and control of child accounts from a parent account, overcoming authentication challenges posed by a 3rd-party system. Additionally, leveraged this to facilitate account impersonation for Customer Service Representatives.",
            "Created an audit service from scratch to log all account activity.",
            "Conducted training sessions on functional programming for team members, successfully converting common non-functional patterns in the code base.",
            "Reworked Authorisation across the entire application.",
            "Protected internal tooling with AWS WAF, accounting for overseas staff and WFH usage."
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
            "Implemented, trained-on and enforced unit testing, taking the project from 0 to 50% test coverage in 4 months.",
            "Lead initiative to standardise code-quality across teams.",
            "Decoupled microservices from each other and the ageing monolith.",
            "Removed use of hard-to-maintain patterns (Redux/C# dynamic/JObject types) in new projects.",
            "Migrated inefficient TeamCity build pipeline to GitHub actions as a step towards CI/CD.",
            "Assisted on new microservice architecture decisions.",
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
            "Owned created features, including presentation to stakeholders and being on call to support them in 4 global production environments.",
            "Engaged in all aspects of feature development, from planning to support.",
            "Worked with a diverse product from custom hardware to hybrid cloud/legacy infrastructure.",
            "Assisted in breaking down legacy monolithic architectures into microservices. Pioneering the first CI/CD microservice, laying the foundation for all future microservices."
        ]
    },
    {
        company: "Starshipit",
        jobTitle: "Developer",
        location: "Auckland",
        tenure: "March 2019 - October 2019",
        skills: ["C#", ".NET Core", "ASP MVC", "SQL", "HTML5/CSS", "Bootstrap", "Windows Forms", "Azure Cloud", "Swagger", "iText"],
        achievements: [
            "Implemented new EU/US courier integrations for DHL EU/DHL US, RoyalMail UK/DPD.",
            "Owned design, specification and implementation of additions to a large existing product.",
            "Managed Production CI/CD with same day production release hotfix commitments.",
            "Created a centralised tool repository and development guidelines.",
            "Delivered code to strict deadlines working with legacy code restrictions.",
            "Created pdf creation tools to fill the need for centralised pdf generation."
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
            "Consulted on project costing, back-end services, front-end design & hosting requirements.",
            "Saved ~70% of a client's monthly AWS bill (~$5000 to ~$1500) through AWS service restructure.",
            "Autonomous self-management from implementation to finished product on projects.",
            "Rebuilt GPS tracking system from device byte level, TCP server, web interface to reporting system in .NET, JS/HTML/CSS using SQS and DynamoDB. Worked TCP level load balancing into the environment to optimise complexity/costs and increase scalability.",
            "Identified and fixed SQL injection vulnerabilities in existing code base.",
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
