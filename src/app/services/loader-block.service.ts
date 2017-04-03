import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class LoaderBlockService {
  private _isBlocked: BehaviorSubject<boolean>;
  public TIMEOUT: number = 200;

  constructor() {
    this._isBlocked = <BehaviorSubject<boolean>>new BehaviorSubject(false);
  }

  isBlocked(){
    return this._isBlocked.asObservable();
  }

  show(){
    this._isBlocked.next(true)
  }

  hide(){
    this._isBlocked.next(false);
  }

}
