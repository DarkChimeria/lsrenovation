import { Unit } from './unit';

export class Workline {
    WorklineID?;
    Invoice_InvoiceID?;
    Designation?;
    Quantity?: number;
    Amount?: number;
    Unit?: Unit = new Unit();
    UnitToShow?: string;
    TotalAmount = 0;
    VAT?;
    PercentageDiscount?;
    Discount?;
}
