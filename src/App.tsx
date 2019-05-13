import React, {Component} from "react"
import './App.css';
import {Button, Container, Grid, Input, Header} from "semantic-ui-react"

/*
* formula for quadratic:
* x(1||2) = (-b(+||-)sqrt(b^2-4*a*c))/(2*a)
*
* split as follows
* x1 = (-b/(2*a)) + (sqrt(b^2-4*a*c)/(2*a))
* x1 = (-b/(2*a)) - (sqrt(b^2-4*a*c)/(2*a))
*
* imag root checks:
* b^2-4*a*c < 0 -> True
* b^2-4*a*c >= 0 -> False
*
* */

class Roots {
    private readonly a: number;
    private readonly b: number;
    private readonly c: number;
    private x1: any;
    private x2: any;

    constructor(a: string, b: string, c: string, set1: any, set2: any) {
        this.a = Number(a);
        this.b = Number(b);
        this.c = Number(c);
        // @ts-ignore
        this.x1 = set1;
        // @ts-ignore
        this.x2 = set2;

    }

    isImaginary() {
        return this.getDiscriminant() < 0
    }

    process() {

        let left = (-this.b / (2 * this.a));
        let right: number;
        let isimag: boolean = this.isImaginary();
        if (isimag) {
            right = Math.sqrt(this.getDiscriminant() * -1) / (2 * this.a);
        } else {
            right = Math.sqrt(this.getDiscriminant()) / (2 * this.a);
        }

        this.calculateValues(left, right, isimag)
    }

    calculateValues(left: number, right: number, isimag: boolean) {
        let res1: string;
        let res2: string;
        res1 = isimag ? left.toFixed(2).toString() + "+" + right.toFixed(2).toString() + "i" : (left + right).toFixed(2).toString();
        res2 = isimag ? left.toFixed(2).toString() + "+" + right.toFixed(2).toString() + "i" : (left - right).toFixed(2).toString();
        this.setValues(res1, res2)
    }

    getDiscriminant(): number {
        return Math.pow(this.b, 2) - (4 * this.a * this.c)
    };

    setValues(res1: string, res2: string): void {
        if ((res1 || res2) === "NaN+NaN" || (res1 || res2) === "NaN+NaNi") {
            window.alert("Enter Proper Values!!");
            window.location.reload();
        } else {
            this.x1.value = res1;
            this.x2.value = res2;
        }
    };
}

// @ts-ignore
function calc() {

    let obj = {

        a: document.querySelector("#a"),
        b: document.querySelector("#b"),
        c: document.querySelector("#c"),
        set1: document.querySelector("#x1"),
        set2: document.querySelector("#x2"),
    };
    if (obj.a && obj.b && obj.c && obj.set1 && obj.set2) {
        // @ts-ignore
        let run = new Roots(obj.a.value, obj.b.value, obj.c.value, obj.set1, obj.set2);
        run.process()
    } else {
        window.alert("Enter Values Properly!!")
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
