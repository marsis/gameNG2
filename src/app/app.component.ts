import {Component} from '@angular/core';
import {BlockComponent} from './block/block.component';

import {ColorService} from './color.service';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BlockComponent],
  providers: [ColorService]
})
export class AppComponent {
  public list = [];
  public tempItem: any = {};

  public counter: number = 0;
  public count = 4;
  public life = 10;

  constructor(private _colorService: ColorService) {
    this.generateList(this.count);


    this.newGame()
    {
      this.list = [];
      this.counter = 0;
      this.life = 10;
      this.count = 4;
      this.generateList(this.count);
    }

  }
    generateList(count)
    {
      for (let i = 0; i < count; i++) {
        let backgroundItem = (i % 2 !== 0) ? this.list[i - 1].color : false;
        this.list.push(this.createItem(backgroundItem));
      }
      this.shuffle(this.list);
    }

    createItem(backgroundItem)
    {
      return {color: backgroundItem || this._colorService.getRandomBackground(), isOpen: false, pair: false};
    }
    ;

    destroy(block)
    {
      setTimeout(()=> {
        //console.log('tempItem:', this.tempItem);
        if (!this.tempItem.color) {
          this.tempItem = block;
        } else {
          if (this.tempItem.color === block.color) {
            //this.list = this.list.filter(item => item !== block);
            //this.list = this.list.filter(item => item !== this.tempItem);
            this.tempItem.pair = true;
            block.pair = true;
            this.counter += 2;
            //console.log('counter', this.counter);
            if ((this.counter === this.count) && this.count <= 8) {
              //debugger;
              this.counter = 0;
              this.count += 4;
              this.list = [];
              // console.log('count', this.count);
              this.generateList(this.count);

            }

          } else {
            // закрываем карточки и обнуляем темпАйтем
            block.isOpen = false;
            this.tempItem.isOpen = false;
            this.life--;
            // console.log("life", this.life);
          }


          // удаляем из списка, обнуляем темпАйтем и добавляем два новых айтема в список
          this.tempItem = {};


        }


      }, 1000);

    }

    //checkPictures()
    //{
     // return this.tempItem.color === block.color;
   // }

    shuffle(array)
    {
      var j, x, i;
      for (i = array.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
      }
    }
    newGame()
    {
      this.list = [];
      this.counter = 0;
      this.life = 10;
      this.count = 4;
      this.generateList(this.count);
    }

}
//bootstrap(App);
