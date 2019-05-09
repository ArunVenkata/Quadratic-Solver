import React, {Component} from 'react';
import './App.css';
import {Button, Checkbox, Form, Container, Grid, Input, Header} from 'semantic-ui-react'

function calc(){
      let a = Number.parseInt(document.querySelector("#a").value);
        let b = Number.parseInt(document.querySelector("#b").value);
        let c = Number.parseInt(document.querySelector("#c").value);
        let b2 = (b * b) - (4 * a * c);
        let decider = Math.sqrt(b2).toString();
        let left = (-b)/(2 * a);
        let right = "";
        let x1 = "";
        let x2 = "";
        if (decider === "NaN") {
            right = (Math.sqrt(b2*-1)/(2 * a)).toString() + "i";
            x1 = left.toString()+"+"+right.toString();
            x2 = left.toString()+"-"+right.toString();
        }
        else{

            right = decider/(2*a);
            x1 = left+right;
            x2 = left-right;
        }
        document.querySelector("#x1").value = x1;
        document.querySelector("#x2").value = x2;

}

class App extends Component {

    render() {
        return (
            <Container className="ui raised segment centered">
                <Header as='h1' className="ui centered">Ax2+Bx+C=0</Header>
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <Input id="a" className="ui  aligned center" label="A" placeholder='Enter A'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Input id="b" className="ui aligned center" label="B" placeholder='Enter B'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Input id="c" className="ui aligned center" label="C" placeholder='Enter C'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Input id="x1" className="ui  aligned center" label="x1" readOnly={true}/>
                        </Grid.Column>
                        <Grid.Column>
                            <Input id="x2" className="ui aligned center" label="x2" readOnly={true}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Button id="submitbtn" onClick={calc} className="ui centered"> Calculate</Button>
            </Container>
        );
    }
}

export default App;
