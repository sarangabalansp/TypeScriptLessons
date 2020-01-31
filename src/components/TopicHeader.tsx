import React, { Children } from 'react';
import { View, Text } from 'react-native';

type Props = {
    headerTitle?: any, topic?: any
}

class TopicHeader extends React.Component<Props> {

    render() {
        const { headerTitle, topic } = this.props

        return (
            <View style={{ height: 80 }}>
                <View style={{ height: 50, backgroundColor: "#3498DB" }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, lineHeight: 50, color: "white", fontWeight: '700' }}>
                        {headerTitle}
                    </Text>
                </View>
                <View style={{ height: 30, backgroundColor: "#D6EAF8" }}>
                    <Text style={{ marginLeft: 15, fontSize: 20, lineHeight: 30, fontWeight: '600' }}>{topic}</Text>
                </View>

            </View>
        )
    }
}

export default TopicHeader