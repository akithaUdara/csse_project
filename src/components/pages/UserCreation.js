import React,{Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import FirebaseDB from "../../Firebase";
import firebase from "firebase";
import Swal from 'sweetalert';

class UserCreation extends Component {


    constructor(props) {
        super(props);

        this.database = FirebaseDB.database().ref().child('User');

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCPassword = this.onChangeCPassword.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            password: '',
            cPassword: '',
            userRole:''
        }

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeCPassword(e) {
        this.setState({
            cPassword: e.target.value
        });
    }

    onChangeInput(e) {
        this.setState({
          userRole: e.target.value
        });
      }

    onSubmit(e) {


        console.log("name : " + this.state.name + '\n' +
            "email : " + this.state.email + '\n' +
            "password : " + this.state.password + '\n' +
            "cPassword : " + this.state.cPassword + '\n'
        );


        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            cPassword: this.state.cPassword,
            userRole: this.state.userRole
        };

        if (this.state.name !== '' && this.state.name !== null) {
            if (this.state.email !== '' && this.state.email !== null) {
                if (this.state.password !== '' && this.state.password !== null) {
                    if (this.state.cPassword !== '' && this.state.cPassword !== null) {
                        if(this.state.userRole !== '' && this.state.userRole !== null) {


                            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(respose=>{

                                console.log(respose.user)
                                    this.database.child(respose.user.uid).set(user)
                                    .then(response => {
                                           
                                        this.setState({
                                            name: '',
                                            email: '',
                                            password: '',
                                            cPassword: '',
                                            userRole:''
                                        });
        
                                        Swal("Success !", "User Added Sucessfully !!", "success");
        
                                    })
                                    .catch(error => {
                                        console.log(error);
                                    });
                                  console.log(user.uid);
                                
                            
                            }).catch(function(error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            // ...
                            });
                        
                        }else {
                            Swal("Failed !", "Select User Role", "error");
                        }

                    } else {
                        Swal("Failed !", "Enter Confirm Password", "error");
                    }
                } else {
                    Swal("Failed !", "Enter Password", "error");
                }
            } else {
                Swal("Failed !", "Enter Email", "error");
            }
        } else {
            Swal("Failed !", "Enter Name", "error");
        }
    }

    render(){
        return (
            
            <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                <form>
                    <p className="h4 text-center mb-4">Sign up</p>
                        <label className="black-text">Your name: </label>
                            <input type="text" id="name" className="form-control" value={this.state.name} onChange={this.onChangeName}/>
                        <br />
                        <label  className="black-text">Your email: </label>
                            <input type="email" id="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail}/>
                        <br />
                        <label className="black-text" >Password:</label>
                            <input type="password" id="password" className="form-control" value={this.state.password} onChange={this.onChangePassword}/>
                        <br />
                        <label className="black-text" >Confirm password: </label>
                            <input  type="password" id="cPassword" className="form-control"  value={this.state.cPassword} onChange={this.onChangeCPassword}/>
                        <br/>
                        <div>
                            <label className="black-text" >Select User Role: </label>
                            <br/><br/>
                            
                        <MDBContainer className="mt-1">
                            <MDBInput  onClick={this.onChangeInput} checked={this.state.userRole==='a' ? true : false}  value="a" label="Site Manager" type="radio" id="radio1" />
                            <br/>
                            <MDBInput  onClick={this.onChangeInput} checked={this.state.userRole==='b' ? true : false} value="b" label="Line manager" type="radio" id="radio2" />
                            <br/>
                            <MDBInput  onClick={this.onChangeInput} checked={this.state.userRole==='c' ? true : false} value="c" label="supervisor" type="radio" id="radio3" />
                            <br/>
                            <MDBInput  onClick={this.onChangeInput} checked={this.state.userRole==='d' ? true : false} value="d" label="Labour" type="radio" id="radio4" />
                        </MDBContainer>
                        </div>
                        <br/>

                        <div className="text-center mt-4">
                                <MDBBtn color="unique" type="button" onClick={this.onSubmit}>Register</MDBBtn>
                        </div>
                        
                </form>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
    );
}
};

export default UserCreation;