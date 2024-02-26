import { notFound } from "next/navigation";

export default function ProductDetails({
    params,
} : {
    params: { productId: string};
}) {
    if(parseInt(params.productId) >= 1000){
        return notFound();
    }
    return <>
        <h1>
            details about specific product {params.productId}
        </h1>
    </>
}