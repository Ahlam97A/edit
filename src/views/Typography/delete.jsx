/*
import React, { Component } from 'react';



class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    
    onClick() {
        var email = this.props.email;
        this.props.deleteRow(this.props.index);
        $.ajax({
            data: { email_address: email },
            url: '/delete-contact',
            dataType: 'html',
            type: "POST",
            success: function (data, status, xhr) {
                $('.delete-success').slideDown(400);
                setTimeout(function () { $(".delete-success").slideUp(400); }, 5000);
            }
        })
    }

    getInitialState() {
        return {
            contacts: []
        }
    }
    componentDidMount() {
        $.ajax({
            dataType: "json",
            url: '/all-contacts',
            type: "GET",
            context: this,
            success: function (data, status, xhr) {
                this.setState({ contacts: data });
            }
        });
    }
    deleteRow(index) {
        var contacts = [...this.state.contacts];
        contacts.splice(index, 1);
        this.setState({ contacts });
    }
    render() {
        if (this.state.contacts == 0) {
            return (
                <div>Loading</div>
            )
        } else {
            var contactComponents = this.state.contacts.map(function (contact, i) {
                var full_name = contact.first_name + ' ' + contact.last_name

                return <tr key={i} className="contact">
                    <td>{full_name}</td>
                    <td></td>
                    <td>{contact.email_address}</td>
                    <td>{contact.phone_number}</td>
                    <td>{contact.company_name}</td>
                    <td><DeleteButton onClick={this.deleteRow.bind(this)} index={i} email={contact.email_address} /></td>
                </tr>;
            }.bind(this));
            return <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Contact Name</th>
                            <th></th>
                            <th>Email Address</th>
                            <th>Phone Number</th>
                            <th>Company Name</th>
                        </tr>

                        {contactComponents};
                  <button onClick={() => { this.onClick(this.props.email) }}>Delete</button>
                    </tbody>
                </table>
            </div>
        }
    }
}

*/

