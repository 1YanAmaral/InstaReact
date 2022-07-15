const postsArray = [
  {
    image: "assets/img/meowed.svg",
    user: "meowed",
    content: "assets/img/gato-telefone.svg",
    likedimage: "assets/img/respondeai.svg",
    likeduser: "respondeai",
    likedamount: "outras 101.523 pessoas",
  },
  {
    image: "assets/img/barked.svg",
    user: "barked",
    content: "assets/img/dog.svg",
    likedimage: "assets/img/adorable_animals.svg",
    likeduser: "radorable_animals",
    likedamount: "outras 99.159 pessoas",
  },
];

const actionsArray = [
  "heart-outline",
  "chatbubble-outline",
  "paper-plane-outline",
];

function Posts() {
  return (
    <div class="posts">
      {postsArray.map((post) => (
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={post.image} />
              {post.user}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={post.content} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                {actionsArray.map((actions) => (
                  <ion-icon name={actions}></ion-icon>
                ))}
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={post.likedimage} />
              <div class="texto">
                Curtido por <strong>{post.likeduser}</strong> e{" "}
                <strong>{post.likedamount}</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
