
const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res)=>{

        // fetch all the products in an asynchronous manner from product.json
        fs.readFile('./product.json', 'utf-8', (err, data)=>{
            // display error if we encounter one
            if(err){
                console.err(err.message);
            }
            // console.log(data)
            // else we continue to fetching data
            const parsedUrl = url.parse(req.url, true);
            console.log(parsedUrl);
            console.log(parsedUrl.pathname);
            // console.log(path.query);

            if(req.method =='GET' && parsedUrl.pathname == '/products' && parsedUrl.query.id == undefined ){
                res.write(data)
                console.log('GET request')
            }
            else if(req.method == 'GET' && parsedUrl.pathname == '/products'  && parsedUrl.query.id !== undefined){
                console.log('GET request with param');
                let parsedData = JSON.parse(data);
                console.log(parsedData);

                // using a loop to grt the product passed in the query
                // for(let i=0; i<parsedData.length; i++){
                //     if(parsedData[i].id == parsedUrl.query.id){
                //         // console.log(parsedData[i]);
                //         jsonData = JSON.stringify(parsedData[i]);
                //         res.write('\n')
                //         res.write(jsonData) 
                //     } 
                // }
                console.log(parsedUrl.query.id)
                let Data = parsedData.find((product)=>{
                    // console.log(product);
                    // console.log('...')
                    return product.id == parsedUrl.query.id;
                }) 
                console.log(Data);
                if(Data !== undefined){
                    Data = Data['Product Name'];
                    let stringData = JSON.stringify(Data);
                    res.write(stringData)
                }
                else{
                    res.write("Product not found \n")
                }
                
            }
            else if(req.method =='POST' && parsedUrl.pathname == '/products'){
                // console.log(req);  
                let reqData = "";
                req.on('data', (chunk)=>{
                    reqData = reqData + chunk;

                })
                req.on('end', ()=>{
                    let productsArray = JSON.parse(data);
                    let newProduct = JSON.parse(reqData);
                    productsArray.push(newProduct);
                    // rewrite the file product.json in asynch manner
                    // but convert the array productsArray back to a string
                    productsArray = JSON.stringify(productsArray);
                    fs.writeFile('./product.json', productsArray, (err)=>{
                        if(err){
                            console.log(err);

                        }
                    })
                    
                    res.end('Successfully added new product');
                })
                

            }
            else if(req.method == 'PUT' && parsedUrl.pathname == '/products'  && parsedUrl.query.id !== undefined){
                // console.log(data);
                let parsedData = JSON.parse(data);
                // get product from parsedData which matches the specified id
                let product = parsedData.find((prod)=>{
                    return prod.id == parsedUrl.query.id;
                })

                console.log()
                console.log(product);
                // get the new data from the request body
                let newData = '';
                req.on('data', (chunk)=>{
                    newData += chunk;
                })
                req.on('end', ()=>{
                    // console.log(newData);
                    // convert newData to a valid js object
                    let newDataObj = JSON.parse(newData);
                    
                    let productsArray = JSON.parse(data);
                    // check if the product to update is in the array
                    let newProductArray = productsArray.map((product)=>{
                        if(product.id == parsedUrl.query.id){
                            product = {...product, ...newDataObj}
                            console.log('Product found');
                            // console.log(product);
                        }
                        return product
                    })
                    // update the productsArray in the product.json
                    fs.writeFile('./product.json', JSON.stringify(newProductArray), (err)=>{
                        if(err){
                            console.log(err);
                        }
                    })
                })
            }
            else if(req.method == 'DELETE' && parsedUrl.pathname == '/products'  && parsedUrl.query.id !== undefined){
                let productsArray = JSON.parse(data);
                // remove prod with id passed in the url param
                let newProductArray = productsArray.filter((prod)=>{
                    return prod.id != parsedUrl.query.id;
                })

                products = JSON.stringify(newProductArray);
                fs.writeFile('./product.json', products, (err)=>{
                    if(err){
                        console.log(err);

                    }
                })

            }

            res.end('\nended server communication');
        })

        
  
}).listen(5000);