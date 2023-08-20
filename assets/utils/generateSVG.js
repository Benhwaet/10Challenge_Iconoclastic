
const generateSVG = (answers) => {
    const { characters, textColour, shape, color } = answers;
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <style>
        .small { font: italic 13px sans-serif; }
        .heavy { font: bold 30px sans-serif; }
    </style>
    <text x="10" y="20" class="small"></text>
    <text x="10" y="40" class="heavy">${characters[0]}</text>
    <text x="10" y="60" class="heavy">${characters[1]}</text>
    <text x="10" y="80" class="heavy">${characters[2]}</text>
    <text x="10" y="100" class="small" fill="${textColour}"></text>
    <rect height="100" width="100" y="10" x="300" fill="${color}" />
    </svg>
    `;
}

module.exports = generateSVG;