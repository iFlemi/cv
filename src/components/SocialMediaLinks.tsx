import { SocialIcon } from "react-social-icons";

const SocialMediaLinks = () => {
    return (
        <div className="social-media-links flex flex-row gap-2 px-6">
            <SocialIcon url="mailto:ifleming@orcon.net.nz" bgColor="#FB923C" />
            <SocialIcon url="https://github.com/iFlemi" />
            <SocialIcon url="https://www.linkedin.com/in/ian-fleming-a3374412/" />
        </div>
    );
};

export default SocialMediaLinks;
