import { useState } from "react"
import { motion } from "framer-motion"

import laptop from "../assets/kitty-laptop.png"
import astronaut from "../assets/kitty-astronaut.png"
import thinking from "../assets/kitty-thinking.png"
import phone from "../assets/kitty-phone.png"
import me from "../assets/me-small.jpg"

const roundedIconClass = "w-24 h-24 rounded-full overflow-hidden"
const visiblePosition = { opacity: 1, x: 0 }
const invisibleLeft = { opacity: 0, x: 25 }
const invisibleRight = { opacity: 0, x: -25 }
const invisibleFarRight = { opacity: 0, x: -100 }
const backgroundColour = "stone-400"

const navMotion = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.05,
        },
    },
    hidden: {
        opacity: 0,
    },
}

const itemMotion = {
    visible: visiblePosition,
    hidden: invisibleFarRight,
}
const itemMotionDesktop = {
    visible: visiblePosition,
    hidden: visiblePosition,
}

interface NavLink {
    name: string
    imgsrc: string
    href: string
    id: number
}

const navLinkData: NavLink[] = [
    { name: "About Me", imgsrc: thinking.src, href: "/", id: 1 },
    { name: "Experience", imgsrc: laptop.src, href: "/experience", id: 2 },
    { name: "Education", imgsrc: astronaut.src, href: "/education", id: 3 },
    { name: "Contact", imgsrc: phone.src, href: "/contact", id: 4 },
]

interface NavLinksProps {
    isMobile: boolean;
    className: string;
}

const NavLinks: React.FC<NavLinksProps> = ({
    isMobile,
    className,
}) => (
    <div className={className}>
        {navLinkData.map(({ name, imgsrc, href, id }) => (
            <motion.div
                className="flex flex-col justify-between"
                key={id}
                variants={isMobile ? itemMotion : itemMotionDesktop}>
                <a
                    href={href}
                    className="flex items-center justify-between"
                >
                    {isMobile && (<img
                        className={roundedIconClass}
                        src={imgsrc} />)}
                    <span className="pl-6">{name}</span>
                </a>
            </motion.div>
        ))}
    </div>
);


interface BurgerProps {
    toggled: boolean;
    setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger: React.FC<BurgerProps> = ({ toggled, setToggled }) => (
    <motion.div
        animate={visiblePosition}
        initial={invisibleLeft}
        transition={{ delay: 0.15 }}
        onClick={() => setToggled(!toggled)}
        className={"burger z-50 cursor-pointer space-y-1.5 xl:hidden"}
    >
        <motion.span
            animate={{
                rotateZ: toggled ? 45 : 0,
                y: toggled ? 8 : 0
            }}
            className="block h-0.5 w-8 bg-black"
        />

        <motion.span
            animate={{
                x: toggled ? 12 : 0,
                width: toggled ? 0 : 32
            }}
            className="block h-0.5 w-8 bg-black"
        />
        <motion.span
            animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: 32,
            }}
            className="block h-0.5 w-8 bg-black"
        />
    </motion.div>

)

export default function Nav() {
    const [toggled, setToggled] = useState(false)

    return (
        <nav className="relative px-8 mb-32 flex justify-between items-center pt-12 pb-6 font-medium md:px-16 lg:px-32 bg-slate-700 text-slate-300">
            <svg
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                width="80%"
                height="4"
                viewBox="0 0 1280 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2 2L1278 2"
                    stroke="#282828"
                    strokeLinecap="round"
                />
            </svg>

            <div className={roundedIconClass}>
                <img src={me.src} alt="Me in Queenstown" />
            </div>

            <h1 className="text-2xl font-bold">
                <a href="/">Ian Fleming</a>
            </h1>

            {toggled && (
                <motion.div
                    variants={navMotion}
                    animate="visible"
                    initial="hidden"
                    className="fixed left-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-24 text-2xl font-bold bg-slate-700"
                >
                    <NavLinks className="flex flex-col gap-24" isMobile={true} />
                </motion.div>
            )}

            <motion.div
                animate={visiblePosition}
                initial={invisibleLeft}
                transition={{ delay: 0.15 }}
                className="hidden xl:flex xl:items-center xl:justify-center xl:gap-12 xl:text-lg font-bold"
            >
                <NavLinks className="flex gap-12" isMobile={false} />
            </motion.div>

            <Burger
                toggled={toggled}
                setToggled={setToggled}
            />

        </nav>
    )
}
