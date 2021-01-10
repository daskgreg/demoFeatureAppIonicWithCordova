import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { NavController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'

@Component({
  selector: 'app-emails',
  templateUrl: './emails.page.html',
  styleUrls: ['./emails.page.scss'],
})
export class EmailsPage implements OnInit {
  currentImage = null;
  constructor(public navCtrl: NavController, private camera: Camera, private EmailComposer: EmailComposer) { }

  ngOnInit() {
  }

  captureImage(){

    const options: CameraOptions = {

      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI
    }

    this.camera.getPicture(options).then(ImageData => {
      this.currentImage = ImageData;
    }, err=> {
      console.log('err:', err)
    }
    );
  }
  sendEmail(){
    let email = {
      to: 'dask.gregory@gmail.com',
      cc: 'gregdaskalakhs@gmail.com',
      attachments: [
        this.currentImage
      ],
      subject: 'iBus Ticket #20239',
      body: 'Thank you for your purchace John Doe! <br><br>',
      isHtml: true

    };

    this.EmailComposer.open(email);
  }
}
