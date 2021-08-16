import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public salary:number=0;
  public Rate:number=8.5;
  public amount:number=0;
  public emi:number=0;
  public years:number=0;
  public loanAmount:number=0;
  constructor() { }

  public Eligibility(){
    this.amount=60*(0.6*this.salary);
  }

  public EMI(){
    this.Rate=0.085;
    this.emi=((this.loanAmount*this.Rate*(Math.pow(1+this.Rate,this.years))/(Math.pow(1+this.Rate,this.years)-1)))/12;
  }
  ngOnInit(): void {
  }

}
