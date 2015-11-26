'use strict';
var Share = {};
var React = require('react-native');
var isNative = !window.location;
/**
 * 判断是web的时候，重新赋值React
 */
if (window.React) {
    React = window.React;
}
Share.React = React;

/**
 * 做底层的兼容,具体实现会对props做各种兼容处理
 */
if (!isNative) {

    Share.View = React.createClass({
        render: function() {
            return <div {...this.props}/>
        }
    });

    Share.P = React.createClass({
        render: function() {
            return <p {...this.props}/>
        }
    });

    Share.Span = React.createClass({
        render: function() {
            return <span {...this.props}/>
        }
    });
} else {
    // alert('isNative')
    Share.View = React.View;
    Share.P = React.Text;
    Share.Span = React.Text;
    Share.Text = React.Text;
}

module.exports = Share;
