import { useGeneral } from "@/src/entities/general";
import Spline from "@splinetool/react-spline";

const KEYBOARD_HEIGHT = 200;
const KEYBOARD_WIDTH = 478;

const SCENE_URL_WITHOUT_SOUND = "https://prod.spline.design/AsO7lelOb1sRsqNJ/scene.splinecode";
const SCENE_URL_WITH_SOUND = "https://prod.spline.design/w6IPQnB5xMSipyMm/scene.splinecode";

type KeyboardProps = {
  onKeyboardLoad: () => void;
};

export const Keyboard: React.FC<KeyboardProps> = ({ onKeyboardLoad }) => {
  const disableAppSound = useGeneral((state) => state.disableAppSound);

  return (
    <div className="relative">
      {!disableAppSound && (
        <Spline
          className="absolute"
          style={{
            width: `${KEYBOARD_WIDTH}px`,
            maxWidth: `${KEYBOARD_WIDTH}px`,
            maxHeight: `${KEYBOARD_HEIGHT}px`,
          }}
          onLoad={onKeyboardLoad}
          scene={SCENE_URL_WITH_SOUND}
        />
      )}
      <Spline
        style={{
          width: `${KEYBOARD_WIDTH}px`,
          maxWidth: `${KEYBOARD_WIDTH}px`,
          maxHeight: `${KEYBOARD_HEIGHT}px`,
        }}
        onLoad={onKeyboardLoad}
        scene={SCENE_URL_WITHOUT_SOUND}
      />
    </div>
  );
};
