import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {
    Body,
    CheckBox,
    Icon,
    Right
} from  'native-base';

class ItemList extends Component {

    constructor(props){
        super(props);
    }

    removeItem = (id) => {
        this.props.removeItem(Number(id));
    }

    changeStatus = (id) => {
        this.props.changeStatus(Number(id));
    }

    render() {
        const title = this.props.item.title;
        const id = this.props.item.id;
        const status = this.props.item.isDone;

        return (
            <View style={styles.listrow}>
                <CheckBox checked={status} onPress={() => this.changeStatus(id)} /> 
                <Body style={styles.task} onPress={() => this.changeStatus(id)}>
                    <Text style={ status ? styles.taskDone : "" }>{title}</Text>
                </Body>
                <Right>
                    <Icon style={styles.icons} onPress={() => this.removeItem(id)} name='trash' />
                </ Right>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    listrow: {
        flexDirection: "row",
        padding: 5,
        borderBottomWidth: 1
    },
    icons: {
        color: '#000'
    },
    task: {
        left: 20,
        alignSelf: "auto",
        alignItems: "flex-start"
    },
    taskDone: {
        textDecorationLine: "line-through"
    }
});

export default ItemList;