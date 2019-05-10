import React, {Component} from 'react';
import './App.css';
import {Button, Container, Grid, Input, Header} from 'semantic-ui-react'


function decider(a: number, b: number, c: number) {
    let num: number = (b * b) - (4 * a * c);
    let cond: boolean = Math.sqrt(num).toString() === "NaN";
    if (cond)
        return [cond, Math.sqrt(num * -1) / (2 * a)];
    else
        return [cond, Math.sqrt(num) / (2 * a)];

}

function calc() {

    // @ts-ignore
    let a: number = Number.parseFloat(document.querySelector("#a").value);
    // @ts-ignore
    let b: number = Number.parseFloat(document.querySelector("#b").value);
    // @ts-ignore
    let c: number = Number.parseFloat(document.querySelector("#c").value);
    // @ts-ignore
    let x1: any = document.querySelector("#x1");
    // @ts-ignore
    let x2: any = document.querySelector("#x2");

    //default errors
    if ((a.toString() || b.toString() || c.toString()) === "NaN") {
        window.alert("Enter All Values!");
    } else {

        let imag: (any | any)[] = decider(a, b, c);
        console.log(imag);
        let res1: string = "";
        let res2: string = "";

        if (imag[0]) {
            res1 = (-b / (2 * a)).toString() + "+" + imag[1].toString() + "i";
            res2 = (-b / (2 * a)).toString() + "-" + imag[1].toString() + "i";
        } else {
            res1 = ((-b / (2 * a)) + imag[1]).toString();
            res2 = ((-b / (2 * a)) - imag[1]).toString();
        }
        x1.value = res1;
        x2.value = res2;

    }

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
