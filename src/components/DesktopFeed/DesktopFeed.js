import Persona from '../Persona';
import Map from '../Map';
import './desktopFeed.css';
import {useMemo} from "react";

const DesktopFeed = ({ scene, sceneOptions, refButton, containerRef, setSceneHandler }) => {
    const scene1Maya = useMemo(() => {
        if (scene !== 1) return;

        if (!sceneOptions['2'] && !sceneOptions['4'] && !sceneOptions['5']) {
            return 'Пиет, мам!';
        }

        if (!sceneOptions['4'] && !sceneOptions['5']) {
            return 'Мы хотим, чтобы ты всегда была счастлива и улыбалась!';
        }

        if (!sceneOptions['5']) {
            return 'Хихихихихихихи...';
        }

        return 'Мы просто пошутили :)';
    }, [scene, sceneOptions]);

    const scene1Lucya = useMemo(() => {
        if (scene !== 1) return;

        if (!sceneOptions['3'] && !sceneOptions['4'] && !sceneOptions['5']) {
            return 'Мы поздравляем тебя с днем рождения!';
        }

        if (!sceneOptions['4'] && !sceneOptions['5']) {
            return 'По этому придумали тебе небольшой квест. Если ты готова начать, нажми на старт!';
        }

        if (!sceneOptions['5']) {
            return 'Хихихихихихихи...';
        }

        return 'Давай начнем наш квест';
    }, [scene, sceneOptions]);

    const scene2Maya = useMemo(() => {
        if (scene !== 2) return;

        if (!sceneOptions['1'] && !sceneOptions['2']) {
            return 'Наш праздничный квест будет проходить в стиле ПИРАТОВ!';
        }

        if (sceneOptions['1'] && !sceneOptions['2']) {
            return undefined;
        }

        if (sceneOptions['1'] && sceneOptions['2'] && !sceneOptions['3']) {
            return 'Давай попробуем его найти';
        }

        if (sceneOptions['1'] && sceneOptions['2'] && sceneOptions['3'] && sceneOptions['4'] && !sceneOptions['5']) {
            return 'Ураааааааааа! Ты нашла свой первый клад!';
        }

        return undefined;
    }, [scene, sceneOptions]);

    const scene2Lucya = useMemo(() => {
        if (scene !== 2) return;

        if (sceneOptions['1'] && !sceneOptions['3']) {
            return 'По этому, вот тебе карта сокровищ, где ты можешь найти свой первый клад!';
        }

        if (sceneOptions['1'] && sceneOptions['3'] && !sceneOptions['4']) {
            return 'Найди клад и только после этого нажимай "Далее"! Не мухлюй :)';
        }

        return undefined;
    }, [scene, sceneOptions]);

    const scene2Type = useMemo(() => {
        if (scene !== 2) return;

        if (!sceneOptions['1'] && !sceneOptions['3']) {
            return 'no-pirat';
        }

        if (!sceneOptions['3']) {
            return 'default';
        }

        if (!sceneOptions['4']) {
            return 'thinking';
        }

        return 'smile';
    }, [scene, sceneOptions]);

    const scene3Maya = useMemo(() => {
        if (scene !== 3) return;

        if (sceneOptions['1'] && !sceneOptions['2']) {
            return 'Держи свою вторую карту!';
        }

        if (sceneOptions['3'] && !sceneOptions['4']) {
            return 'Ухтышка, ты уже нашла два пиратских клада!';
        }
    }, [scene, sceneOptions]);

    const scene3Lucya = useMemo(() => {
        if (scene !== 3) return;

        if (!sceneOptions['1']) {
            return 'Давай найдем теперь второй клад!';
        }

        if (sceneOptions['2'] && !sceneOptions['3']) {
            return 'Скорее беги ищи!';
        }
    }, [scene, sceneOptions]);

    const scene3Type = useMemo(() => {
        if (scene !== 3) return;

        if (!sceneOptions['2']) {
            return 'default';
        }

        if (!sceneOptions['3']) {
            return 'thinking';
        }

        return 'smile';
    }, [scene, sceneOptions]);

    const scene4Maya = useMemo(() => {
        if (scene !== 4) return;

        if (!sceneOptions['1']) {
            return 'Каждый следующий клад спрятан все более надежнее, так что не думай, что все будет так просто!';
        }

        if (sceneOptions['2'] && !sceneOptions['3']) {
            return 'Кстати, когда ты ходишь ищещь сокровища, не забывай нас гладить';
        }

        if (sceneOptions['4'] && !sceneOptions['5']) {
            return 'Или почеши нам пузико';
        }

        if (sceneOptions['7'] && !sceneOptions['8']) {
            return 'Прими наши поздравляшки! Ты уже нашла три сокровища!';
        }
    }, [scene, sceneOptions]);

    const scene4Lucya = useMemo(() => {
        if (scene !== 4) return;

        if (sceneOptions['1'] && !sceneOptions['2']) {
            return 'Да, мы сильно старались!';
        }

        if (sceneOptions['3'] && !sceneOptions['4']) {
            return 'А еще лучше дай нам вкусняшки';
        }

        if (sceneOptions['5'] && !sceneOptions['6']) {
            return 'Ну, хорошо-хорошо, держи свою третью карту!';
        }
    }, [scene, sceneOptions]);

    const scene4Type = useMemo(() => {
        if (scene !== 4) return;

        if (!sceneOptions['2']) {
            return 'default';
        }

        if (!sceneOptions['5']) {
            return 'smile';
        }

        if (!sceneOptions['6']) {
            return 'default';
        }

        if (!sceneOptions['7']) {
            return 'default';
        }

        return 'smile';
    }, [scene, sceneOptions]);

    const scene5Maya = useMemo(() => {
        if (scene !== 5) return;

        if (!sceneOptions['1']) {
            return 'У тебя осталась последняя карта с сокровищем';
        }

        if (sceneOptions['2'] && !sceneOptions['3']) {
            return 'Если бы ты знала, сколько по времени мы все это своими лапками делали';
        }

        if (sceneOptions['4'] && !sceneOptions['5']) {
            return 'Ну что? Отдадим ей последнюю карту?';
        }

        if (sceneOptions['6'] && !sceneOptions['7']) {
            return 'Господи, тебе лишь бы пожрать!';
        }

        if (sceneOptions['8'] && !sceneOptions['9']) {
            return 'Ну ладно, сейчас не об этом должна идти речь';
        }

        if (sceneOptions['11'] && !sceneOptions['12']) {
            return 'Теперь ты обладательница всех сокровищь нашей квартиры :)';
        }
    }, [scene, sceneOptions]);

    const scene5Lucya = useMemo(() => {
        if (scene !== 5) return;

        if (sceneOptions['1'] && !sceneOptions['2']) {
            return 'Аж как-то жаль, что все так быстро прошло';
        }

        if (sceneOptions['3'] && !sceneOptions['4']) {
            return 'Да, я аж потратила больше каллорий, чем обычно!';
        }

        if (sceneOptions['5'] && !sceneOptions['6']) {
            return 'Ну только если она нам взамен даст вкусняшку!';
        }

        if (sceneOptions['7'] && !sceneOptions['8']) {
            return 'Не вижу в этом ничего плохого :)';
        }

        if (sceneOptions['9'] && !sceneOptions['10']) {
            return 'Да, держи карту, с помощью которой ты найдешь свое последнее сокровище!';
        }

        if (sceneOptions['11'] && !sceneOptions['12']) {
            return 'Ураааааааа!';
        }
    }, [scene, sceneOptions]);

    const scene5Type = useMemo(() => {
        if (scene !== 5) return;

        if (!sceneOptions['5']) {
            return 'default';
        }

        if (!sceneOptions['7']) {
            return 'smile';
        }

        if (!sceneOptions['10']) {
            return 'default';
        }

        if (!sceneOptions['11']) {
            return 'thinking';
        }

        if (!sceneOptions['12']) {
            return 'smile';
        }
    }, [scene, sceneOptions]);

    const scene6Maya = useMemo(() => {
        if (scene !== 6) return;

        if (!sceneOptions['1']) {
            return 'Мы хотели бы еще раз поздравить тебя с Днем Рождения!';
        }

        if (sceneOptions['2'] && !sceneOptions['3']) {
            return 'А еще прикольная и смешная!';
        }

        if (sceneOptions['4'] && !sceneOptions['5']) {
            return 'Пусть в этот день сбываются все твои желания!';
        }

        if (sceneOptions['6'] && !sceneOptions['7']) {
            return 'Чтобы никогда и ничего не болело!';
        }

        if (sceneOptions['8'] && !sceneOptions['9']) {
            return 'С Днем Рождения!';
        }
    }, [scene, sceneOptions]);

    const scene6Lucya = useMemo(() => {
        if (scene !== 6) return;

        if (sceneOptions['1'] && !sceneOptions['2']) {
            return 'И напомнить, какая ты классная!';
        }

        if (sceneOptions['3'] && !sceneOptions['4']) {
            return 'Нежная и радостнаяя!';
        }

        if (sceneOptions['5'] && !sceneOptions['6']) {
            return 'А мы будем тебе помогать их воплощать!';
        }

        if (sceneOptions['7'] && !sceneOptions['8']) {
            return 'И деньги лились рекой!';
        }

        if (sceneOptions['8'] && !sceneOptions['9']) {
            return 'С Днем Рождения!';
        }
    }, [scene, sceneOptions]);

    return (
        <div className="desktop-feed">
            {scene === '0' && (
                <>
                    {(sceneOptions['0'] || sceneOptions['1'] || sceneOptions['2']) && (
                        <div className="desktop-feed-surprize">
                            <span>&#127881; Сюрприз! &#127873;</span>

                            <div className="desktop-feed-surprize-cake-wrapper">{sceneOptions['1'] && <span className="desktop-feed-surprize-cake">&#127874;</span>}</div>
                        </div>
                    )}
                </>
            )}

            {scene === 1 && (
                <div
                    className="desktop-feed-scene"
                    ref={containerRef}
                >
                    {(sceneOptions['0'] || sceneOptions['2'] || sceneOptions['4'] || sceneOptions['5']) && (
                        <Persona
                            text={scene1Maya}
                            side="right"
                            persona="maya"
                            type="no-pirat"
                        ></Persona>
                    )}

                    {(sceneOptions['1'] || sceneOptions['3'] || sceneOptions['4'] || sceneOptions['5']) && (
                        <Persona
                            text={scene1Lucya}
                            side="left"
                            persona="lucya"
                            type="no-pirat"
                        ></Persona>
                    )}

                    {(sceneOptions['3'] || sceneOptions['4'] || sceneOptions['5']) && (
                        <button
                            ref={refButton}
                            onClick={setSceneHandler}
                            className="btn"
                            style={{
                                position: 'relative',
                                top: '120px',
                                transition: 'transform 0.05s linear',
                            }}
                        >
                            Старт
                        </button>
                    )}
                </div>
            )}

            {scene === 2 && (
                <>
                    {(sceneOptions['0'] || sceneOptions['1'] || sceneOptions['2']) && (
                        <Persona
                            text={scene2Maya}
                            side="right"
                            persona="maya"
                            type={scene2Type}
                        ></Persona>
                    )}

                    {(sceneOptions['0'] || sceneOptions['1'] || sceneOptions['2']) && (
                        <Persona
                            text={scene2Lucya}
                            side="left"
                            persona="lucya"
                            type={scene2Type}
                        ></Persona>
                    )}

                    {(sceneOptions['1'] || sceneOptions['2']) && (
                        <Map count={1}></Map>
                    )}
                </>
            )}

            {scene === 3 && (
                <>
                    {(sceneOptions['0'] || sceneOptions['1'] || sceneOptions['2']) && (
                        <Persona
                            text={scene3Maya}
                            side="right"
                            persona="maya"
                            type={scene3Type}
                        ></Persona>
                    )}

                    {(sceneOptions['0'] || sceneOptions['1'] || sceneOptions['2']) && (
                        <Persona
                            text={scene3Lucya}
                            side="left"
                            persona="lucya"
                            type={scene3Type}
                        ></Persona>
                    )}

                    {(sceneOptions['1'] || sceneOptions['2']) && (
                        <Map count={3}></Map>
                    )}
                </>
            )}

            {scene === 4 && (
                <>
                    {(sceneOptions['0'] || sceneOptions['1'] || sceneOptions['2']) && (
                        <Persona
                            text={scene4Maya}
                            side="right"
                            persona="maya"
                            type={scene4Type}
                        ></Persona>
                    )}

                    {(sceneOptions['0'] || sceneOptions['1'] || sceneOptions['2']) && (
                        <Persona
                            text={scene4Lucya}
                            side="left"
                            persona="lucya"
                            type={scene4Type}
                        ></Persona>
                    )}

                    {sceneOptions['6'] && (
                        <Map count={2}></Map>
                    )}
                </>
            )}

            {scene === 5 && (
                <>
                    {(sceneOptions['0'] || sceneOptions['1'] || sceneOptions['2']) && (
                        <Persona
                            text={scene5Maya}
                            side="right"
                            persona="maya"
                            type={scene5Type}
                        ></Persona>
                    )}

                    {(sceneOptions['0'] || sceneOptions['1'] || sceneOptions['2']) && (
                        <Persona
                            text={scene5Lucya}
                            side="left"
                            persona="lucya"
                            type={scene5Type}
                        ></Persona>
                    )}

                    {sceneOptions['9'] && (
                        <Map count={4}></Map>
                    )}
                </>
            )}

            {scene === 6 && (
                <>
                    {sceneOptions['0'] && (
                        <Persona
                            text={scene6Maya}
                            side="right"
                            persona="maya"
                            type="no-pirat"
                        ></Persona>
                    )}

                    {sceneOptions['0'] && (
                        <Persona
                            text={scene6Lucya}
                            side="left"
                            persona="lucya"
                            type="no-pirat"
                        ></Persona>
                    )}
                </>
            )}
        </div>
    );
}

export default DesktopFeed;