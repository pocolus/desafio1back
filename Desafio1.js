

    class ProductManager {
        constructor() {
        this.products = [];
        this.nextId = 1; 
        }
    
        addProduct(product) {
        
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.error("Error Los datos son requeridos");
            return;
        }
    
        
        const existingProduct = this.products.find(p => p.code === product.code);
        if (existingProduct) {
            console.error("Error: Hay un producto con el mismo codigo");
            return;
        }
    
        
        const newProduct = {
            ...product,
            id: this.nextId++
        };
        this.products.push(newProduct);
        }
    
        getProducts() {
        return this.products;
        }
    
        getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.error("Error: No se encuentra");
        }
        return product;
        }
    }
    
    




