import { DrawRandomLines } from "../utils/Fun"
import draw from "../assets/kitty-draw.png"

const DrawLineButton = () => (
    <div>
        <img src={draw.src} alt="mystery drawing kitty from freepix.com" className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
            onClick={() => DrawRandomLines()} />
    </div>
);

export default DrawLineButton;
