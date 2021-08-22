import React from "react";
import ContentLoader from "react-content-loader";

import AppContext from "../../context";

import styles from "./Card.module.scss";

function Card({
  id,
  imageUrl,
  title,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, imageUrl, title, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={158}
          height={230}
          viewBox="0 0 150 207"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="112" />
          <rect x="0" y="179" rx="8" ry="8" width="80" height="24" />
          <rect x="118" y="175" rx="8" ry="8" width="32" height="32" />
          <rect x="0" y="128" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="147" rx="3" ry="3" width="150" height="15" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img
              src={isFavorite ? "/img/liked.svg" : "img/unliked.svg"}
              alt="Unliked"
            />
          </div>
          <img
            className={styles.mainImage}
            width={133}
            height={112}
            src={imageUrl}
            alt="Sneakers"
          />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>{price} £</b>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={
                isItemAdded(id) ? "/img/btn-checked.svg" : "img/btn-plus.svg"
              }
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
