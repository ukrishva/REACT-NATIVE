import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';


const RouterComponent = () => {

    return (
        <Router >
            <Scene key="root" hideNavBar={true}>
                <Scene key="auth"  initial={true}>
                    <Scene titleStyle={{textAlign: 'center', flex: 1 }} 
                        key="login" component={LoginForm} title="Login"  />
                </Scene>
                <Scene key="main" >

                    <Scene initial={true}
                        titleStyle={{textAlign: 'center', flex: 1 }} 
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employee List"  
                        onRight={() => Actions.employeeCreate()} 
                        rightTitle="Add"
                        rightTitleStyle={{ paddingLeft:20, color: '#bdc6cf'}}
                        rightButtonStyle={{ right: 0 }}
                        left={()=>null}
                    />
                        
                    <Scene  titleStyle={{textAlign: 'center', flex: 1 }}  
                            key="employeeCreate" 
                            component={EmployeeCreate} 
                            title="Create Employee" />
                 </Scene>
            </Scene>
        </Router>);

  
};

export default RouterComponent;
