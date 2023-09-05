import {useSearchParams} from "react-router-dom";

const Product = () => {


  const [searchParams, setSearchParams] = useSearchParams()

  console.log(searchParams.get('name'))

  const onClick = ()=>{
    setSearchParams({name: 'Kolya'})
  }

  return (
    <div className="container">
      Product // name = {searchParams.get('name')}
      <hr/>

      <input onChange={(e)=>setSearchParams({name: e.target.value})} value={searchParams.get('name')} style={{'marginBottom': 50}} />


    </div>
  );
};

export default Product;
