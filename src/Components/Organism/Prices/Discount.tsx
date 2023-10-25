type propType = {
 value: number   
}
export default function Discount(props: propType){
    if(props.value > 100 && props.value < 200){
      return  <p className="discount">-15%</p>
    }else if (props.value > 200){
      return  <p className="discount">-20%</p>
    }else{
      return  <p className="discount">-10%</p>
    }
}