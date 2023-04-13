import { Component } from '@angular/core';
import { faUsers, faCalendar,faCoins,faMoneyBill
 } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-cuaerpo',
  templateUrl: './cuaerpo.component.html',
  styleUrls: ['./cuaerpo.component.css']
})
export class CuaerpoComponent {
  faUsers = faUsers;
  faCalendar=faCalendar;
  faCoins=faCoins;
  faMoneyBill=faMoneyBill;
}
