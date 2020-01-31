"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TopicHeader_1 = __importDefault(require("./TopicHeader"));
class Container extends react_1.default.Component {
    render() {
        const { children, headerTitle, topic, onNextPressed } = this.props;
        return (<react_native_1.SafeAreaView>
                <TopicHeader_1.default headerTitle={headerTitle} topic={topic}/>

                {children}

                <react_native_1.View style={{ alignSelf: 'flex-end', justifyContent: 'flex-end' }}>
                    <react_native_1.Button title='Next' onPress={onNextPressed}/>
                </react_native_1.View>
            </react_native_1.SafeAreaView>);
    }
}
exports.default = Container;
