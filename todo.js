import React, {Component} from 'react';
import { StyleSheet, Text, FlatList} from 'react-native';
import {Container,
        Header,
        Title,
        Content,
        Button,
        Body,
        CheckBox,
        List,
        ListItem,
        Input,
        Icon,
        Right,
        Left
    } from  'native-base';


import AddForm from './add-form';
import ItemList from './item-list';

class Todo extends Component{

    constructor(props){
        super(props);

        this.state = {
            itemList: [],
            currentIndex: 0
        }
        this.list = [];

    }

    addItemToList = (item) => {
        if(item.trim() != ""){
            let newItem = {id: ""+(this.state.currentIndex + 1), title: item.trim(), isDone: false};
            this.list.push(newItem);
            this.setState({ itemList: this.list, currentIndex: this.state.currentIndex + 1 });
        }
    }

    removeItem = (id) => {
        let index = this.list.findIndex(x => x.id === id);

		if(index > -1){
			this.list.splice(index, 1);
	    	this.setState({itemList: this.list});
	    }
    }

    changeStatus = (id) => {
		let index = this.list.findIndex(x => x.id === id);

		if(index > -1){
			this.list[index].isDone = !this.list[index].isDone;

		    this.setState({itemList: this.list});  
		}
	}

    render(){
        return (
            <Container style={styles.mainContainer}>
                <Header>
                    <Body>
                        <Title>Todo</Title>
                    </Body>
                </Header>
                <Content>
                    <AddForm addItemToList={this.addItemToList} />

                    <FlatList
                        data={this.state.itemList}
                        renderItem={({item}) => <ItemList changeStatus={this.changeStatus} removeItem={this.removeItem} item={item} />}
                        keyExtractor={item => item.id}
                        extraData={this.state}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%'
    },
    icons: {
        color: '#000'
    },
    addNew: {
        borderStyle: "dotted",
        borderBottomWidth: 1
    },
    addButton: {
        alignContent: "center",
        padding: 15
    }
  });
  

export default Todo;