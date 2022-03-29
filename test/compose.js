let middleware = [];
middleware.push((next) => {
    console.log(1);
    next();
    console.log(1.1);
});
middleware.push((next) => {
    console.log(2);
    next();
    console.log(2.1);
});
middleware.push((next) => {
    console.log(3);
    next();
    console.log(3.1);
});

let fn = compose(middleware);
fn();

function compose(middleware) {
    const copyMiddleware = [...middleware];
    let index = 0;
    const fn = () => {
        if(index >= copyMiddleware.length) {
            return;
        }
        const curMiddleware = copyMiddleware[index];
        index++;
        return curMiddleware(fn);
    }

    return fn;
}