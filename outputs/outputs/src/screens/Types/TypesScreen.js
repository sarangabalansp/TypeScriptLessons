"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TopicHeader_1 = __importDefault(require("../../components/TopicHeader"));
class TypesScreen extends react_1.default.Component {
    render() {
        return (<react_native_1.View style={{ marginTop: 100, flex: 1 }}>
                <TopicHeader_1.default headerTitle="Variables + Arrays + Tuples" topic="Types"/>

                <react_native_1.Text style={{ marginTop: 100, marginHorizontal: 50, textAlign: 'center', fontSize: 20 }}>Types</react_native_1.Text>
                <react_native_1.Button title="11" onPress={() => {
            console.log("Types");
        }}/>
            </react_native_1.View>);
    }
}
exports.default = TypesScreen;
