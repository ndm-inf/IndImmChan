import { Injectable } from '@angular/core';
import { IndImmConfigService } from './ind-imm-config.service';

@Injectable({
  providedIn: 'root'
})
export class IndImmChanAddressManagerService {
  IndImmConfigService: IndImmConfigService;
  public GetPinataKey() {
    return 'd1ef010c61cc72d8773f';
  }

  public GetPinataSecret() {
    return '92ff47c205b407e56ec9f312b530b802a7392f770ee9b74ffcba44442fb8c7e1'
  }
  public GetParentPostMemoType() {
    return '706172656e74';
  }

  public GetChildPostMemoType() {
    return '6368696c64';
  }

  public GetBoardAddress(board: string) {
    if (board==='pol'){
      if(!this.IndImmConfigService.IsDev) {
        return '';
      } else {
        return 'rfLz1Qkr3SUKq8YrMy9R8nZuJGpqaBbrtu';
      }    
    } else if (board==='biz'){
      if(!this.IndImmConfigService.IsDev) {
        return '';
      } else {
        return 'rw4RGGNK8VYy2NwUyBzrHEy91SiFTGaQyF';
      }    
    } else if (board==='b'){
      if(!this.IndImmConfigService.IsDev) {
        return '';
      } else {
        return 'rfsBWpRjwHucY8j6r1AtoqbvogNXcThNbQ';
      }    
    }
  }

  public GetSenderAddress() {
    if(!this.IndImmConfigService.IsDev) {
      return 'r9TpWwnmQBrRn9vmPjnALS5VLpKaoKV2BR';
    } else {
      return 'rnkwYDEULqAN2TtRrHY6To98HE1stJ55to';
    }
  }

  public GetSenderSecret() {
    if(!this.IndImmConfigService.IsDev) {
      return 'snR3p1mzcRyUZXhCE4StLknKosfaT';
    } else {
      return 'sp86cLw37ojsCwDtC9wt72tkFwHoK';
    }
  }
  constructor(indImmConfigSer: IndImmConfigService) { 
    this.IndImmConfigService = indImmConfigSer;
  }
}
