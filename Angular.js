// Search Functionality 
`<app-search-box
(searchedValue)="updateFilter($event)"
*ngIf="hidden"
>
</app-search-box>`;

var VendorTblData=[
    {
        "VendorId": "1",
        "VendorName": "Vendor1",
        "VendorType": null,
        "VendorCity": "",
        "IsActive": "1"
    },
    {
        "VendorId": "2",
        "VendorName": "t",
        "VendorType": null,
        "VendorCity": "t",
        "IsActive": "1"
    }

]
function updateFilter(event1) {
    const val = event1.toLowerCase().trim();
    //if searchbox is empty then all data
    if (!val) {
        this.VendorTblData = this.responseData;
        return
    }

    const temp = this.responseData.filter((index) => {
        index.VendorId = index.VendorId.toString();
        index.IsActive = index.IsActive.toString();
        console.log(index);
        return (
            index.VendorId.toLowerCase().indexOf(val) !== -1 ||
            index.VendorName.toLowerCase().indexOf(val) !== -1 ||
            // index.VendorType.toLowerCase().indexOf(val) !== -1 ||
            index.VendorCity.toLowerCase().indexOf(val) !== -1 ||
            index.IsActive.toLowerCase().indexOf(val) !== -1 ||
            !val
        );
    });
    console.log(temp)
    this.VendorTblData = temp;
}
//ngOninit service calling.
this.vendorlist.getVendorList().subscribe(data=>{
    let tempData=data["result"];
    this.VendorTblData=[...tempData];
    this.responseData = [...tempData];
})

////////////////////////////////////////////////////////////////////////////////////
// NgX Data Table

`
<ngx-datatable
            #VendorTbl
            class="bootstrap"
            [columns]="columns"
            [columnMode]="'force'"
            [headerHeight]="50"
            [footerHeight]="50"
            [rowHeight]="'auto'"
            [limit]="10"
            [rows]="VendorTblData"
            [sorts]="[{ prop: 'VendorId', dir: 'asc' }]"
            id="VendorTbl"
          >
            <ngx-datatable-column name="Vendor Id" prop="VendorId">
              <ng-template
                ngx-datatable-cell-template
                let-rowIndex="rowIndex"
                let-value="value"
                let-row="row"
              >
                {{ row.VendorId }}
              </ng-template>
            </ngx-datatable-column>
            <ngx-datatable-column name="Vendor Name" prop="VendorName">
              <ng-template
                ngx-datatable-cell-template
                let-rowIndex="rowIndex"
                let-value="value"
                let-row="row"
              >
                {{ row.VendorName }}
              </ng-template>
            </ngx-datatable-column>
            <ngx-datatable-column name="Vendor type" prop="VendorType">
              <ng-template
                ngx-datatable-cell-template
                let-rowIndex="rowIndex"
                let-value="value"
                let-row="row"
              >
                {{ row.VendorType }}
              </ng-template>
            </ngx-datatable-column>
            <ngx-datatable-column name="Vendor City" prop="VendorCity">
              <ng-template
                ngx-datatable-cell-template
                let-rowIndex="rowIndex"
                let-value="value"
                let-row="row"
              >
                {{ row.VendorCity  }}
              </ng-template>
            </ngx-datatable-column>
            <ngx-datatable-column name="IsActive" prop="IsActive">
              <ng-template
                ngx-datatable-cell-template
                let-rowIndex="rowIndex"
                let-value="value"
                let-row="row"
              >
              <span
                    [ngClass]="
                      row.IsActive == '1'
                        ? 'status-active m-l-10 d-inline-block mt-0 f-14 text-white'
                        : row.IsActive == '0'
                        ? 'status-inactive m-l-10 d-inline-block mt-0 f-14 text-white'
                        : 'status-beta m-l-10 d-inline-block mt-0 f-14 text-white'
                    "
                  >
                {{ row.IsActive ? "ACTIVE":"INACTIVE" }}</span>
              </ng-template>
            </ngx-datatable-column>
           
            
          </ngx-datatable>
`
columns = [
    { prop: "VendorId", name: "VendorId" },
    { prop: "VendorName", name: "VendorName" },
    { prop: "VendorType", name: "VendorType" },
    { prop: "VendorCity", name: "VendorCity" }, 
    { prop: "IsActive", name: "IsActive" }
   
  ];

  /////////////////////////////////////////////////////////////////////////////
  
