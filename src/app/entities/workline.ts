import { Unit } from './unit';

export class Workline {
    WorklineID?: number;
    Invoice_InvoiceID?: number;
    Designation?: string;
    Quantity?: number;
    Amount?: number;
    Unit?: Unit = new Unit();
    UnitToShow?: string;
    TotalAmount = 0;
    VAT?: number;
    PercentageDiscount?: number;
    Discount?: number;
}
