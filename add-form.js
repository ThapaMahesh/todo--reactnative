import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {
        Button,
        Content,
        Input,
        Body,
        Right,
        Left
    } from  'native-base';

class AddForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            item: ""
        }
    }

    addItem = () => {
        this.props.addItemToList(this.state.item);
        this.setState({item: ""});
    }

    render(){
        return (
            <View style={styles.addForm}>
                <Input style={styles.addNew} placeholder="Add new item" onChangeText={(value) => this.setState({item: value})} value={this.state.item} />
                <Button onPress={this.addItem} style={styles.addButton}>
                    <Text>Add</Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addForm: {
        flexDirection: "row",
        padding: 5
    },
    addNew: {
        borderStyle: "dotted",
        borderBottomWidth: 1
    },
    addButton: {
        alignContent: "center",
        padding: 15,
        marginLeft: 15
    }
});

export default AddForm;