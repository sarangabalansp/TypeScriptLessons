"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Container_1 = __importDefault(require("../../components/Container"));
const BooleanType_1 = __importDefault(require("../../screens/Types/BooleanType"));
const Expandable_1 = __importDefault(require("../../components/Expandable"));
class TypesScreen extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.basicTypes = [
            "Boolean",
            "Number",
            "String"
        ];
        this.basicTypesList = this.basicTypes.map((item, index) => {
            return (<react_native_1.Button title={item} onPress={() => { this.typeSelected(index); }}/>);
        });
        this.typeSelected = (index) => {
            console.log(index);
        };
        this.nextScreenPressed = () => {
            this.props.navigation.navigate('Interfaces');
        };
    }
    render() {
        return (<Container_1.default headerTitle="Variables + Arrays + Tuples" topic="Types" onNextPressed={this.nextScreenPressed}>

                

                

                <Expandable_1.default title="Boolean" expandAtLoad={false}>
                    <BooleanType_1.default />
                </Expandable_1.default>

                <Expandable_1.default title="Number" expandAtLoad={false}>
                    <BooleanType_1.default />
                </Expandable_1.default>


                

            </Container_1.default>);
    }
}
exports.default = TypesScreen;
