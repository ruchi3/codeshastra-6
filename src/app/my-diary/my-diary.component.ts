import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AudioRecordingService } from '../services/audio-recording.service';
import { ApiCallerService } from '../services/api-caller.service';

@Component({
  selector: 'app-my-diary',
  providers: [ AudioRecordingService, ApiCallerService ],
  templateUrl: './my-diary.component.html',
  styleUrls: ['./my-diary.component.css']
})
export class MyDiaryComponent implements OnInit {

  currentUser: string = "";
  isRecording = false;
  recordedTime;
  blobUrl;
  anchorUrl;

  constructor(private audioRecordingService: AudioRecordingService, private sanitizer: DomSanitizer, private _api: ApiCallerService) {

    this.audioRecordingService.recordingFailed().subscribe(() => {
      this.isRecording = false;
    });

    this.audioRecordingService.getRecordedTime().subscribe((time) => {
      this.recordedTime = time;
    });

    this.audioRecordingService.getRecordedBlob().subscribe((data) => {
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
      this.anchorUrl = URL.createObjectURL(data.blob);
    });
  }

  startRecording() {
    if (!this.isRecording) {
      this.isRecording = true;
      this.audioRecordingService.startRecording();
    }
  }

  abortRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }

  stopRecording() {
    if (this.isRecording) {
      this.audioRecordingService.stopRecording();
      this.isRecording = false;
    }
  }

  clearRecordedData() {
    this.blobUrl = null;
  }

  ngOnDestroy(): void {
    this.abortRecording();
  }

  ngOnInit() {
    this.currentUser = window.localStorage.getItem("CURRENT_USER");
  }

  detect_emotion_from_face() {
    this._api.doPostRequest("/detect_image", {"username": this.currentUser}).subscribe(res => {
      console.log(res);
    });
  }

  detect_emotion_from_audio() {
    this._api.doPostRequest("/detect_audio", {"username":this.currentUser}).subscribe(res => {
      console.log(res);
    });
  }

}
