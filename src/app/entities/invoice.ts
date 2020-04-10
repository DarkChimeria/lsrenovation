import { Customer } from '../customer/customer';
import { Workline } from './workline';

export class Invoice {
    InvoiceID?;
    Number?;
    CreationDate?;
    TotalAmount?;
    Customer: Customer = new Customer();
    Workline: Workline[];
}
