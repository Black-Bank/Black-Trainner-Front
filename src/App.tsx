import React, { useState } from 'react';
import './App.css';

const news = [
  { id: 1, title: 'Futebol | Club Friendlies', content: 'Grande virada do Milan encima do Manchester City nesse final de semana.', category: 'Sports' },
  { id: 2, title: 'Shows Programados', content: 'O ano de 2024 já está com a agenda lotada de espetáculos. Com CeeLo Green, Ivete Sangalo, Iza convida Liniker.', category: 'Music' },
  { id: 3, title: 'Campeonato eSports', content: 'O confronto em melhor de cinco partidas (md5) é disputado neste sábado (20), a partir de 13 horas (no horário de Brasília), com transmissão ao vivo no sportv 3 e nos canais oficiais do CBLOL e das co-streams parceiras.', category: 'Games' },
  { id: 4, title: 'NBA', content: 'Boston Celtics ainda são líderes na NBA, seguidos por New York Knicks e Milwaukee Bucks.', category: 'Sports' },
  { id: 5, title: 'Lançamentos da semana', content: 'Billie Eilish divulga tracklist completa do novo álbum', category: 'Music' },
  { id: 6, title: 'Olimpiadas', content: 'Após ter feito algumas críticas sobre a Cerimônia de Abertura dos Jogos Olímpicos na sexta-feira, 26, o empresário brasileiro Lucas Amadeu revelou estar receoso em sair nas ruas de Paris, na França. O rosto e a opinião dele se tornaram manchete na imprensa internacional.', category: 'Olimpiadas' }

];

const News = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNews = news.filter(post => {
    return selectedCategory === 'All' || post.category === selectedCategory;
  });

  const foundNews = searchTitle
    ? filteredNews.find(post => post.title.toLowerCase().includes(searchTitle.toLowerCase()))
    : null;

  return (
    <div>
      <h1>News</h1>
      <input
        placeholder="Pesquise por Título"
        value={searchTitle}
        type="text"
        onChange={e => setSearchTitle(e.target.value)}
      />
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        <option value="All">Todas as Categorias</option>
        <option value="Music">Música</option>
        <option value="Games">Jogos</option>
        <option value="Sports">Esportes</option>
        <option value="Olympics">Olimpiadas</option>

      </select>

      <div className="container">
        {foundNews ? (
          <div key={foundNews.id} className="news-item">
            <h2>{foundNews.title}</h2>
            <p>{foundNews.content}</p>
            <p><em>Categoria: {foundNews.category}</em></p>
          </div>
        ) : (
          filteredNews.map(post => (
            <div key={post.id} className="news-item">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <p><em>Categoria: {post.category}</em></p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default News;
