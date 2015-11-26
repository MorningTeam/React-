// 依赖的公共库，通过它获取兼容的组件
'use strict';

var Share = require('./shared');
// styles是style.css build过后生成的style.js
//var nativeCSS = require('native-css');
//var cssObject = nativeCSS.convert('./styles.css');

//toStyleJs(cssObject, './styles.js');
//buildWebReact();
var styles = require('./styles');

var React = Share.React;
var {
    View,
    P,
    Span
    } = Share;

var Compo = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to spicy!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
});


module.exports = Compo;