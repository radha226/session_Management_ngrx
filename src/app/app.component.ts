import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as userAction from "./user.actions";
import { LoadUsers } from "./user.actions";
import * as fromUser from "./user.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "sessionManagement";
  constructor(private store: Store) {
    this.store.dispatch(new userAction.LoadUsers()); // action dispatch
  }
  ngOnInit(): void {
    console.log("hello");
  }
}
