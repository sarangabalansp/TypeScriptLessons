import React from 'react';
import { SafeAreaView, View, Button } from 'react-native';
import TopicHeader from './TopicHeader';

type Props = {
    children?: any,
    headerTitle?: any,
    topic?: any,
    onNextPressed?: any,
}

class Container extends React.Component<Props> {

    render() {
        const { children, headerTitle, topic, onNextPressed } = this.props
        return (
            <SafeAreaView>
                <TopicHeader
                    headerTitle={headerTitle}
                    topic={topic}
                />

                {children}

                <View style={{ alignSelf: 'flex-end', justifyContent: 'flex-end' }}>
                    <Button title='Next' onPress={onNextPressed} />
                </View>
            </SafeAreaView>
        )
    }
}

export default Container;