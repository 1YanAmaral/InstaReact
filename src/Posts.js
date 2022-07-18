import React from "react";

const postsArray = [
  <Post
    image="assets/img/meowed.svg"
    user="meowed"
    content="assets/img/gato-telefone.svg"
    likedimage="assets/img/respondeai.svg"
    likeduser="respondeai"
    likedamount="outras 101.523 pessoas"
  />,
  <Post
    image="assets/img/barked.svg"
    user="barked"
    content="assets/img/dog.svg"
    likedimage="assets/img/adorable_animals.svg"
    likeduser="adorable_animals"
    likedamount="outras 99.159 pessoas"
  />,
];

const postObjects = [
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
    likeduser: "adorable_animals",
    likedamount: "outras 99.159 pessoas",
  },
];

function Post(props) {
  const [likeState, setLikeState] = React.useState("not-liked");
  const [shape, setShape] = React.useState("heart-outline");

  function toggleLike() {
    if (likeState === "not-liked") {
      setLikeState("liked");
      setShape("heart");
    } else {
      setShape("heart-outline");
      setLikeState("not-liked");
    }
  }

  return (
    <div class="post" onClick={toggleLike}>
      <div class="topo">
        <div class="usuario">
          <img src={props.image}/>
          {props.user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.content} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              name={shape}
              className={likeState}
              onClick={toggleLike}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.likedimage} />
          <div class="texto">
            Curtido por <strong>{props.likeduser}</strong> e{" "}
            <strong>{props.likedamount}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function Posts() {
  return (
    <div class="posts">
      {postObjects.map((post) => (
        <Post
          image={post.image}
          user={post.user}
          content={post.content}
          likedimage={post.likedimage}
          likeduser={post.likeduser}
          likedamount={post.likedamount}
        />
      ))}
    </div>
  );
}

export default Posts;
