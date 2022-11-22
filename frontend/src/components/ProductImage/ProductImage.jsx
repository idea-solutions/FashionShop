import "./productImage.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductImage() {
  let userId = useParams(); // lấy id của sản phẩm trên đường link 
  // console.log("id: ", userId.id);
  const [active, setActive] = useState('');
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/shop/detail/${userId.id}`)
      .then(res => {
        setImages(res.data)
        setActive(res.data[0].url)
        // console.log(res.data)
      })
  }, [userId.id])
  return (
    <div className="product-image">
      <div className="img-sp">
        {/* ảnh đc active */}
        <img src={active} alt="img"></img>
      </div>
      {
        // ktr xem images có ảnh hay k 
        images.length > 0 
          ? <> 
            {/* hiển thị tất cả các ảnh */}
            {images.map((image, index) => <div className="alt" key={index} >
              <img
                src={image.url}
                alt="img"
                onClick={() => {
                  setActive(
                    image.url
                  );
                }}
              ></img>

            </div>)}
          </>
          :<h3>chưa tìm thấy ảnh</h3>
      }


    </div>
  );
}

export default ProductImage;
