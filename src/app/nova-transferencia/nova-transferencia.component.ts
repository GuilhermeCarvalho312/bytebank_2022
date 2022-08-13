import { Transferencia } from './../models/transferencia.model';
import { TrasnferenciaService } from './../services/trasnferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  public valor: number;
  public destino: number;

  constructor(private service: TrasnferenciaService) {}

  transferir() {
    console.log(
      `Solicitada nova transferência com valor: ${this.valor} e destino: ${this.destino}`
    );

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionarTransferencia(valorEmitir).subscribe(
      (res) => {
        console.log(res);
        this.limparCampos();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
