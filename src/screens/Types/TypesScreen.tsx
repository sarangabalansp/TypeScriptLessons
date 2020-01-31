import React from 'react'
import { View, Text, Button } from 'react-native'
import Container from '../../components/Container'
import BooleanType from '../../screens/Types/BooleanType'
import Expandable from '../../components/Expandable'

type Props = {
    navigation: any,
}

class TypesScreen extends React.Component<Props> {

    basicTypes = [
        "Boolean",
        "Number",
        "String"
    ]

    basicTypesList = this.basicTypes.map((item, index: number) => {
        return (
            <Button title={item} onPress={() => { this.typeSelected(index) }} />
        )
    })

    typeSelected = (index: number) => {
        console.log(index)
    }

    nextScreenPressed = () => {
        this.props.navigation.navigate('Interfaces')
    }

    render() {
        return (
            <Container
                headerTitle="Variables + Arrays + Tuples"
                topic="Types"
                onNextPressed={this.nextScreenPressed}>

                {/* <Text style={{ marginTop: 100, marginHorizontal: 50, textAlign: 'center', fontSize: 20 }}>Types</Text> */}

                {/* <View style={{ margin: 15 }}>
                    {this.basicTypesList}
                </View> */}

                <Expandable title="Boolean" expandAtLoad={false}>
                    <BooleanType />
                </Expandable>

                <Expandable title="Number" expandAtLoad={false}>
                    <BooleanType />
                </Expandable>


                {/* <Button title="11" onPress={() => {
                    console.log("Types")
                }} /> */}

            </Container>
        )
    }
}

export default TypesScreen