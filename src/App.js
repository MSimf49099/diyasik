import './App.css';
import useApp from './useApp';
import MobileFeed from "./components/MobileFeed";
import DesktopFeed from "./components/DesktopFeed";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";

const SCENES = {
    '0': {
        '0': true,
        '1': false,
    },
    '1': {
        '0': true,
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
    },
    '2': {
        '0': true,
        '1': false,
        '2': false,
        '3': false,
        '4': false,
    },
    '3': {
        '0': true,
        '1': false,
        '2': false,
        '3': false,
    },
    '4': {
        '0': true,
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
    },
    '5': {
        '0': true,
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
        '8': false,
        '9': false,
        '10': false,
        '11': false,
    },
    '6': {
        '0': true,
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': false,
        '7': false,
        '8': false,
    },
}

const App = () => {
    const { isDesktop } = useApp();
    const btnRef = useRef(null);
    const containerRef = useRef(null);
    const isFirstMove = useRef(true);
    const [isShowButton, setIsShowButton] = useState(true);
    const [running, setRunning] = useState(false);
    const [scene, setScene] = useState(() => {
        const storageData = JSON.parse(window.localStorage.getItem('scene'));

        return storageData?.currentScene || '0';
    });

    const [frame, setFrame] = useState(() => {
        const storageData = JSON.parse(window.localStorage.getItem('scene'));

        return storageData?.currentFrame || '1';
    });

    const [sceneOptions, setSceneOptions] = useState(() => {
        const storageData = JSON.parse(window.localStorage.getItem('scene'));

        return storageData?.sceneOption || SCENES[scene];
    });

    const isShowMainButton = useMemo(() => {
        if (!isShowButton) return false;

        if (running) return false;

        if (scene === 1 && sceneOptions['5']) return false;

        return !(scene === 6 && sceneOptions['8']);
    }, [isShowButton, running, scene, sceneOptions]);

    const setSceneHandler = useCallback(() => {
        const storageData = JSON.parse(window.localStorage.getItem('scene'));

        if(!SCENES[String(scene)]) {
            setIsShowButton(false);

            return;
        }

        const allFrameTrue = Object.values(storageData.sceneOption).every(Boolean);

        if (allFrameTrue) {
            setFrame('1');
            setScene((prev) => {
                const value = parseInt(prev, 10) + 1;
                const updateCurrentScene = Object.assign(storageData, {currentScene: String(value)});
                const updateCurrentFrame = Object.assign(storageData, {currentFrame: '1'});
                const updateFrame = Object.assign(storageData, {sceneOption: SCENES[String(value)]});
                window.localStorage.setItem('scene', JSON.stringify(Object.assign(storageData, updateCurrentFrame, updateCurrentScene, updateFrame)));

                return value;
            });
            setSceneOptions(SCENES[String(scene)]);
        } else {
            setFrame((prev) => {
                const value = parseInt(prev, 10) + 1;
                const updateCurrentFrame = Object.assign(storageData, {currentFrame: String(value)});
                const updateFrame = Object.assign(storageData, { sceneOption: Object.assign(storageData.sceneOption, {[frame]: true})});
                window.localStorage.setItem('scene', JSON.stringify(Object.assign(storageData, updateCurrentFrame, updateFrame)));

                return value;
            });
            setSceneOptions(storageData.sceneOption);
        }
    }, [frame, scene]);

    useEffect(() => {
        const storageData = JSON.parse(window.localStorage.getItem('scene'));

        if (!storageData) {
            window.localStorage.setItem('scene', JSON.stringify({
                currentScene: scene,
                currentFrame: frame,
                sceneOption: SCENES[scene]
            }));
        } else {
            window.localStorage.setItem('scene', JSON.stringify(storageData));
        }
    }, [frame, scene, setSceneHandler]);

    useEffect(() => {
        if (!running) return;

        const btn = btnRef.current;
        const container = containerRef.current;
        if (!btn || !container) return;

        let x = 0;
        let y = 0;

        const move = (e) => {
            const btnRect = btn.getBoundingClientRect();

            const cx = btnRect.left + btnRect.width / 2;
            const cy = btnRect.top + btnRect.height / 2;

            const dx = e.clientX - cx;
            const dy = e.clientY - cy;

            const distance = Math.sqrt(dx * dx + dy * dy);

            const safeDistance = 140;
            const panicDistance = 70;

            if (distance < panicDistance) {
                x = Math.random() * (container.clientWidth - btn.offsetWidth);
                y = Math.random() * (container.clientHeight - btn.offsetHeight);
            } else if (distance < safeDistance) {
                const force = 0.18;
                x -= dx * force;
                y -= dy * force;
            } else {
                return;
            }

            const maxX = container.clientWidth - btn.offsetWidth;
            const maxY = container.clientHeight - btn.offsetHeight;

            x = Math.max(0, Math.min(maxX, x));
            y = Math.max(0, Math.min(maxY, y));

            btn.style.transform = `translate(${x}px, ${y}px)`;
        };

        const handleStart = () => {
            if (isFirstMove.current) {
                isFirstMove.current = false;

                setSceneHandler();
                btn.style.pointerEvents = 'none';
                btn.style.top = 'unset';
                container.style.textAlign = 'unset';
            }
        };

        btn.addEventListener('transitionstart', handleStart, { once: true });
        container.addEventListener('mousemove', move);

        const timer = setTimeout(() => {
            setRunning(false);
            btn.style.transform = `none`;
            btn.style.pointerEvents = 'auto';
            btn.style.top = '120px';
            container.style.textAlign = 'center';
            container.removeEventListener('mousemove', move);
            setSceneHandler();
        }, 60000);

        return () => {
            container.removeEventListener('mousemove', move);
            btn.removeEventListener('transitionstart', handleStart);
            clearTimeout(timer);
        };
    }, [running, setSceneHandler]);

    useEffect(() => {
        if (scene === 1 && sceneOptions['3'] && !sceneOptions['4']) {
            setRunning(true);
        }
    }, [scene, sceneOptions, setSceneHandler]);

  return (
    <div className="main">
        {isDesktop && isShowMainButton && (
            <div
                className="main-button"
                onClick={setSceneHandler}
            >
                Далее
            </div>
        )}

        {isDesktop ?
            <DesktopFeed
                scene={scene}
                sceneOptions={sceneOptions}
                refButton={btnRef}
                containerRef={containerRef}
                setSceneHandler={setSceneHandler}
            ></DesktopFeed> :
            <MobileFeed></MobileFeed>
        }
    </div>
  );
}

export default App;
