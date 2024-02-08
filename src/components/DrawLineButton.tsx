// Define your functional component correctly
import { DrawRandomLines } from "../utils/Fun"
import draw from "../assets/kitty-draw.png"

// Define your functional component correctly
const DrawLineButton = () => (
    <div>
        <img src={draw.src} alt="mystery drawing kitty" className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
            onClick={() => DrawRandomLines()} />
    </div>
);

export default DrawLineButton;
