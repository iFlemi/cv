import { experienceDatum, cvExperience } from "../constants"

interface ExperienceEntryProps {
    cvExperience: experienceDatum[];
}

const ExperienceRows: React.FC<ExperienceEntryProps> = ({ cvExperience }) => {
    const withHeader = [{
        company: "Company",
        jobTitle: "Job Title",
        location: "Location",
        tenure: "Tenure",
        skills: ["Skills"],
        achievements: ["Achievements"]
    } as experienceDatum].concat(cvExperience)

    return (
        <div className="">
            {withHeader.map((experience, index) => (
                <div key={index} className={`grid grid-cols-5 xl:grid-cols-10 gap-8 p-4 
                    ${index === 0 ? "text-2xl text-orange-400 font-bold" : "text-xl"}
                    ${index % 2 === 0 ? "bg-slate-950" : "bg-slate-900"}
                `}>
                    <div className="font-bold">{experience.company}</div>
                    <div>{experience.jobTitle}</div>
                    <div>{experience.tenure}</div>
                    <div className="xl:col-span-2 italic">{experience.skills.join(', ')}</div>
                    <div className="xl:col-span-5">
                        <ul>
                            {experience.achievements.map((achievement, idx) => (
                                <li className="pb-2" key={idx}>{`${index === 0 ? "" : "- "}${achievement}`}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default () => (
    <div className="mt-12"><ExperienceRows cvExperience={cvExperience} /></div>
)

