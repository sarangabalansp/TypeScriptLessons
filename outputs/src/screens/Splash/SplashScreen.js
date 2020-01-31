"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
class SplashScreen extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.timeOutHandle = 0;
    }
    componentDidMount() {
        this.timeOutHandle = setTimeout(() => {
            this.props.navigation.navigate('Types');
        }, 1000);
    }
    componentWillUnmount() {
        clearTimeout(this.timeOutHandle);
    }
    render() {
        return (<react_native_1.View style={{ flex: 1, justifyContent: 'center' }}>
                <react_native_1.View>
                    <react_native_1.Text style={{ marginHorizontal: 50, textAlign: 'center', fontSize: 25, marginBottom: 10 }}>Learning Space</react_native_1.Text>
                    <react_native_1.ActivityIndicator color="#339aef" size='large'/>
                </react_native_1.View>
            </react_native_1.View>);
    }
}
exports.default = SplashScreen;
