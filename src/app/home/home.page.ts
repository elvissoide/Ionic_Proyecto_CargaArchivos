import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {finalize,tap} from 'rxjs/operators';
import{AngularFireStorage,AngularFireUploadTask}
  from '@angular/fire/compat/storage';
import {AngularFirestore,AngularFirestoreCollection} 
  from '@angular/fire/compat/firestore';

export interface imgFile{
name:String;
filepath:string;
size:number;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//objeto de tipo tarea para subir archivo
  fileUploadTask:AngularFireUploadTask;
//barra de progreso
percentageVal:Observable<any>;
trackSnapshot:Observable<any>;
//Url para subir el archivo
UploadedImageURL:Observable<any>;
//Archivo par asubir de tipo imagen
files:Observable<imgFile[]>;
//Especificaciones de la imagen
imgName:string;
imgsize: number;
//estado del progreso 
isFileUploading:boolean;
isFileUploaded:boolean;
//arreglo de elemntos para las imagenes
private filesCollection:
  AngularFirestoreCollection<imgFile>
  
  constructor(private afs: AngularFirestore,
    private afStorage:AngularFireStorage) {
      this.isFileUploading=false;
      this.isFileUploaded=false;

      this.filesCollection=afs.collection<imgFile>
      ('imagesColection');
      this.files=this.filesCollection.valueChanges();
    }
    uploadImage(event:FileList){
      const file:any=event.item(0);
      //validacion de la imagen
      if(file.type.split('/')[0]!=='image'){
      console.log('no se acepta este tipo de archivos');
      return;}
      



    }


}
