import { useGeneral } from "@/src/entities/general";
import Spline from "@splinetool/react-spline";

import { SCENE_URL_WITH_SOUND, SCENE_URL_WITHOUT_SOUND } from "../../config";
import { KEYBOARD_HEIGHT, KEYBOARD_WIDTH } from "../../constants";

type KeyboardProps = {
  onKeyboardLoad: () => void;
};

export const Keyboard: React.FC<KeyboardProps> = ({ onKeyboardLoad }) => {
  const isSoundEnabled = useGeneral((state) => state.isSoundEnabled);

  return (
    <div className="relative">
      {!isSoundEnabled && (
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
