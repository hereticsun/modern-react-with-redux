import psdom from 'jsdom';
imporrt jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

function renderComponent(ComponentClass) {
    const componentInstance = TestUtils.renderIntoDocument(<ComponentClass />);

    return $(ReactDOM.findDOMNode(componentInstance));
}