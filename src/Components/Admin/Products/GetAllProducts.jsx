import ProductsRating from "./ProductsRating";
import { Link,useNavigate } from "react-router-dom";
import DeleteModal from './DeleteModal';
import AdminHeader from '../AdminHeader'
const products = [
  {
    id: 1,
    name: 'Product Name',
    href: '#',
    imageSrc: 'https://mobilecontent.costco.com/live/resource/img/24w08080/24w08080-graber.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  //   price: '$35',
    color: 'Black',
  },
  {
      id: 2,
      name: 'Product Name',
      href: '#',
      imageSrc: 'https://mobilecontent.costco.com/live/resource/img/24w08080/24w08080-graber-starts.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Product Name',
      href: '#',
      imageSrc: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1713398-847__1&recipeName=350',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Product Name',
      href: '#',
      imageSrc: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1752769-847__1&recipeName=350',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 5,
      name: 'Product Name',
      href: '#',
      imageSrc: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1695559-847__1&recipeName=350',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 6,
      name: 'Product Name',
      href: '#',
      imageSrc: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=4000223078-847__1&recipeName=350',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 7,
      name: 'Product Name',
      href: '#',
      imageSrc: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1695448-847__1&recipeName=350',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 8,
      name: 'Product Name',
      href: '#',
      imageSrc: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1713398-847__1&recipeName=350',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 9,
      name: 'Product Name',
      href: '#',
      imageSrc: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=2670948-847__1&recipeName=350',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: 10,
      name: 'Product Name',
      href: '#',
      imageSrc: 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=2127653-847__1&recipeName=350',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
  // More products...
]
  export default function GetAllProducts() {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
      // Navigate to SoloProductMain component with the product data
      navigate("/SoloProduct", { state: product });
    };
    return (
      <>
      <AdminHeader/>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 justify-center flex">Products</h1>
          <div className="flex items-center justify-center mt-3">
            Search Product
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              placeholder="Search"
              className="block w-80 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ml-4"
            />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative" onClick={() => handleProductClick(product)}>
                
                <div>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                    </div>
                    {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                    <ProductsRating/>
                  </div>
                </div>
                  <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:mt-2 sm:w-auto"
                  style={{width:'100%'}}
                  >
                    Delete
                  </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
    )
  }
  