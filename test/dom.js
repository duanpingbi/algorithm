/**
 * 将js对象虚拟dom转换为真实的dom
 */

const vnode = {
    tag: 'DIV',
    attrs: {
        id: 'app',
    },
    children: [
        {
            tag: 'SPAN',
            children: [{
                tag: 'A',
                children: [],
            }],
        },
        {
            tag: 'SPAN',
            children: [{
                tag: 'A',
                children: [],
            }],
        },
    ],
};

function render(vnode) {
    if(typeof vnode === 'number') {
        vnode = String(vnode);
    }

    if(typeof vnode === 'string') {
        return document.createTextNode(vnode);
    }

    const element = document.createElement(vnode.tag);
    if(vnode.attrs) {
        Object.keys(vnode.attrs).forEach(key => {
            element.setAttribute(key, vnode.attrs[key]);
        })
    }
    if(vnode.children && vnode.children.length > 0) {
        vnode.children.forEach(child => {
            element.appendChild(render(child));
        });
    }
}