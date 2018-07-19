import React, {Component} from 'react';

class App extends Component {

    state = {
        employeeInfo: {}
    };

    handleClick = (e) => {

        const {employees} = this.props;
        const newEmployeeInfo = employees.find((data) => data.userId === e.currentTarget.dataset.userId);

        this.setState({
            employeeInfo: newEmployeeInfo
        })
    };

    render() {

        const {employees} = this.props;
        const {employeeInfo} = this.state;

        return (
            <div>
                <ol style={{float: 'left', width: '30%'}}>
                    {employees.map((employee) => (
                        <li
                            onClick={this.handleClick}
                            style={{margin: '10px', fontSize: '20px', cursor: 'pointer'}}
                            key={employee.userId}
                            data-user-id={employee.userId}
                        >
                            {employee.firstName + ' ' + employee.lastName}
                        </li>
                    ))}
                </ol>
                {employeeInfo.userId ?
                    <ul style={{float: 'left'}}>
                        <li>First Name: <b>{employeeInfo.firstName}</b></li>
                        <li>Last Name: <b>{employeeInfo.lastName}</b></li>
                        <li>Region: <b>{employeeInfo.region}</b></li>
                        <li>Phone Number: <b>{employeeInfo.phoneNumber}</b></li>
                        <li>Email Address: <b>{employeeInfo.emailAddress}</b></li>
                        <li>Job Title Name: <b>{employeeInfo.jobTitleName}</b></li>
                        <li>Preferred Full Name: <b>{employeeInfo.preferredFullName}</b></li>
                        <li>Employee Code: <b>{employeeInfo.employeeCode}</b></li>
                    </ul>
                    : ''}
            </div>
        );
    }
}

export default App;
