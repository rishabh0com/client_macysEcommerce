import styles from "../styles/singleProduct.module.css";
import {Link} from "react-router-dom";

const SingleProduct = ( {proDetail} ) => {
  const {_id,title,price,images,sizes,color} = proDetail;
  const upperTitle = title.split(" ")[0];
  const lowerTitle = title.split(" ").slice(1).join(" ");
  const num = parseInt(Math.random() * 100)
  const dis = parseInt((price * num) /100)
  const fakeP = price + dis
  // console.log(dis)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <img
            src={images[0]}
            alt="product Image"
          />
        </div>
        <Link to={_id} style={{"textDecoration": "none", "color":"black"}} >
        <h3 className={styles.titleFirst}>{upperTitle}</h3>
        <h3 className={styles.titleSecond}>
         {lowerTitle}
        </h3>
        </Link>
        <strike className={styles.fakePrice}>INR {(`${fakeP.toLocaleString()}.${dis % 2 ?"50":"00"}`)}</strike>
        <p className={styles.price}>INR {(`${price.toLocaleString()}.${price % 2 ?"50":"00" }`)}</p>
      </div>
    </>
  );
};

export default SingleProduct;
