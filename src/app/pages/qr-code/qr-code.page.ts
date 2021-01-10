import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {
  
  qrData = 'https://travelsoft.gr/';
  scannedCode = null;
  elementType: 'url' | 'canvas' | 'img' = 'canvas';


  constructor(
    private barcodeScanner: BarcodeScanner, 
    private Base64ToGallery: Base64ToGallery,
    private toastCtrl: ToastController
    ) { }

  ngOnInit() {
  }

  // for the system 
  
  scanQRCode(){
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.scannedCode = barcodeData;
      }
    );
  }

  // for the user 

  downloadQR(){
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imgData = canvas.toDataURL('image/jpeg').toString();
    console.log('data: ', imgData);

    // Im getting the link until the first ,
    let data = imgData.split(',')[1];

    this.Base64ToGallery.base64ToGallery(data, 
      {prefix: '_qrimg', mediaScanner: true })
      .then(async res =>{
        let toast = await this.toastCtrl.create({
          header: 'QR Code saved in your photolibrary'
        });
        toast.present();
      }, err => console.log('err: ', err)
      );
  }
}
