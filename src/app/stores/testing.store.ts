import { action, observable } from 'mobx';
import { computed } from 'mobx-angular';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class TestingStore {

  @observable public data: any;

  constructor(
    private afs: AngularFirestore,
    private auth: AngularFireAuth
  ) { }

  @computed
  get isHello(): boolean {
    return true;
  }

  @action
  async getData() {
    this.afs.collection('news').valueChanges().subscribe((result) => {
      this.data = result;
    })
  }

}
