import React from 'react'
import { View, Text, Switch } from 'react-native'

type State = {
    isCompleted: boolean,
}

type Props = {

}

class BooleanType extends React.Component<Props, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            isCompleted: false,
        }
    }

    render() {
        return (
            <View style={{ margin: 15 }}>
                <Text style={{ lineHeight: 30, fontSize: 16 }}>boolean</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ lineHeight: 30, fontSize: 18, marginRight: 10 }} >Is assigned work completed?</Text>
                    <Switch value={this.state.isCompleted} onValueChange={(value) => { this.setState({ isCompleted: value }) }} />
                </View>
                <Text style={{ textAlign: 'center', lineHeight: 40, fontSize: 18, color: "#339aef" }}>{`isCompleted = ${this.state.isCompleted}`}</Text>
            </View>
        )
    }
}

export default BooleanType