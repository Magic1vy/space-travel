import imageMinus from "../assets/minus.png";
import imagePlus from "../assets/plus.png"


const ChangeQuantity =  ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }


    const removeQuantity = () =>{
        if ( quantity <= 1 ) return ;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }
    return (
        <div  className='changeQuantity'>

            <button className="quantity" onClick={removeQuantity}><img src={imageMinus} alt="minus"/></button>
            <span className="headingFive">  {quantity}</span>
            <button className="quantity" onClick={addQuantity}><img src={imagePlus} alt="plus"/></button>
        </div>
    )
}
export default ChangeQuantity;