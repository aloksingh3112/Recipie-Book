import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
    selector: 'app-output',
    templateUrl: './output.component.html',
    styleUrls: ['./output.component.css']
})
export class OutputComponent {

    @Input() showArr:{ text: string, desc: string }[];

    @Input() Condition: number = 0;
    @Input() ListArray: { text: string, desc: string }[] = [];
    editCondition: boolean = false;
    inputText: string = '';
    textareaText: string = '';

    @Output('outputListArray') OutputListArray = new EventEmitter<{ text: string, desc: string }>();
    @Output('outputListDeleteArray') OutputListDeleteArray = new EventEmitter()
    @Output() TextValue = new EventEmitter<{ text: string, desc: string }>();
    @Output() condition = new EventEmitter<number>()
    @Output() ShowArrDelete=new EventEmitter<number>();

    sendCondition() {
        this.condition.emit(
            this.Condition = 0
        )
    }



    textBox: string = '';
    textArea: string = '';
    submitData() {

        this.Condition = 0;

        this.TextValue.emit({
            text: this.textBox,
            desc: this.textArea
        })
        this.textBox = '';
        this.textArea = '';

        this.sendCondition();
        this.editCondition = false;
    }

    cancelData() {

        this.Condition = 0;
        this.textBox = '';
        this.textArea = '';
        this.sendCondition();
        this.editCondition = false;


    }


    doEdit() {
        console.log(this.ListArray[0].text)
        console.log(this.ListArray[0].desc)
        this.editCondition = true;
        this.textareaText = this.ListArray[0].desc;
        this.inputText = this.ListArray[0].text;

    }

    doSubmit() {
        this.editCondition = false;
        this.ListArray[0].desc = this.textareaText;
        this.ListArray[0].text = this.inputText;

        this.textareaText = '';
        this.inputText = '';

        this.OutputListArray.emit(
            {
                text: this.ListArray[0].text,
                desc: this.ListArray[0].desc
            }
        )

    }
    doCancel() {
        this.editCondition = false;
        this.textareaText = '';
        this.inputText = '';

    }

    doDelete() {
        this.Condition = 0;
        this.OutputListDeleteArray.emit()
        this.sendCondition();
    }


    doShowDelete(event){
        console.log("show delete value",event.target.value);
        this.ShowArrDelete.emit(
            event.target.value
        )
    }









}