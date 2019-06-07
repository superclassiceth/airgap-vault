import { Component } from '@angular/core'
import { AirGapWallet, DeserializedSyncProtocol } from 'airgap-coin-lib'

import { ErrorCategory, handleErrorLocal } from '../../services/error-handler/error-handler.service'
import { NavigationService } from '../../services/navigation/navigation.service'

enum TransactionQRType {
  SignedAirGap = 0,
  SignedRaw = 1
}

@Component({
  selector: 'airgap-transaction-signed',
  templateUrl: './transaction-signed.page.html',
  styleUrls: ['./transaction-signed.page.scss']
})
export class TransactionSignedPage {
  public signedTx: string
  public interactionUrl: string

  public wallet: AirGapWallet
  public qrType: TransactionQRType = 0

  public signedTransactionSync: DeserializedSyncProtocol

  constructor(public navigationService: NavigationService) {
    this.interactionUrl = this.navigationService.getState().interactionUrl
    this.wallet = this.navigationService.getState().interactionUrl
    this.signedTx = this.navigationService.getState().interactionUrl
  }

  public switchQR(): void {
    this.qrType = this.qrType === TransactionQRType.SignedAirGap ? TransactionQRType.SignedRaw : TransactionQRType.SignedAirGap
  }

  public done(): void {
    this.navigationService.routeToAccountsTab().catch(handleErrorLocal(ErrorCategory.IONIC_NAVIGATION))
  }
}
