import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "apt-search",
  templateUrl: "./Search.component.html",
  styleUrls: ["./Search.component.css"],
})
export class SearchComponent implements OnInit {
  @Input() value: string = "";
  @Output() onTyping = new EventEmitter<string>();
  debounce: Subject<string> = new Subject<string>();
  constructor() {}
  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe((filter) => this.onTyping.emit(filter));
  }
}
