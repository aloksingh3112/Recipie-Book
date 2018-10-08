import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a:{ text: string, desc: string }[];
  index:number;
  textArray: { text: string, desc: string }[] = [];
  eventValue: number;
  listArr: {}[];
  showArray:{ text: string, desc: string }[];



  checkCondition(event) {
    this.eventValue = event;
  }


  clickButton(eventValue) {
    this.eventValue = eventValue.value;
    console.log('value send is ', this.eventValue);
  }

  textValue(event: { text: string, desc: string }) {
    console.log(event.text);

    this.textArray.push({ text: event.text, desc: event.desc });
    console.log(this.textArray);

  }
  
  //on clicking the list of input component 
  clickList(event: { value: number, innerHtml: string }) {
     this.a = this.textArray.filter(data => data.text == event.innerHtml);
    this.listArr = this.a;
    this.eventValue = event.value;
  
   this.index=this.textArray.map(b=>b.text).indexOf(event.innerHtml);

    console.log("after input",this.a);
}



deleteArray(event){
 console.log(this.index)
 this.textArray.splice(this.index,1);
  
}
removeItemList(event){
  var length=this.textArray.length;
  
  if(event==3){
    this.textArray.splice(0,length);
  }
  this.eventValue=0;
}

ShowRecipieList(event){
  console.log("hide or shoe recipie list",event);
  if(event){
    this.eventValue=2;
  }
  else{
    this.eventValue=0;
  }

  this.showArray=this.textArray;
}

deleteShowArray(event){
  console.log("delete text aarry",this.textArray);
  console.log("deleye show arrat",event)
 console.log('after splicing',this.textArray.splice(event,1));
}


}
