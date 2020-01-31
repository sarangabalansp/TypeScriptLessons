import React from 'react'
import { View, ActivityIndicator, Text } from 'react-native'

type Props = {
    navigation: any,
}

class SplashScreen extends React.Component<Props>{

    timeOutHandle = 0

    componentDidMount() {
        this.timeOutHandle = setTimeout(() => {
            this.props.navigation.navigate('Types')
        }, 1000)
    }

    componentWillUnmount() {
        clearTimeout(this.timeOutHandle)
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View>
                    <Text style={{ marginHorizontal: 50, textAlign: 'center', fontSize: 30, marginBottom: 10 }}>Type Script with React Native</Text>
                    <Text style={{ marginHorizontal: 50, textAlign: 'center', fontSize: 20, marginBottom: 10 }}>Learning Space</Text>
                    <ActivityIndicator color="#339aef" size='large' />
                </View>
            </View>
        )
    }
}

export default SplashScreen