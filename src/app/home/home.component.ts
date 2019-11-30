import { Component, OnInit, Input, ViewChild, TemplateRef } from "@angular/core";
import { PIZZAS } from "../pizzasList";
import { BasketService } from "../basket.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  counter = 0;
  @ViewChild('testModal') templateRef: TemplateRef<any>;

  constructor(private basketService: BasketService,
    private modalService: NgbModal) { }
  pizzas = PIZZAS;
  totalAmountOrder: any;
  ngOnInit() { }

  updateList(isIncrementing: boolean) {
    /* You should check if the value is incrementing or not and 
    change the value of the counter depending of the value of the boolean
    */
    isIncrementing ? this.counter++ : this.counter--;
  }

  resetAll() {
    // First, you need to set the value of the total Amount and the number of pizza Ordered to every pizza to 0 (use map)
    // Then, don't forget to also reset the counter
    // Finally, let's call the service to reset the basket. (Be sure that you have called the service inside the constructor !)
    this.pizzas.map(item => {
      item.numberOrdered = 0;
      item.totalAmountProduct = 0;
    });
    this.counter = 0;
    this.basketService.resetBasket();
  }

  buyNow() {
    /*
     If the total amount of the basket is greater than 0 and equal or less to 200,
    you can open the modal that contains the pizza choosen 
     */
    if (this.pizzas) {
      this.totalAmountOrder = 0;
      this.pizzas.forEach(item => {
        this.totalAmountOrder = this.totalAmountOrder + (item.price * item.numberOrdered);
      });

      if (this.totalAmountOrder && this.totalAmountOrder > 0 && this.totalAmountOrder <= 200) {
        this.modalService.open(this.templateRef);
      }
    }
  }
}

