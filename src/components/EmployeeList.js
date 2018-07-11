import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import _ from 'lodash';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeeFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employee }) {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
    
      this.dataSource = ds.cloneWithRows(employee);
    }

    render() {
        return (
            <View>
                <Text> EmployeeList </Text>
                <Text> EmployeeList </Text>
                <Text> EmployeeList </Text>
                <Text> EmployeeList </Text>
                <Text> EmployeeList </Text>
            </View>
        );
    }
}
const mapStateToProps = state => {
    const employee = _.map(state.employee, (val, uid) => {
      return { ...val, uid };
    });
  
    return { employee };
  };

  //export default EmployeeList;
export default connect(mapStateToProps, { employeeFetch })(EmployeeList); 
