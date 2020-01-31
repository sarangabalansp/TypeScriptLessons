"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
class BooleanType extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCompleted: false,
        };
    }
    render() {
        return (<react_native_1.View style={{ margin: 15 }}>
                <react_native_1.Text style={{ lineHeight: 30, fontSize: 16 }}>boolean</react_native_1.Text>
                <react_native_1.View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <react_native_1.Text style={{ lineHeight: 30, fontSize: 18, marginRight: 10 }}>Work Completed?</react_native_1.Text>
                    <react_native_1.Switch value={this.state.isCompleted} onValueChange={(value) => { this.setState({ isCompleted: value }); }}/>
                </react_native_1.View>
                <react_native_1.Text style={{ textAlign: 'center', lineHeight: 40, fontSize: 18, color: "#339aef" }}>{`isCompleted = ${this.state.isCompleted}`}</react_native_1.Text>
            </react_native_1.View>);
    }
}
exports.default = BooleanType;
