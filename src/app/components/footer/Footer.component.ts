import { Component, OnInit, Input } from "@angular/core";
import { ILanguage } from "../../modules/dashboard/types/dashboard-state/dashboard-state.interface";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() language: ILanguage;

  constructor() {}

  ngOnInit() {}
}
