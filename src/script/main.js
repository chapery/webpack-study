import '../style/common.css';
import '../style/b.scss';

import layer from '../components/layer/layer.js';
import footer from '../components/footer/footer.js';

window.onload = function() {
    document.querySelector('#layer').innerHTML = layer;
    document.querySelector('#footer').innerHTML = footer({
        name: 'footer',
        content: 'this is the footer content'
    });
};

const a = 'hello world';

export default a;