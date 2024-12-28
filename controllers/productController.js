

import products from "../models/products.js";  // Correct the import to match the model name

export function getProduct(req, res) {
    products.find().then(
        (productList) => {
            res.json({
                list: productList
            });
        }
    ).catch(
        (err) => {
            res.json({
                message: "Error",
                error: err.message
            });
        }
    );
}

export function createProduct(req, res) {

    console.log(req.user)

if(req.user == null){
    res.json({
        message : "You are not logged in"
    })
    return
}

if(req.user.type != "admin"){
    res.json({
        message : "You are not an admin"
    })
    return
}

    const product = new products(req.body);  // Use 'products' instead of 'Products'

    product.save().then(() => {
        res.json({
            message: "Product created"
        });
    }).catch(() => {
        res.json({
            message: "Product not created"
        });
    });
}

export function deleteProduct(req, res) {
    products.deleteOne({ name: req.body.name }).then(
        () => {
            res.json({
                message: "Product deleted successfully"
            });
        }
    ).catch(() => {
        res.json({
            message: "Product not deleted"
        });
    });
}

export function  getProductByName(req,res){
    const name = req.params.name;
    products.find({name : name}).then(
        (productList)=>{
            res.json({
                list : productList
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Error"
            })
        }
    )

}