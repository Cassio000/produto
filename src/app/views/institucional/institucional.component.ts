import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.css']
})
export class InstitucionalComponent implements OnInit {

  public titulo1!: string;
  public texto1!: string;
  
  classToDiv = {};

  constructor() { 

    this.classToDiv= {
      'text-success': true
    };
  }

  ngOnInit(): void {
    this.titulo1! = 'Empresa'
    this.texto1! = 'A Gamemania surgiu adotando um conceito totalmente novo no comércio eletrônico e oferece aos seus clientes os melhores produtos do mercado, sem que o mesmo necessite sair de casa. Com uma experiência desde 2008 no comércio virtual através de seu precursor Clubedogame.net, a Gamemania incorpora tudo isso, agora em um novo site. Tendo a sua disposição um acervo com mais de 1000 produtos, e conseguindo por encomenda qualquer item relacionado aos seus produtos. Com um serviço de postagem ágil, a maioria de seus produtos possuem a certificação da "Postagem em 10 minutos", ou seja, após o pagamento do pedido confirmado em horário comercial nos dias úteis, o cliente recebe seu código de rastreio em até 10 minutos.'
    
  }

}
