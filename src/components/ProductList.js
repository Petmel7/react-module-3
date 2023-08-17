export const ProductList = ({ products, onDeleteProduct }) => {
    return (
        <>
            <h2>Product List</h2>

            <ul>
                {products.map(product => {
                    return (
                        <li key={products.id}>
                            <h3>{products.title}</h3>
                            <p>{products.desc}</p>
                        </li>
                    )
                })}
                
            </ul>
        </>
    )
}