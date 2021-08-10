# SOURCE: STOCK ITEM  
**Author**: 'eberry@anterasoftware.com'  
This code is brought to you by human beings over at Antera Software USA, Inc.  



bmrefactor.anterasoftware.com

# MYSQL 
```
id 
matrix_id
quantity
type
source_warehouse
incoming_warehouse_id
inventory_received
inventory_received_qty
cust_inventory_received
cust_inventory_received_qty 
status 
deleted
fifo_breakdown
```  
"mysql> "
```mysql  
select distinct source_warehouse from line_item_inventory
```




```html
<!-- SIZE -->
<div id="ssi-size" class="ssi-default ssi-form-col-header ssi-source-status">
  XL
</div>

<div *ngFor="let symbol of symbols; index as i;">
  <div>Size</div>
  <div>Here: {{symbol | json}}</div>
  <div *ngFor="let symbol of symbols; index as i;">{{symbol.symbols | json}}</div>
</div>


<!-- COST -->
<div id="ssi-cost" class="ssi-default ssi-form-field">
  <mat-form-field>
    <!-- <mat-label>Cost</mat-label> -->
    <input matInput value="10.00">
  </mat-form-field>
</div>

<!-- PRICE -->
<div id="ssi-price" class="ssi-default ssi-form-field">
  <mat-form-field>
    <!-- <mat-label>Price</mat-label> -->
    <input matInput value="20.00">
  </mat-form-field>
</div>

<!-- QUANTITY -->
<div id="ssi-price" class="ssi-default ssi-form-field">
  <mat-form-field>
    <!-- <mat-label>Quantity</mat-label> -->
    <input matInput value="0">
  </mat-form-field>
</div>
```




---  
  
# References  

## Primeface  
1. [Table Reorder](https://primefaces.org/primeng/showcase/#/table/reorder)   
1. [Table Edit](https://primefaces.org/primeng/showcase/#/table/edit)  
1. [Input Text](https://primefaces.org/primeng/showcase/#/inputtext)

## Images  
1. [Most common flowchart symbols](https://marvel-b1-cdn.bc0a.com/f00000000152158/www.gliffy.com/sites/gliffy/files/image/2020-06/guidetoflowchartsymbols_mostcommonimg.png)