import { useEffect, useState } from "react"
import Product from "./Product"

export const ProductList = () => {

    const [productList, setProductList] = useState([])
    const [CategoryList, setCategoryList] = useState([])
    const [currentCategory, setCurrentCategory] = useState()
    const [searchInput, setSearchInput] = useState('')

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(response => setProductList(response))
    }

    const getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(response => setCategoryList(response))
    }

    const displayProducts = () => {

        const productsTemp = productList.filter(product => {
            return product.title.includes(searchInput)
                || product.id.toString().startsWith(searchInput)
                || product.description.includes(searchInput)
        })

        if (productsTemp.length > 0) {
            return productsTemp.map((product, key) => {
                return <Product product={product} key={key} />
            })
        }

        return <tr>
            <td colSpan={7}>No Items</td>
        </tr>

    }

    const displayCategories = () => {
        return CategoryList.map((category, key) =>
            <button key={key}
                className={'btn ' + (currentCategory === category ? 'btn-dark' : 'btn-secondary')}
                onClick={(e) => {
                    e.preventDefault()
                    setCurrentCategory(category)
                }}>
                {category}
            </button>
        )
    }

    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    const handleSearch = (event) => {
        event.preventDefault()
        const searchValue = document.querySelector('#search').value
        setSearchInput(searchValue)
    }

    return (
        <div className="container-fluid mx-auto w-75 my-3">

            <h2>Search:</h2>

            <form>
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label>Search</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" id="search" className="form-control" />
                    </div>
                    <div className="col-auto">
                        <input className="btn btn-primary" onClick={handleSearch} type="submit" value="Search" />
                    </div>
                </div>
                <hr />
                <h5>Categories:</h5>
                <div className="row g-3 align-items-center">
                    <div className="btn-group">
                        {displayCategories()}
                    </div>
                </div>
            </form>

            <hr />

            <h1>Products: </h1>

            <table className="table">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {displayProducts()}
                </tbody>
            </table>
        </div>
    )
}