// Searching data in a array of Objet

var responceData=[{name1:"harsh",age:21},{name1:"rohit",age:22},{name1:"harshvardhn",age:21},{name1:"mahi",age:21}];
const temp=responceData.filter((index)=>{
    return index.name1.indexOf("rohit") == -1;
})

console.log(temp);


const temp2=responceData.filter((index2)=>{
    return index2.name1.indexOf("mahi") !== -1;
})

console.log( temp2)


  /////////////////////////////////////////////////////////////////////////////
// Form option select
                    `
   <label class="col-form-label" id="VendorStatusTxt">Status</label>
   <span class="txt-danger" style="font-size: 16px;">&nbsp;<b>*</b></span>
   <select class="form-control digits inputFilledInTable" size="1" formControlName="VendorStatus" required id="VendorStatusTxt">
   <option value="0" selected disabled="true">Select Vendor Status</option>
       <option value="Active">Active</option>
       <option value="Inctive">Inctive</option>
     </select>
     `
/////////////////////////////////////////////////////////////////////////////

  //  go Back by Location after form SubmitEvent

  // import(Location) from @angular/core
  //   constructor(private location:Location){}
   function onsubmit(){
   this.location.back()
    }

    /////////////////////////////////////////////////////////////////////////////

    // null , undefined , "" , false  ya saglynchi value false aste ,pn [] chi value false naste
    // fakt ya 4 ch false astat

/////////////////////////////////////////////////////////////////////////////
     
// convert date into date FormData

var formattedDate = new Date().toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'});
// 6/17/2022

let currentDate = new Date().toJSON().slice(0, 10);
console.log(currentDate); // "2022-06-17

let date1 = new Date().toLocaleDateString();
console.log(date); // 6/17/2022

let date2 = new Date().toLocaleDateString("de-DE");
console.log(date); // 17.6.2022

var date = moment();

var currentDate1 = date.format('D/MM/YYYY');
console.log(currentDate); // "17/06/2022"

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate2 = `${day}-${month}-${year}`;
console.log(currentDate); // "17-6-2022"

/////////////////////////////////////////////////////////////////////////////

// Validations

`<div class="txt-danger validationTDF" *ngIf="VendorDetailsForm.controls.VendorNationality.errors &&(VendorDetailsForm.controls.VendorNationality.dirty || VendorDetailsForm.controls.VendorNationality.touched)">
                          <div [hidden]="!VendorDetailsForm.controls.VendorNationality.errors.required">please select Nationality

                          </div>
                        </div>`

                        // Ani yasathi formbuilder madhe value type string pahije ,no chalat nahi

////////////////////////////////////////////////////////////////////////////////////////////////////////

// queryparam pass from one component to another component
// html file
`<button (click)="gun(2,'edit')">click me to go to computerbwith querymap</button>`
// ts file
gun(row,navigationflag)
  {
     navigationExtras ,":NavigationExtras"={
      queryParams:{
        id:2
      }
    }
    if(navigationflag=='edit')
    {
      this.router.navigate(['/products/computer'],navigationExtras)
    }
  }
  // Ts file of we need to send queryparam
  constructor(private, route ,ActivatedRoute); { 
    this.route.queryParams.subscribe((data)=>{
      console.log(data,"in computer component")
    })
  }
                  
////////////////////////////////////////////////////////////////////////////////////////////////////////

// ngMultiselect dropdown
// in html file
                        `<ng-multiselect-dropdown 
                              id="ItemTypeDropdown"
                              name="ItemDescription"                // same as textfield name as on dropdown
                              [placeholder]="'Select Item Types'"
                              [data]="ItemList"         // array of object data -data from backend in array
                              formControlName="VendorSelectedItem"
                              [disabled]="disabled"
                              [settings]="ItemtypeDropdownSettings"    // setting name in ts file
                              (onSelect)="onItemSelect($event)"
                              (onDeSelect)="onItemDeSelect($event)">
                            </ng-multiselect-dropdown>`

