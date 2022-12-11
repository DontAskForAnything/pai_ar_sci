let dupa = (() => {
    const logger = () => {
        console.log("dupa xD");
    }

    return {
        log: () => {
            logger();
        },
    };
})();

export {dupa};