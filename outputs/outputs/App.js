"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_navigation_1 = require("react-navigation");
const react_navigation_stack_1 = require("react-navigation-stack");
const SplashScreen_1 = __importDefault(require("./src/screens/Splash/SplashScreen"));
const TypesScreen_1 = __importDefault(require("./src/screens/Types/TypesScreen"));
const StandardStack = react_navigation_stack_1.createStackNavigator({
    Types: TypesScreen_1.default,
}, {
    headerMode: 'none'
});
const SwitchNavigator = react_navigation_1.createSwitchNavigator({
    Splash: SplashScreen_1.default,
    StandardStack: StandardStack,
}, {
    initialRouteName: 'Splash',
});
const AppContainer = react_navigation_1.createAppContainer(SwitchNavigator);
class App extends react_1.default.Component {
    render() {
        return (<AppContainer />);
    }
}
exports.default = App;
;
