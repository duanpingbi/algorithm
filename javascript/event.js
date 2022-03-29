class EventEmetitter {
    constructor() {
        this._events = this._events || new Map();
        this._maxListener = this._maxListener || 10;
    }
}

    EventEmetitter.prototype.addListener = function(type , fn) {
    let hander = this._events.get (type );
        if(!hander){
            this._events.set(type, fn);
        } else if(hander && typeof hander === 'function') {
            this._events.set(type, [hander, fn]);
        } else {
            if(hander.length >= this._maxListener) {
                throw new Error(`监听事件不能超过${this._maxListener}`);
            } else {
                hander.push(fn);
            }
        }
    }

    EventEmetitter.prototype.removeListener = function(type, fn ) {
        let hander = this._events.get(type);
        if(Array.isArray(hander)) {
            let fns = hander.filter(f=>f !== fn);
            this._events.set(type, fns);
        } else {
            this._events.delete(type, fn);
        }

}

    EventEmetitter.prototype.emit = function(type , ...args) {
        let hander = this._events.get(type);
        if(Array.isArray(hander)) {
            for(let i=0;i<hander.length;i++) {
                hander[i].call(this, ...args);
            }
        } else {
            hander.call(this, ...args);
        } 
}

let e = new EventEmetitter();
function test1() {
    console.log('test1');
}
function test2() {
    console.log('test2');
}
e.addListener('test',test1);
e.addListener('test', test2);
e.removeListener('test', test2);
e.emit('test');

