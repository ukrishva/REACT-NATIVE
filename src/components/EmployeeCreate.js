import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate,  employeeBack } from '../actions';
import EmployeeForm from './EmployeeForm';
class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }
    componentWillMount() {
        this.props.employeeBack();
        console.log("Try to remove item from form");
    }
    render() {
        return (
           <Card>
              <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
           </Card>
        );
    }
}
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

 
export default connect( mapStateToProps, { employeeUpdate, employeeCreate, employeeBack } ) (EmployeeCreate);
