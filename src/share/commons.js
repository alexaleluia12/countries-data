const MODE = 'DEV'; // DEV/PRD

function log(...data) {
    if (MODE === 'PRD') return;
    console.log(...data)
}
const appUtl = {
    log,
}

export default appUtl;