// TS file
ItemtypeDropdownSettings: IDropdownSettings = {   // import iddropdownsetting also import ngmultiselect module
  "singleSelection": false,
  "idField": "ItemId",                            // this is nuique id -give id of array here or spuuid
  "textField": "ItemDescription",                 // here we want to display on the dropdown
  "selectAllText": "Select All",
  "unSelectAllText": "UnSelect All",
  "itemsShowLimit": 3,
  "allowSearchFilter": false
};

function onItemSelect(item){
  this.ItemTypesList.push(item);
  console.log(this.ItemTypesList,"in onselect method")
}
function onItemDeSelect(item){
  for(let i=0;i<this.ItemTypesList.length;i++){
    if(this.ItemTypesList[i].Id==item.Id)
      this.ItemTypesList.splice(i,1);
  }}

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Common data from two array and create new array

  for(let i=0;i<this.ItemList.length;i++){
      
    if(this.ItemListOriginal[i].ItemUUID==item.ItemUUID)
    this.selectedItems.push({ItemUUID:item.ItemUUID,ItemDescription:this.ItemListOriginal[i].ItemDescription
      ,ItemGroupName:this.ItemListOriginal[i].ItemGroupName,ItemTypeName:this.ItemListOriginal[i].ItemTypeName})
       console.log(this.selectedItems,"selecte item before")
       
  }
  this.selectedItems=[...this.selectedItems]
  console.log(this.selectedItems,"after")

////////////////////////////////////////////////////////////////////////////////////////////////////////

  // api to get Material Receiving Status (Controller)
router.post("/getMaterialReceivingStatus", (req, res) => {
  dbVendorMaster.getMaterialReceivingStatus(req.body, (err, result) => {
    if(err){
      res.json({
        error :true,
        statusCode :401,
        message: "Error: Something went wrong. Please try again!"
      });
      throw err;
    }
    res.json({
      error : false,
      statusCode : 200,
      message : "success.",
      result: result
    });
    res.end();
    return res;
  });
});

//api to get Po Tax Value
exports.getPoTaxValue=(reqData, cb)=>{
	params={
		query: `Select TaxName,TotalTaxValue,Id from POTaxMaster where IsActive=1`,
		where: []
	}
	general.dbFindRow(params, (err, result)=>{
		if(err){
			return cb(err, null);
		}
		return cb(null, result);
	});
}

/////////////////////////////////////////////////////////////////////////////////////////////
//   Restrict Alphabets

`<input type="text" (keypress)="restrictAlphabets($event)" maxlength="2">`
    function restrictAlphabets(e) {
    const x = e.which || e.keyCode;
    if ((x >= 48 && x <= 57) || x == 8 || (x >= 35 && x <= 40) || x == 46) {
      return true;
    } else {
      return false;
    }
  }
////////////////////////////////////////////////////////////////////////////////////////
// change colour of input text by directive


