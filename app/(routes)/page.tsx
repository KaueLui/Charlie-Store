import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate= 0; 

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true});
    const billboard = await getBillboard("50a1e406-1b7e-4209-b942-fe3de07e65b3");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Produtos em alta" items={products} />
            </div>
        </Container>
    )
}

export default HomePage;