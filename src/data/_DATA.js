import img1 from "../imgs/jp1.jpg";
import img2 from "../imgs/jp2.jpg";
import img3 from "../imgs/jp3.jpg";
import img4 from "../imgs/jp4.jpg";
import img5 from "../imgs/jp5.jpg";
import img6 from "../imgs/jp6.jpg";
import img7 from "../imgs/jp7.jpg";
import img8 from "../imgs/jp8.jpg";

const products = {
  1: {
    id: "1",
    name: "FORMAL FUNCTIONAL SHIRT",
    price: 799,
    color: "white",
    discription: `SLIM FIT SHIRT FEATURING A SPREAD COLLAR LONG SLEEVES
      WITH BUTTONED CUFFS AND A BUTTON-UP FRONT.`,
    src: img1,
  },
  2: {
    id: "2",
    name: "DOUBLE-BREASTED BLAZER WITH SHOULDER PADS",
    price: 1.599,
    color: "Black",
    discription: `SLIM FIT SHIRT FEATURING A SPREAD COLLAR
      LONG SBLAZER FEATURING A LAPEL COLLAR 
      AND LONG SLEEVES WITH VERY PRONOUNCED SHOULDER PADS.
      FRONT WELT POCKETS. INTERIOR LINING.
      DOUBLE-BREASTED FRONT WITH METAL BUTTON FASTENING.`,
    src: img2,
  },
  3: {
    id: "3",
    name: "CROPPED T-SHIRT",
    price: 549,
    color: "BLACK",
    discription: `CROP TOP WITH A SQUARE NECKLINE AND LONG SLEEVES.
      FRONT METAL HOOK FASTENING.`,
    src: img3,
  },
  4: {
    id: "4",
    name: "ROUND NECK T-SHIRT ",
    price: 549,
    color: "BLACK",
    discription: `ROUND NECK T-SHIRT FEATURING MATCHING SHORT PUFF SLEEVES WITH ELASTIC TRIM.`,
    src: img4,
  },
  5: {
    id: "5",
    name: "LONG PRINTED KIMONO",
    price: 1.599,
    color: "LIGHT LILAC ",
    discription: `KIMONO WITH SLEEVES FALLING BELOW THE ELBOW AND FRONT WELT POCKETS.
      MATCHING BELT FASTENING.`,
    src: img5,
  },
  6: {
    id: "6",
    name: "KNIT T-SHIRT WITH SLOGAN",
    price: 549,
    color: "BLACK",
    discription: `KNIT T-SHIRT MADE OF SPUN COTTON FABRIC. ROUND NECK AND SHORT SLEEVES.
      CONTRAST EMBROIDERED DETAIL ON THE CHEST`,
    src: img6,
  },
  7: {
    id: "7",
    name: "HIGH NECK KNIT SWEATER",
    price: 549,
    color: "LIGHT BLUE ",
    discription: `SWEATER FEATURING A HIGH NECK,
      LONG SLEEVES WITH DECORATIVE METAL BUTTONS AND RIBBED TRIMS.`,
    src: img7,
  },
  8: {
    id: "8",
    name: "BASIC KNIT SWEATER",
    price: 379,
    color: "CREAM",
    discription: `KNIT SWEATER FEATURING A ROUND NECK,
      LONG SLEEVES WITH DECORATIVE METAL BUTTONS AND RIBBED TRIMS.`,
    src: img8,
  },
};

// to get
export function _getProducts() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...products }), 1000);
  });
}
