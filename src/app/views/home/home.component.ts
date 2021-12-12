import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public titulo!: string;
  public texto!: string;
  classToDiv = {};

  constructor() { 

    this.classToDiv= {
      'text-success': true
    };
  }

  ngOnInit(): void {
    this.titulo! = 'GAME_MANIA'
    this.texto! = 'Aqui você encontra tudo do universo Game: jogos, acessórios, consoles e gadgets. Lançamentos, edições de colecionadores, produtos raros e jogos em oferta! Produtos do mundo todo, aqui no Brasil! Envios em até 10 minutos'
  }

  onSubmit(form: NgForm) {
    let dados=`
    Nome: ${form.value.nome}
    Email: ${form.value.email}
    Senha: ${form.value.password}`

    console.log(dados);
  }
  

}
