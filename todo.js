import React, {Component} from 'react';
import { StyleSheet, StatusBar, FlatList, AsyncStorage, RefreshControl, ScrollView, Platform} from 'react-native';
import {Container,
        Header,
        Title,
        Content,
        Body,
        Toast
    } from  'native-base';


import AddForm from './add-form';
import ItemList from './item-list';

class Todo extends Component{

    constructor(props){
        super(props);

        this.state = {
            itemList: [],
            currentIndex: 0,
            refreshing: false
        }
        this.list = [];
        this._retrieveData();
    }

    _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('Tasks');
          if (value !== null) {
            // We have data!!
            let oldStateData = JSON.parse(value);
            this.setState({
                itemList: oldStateData.itemList,
                currentIndex: oldStateData.currentIndex,
                refreshing: false
            });

            this.list = oldStateData.itemList;
          }
        } catch (error) {
          // Error retrieving data
        }
    };

    _storeData = async () => {
        try {
          await AsyncStorage.setItem('Tasks', JSON.stringify(this.state));
        } catch (error) {
          // Error saving data
        }
    };

    addItemToList = (item) => {
        if(item.trim() != ""){
            let newItem = {id: (this.state.currentIndex + 1), title: item.trim(), isDone: false};
            this.list.push(newItem);
            this.setState(
                { itemList: this.list, currentIndex: this.state.currentIndex + 1 },
                this._storeData
            );
        }
    }

    removeItem = (id) => {
        let index = this.list.findIndex(x => x.id === id);
		if(index > -1){
			this.list.splice(index, 1);
	    	this.setState(
                {itemList: this.list},
                this._storeData
            );
	    }
    }

    changeStatus = (id) => {
		let index = this.list.findIndex(x => x.id === id);

		if(index > -1){
			this.list[index].isDone = !this.list[index].isDone;

		    this.setState(
                {itemList: this.list},
                this._storeData
            );
		}
    }
    
    onRefresh = () => {
        //Clear old data of the list
        this.setState({
            itemList: [],
            refreshing: true
        },
        //Call the Service to get the latest data
        this._retrieveData
        );
      }

    render(){
        return (
            <Container style={styles.mainContainer} >
                {/* <StatusBar hidden /> */}
                <Header style={styles.header}>
                    <Body>
                        <Title>Todo</Title>
                    </Body>
                </Header>
                <Content style={styles.mainContainer}>
                    <ScrollView refreshControl={
                                            <RefreshControl
                                            //refresh control used for the Pull to Refresh
                                            refreshing={this.state.refreshing}
                                            onRefresh={this.onRefresh}
                                            />
                    }>
                        <AddForm addItemToList={this.addItemToList} />

                        <FlatList
                            data={this.state.itemList}
                            renderItem={({item}) => <ItemList changeStatus={this.changeStatus} removeItem={this.removeItem} item={item} />}
                            keyExtractor={item => ""+item.id}
                            extraData={this.state}
                        />
                    </ScrollView>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
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