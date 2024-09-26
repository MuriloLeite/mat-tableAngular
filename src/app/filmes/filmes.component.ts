import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Filme {
  nome: string;
  dataLancamento: string;
  genero: string;
  avaliacao: number;
}

const DADOS_FILMES: Filme[] = [
  { nome: 'A Aventura Começa', dataLancamento: '2023-01-10', genero: 'Ação', avaliacao: 8 },
  { nome: 'Risos e Emoções', dataLancamento: '2023-01-15', genero: 'Comédia', avaliacao: 7 },
  { nome: 'Sombras do Passado', dataLancamento: '2023-01-20', genero: 'Drama', avaliacao: 9 },
  { nome: 'O Grande Desafio', dataLancamento: '2023-02-01', genero: 'Aventura', avaliacao: 8 },
  { nome: 'Amor em Tempos de Guerra', dataLancamento: '2023-02-05', genero: 'Romance', avaliacao: 7 },
  { nome: 'Mistério na Floresta', dataLancamento: '2023-02-10', genero: 'Suspense', avaliacao: 8 },
  { nome: 'A Lenda do Mar', dataLancamento: '2023-02-15', genero: 'Fantasia', avaliacao: 9 },
  { nome: 'Caminho da Liberdade', dataLancamento: '2023-03-01', genero: 'Drama', avaliacao: 6 },
  { nome: 'Fuga do Labirinto', dataLancamento: '2023-03-10', genero: 'Ação', avaliacao: 7 },
  { nome: 'Uma Noite de Festa', dataLancamento: '2023-03-15', genero: 'Comédia', avaliacao: 8 },
  // Adicione mais filmes conforme necessário
];

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss'],
})
export class FilmesComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'dataLancamento', 'genero', 'avaliacao'];
  dataSource = new MatTableDataSource(DADOS_FILMES);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  aplicarFiltro(event: Event) {
    const valorFiltro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorFiltro.trim().toLowerCase();
  }
}
