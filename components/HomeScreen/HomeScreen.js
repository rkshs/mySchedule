import React from "react";
import {connect} from 'react-redux';
import { StyleSheet, ListView  } from 'react-native';
import {Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, List, ListItem, SwipeRow} from "native-base";

import { addNewRecord } from '../../redux/actions/homeScreenActions';

class HomeScreenComponent extends React.Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            basic: true
        };
    }
    deleteRow(secId, rowId, rowMap) {
        // rowMap[`${secId}${rowId}`].props.closeRow();
        // const newData = [...this.state.listViewData];
        // newData.splice(rowId, 1);
        // this.setState({ listViewData: newData });
    }
    render() {
        const {navigation, addNewRecord, records} = this.props;
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });


        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => navigation.navigate("DrawerOpen")}>
                            <Icon name="menu"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>HomeScreen</Title>
                    </Body>
                    <Right>
                        <Button iconRight transparent
                                onPress={() => addNewRecord()}
                        >
                            <Icon name='add' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List>
                        {records.length > 0 ? records.map(record => (
                                <SwipeRow
                                    key={record.name}
                                    disableRightSwipe
                                    rightOpenValue={-75}
                                    body={
                                        <Text style={styles.swipeText}>{record.name}</Text>
                                    }
                                    right={
                                        <Button danger onPress={() => alert('Trash')}>
                                            <Icon active name="trash" />
                                        </Button>
                                    }
                                    style={styles.listRow}
                                />
                        )) : null}
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 90,
        alignItems: 'flex-start'
    },
    swipeText: {
        marginLeft: 10,
    },
    listRow: {
        width: '100%',
    }
});

export const HomeScreen = connect(
    state => ({
        records: state.homeScreen.records
    }),
    {
        addNewRecord
    }
)(HomeScreenComponent);
