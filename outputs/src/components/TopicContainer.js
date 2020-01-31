"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
class TopicContainer extends react_1.default.Component {
    render() {
        const { headerTitle, topic } = this.props;
        return (<react_native_1.View style={{
            flex: 1
        }}>
                <react_native_1.View style={{ height: 40, backgroundColor: "#ffffff" }}>
                    <react_native_1.Text>{headerTitle}</react_native_1.Text>
                </react_native_1.View>

                <react_native_1.Text>{topic}</react_native_1.Text>

            </react_native_1.View>);
    }
}
exports.default = TopicContainer;
