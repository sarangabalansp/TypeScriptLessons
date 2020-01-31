"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
class TopicHeader extends react_1.default.Component {
    render() {
        const { headerTitle, topic } = this.props;
        return (<react_native_1.View style={{ height: 80 }}>
                <react_native_1.View style={{ height: 50, backgroundColor: "#3498DB" }}>
                    <react_native_1.Text style={{ textAlign: 'center', fontSize: 20, lineHeight: 50, color: "white", fontWeight: '700' }}>
                        {headerTitle}
                    </react_native_1.Text>
                </react_native_1.View>
                <react_native_1.View style={{ height: 30, backgroundColor: "#D6EAF8" }}>
                    <react_native_1.Text style={{ marginLeft: 15, fontSize: 20, lineHeight: 30, fontWeight: '600' }}>{topic}</react_native_1.Text>
                </react_native_1.View>

            </react_native_1.View>);
    }
}
exports.default = TopicHeader;
