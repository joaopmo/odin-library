import "./styles/index.scss"

const anime = {
    beach: 'yes',
    termas: 'yes',
    horror: 'no',
    schoolGirls: 'yes'
}

const isekai = {
    ...anime,
    op: 'yes',
    timeShit: 'no',
    schoolGirls: 'maybe'
}

console.log(anime);
console.log(isekai);