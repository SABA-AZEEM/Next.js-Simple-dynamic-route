
const Docs = ({params}) => {
        if(params.slug?.length === 2){
            return <h1>{params.slug[0]}</h1>
        }else if(params.slug?.length === 3){
            return <h1>{params.slug[1]}</h1>
        }else{
            return <h1>docs page</h1>
        }
    }

export default Docs
