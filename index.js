
// array vazia para colocar a musica na playlist
let playlist = [];

// adiciona a musica na playlist
function adicionarMusica(event) {

  event.preventDefault();
 
  //pega os valores do formulário
  const cantora = event.target.elements.cantora.value;
  const musica = event.target.elements.musica.value;
  const tempo = parseInt(event.target.elements.tempo.value);
  
  //cria um obj com os dados da musica
  const musicaObj = {
    cantora: cantora,
    musica: musica,
    tempo: tempo
  };
  
  // coloca o objeto à array da playlist
  playlist.push(musicaObj);
  
  // apaga o formulario para adicionar nova musica
  event.target.reset();
 
  atualizarPlaylist();
  
  // calcula o tempo total da playlist
  calcularTempoTotal();
}

//funcao para atuallizar a playlist
function atualizarPlaylist() {
  // Seleciona o container da playlist na tabela
  const playlistContainer = document.querySelector('.playlist table tbody');
  // apaga o conteudo do container
  playlistContainer.innerHTML = '';
  
  // mostra as músicas da playlist para criar as linhas na tabela
  playlist.forEach((musica, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${musica.cantora}</td>
      <td>${musica.musica}</td>
      <td>${musica.tempo} minutos</td>
    `;

    playlistContainer.appendChild(row);
  });
}

// funcao para calcular o tempo total da playlist e exibir na página
function calcularTempoTotal() {
  // reduz a array da playlist para obter o tempo total
  const tempoTotal = playlist.reduce((total, musica) => total + musica.tempo, 0);
  // seleciona o elemento onde será exibido o tempo total
  const tempoTotalElement = document.getElementById('tempo-total');
  // atualiza o texto com o tempo total da playlist
  tempoTotalElement.textContent = `Tempo total da playlist: ${tempoTotal} minutos`;
}
