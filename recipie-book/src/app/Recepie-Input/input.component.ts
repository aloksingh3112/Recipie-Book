import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector:'app-input',
    templateUrl:'./input.component.html',
    styleUrls:['./input.comonent.css']
})

export class InputComponent{
    @Input() textvalue:[{text:string,desc:string}];
    @Output('clicklist') onListClick=new EventEmitter<{value:number,innerHtml:string}>();
     @Output() onButtonClick=new EventEmitter<{value:number}>();
     @Output('onRemoveItem') OnRemoveItem=new EventEmitter<number>();
    @Output('showRecipieList') ShowRecipieList=new EventEmitter<boolean>();
    
     showHideRecipie:boolean=false;
     disableShow:boolean=false;
     recipieText:string='Show All Recipies';
     
     
     
   
    buttonClick(event){
        console.log(event.target.value);
        this.onButtonClick.emit({
            value:event.target.value
        })
        this.recipieText='Show All Recipies';
        this.showHideRecipie=false;
       
    };
    

    recipeList(event){
      console.log(event.target.value);
      this.onListClick.emit({
           value:event.target.value,
          innerHtml:event.target.innerHTML
      });
      
      this.recipieText='Show All Recipies';
      this.showHideRecipie=false;
     
      
    }

    removeItemList(event){
        console.log('on clicking remove item',event.target.value);
        this.OnRemoveItem.emit(event.target.value);
        this.recipieText='Show All Recipies';
        this.showHideRecipie=false;
       
    }

    showRecipie(event){
     
      this.showHideRecipie=!this.showHideRecipie;

      if(this.showHideRecipie){
        this.recipieText='Hide All Recipes';

      }else{
        this.recipieText='Show All Recipes'  
      }
      
     

      this.ShowRecipieList.emit(
          this.showHideRecipie
      )


    }


}