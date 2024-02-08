export const DrawRandomLines = () => {
    for (var i = 0; i < 5; ++i) {
        const svgId = createSVGWithGradient()
        animatePath(svgId)
    }
}


type SVGAttributePair = [string, string];

const createSVGElement = (tag: string, attributePairs: SVGAttributePair[]): SVGElement => {
    const element: SVGElement = document.createElementNS('http://www.w3.org/2000/svg', tag);
    attributePairs.map(([key, value]) => element.setAttribute(key, value));
    return element;
}

function createSVGWithGradient() {
    const svgId = 'svg-' + Math.floor(Math.random() * 100).toFixed(0);

    const svgElementAttributes: SVGAttributePair[] = [
        ['id', svgId],
        ['class', 'z-0 absolute h-full w-full overflow-visible']
    ];

    const svgElement = createSVGElement('svg', svgElementAttributes);

    const linearGradientAttributes: SVGAttributePair[] = [
        ['id', `gradient-${svgId}`],
        ['x1', '0%'],
        ['y1', '0%'],
        ['x2', '100%'],
        ['y2', '0%']
    ];
    const linearGradient = createSVGElement('linearGradient', linearGradientAttributes);

    const stopsData: { offset: string; color: string }[] = [
        { offset: '0%', color: getRandomOrange() },
        { offset: '100%', color: getRandomOrange() }
    ];

    const stops = stopsData.map(stopData => {
        return createSVGElement('stop', [
            ['offset', stopData.offset],
            ['stop-color', stopData.color],
            ['stop-opacity', '1']
        ]);
    });

    stops.forEach(stop => linearGradient.appendChild(stop));

    const pathElementAttributes: SVGAttributePair[] = [
        ['id', `path-${svgId}`],
        ['fill', 'none'],
        ['stroke', 'url(#gradient-' + svgId + ')'],
        ['stroke-width', '4']
    ];
    const pathElement = createSVGElement('path', pathElementAttributes);

    svgElement.appendChild(linearGradient);
    svgElement.appendChild(pathElement);

    const div = document.querySelector(".drawable");

    if (div)
        div.appendChild(svgElement);

    return svgId;
}

function getRandomOrange() {
    const randomOranges = [
        "#FF9800", "#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D",
        "#FFA726", "#FF9800", "#FB8C00", "#F57C00", "#EF6C00",
        "#E65100", "#FFD180", "#FFAB40", "#FF9100", "#FF6D00",
        "#5D4037", "#4E342E", "#3E2723"
    ]
    return randomOranges[Math.floor(Math.random() * randomOranges.length)]
}

function animatePath(svgId: string) {
    const path = document.querySelector(`#path-${svgId}`) as SVGPathElement

    const bottomThird = window.innerHeight - window.innerHeight / (Math.floor(Math.random() * 3) + 2)
    console.log(bottomThird)
    const screenWidth = window.innerWidth
    let d = `M0,${bottomThird}`

    const moves = Math.floor(Math.random() * 8) + 3; // Random number of moves between 3 and 10
    const stepX = screenWidth / moves
    const minYStep = window.innerHeight / 10
    const maxYStep = window.innerHeight / 3

    for (let i = 0; i < moves; ++i) {
        let newX = (i + 1) * stepX
        let newY = Math.min(maxYStep, Math.max(minYStep, Math.random() * (maxYStep - minYStep) + minYStep))
        d += ` h${newX}`
        d += ` v${i % 2 === 0 ? newY : -newY}`
    }

    path.setAttribute("d", d)

    const pathLength = path.getTotalLength()
    path.style.strokeDasharray = pathLength.toString()
    path.style.strokeDashoffset = pathLength.toString()

    const transitionTime = (Math.random() * (1.5 - 0.5) + 0.5)
    setTimeout(() => {
        path.style.transition = `stroke-dashoffset ${5 - transitionTime}s ease-out`
        path.style.strokeDashoffset = '0'
    }, transitionTime * 1000)
}
