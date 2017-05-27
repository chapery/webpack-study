import '../style/common.css';
import '../style/b.scss';

import layer from '../components/layer/layer.js';

window.onload = function() {
    document.querySelector('#layer').innerHTML = layer;
};

const a = 'hello world';

export default a;