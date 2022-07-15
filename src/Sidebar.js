function User(props) {
  return (
    <div class="usuario">
      <img src={props.img} />
      <div class="texto">
        <strong>{props.username}</strong>
        {props.displayname}
      </div>
    </div>
  );
}

const suggestionsArray = [
  {
    img: "assets/img/bad.vibes.memes.svg",
    name: "bad.vibes.memes",
    status: "Segue você",
  },
  {
    img: "assets/img/chibirdart.svg",
    name: "chibirdart",
    status: "Segue você",
  },
  {
    img: "assets/img/razoesparaacreditar.svg",
    name: "razoesparaacreditar",
    status: "Novo no Instagram",
  },
  {
    img: "assets/img/adorable_animals.svg",
    name: "adorable_animals",
    status: "Segue você",
  },
  {
    img: "assets/img/smallcutecats.svg",
    name: "smallcutecats",
    status: "Segue você",
  },
];

function Suggestions() {
  return suggestionsArray.map((suggestion) => (
    <div class="sugestao">
      <div class="usuario">
        <img src={suggestion.img} />
        <div class="texto">
          <div class="nome">{suggestion.name}</div>
          <div class="razao">{suggestion.status}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  ));
}

function Sidebar() {
  return (
    <div class="sidebar">
      <User
        img="assets/img/catanacomics.svg"
        username="catanacomics"
        displayname="Catana"
      />

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        <Suggestions />
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}

export default Sidebar;
