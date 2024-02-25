export default function ProductDetails({
    params,
} : {
    params: { productId: string};
}) {
    return <h1>
        details about specific product {params.productId}
    </h1>
}