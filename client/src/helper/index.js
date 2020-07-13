export const cleanWineName = (wine, appellation) => {
    const newStr = wine.repeat(1);
    const strArr = newStr
        .replace(`, ${appellation}`, '')
        .replace(', Blanc', '')
        .split(', ');
    return {
        company: strArr[0],
        wineName: strArr[1] || appellation,
        otherName: strArr[2] ? `'${strArr[2]}'` : '',
    };
};