// constructor( ele:ElementRef) {
  ele.nativeElement.onkeypress=((evt)=>{
    if( (evt.charCode<48 || evt.charCode>57))
    {
      evt.preventDefault();
    }
  })
  // }

  // @HostBinding('style.color') color:string;

  // @HostListener('keypress',['$event'])
  onkeypress(ele)                                  // give ele : any    type is any
  {
    this.color='blue';
    if(ele.which<48 || ele.which>56)
    {
      ele.preventDefault();
    }
  }

  ///////////////////////////////////////////////////////////////////

  // checkbox select true false
  `<input type="checkbox" title="Invoice" (change)="onCheckboxChange(row,$event.target.checked)"/>`
  function onCheckboxChange(row, e){
    console.log(row, "->",e);   
    if(e==true){
      this.invoiceGenerationList.push(row.GINId);  
      this.SelectedCheckBox=true;    
    }else if(e==false){
      const index = this.invoiceGenerationList.indexOf(row.GINId);
      if (index > -1) { // only splice array when item is found
        this.invoiceGenerationList.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
  }

  ///////////////////////////////////////////////////////
  // checkBox checked
  // $event.target.checked
  ////////////////////////////////////////////////////////////////
  // to get latest Id from Database
  firstInvoiceId="SPUUID" + 0001;
  query:
		`SELECT
		(case when (SELECT MAX(InvoiceNo)) Is Null then ` +
		firstInvoiceId +
		  ` else (SELECT MAX(InvoiceNo)+1 ) end) as uniqueInvoiceId
	   FROM GINInvoice where SPUUID = ?`

     // //////////////////
    //  Date ngbDatePicker
    `<div class="col-sm-4">
                    <div class="form-group">
                      <label class="col-form-label">Material Required Date</label>
                      <div class="input-group custom-datepicker job-input-datepicker">
                        <input
                          class="form-control"
                          placeholder="dd/mm/yyyy"
                          name="dpRequiredDate"
                          ngbDatepicker
                          #dpRequiredDate="ngbDatepicker"
                          formControlName="RequiredDate"
                          onkeydown="return false"
                          (click)="dpRequiredDate.toggle()"
                        />
                      </div>
                      <div *ngIf="PurchaseOrderForm.controls.RequiredDate.touched && PurchaseOrderForm.controls.RequiredDate.errors?.required"
                        class="text text-danger mt-1">
                       Material Required date is required.
                      </div>
                    </div>
                  </div>`

//////////////////////////////////////////////////////////////////////////////
// SQL Query insert ans select at a time
`INSERT INTO GINInvoice(InvoiceNo, SpUUID, InvoiceDate, VendorCode, GINNo, POId, AcceptedQuantity, CreatedBy)
				SELECT ${uniqueInvoiceId},${reqData.spUuid},'${datetime}',g.VendorCode,g.GINID,g.POId,i.AcceptedQuantity,${reqData.userId} FROM SimbaGIN g inner join GINItemLines i ON g.GINId=i.GINId WHERE g.GINId IN(${reqData.GINList.join(',')}) AND i.IsActive=1 `
		////////////////////////////////////////////////////////////////////////////
    // to submit the API into Mapping Table
    exports.submitItemDetails = (reqData, cb) =>{
      var fileImageURL = [];
      var fileAttachmentURL = [];
      let datetime = dateTimeInstance.todaysCurrentDateTime();
      generateUniqueIds.getItemUUID(reqData.spUuid, async (err, result) => {
        uniqueItemId = result[0]["uniqueItemId"];	
        var spId=reqData.spUuid;
        if((reqData.itemImages!==undefined && reqData.itemImages!==null) || (reqData.itemAttachments!==undefined && reqData.itemAttachments!==null)){
    
          if(reqData.itemImages!==undefined && reqData.itemImages!==null){
            fileImageURL = await setFiles(spId, uniqueItemId, 'Images', reqData.itemImages)
          }
          if(reqData.itemAttachments!==undefined && reqData.itemAttachments!==null){
            fileAttachmentURL = await setFiles(spId, uniqueItemId, 'Attachments', reqData.itemAttachments)
          }
        }
        params={
          query: `INSERT INTO SimbaItemMaster(SpUUID, ClientUUID, ItemUUID, ItemDescription, ItemSpecification, HSN, ItemGroupId, ItemTypeId, OrderUoM, IssueUoM, ItemImageURL, Attachment, IsActive, InspectionRequired, Manufacturer,CreatedBy,CreatedOn,UpdatedBy,UpdatedOn) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
          where: [reqData.spUuid, reqData.clientId, uniqueItemId, reqData.itemDescription, reqData.itemSpecification, reqData.hsn, reqData.itemGroupId, reqData.itemTypeId, reqData.orderUoM, reqData.issueUoM, JSON.stringify(fileImageURL), JSON.stringify(fileAttachmentURL), reqData.itemStatus, reqData.inspectionRequired, reqData.manufacturer,reqData.userId,datetime,reqData.userId,datetime]
        }
        general.dbInsert(params, async (err,result)=>{
          if(err){
            return cb(err, null);
          }
          if(reqData.vendorDetails.length>0){
            for(let i=0;i<reqData.vendorDetails.length;i++){
              let vendorData=reqData.vendorDetails[i];
              let vendorCode=vendorData.Vendors.split('-')[0];
              let leadTime = vendorData.LeadTime;
              params={
                query: `INSERT INTO ItemVendorMapping(ItemUUID, VendorCode, LeadTime, IsActive) VALUES (?,?,?,?)`,
                where: [uniqueItemId, vendorCode, leadTime, 1]
              }
              general.dbInsert(params, async (err,result)=>{
                if(err){
                  return cb(err, null);
                }	
                if(reqData.vendorDetails.length-1==i){
                  return cb(null, result);		
                }
              });	
            }
          }else{
            return cb(null, result);		
          }
        
              
        });
      });
    }
    
    async function setFiles(spId, id, folderName, files){
      fileURLList = [];
      if(!fs.existsSync(path.join(global.__base, `/user_data/${spId}/scm`))) {
        fs.mkdirSync(path.join(global.__base, `/user_data/${spId}/scm`));
      }
      if(!fs.existsSync(path.join(global.__base, `/user_data/${spId}/scm/Items`))) {
        fs.mkdirSync(path.join(global.__base, `/user_data/${spId}/scm/Items`));
      }
      if(!fs.existsSync(path.join(global.__base, `/user_data/${spId}/scm/Items/${id}`))) {
        fs.mkdirSync(path.join(global.__base, `/user_data/${spId}/scm/Items/${id}`));
      }
    
      if(!fs.existsSync(path.join(global.__base, `/user_data/${spId}/scm/Items/${id}/${folderName}`))) {
        fs.mkdirSync(path.join(global.__base, `/user_data/${spId}/scm/Items/${id}/${folderName}`));
      }
    
      for(var i = 0; i < files.length;i++){
        var fName=files[i].fileName;
        fileURLList.push(`/${spId}/scm/Items/${id}/${folderName}/${fName}`);
        var  fileURL = `./user_data/${spId}/scm/Items/${id}/${folderName}/${fName}`;
        // var itemImagesURLName = `/${spId}/scm/${id}/${folderName}/${fName}`;
        var data = files[i].src.replace(/^data:image\/\w+;base64,/, '');
        
        fs.writeFile(fileURL, data, {encoding: 'base64'}, function(err){
        //Finished
        });	
        if(i==files.length-1){
          return fileURLList;
        }		
      }
    }

    // api to submit GIN Data



exports.submitGINDetails=(reqData, cb)=>{
	var datetime = dateTimeInstance.todaysCurrentDateTime();
	params={
		query: `INSERT INTO SimbaGIN (SpUUID, ClientUUID, GINDate, POId, InvoiceNumber, InvoiceDate, ChallanNumber, ChallanDate, VendorCode, GINStatus, ReceivedBy,  InspectionBy, InspectionDate, InspectionRequired, StoreRoomId) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
		where: [reqData.spUuid,reqData.ClientId,datetime,reqData.POId,reqData.InvoiceNumber,reqData.InvoiceDate,reqData.ChallanNumber,reqData.ChallanDate,reqData.VendorCode,reqData.GINStatus,reqData.ReceivedBy,reqData.InspectionBy,reqData.InspectionDate,reqData.InspectionRequired, reqData.StoreRoomId]
	}
	general.dbInsert(params, (err, result)=>{
		if(err){
			return cb(err, null);
		}
		let ginId=result;
		if(reqData.ItemData.length>0){
			for(let i=0;i<reqData.ItemData.length;i++){
				if(reqData.ItemData[i].Id =="" || reqData.ItemData[i].Id==null){
					let itemId=reqData.ItemData[i].Item.split('-')[0];
					paramsInsert={
						query: `INSERT INTO GINItemLines(GINId, POId, ItemUUID, ChallanQuantity, ActualQuantity, AcceptedQuantity, RejectedQuantity, InspectionRemark, ItemLineStatus,IsActive) VALUES (?,?,?,?,?,?,?,?,?,?)`,
						where: [ginId, reqData.POId,itemId, reqData.ItemData[i].ChallanQty, reqData.ItemData[i].ActualQty, reqData.ItemData[i].AcceptedQty, reqData.ItemData[i].RejectedQty, reqData.ItemData[i].InspectionRemark, reqData.ItemData[i].ItemLineStatusId,1]
					}
					general.dbInsert(paramsInsert, async (err,result)=>{
						console.log(paramsInsert);
						if(err){
							return cb(err, null);
						}
						paramsInvTran={
							query: `INSERT INTO InventoryTransactionMaster( ClientUUID, ItemUUID, TransactionType, OldQty, TransactionQty, UpdatedQty, TransactionBy, TransactionOn) VALUES (?,?,?,?,?,?,?,?)`,
							where: [reqData.ClientId, itemId, 4, 0, reqData.ItemData[i].AcceptedQty, reqData.ItemData[i].AcceptedQty,reqData.UserId,datetime ]
						}
						general.dbInsert(paramsInvTran, (err, result)=>{
							if(err){
								return cb(err, null);
							}
							paramsInv={
								query: `SELECT InventoryUUID FROM InventoryMaster WHERE InventoryUUID=?`,
								where: [reqData.StoreRoomId+itemId]
							}
							general.dbFindRow(paramsInv, (err, result)=>{
								if(err){
									return cb(err,null);
								}
								console.log(result[0]['InventoryUUID']);
								if(result[0]['InventoryUUID']){
									paramsUpdateInv = {
										query: `UPDATE InventoryMaster SET StockQty=StockQty+?,UpdatedOn=?,UpdatedBy=? WHERE InventoryUUID=?`,
										where: [reqData.ItemData[i].AcceptedQty,datetime,reqData.UserId,reqData.StoreRoomId+itemId]
									}	
									general.dbInsert(paramsUpdateInv, async(err,result)=>{
										if(err){
											return cb(err,null);
										}
									});									
								}else{
									paramsInsInv = {
										query: `INSERT INTO InventoryMaster(SpUUID, ClientUUID, GINId, InventoryUUID, StoreRoomId, ItemUUID, UOM, StockQty, CreatedOn, CreatedBy, UpdatedOn, UpdatedBy, IsActive) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
										where: [reqData.spUuid,reqData.ClientId,ginId,reqData.StoreRoomId+itemId,reqData.StoreRoomId,itemId,reqData.ItemData[i].UOMId,reqData.ItemData[i].AcceptedQty,datetime,reqData.UserId,datetime,reqData.UserId,1]
									}	
									general.dbInsert(paramsInsInv, async(err,result)=>{
										if(err){
											return cb(err,null);
										}															
									});		
								}
								if(reqData.ItemData.length-1==i){
									return cb(null, result);		
								}
							});
						});			
					});	
				}
			}
		}else{
			return cb(null, result);
		}	
	});
}


//api to update GIN Details 
exports.updateGINData = (reqData, cb) =>{	
	var datetime = dateTimeInstance.todaysCurrentDateTime();				
	params={
		query: `UPDATE SimbaGIN SET SpUUID=?, ClientUUID=?, POId=?, InvoiceNumber=?, InvoiceDate=?, ChallanNumber=?, ChallanDate=?, VendorCode=?,
		 		GINStatus=?, InspectionBy=?, InspectionDate=?, InspectionRequired=?, StoreRoomId=? WHERE GINId=?`,
		where: [reqData.spUuid,reqData.ClientId,reqData.POId,reqData.InvoiceNumber,reqData.InvoiceDate,reqData.ChallanNumber,reqData.ChallanDate,reqData.VendorCode,
		     	reqData.GINStatus,reqData.InspectionBy,reqData.InspectionDate,reqData.InspectionRequired,reqData.StoreRoomId,reqData.GINId]
	}
	general.dbUpdate(params, (err, result)=>{
		if(err){
			return cb(err, null);
		}
		if(reqData.ItemData){
			var ids = reqData.ItemData.reduce((ids, po) => {
				if (po.Id!==null && po.Id!=="") {
				  ids.push(po.Id);
				}
				return ids;
			  }, []);
			  if(ids.length==0){
				ids.push(0);
			  }
			  if(ids.length>0){
				paramDelete={
					query: `UPDATE GINItemLines SET IsActive=0 WHERE Id NOT IN(?) AND GINId=?`,
					where: [ids, reqData.GINId]
				}
				general.dbUpdate(paramDelete, (err, result)=>{
					if(err){
						return cb(err, null);
					}
				});
			  }
			if(reqData.ItemData.length>0){
				for(let i=0;i<reqData.ItemData.length;i++){
					if(reqData.ItemData[i].Id==null || reqData.ItemData[i].Id==""){
						let itemId=reqData.ItemData[i].Item.split('-')[0];
						paramsInsert={
							query: `INSERT INTO GINItemLines(GINId, POId, ItemUUID, ChallanQuantity, ActualQuantity, AcceptedQuantity, RejectedQuantity, InspectionRemark, ItemLineStatus,IsActive) VALUES (?,?,?,?,?,?,?,?,?,?)`,
							where: [reqData.GINId, reqData.POId, itemId, reqData.ItemData[i].ChallanQty, reqData.ItemData[i].ActualQty, reqData.ItemData[i].AcceptedQty, reqData.ItemData[i].RejectedQty, reqData.ItemData[i].InspectionRemark, reqData.ItemData[i].ItemLineStatusId,1]
						}
						general.dbInsert(paramsInsert, (err, result)=>{
							if(err){
								return cb(err, null);
							}
							paramsInv = {
								query: `INSERT INTO InventoryMaster(SpUUID, ClientUUID, GINId, InventoryUUID, StoreRoomId, ItemUUID, UOM, StockQty, CreatedOn, CreatedBy, UpdatedOn, UpdatedBy, IsActive) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
								where: [reqData.spUuid,reqData.ClientId,reqData.GINId,reqData.StoreRoomId+itemId,reqData.StoreRoomId,itemId,reqData.ItemData[i].UOMId,reqData.ItemData[i].AcceptedQty,datetime,reqData.UpdatedBy,datetime,reqData.UpdatedBy,1]
							}	
							general.dbInsert(paramsInv, async(err,result)=>{
								console.log(paramsInv);
								if(err){
									return cb(err,null);
								}		
							});	
						});
					}else{
						paramsUpdate={
							query: `UPDATE GINItemLines SET POId=?,ItemUUID=?,ChallanQuantity=?,ActualQuantity=?,AcceptedQuantity=?,RejectedQuantity=?,InspectionRemark=?,ItemLineStatus=?,IsActive=1 WHERE Id=? AND GINId=?`,
							where: [reqData.POId, reqData.ItemData[i].Item.split('-')[0], reqData.ItemData[i].ChallanQty, reqData.ItemData[i].ActualQty, reqData.ItemData[i].AcceptedQty, reqData.ItemData[i].RejectedQty, reqData.ItemData[i].InspectionRemark, reqData.ItemData[i].ItemLineStatusId, reqData.ItemData[i].Id,reqData.GINId]
						}
						general.dbUpdate(paramsUpdate, (err, result)=>{
							if(err){
								return cb(err, null);
							}
							paramsInvUpdate={
								query: `UPDATE InventoryMaster SET  ClientUUID=${reqData.ClientId}, StockQty=${reqData.ItemData[i].AcceptedQty}, UpdatedOn=${datetime}, UpdatedBy=${reqData.UpdatedBy} WHERE GINId=${reqData.GINId} AND InventoryUUID=?`,
								where: [reqData.StoreRoomId+reqData.ItemData[i].Item.split('-')[0]]
							}
							general.dbUpdate(paramsInvUpdate, (err, result)=>{
								console.log(paramsInvUpdate);
								console.log(err);
								if(err){
									return cb(err, null);
								}
							});
						});
					}
					if(i==reqData.ItemData.length-1){
						return cb(null, result);
					}
				}	
			}else{
				return cb(null, result);
			}
					
		}else{
			return cb(null, result);
		}
	});
}