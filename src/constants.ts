export type ColourKey = "Dark" | "Beige" | "Grey" | "Purple"

export const Colours: { [key in ColourKey]: [string, string] } = {
    "Dark": ["#2A2F22", "stone-800"],
    "Beige": ["#BBB6A5", "stone-400"],
    "Grey": ["#8C9491", "neutral-300"],
    "Purple": ["#8C8C9C", "zinc-400"]
};

